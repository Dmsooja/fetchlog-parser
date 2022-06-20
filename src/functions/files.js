/**
 * Array of objects. Each line from the csv is an object with column headers as properties
 * @property {object} log - The log
 * @property {string} log.epoch - The log epoch
 * @property {string} log.type_log - The log type_log
 * @property {string} log.ip - The log ip
 * @property {string} log.host - The log host
 * @property {string} log.status_code_1 - The log status_code_1
 * @property {string} log.method - The log method
 * @property {string} log.protocol - The log protocol
 * @property {string} log.collector - The log collector
 * @property {string} log.trigger_page_url - The log trigger_page_url
 * @property {string} log.response_time - The log response_time
 * @property {string} log.status_code_2 - The log status_code_2
 * @property {string} log.user_agent - The log user_agent
 * @property {string} log.hash - The log hash
 */
export const logs = [];

/**
 * Array of IPs object, contains the IP as a string and its count as a number
 * @property {object} ipData - The IP data
 * @property {string} ipData.ip - The IP name
 * @property {number} ipData.count - The IP number of occurence
 * 
 */
export const ipList = [];

/**
 * Separate csv data by newline (\n regex)
 * @param {String | ArrayBuffer} text - The csv data
 */
export function separateLines(text) {
  console.log('Start separating csv lines');

  const reg = new RegExp(/\n/g);
  let lines = text.split(reg);

  console.log('Finish separating csv lines');

  logs.splice(0, logs.length); // Clear logs array

  console.log('Start separating csv columns');
  lines.forEach(line => {
    separateColumns(line)
  });
  console.log('Finish separating csv columns');
  console.log("log lenght dans separate lines", logs.length);
  getIpList();
}

/**
 * Separate the CSV line into columns
 * @param {string} line - the CSV log line
 */
function separateColumns(line) {

  const reg = new RegExp(/( )|"(.*)"/g); // ancienne regex ne fonctionne pas avec le test place des tendances new RegExp(/( )|"(.*)"|( \\)/g) (\\"")
  const headers = [
    "epoch",
    "type_log",
    "ip",
    "host",
    "status_code_1",
    "method",
    "protocol",
    "collector",
    "trigger_page_url",
    "response_time",
    "status_code_2",
    "user_agent",
    "hash",
  ];

  let res = line.split(reg).filter(item => !!(item?.trim())).reduce((acc, curr, idx) => ({ ...acc, [headers[idx]]: curr }), {});

  logs.push(res);
}

/**
 * Store all IPs and count their occurrences in ipList array
 */
function getIpList() {
  console.log('Start IP List');

  ipList.splice(0, ipList.length); // Clear ipList array

  const counter = logs.filter((log) => !!log.ip).reduce(function (accumulator, currentLog) {
    const ip = currentLog.ip;
    accumulator[ip] = (accumulator[ip] || 0) + 1;
    return accumulator;
  }, {});

  var idx = 0

  for (var ip in counter) {
    const data = {
      id: idx,
      ip: ip,
      count: counter[ip],
      percentage: parseFloat(counter[ip] / logs.length * 100).toFixed(2)
    };

    ipList.push(data);
    idx ++;
  }
  ipList.sort((a, b) => b.count - a.count); //sort IpList by ip.count in descending order
  console.log("log lenght dans IPLIST", logs.length);
  console.log(" dans IPLIST", ipList);
  console.log('Finish IPs List');
}

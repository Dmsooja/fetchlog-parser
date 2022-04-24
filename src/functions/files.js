// Initialize variables
/**
 * Array of objects. Each line from the csv is an object with column headers as properties
 */

export const logs = [];


/**
 * Separate csv data by newline (\n regex)
 * @param {String | ArrayBuffer} text - The csv data
 */

export function separateLines(text) {
  const reg = new RegExp(/\n/g);
  let lines = text.split(reg)
  // Clear logs array
  logs.splice(0, logs.length);
  lines.forEach(line => {
    separateColumns(line)
  });
  // console.log(logs)
  // colFilter() // wait until separate columns is done : https://www.delftstack.com/howto/javascript/javascript-wait-for-function-to-finish/
}

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
  logs.push(res)
}
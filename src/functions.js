import { filters } from './filters'
import { filterAds } from './filterads'

// Initialize variables
const logs = []; // Array of objects. Each line from the csv is an object with column headers as properties

const tagsOutput = {}; //

export const tagsList = {}; // TagList object "export" makes tagsList importable in other components

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


//Filter collector and push to the right array
export function colFilter() {
    //clear tags and tagsOutput
    for (var tag in tagsList) delete tagsList[tag]; 
    for (var tagOutput in tagsOutput) delete tagsOutput[tagOutput];

    // Wait for all the lines to be pushed in logs

    console.log(filters)
    // For all tags in filters
    filters.forEach((tag) => {
        const { name, includedParams, excludedParams } = tag;
        
        // Get all the truthy log.collector, excludes the undefined
        logs.filter((log) => !!log.collector).forEach((log) => {
            // Transform the string into a table of query params
            const queryParams = log.collector.split('&');
            const isIncludedValid = includedParams.every((includedParam) => queryParams.some(queryParam => queryParam.search(includedParam) !== -1));
            const isExcludedValid = excludedParams.every((excludedParam) => queryParams.every(queryParam => queryParam.search(excludedParam) === -1));
            
            // if isIncludedValid and isExcludedValid exist
            if (isIncludedValid && isExcludedValid) {    
                // if tagsOutput exists ans has less than 5 values, push the log            
                if (!!tagsOutput[name]) {
                    if (tagsOutput[name].length < 5) {
                        tagsOutput[name].push(log);
                    }
                } 
                // if tagsOutput is undefined or null create a new table
                else {
                    tagsOutput[name] = [log];
                }
                // if the tag array already exist, push the log or else create an array for this tag
                !!tagsList[name] ? tagsList[name].push(log) : tagsList[name] = [log];
            }
        });
    });
    filterAds.forEach((tag) => {
        const { name, includedParams } = tag;
        logs.filter((log) => !!log.collector).forEach((log) => { //gets all the truthy log.collector, excludes the undefined
            // on transforme la chaine en tableau de query params
            const queryParams = log.collector.split('&');
            const isIncludedValid = includedParams.every((includedParam) => queryParams.some(queryParam => queryParam.search(includedParam) !== -1));
            if (isIncludedValid) {
                if (!!tagsOutput[name]) { // si on a déjà un tableau et qu'il contien moins de 2 valeurs
                    if (tagsOutput[name].length < 5) {
                        tagsOutput[name].push(log) // on push
                    }
                } else {
                    tagsOutput[name] = [log] // sinon on crée;
                }

                !!tagsList[name] ? // si on a déjà un tableau
                    tagsList[name].push(log) // on push
                    : tagsList[name] = [log] // sinon on crée;
            }
        });
    });
    return tagsOutput
}

//Get collectors ready for the table + add column input comment (10 lines max?)
export function parseCol(data) {
    const collectors = {
        collector: [],
        params: [],
        values: []
    };
    // Clear params and values in collectors
    collectors.collector.splice(0, collectors.collector.length);
    collectors.params.splice(0, collectors.params.length);
    collectors.values.splice(0, collectors.values.length);
    const queryParams = data.split('&');
    collectors.collector.push(data);
    queryParams.forEach(qp => collectors.params.push(qp.split("=")[0]));
    queryParams.forEach(qp => collectors.values.push(qp.split("=")[1]));
    return collectors
}

//Caractère interdits : [àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]|\s
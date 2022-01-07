import { filters } from './filters'
import { filterAds } from './filterads'

const logs = []

export const tagsOutput = {};

//Separate lines and columns
export function separateLines(text) {
    const reg = new RegExp(/\n/g);
    let lines = text.split(reg)
    // Clear logs
    logs.splice(0, logs.length);
    lines.forEach(line => {
        separateColumns(line)
    });
    colFilter() // wait until separate columns is done : https://www.delftstack.com/howto/javascript/javascript-wait-for-function-to-finish/
}

function separateColumns(line) {

    const reg = new RegExp(/( )|"(.*)"/g);
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
function colFilter() {
    //clear tagsOutput
    for (var tag in tagsOutput) delete tagsOutput[tag];
    //wait for all the lines to be pushed in logs
    filters.forEach((tag) => {
        const { name, includedParams, excludedParams } = tag;
        logs.filter((log) => !!log.collector).forEach((log) => { //gets all the truthy log.collector, excludes the undefined
            // on transforme la chaine en tableau de query params
            const queryParams = log.collector.split('&');
            const isIncludedValid = includedParams.every((includedParam) => queryParams.some(queryParam => queryParam.search(includedParam) !== -1));
            const isExcludedValid = excludedParams.every((excludedParam) => queryParams.every(queryParam => queryParam.search(excludedParam) === -1));
            if (isIncludedValid && isExcludedValid) {
                //si tagsOutput est undefined ou null créer un nouveau tableau sinon push dans le tableau existant tagOutput[name]
                !!tagsOutput[name] // si on a déjà un tableau
                    ? tagsOutput[name].push(log) // on push
                    : tagsOutput[name] = [log] // sinon on crée;
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
                //si tagsOutput est undefined ou null créer un nouveau tableau sinon push dans le tableau existant tagOutput[name]
                !!tagsOutput[name] // si on a déjà un tableau
                    ? tagsOutput[name].push(log) // on push
                    : tagsOutput[name] = [log] // sinon on crée;
            }
        });
    });
    return tagsOutput
}

//Get collectors ready for the table + add column input comment (10 lines max?)
export function parseCol(data) {
    const collectors = {
        collector : [],
        params : [],
        values : []
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
import { filters } from './filters'

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
    colFilter()
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
    filters.forEach((tag) => {
        const { name, includedParams, excludedParams } = tag;
        logs.forEach((log) => {
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
    // Object.entries(tagsOutput).forEach(([key, value]) => console.log(key, value))
    return tagsOutput
    // parseData(tagsOutput)
}

//Parse data in a table + add column input comment , 10 lines max

//Export the report or copy the line with comment
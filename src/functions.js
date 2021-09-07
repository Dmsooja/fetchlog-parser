import { tags } from './data'

//Initialise variables
let logs = []
//Tags array for output
let genericTags = [];
let productTags = [];
let categoryTags = [];
let searchTags = [];
let errorTags = [];
let addToCartTags = [];
let cartPageTags = [];
let estimateTags = [];
let conversionTags = [];



//Separate lines and columns
export function separateLines(text) {
    const reg = new RegExp(/\n/g);
    let lines = text.split(reg)
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
//arraytag = filter de l'array des collectors
function colFilter() {
    logs.forEach(l => console.log(l.collector.includes("prdr1")))
    // logs.forEach(l => console.log(l.collector.includes("prdr0")))
    console.log(
        logs.filter(
            tags.find(t => t.name === "générique")
            .includedParams
        )
    );
    // logs.forEach(l => {
        // genericTags = l.collector.filter(tags.includedParams);
        // productTags = l.collector.filter(tags.includedParams);
        // categoryTags = l.collector.filter(tags.includedParams);
        // searchTags = l.collector.filter(tags.includedParams);
        // errorTags = l.collector.filter(tags.includedParams);
        // addToCartTags = l.collector.filter(tags.includedParams);
        // cartPageTags = l.collector.filter(tags.includedParams);
        // estimateTags = l.collector.filter(tags.includedParams);
        // conversionTags = l.collector.filter(tags.includedParams);
    // });

    // logs.forEach(l => {
    //     l.includedParams.forEach(ip => {
    //         ip ? console.log(`${ip} is ${true} for tag ${l.name}`) : console.log(`${ip} is ${false} for tag ${l.name}`)
    //     })
    //     l.excludedParams.forEach(ep => {
    //         ep ? console.log(`${ep} is ${true} for tag ${l.name}`) : console.log(`${ep} is ${false} for tag ${l.name}`)
    //     })
    // });
}
//Parse data in a table + add column input comment , 10 lines max

//Export the report or copy the line with comment
//Tags properties
export let filters = [{
    label: "Estimate missing ref",
    name: "estimate",
    complementaryParams: "ref",
    // forbiddenParams: [

    // ],
    additionalParams: []
}, {
    label: "Ref missing additional parameters",
    name: "ref",
    complementaryParams: "estimate" || ("amount" && "prdr0" && "prda0" && "prdq0"),
    complementaryParams2: [
        "estimate",
        "amount" && "prdr0" && "prda0" && "prdq0",
    ],
    complementaryParams3: [
        ["estimate"],
        ["amount", "prdr0", "prda0", "prdq0",]
    ]
}]
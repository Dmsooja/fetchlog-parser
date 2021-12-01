//Tags properties
export let filters = [{
    label: "Generic",
    name: "genericTags",
    additionalParams: [],
    includedParams: [
        "urlp",
    ],
    excludedParams: [
        "prdr0",
        "ref",
        "scart=1",
        "amount",
        "eise",
        "error"
    ]
}, {
    label: "Product",
    name: "productTags",
    additionalParams: [],
    includedParams: [
        "prdr0",
    ],
    excludedParams: [
        "prdr1",
        "ref",
        "scart=1",
        "amount",
        "estimate=1",
        "error"
    ]
}, {
    label: "Category",
    name: "categoryTags",
    additionalParams: [],
    includedParams: [
        "prdr1",
    ],
    excludedParams: [
        "ref",
        "scart=1",
        "amount",
        "estimate=1",
        "error"
    ]
}, {
    label: "Search",
    name: "searchTags",
    additionalParams: [],
    includedParams: [
        "eise",
        "eisd0",
        "eisd1",
        "eisk0"
    ],
    excludedParams: [
        "ref",
        "scart=1",
        "amount",
        "estimate=1"
    ]
}, {
    label: "Error",
    name: "errorTags",
    additionalParams: [],
    includedParams: [
        "error=1"
    ],
    excludedParams: [
        "ref",
        "scart=1",
        "amount",
        "estimate=1"
    ]
}, {
    label: "Estimate",
    name: "estimateTags",
    additionalParams: [],
    includedParams: [
        "ref",
        "estimate=1"
    ],
    excludedParams: [
        "scart=1",
        "amount",
    ]
},/* {
    label: "Estimate Missing Refs",
    name: "estimateMissingRef",
    additionalParams: [],
    includedParams: [
        "estimate=1"
    ],
    excludedParams: [
        "ref",
        "scart=1",
        "amount",
    ]
}, */{
    label: "Add to cart",
    name: "addToCartTags",
    additionalParams: [],
    includedParams: [
        "prdr0",
        "prda0",
        "prdq0",
        "scartcumul=1",
        "scart=1"
    ],
    excludedParams: [
        "amount",
        "ref"
    ]
}, {
    label: "Cart page",
    name: "cartPageTags",
    additionalParams: [],
    includedParams: [
        "prdr0",
        "prda0",
        "prdq0",
        "scartcumul=0",
        "scart=1"
    ],
    excludedParams: [
        "amount",
        "ref"
    ]
}, {
    label: "Order",
    name: "orderTags",
    additionalParams: [],
    includedParams: [
        "prdr0",
        "prda0",
        "prdq0",
        "ref",
        "amount",
    ],
    excludedParams: [
        "scart=1",
        "estimate=1"
    ]
}
//INSEEC
// , {
//     label: "Estimate identification",
//     name: "estimateTags",
//     additionalParams: [],
//     includedParams: [
//         "ref",
//         "estimate=1",
//         "etape2"
//     ],
//     excludedParams: [
//         "scart=1",
//         "amount",
//     ]
// }, {
//     label: "Estimate paiement",
//     name: "estimateTags",
//     additionalParams: [],
//     includedParams: [
//         "ref",
//         "estimate=1",
//         "etape5"
//     ],
//     excludedParams: [
//         "scart=1",
//         "amount",
//     ]
// }, {
//     label: "Estimate jpo",
//     name: "estimateTags",
//     additionalParams: [],
//     includedParams: [
//         "ref",
//         "estimate=1",
//         "porte-ouverte"
//     ],
//     excludedParams: [
//         "scart=1",
//         "amount",
//     ]
// }, {
//     label: "Estimate conference",
//     name: "estimateTags",
//     additionalParams: [],
//     includedParams: [
//         "ref",
//         "estimate=1",
//         "conference"
//     ],
//     excludedParams: [
//         "scart=1",
//         "amount",
//     ]
// }, {
//     label: "Estimate rdv perso",
//     name: "estimateTags",
//     additionalParams: [],
//     includedParams: [
//         "ref",
//         "estimate=1",
//         "perso"
//     ],
//     excludedParams: [
//         "scart=1",
//         "amount",
//     ]
// }, {
//     label: "Estimate rdv immersion",
//     name: "estimateTags",
//     additionalParams: [],
//     includedParams: [
//         "ref",
//         "estimate=1",
//         "immersion"
//     ],
//     excludedParams: [
//         "scart=1",
//         "amount",
//     ]
// }, {
//     label: "Estimate ambassadeur",
//     name: "estimateTags",
//     additionalParams: [],
//     includedParams: [
//         "ref",
//         "estimate=1",
//         "ambassadeur"
//     ],
//     excludedParams: [
//         "scart=1",
//         "amount",
//     ]
// }, {
//     label: "Estimate rappel",
//     name: "estimateTags",
//     additionalParams: [],
//     includedParams: [
//         "ref",
//         "estimate=1",
//         "rappel"
//     ],
//     excludedParams: [
//         "scart=1",
//         "amount",
//     ]
// }, {
//     label: "Generic etape 4",
//     name: "genericTags",
//     additionalParams: [],
//     includedParams: [
//         "urlp",
//         "etape4"
//     ],
//     excludedParams: [
//         "prdr0",
//         "ref",
//         "scart=1",
//         "amount",
//         "eise",
//         "error"
//     ]
// }, {
//     label: "Generic etape 3",
//     name: "genericTags",
//     additionalParams: [],
//     includedParams: [
//         "urlp",
//         "etape3"
//     ],
//     excludedParams: [
//         "prdr0",
//         "ref",
//         "scart=1",
//         "amount",
//         "eise",
//         "error"
//     ]
// }, {
//     label: "Generic etape 1",
//     name: "genericTags",
//     additionalParams: [],
//     includedParams: [
//         "urlp",
//         "etape1"
//     ],
//     excludedParams: [
//         "prdr0",
//         "ref",
//         "scart=1",
//         "amount",
//         "eise",
//         "error"
//     ]
// },
]
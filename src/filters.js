//Tags properties
export const filters = [{
    label: "Generic",
    name: "genericTags",
    type: "default",
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
    type: "default",
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
    type: "default",
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
    type: "default",
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
    type: "default",
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
    type: "default",
    includedParams: [
        "ref",
        "estimate=1"
    ],
    excludedParams: [
        "scart=1",
        "amount",
    ]
},{
    label: "Add to cart",
    name: "addToCartTags",
    type: "default",
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
    type: "default",
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
    type: "default",
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
},
//Test Custom filters
// {
//     label: "Estimate identification",
//     name: "estimateStep2",
//     type: "custom",
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
//     name: "estimateStep5",
//     type: "custom",
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
//     name: "estimateJpo",
//     type: "custom",
//     includedParams: [
//         "ref",
//         "estimate=1",
//         "porte-ouverte"
//     ],
//     excludedParams: [
//         "scart=1",
//         "amount",
//     ]
// }, 
//Test Alerts
// {
//     label: "Estimate Missing Refs",
//     name: "estimateMissingRef",
//     type: "alert",
//     includedParams: [
//         "estimate=1"
//     ],
//     excludedParams: [
//         "ref",
//         "scart=1",
//         "amount",
//     ]
// }, {
//     label: "Ref missing additional params",
//     name: "refMissingParams",
//     type: "alert",
//     includedParams: [
//         "ref",
//     ],
//     excludedParams: [
//         "scart=1",
//         "amount",
//         "estimate=1",
//     ]
// }
]

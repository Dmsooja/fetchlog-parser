//Tags properties
export let filters = [{
    label: "Generic",
    name: "genericTags",
    status: "notFound",
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
    status: "notFound",
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
    status: "notFound",
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
    status: "notFound",
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
    status: "notFound",
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
    status: "notFound",
    includedParams: [
        "ref",
        "estimate=1"
    ],
    excludedParams: [
        "scart=1",
        "amount",
    ]
}, {
    label: "Add to cart",
    name: "addToCartTags",
    status: "notFound",
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
    status: "notFound",
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
    status: "notFound",
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
}]
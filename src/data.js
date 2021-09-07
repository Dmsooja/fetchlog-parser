//Tags properties
export let tags = [{
    name: "générique",
    status: "notFound",
    includedParams: [
        "urlp",
    ],
    excludedParams: [
        "prdr0",
        "ref",
        "scart=1",
        "amount",
        "eise"
    ]
}, {
    name: "produit",
    status: "notFound",
    includedParams: [
        "prdr0",
    ],
    excludedParams: [
        "prdr1",
        "ref",
        "scart=1",
        "amount",
        "estimate=1"
    ]
}, {
    name: "catégorie",
    status: "notFound",
    includedParams: [
        "prdr1",
    ],
    excludedParams: [
        "ref",
        "scart=1",
        "amount",
        "estimate=1"
    ]
}, {
    name: "recherche",
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
    name: "erreur",
    status: "notFound",
    includedParams: [
        "error"
    ],
    excludedParams: [
        "ref",
        "scart=1",
        "amount",
        "estimate=1"
    ]
}, {
    name: "devis",
    status: "notFound",
    includedParams: [
        "ref",
        "estimate=1"
    ],
    excludedParams: [
        "scart=1",
        "amount",
        "estimate=1"
    ]
}, {
    name: "ajout au panier",
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
    ]
}, {
    name: "page panier",
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
    ]
}, {
    name: "vente",
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
},
]
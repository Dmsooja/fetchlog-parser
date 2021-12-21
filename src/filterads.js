
//Tags properties
export let filterAds = [{
    label: "Affiliation",
    name: "trackingAffiliation",
    status: "notFound",
    includedParams: [
        "eaf-publisher",
        "eaf-name",
        "eaf-creative",
        "eaf-creativetype"
    ]
}, {
    label: "Epub",
    name: "trackingEpub",
    status: "notFound",
    includedParams: [
        "ead-publisher",
        "ead-name",
        "ead-location",
        "ead-creative",
        "ead-creativetype"
    ]
}, {
    label: "Comparateur",
    name: "trackingComparateur",
    status: "notFound",
    includedParams: [
        "etf-publisher",
        "etf-name"
    ]
}, {
    label: "Mailing",
    name: "trackingmailing",
    status: "notFound",
    includedParams: [
        "eml-publisher",
        "eml-name"
    ]
}, {
    label: "Social",
    name: "trackingSocial",
    status: "notFound",
    includedParams: [
        "esc-publisher",
        "esc-name",
        "esc-location",
        "esc-creative",
        "esc-creativetype"
    ]
}, {
    label: "Lien sponsorisés Google",
    name: "tackingLienSponsorisesGoogle",
    status: "notFound",
    includedParams: [
        "esl-k=",
        "|a",
        "|g"
    ]
}, /*{
    label: "Lien sponsorisés Bing",
    name: "tackingLienSponsorisesBing",
    status: "notFound",
    includedParams: [
        "esl-k",
    ]
},*/ {
    label: "Partenariat",
    name: "trackingPartenariat",
    status: "notFound",
    includedParams: [
        "ept-publisher",
        "ept-name"
    ]
}]
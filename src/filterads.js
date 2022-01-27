
//Tags properties
export let filterAds = [{
    label: "Affiliation",
    name: "trackingAffiliation",
    includedParams: [
        "eaf-publisher",
        "eaf-name",
        "eaf-creative",
        "eaf-creativetype"
    ]
}, {
    label: "Epub",
    name: "trackingEpub",
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
    includedParams: [
        "etf-publisher",
        "etf-name"
    ]
}, {
    label: "Mailing",
    name: "trackingmailing",
    includedParams: [
        "eml-publisher",
        "eml-name"
    ]
}, {
    label: "Social",
    name: "trackingSocial",
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
    includedParams: [
        "esl-k=",
        "|a",
        "|g"
    ]
}, /*{
    label: "Lien sponsorisés Bing",
    name: "tackingLienSponsorisesBing",
    includedParams: [
        "esl-k",
    ]
},*/ {
    label: "Partenariat",
    name: "trackingPartenariat",
    includedParams: [
        "ept-publisher",
        "ept-name"
    ]
}]
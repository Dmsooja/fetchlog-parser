
//Tags properties
/**
 * Filters are defining the conditions for matching tags in the CSV
 * Ad filters only have params included and none excluded beacause of the specificity of ad trackings (e.g ead, eaf, esc ...)
 */
export let filterAds = [{
    label: "Affiliation",
    name: "affiliationTracking",
    status: "notFound",
    includedParams: [
        "eaf-publisher",
        "eaf-name",
        "eaf-creative",
        "eaf-creativetype"
    ]
}, {
    label: "Epub",
    name: "epubTracking",
    status: "notFound",
    includedParams: [
        "ead-publisher",
        "ead-name",
        "ead-location",
        "ead-creative",
        "ead-creativetype"
    ]
}, {
    label: "Comparator",
    name: "comparatorTracking",
    status: "notFound",
    includedParams: [
        "etf-publisher",
        "etf-name"
    ]
}, {
    label: "Mailing",
    name: "mailingTracking",
    status: "notFound",
    includedParams: [
        "eml-publisher",
        "eml-name"
    ]
}, {
    label: "Social",
    name: "socialTracking",
    status: "notFound",
    includedParams: [
        "esc-publisher",
        "esc-name",
        "esc-location",
        "esc-creative",
        "esc-creativetype"
    ]
}, {
    label: "Sponsored Links",
    name: "sponsoredLinksTracking",
    status: "notFound",
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
    label: "Partnerships",
    name: "partnershipsTracking",
    status: "notFound",
    includedParams: [
        "ept-publisher",
        "ept-name"
    ]
}]
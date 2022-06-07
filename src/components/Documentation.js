export default function Documentation() {

    return (
        <div>
            <h2>How to use&nbsp;:</h2>
            <br/>
            <ol>
                <li>
                    <p>Unzip the fetchlog output</p>
                </li>
                <li>
                    <p>Upload the extracted file using the ICON area (drop the csv file or browse your files)</p>
                </li>
            </ol>
            <br />
            <h2>The tabs&nbsp;:</h2>
            <h3>The Site-centric Tab</h3>
            <p>The existing tag filters are diplayed on the top of the tab.</p>
            <p>Default tags are the filters that natively exist. Below the following tags and their filters :</p>
            <ol>
                <li>
                    <p>Generic</p>
                </li>
            </ol>
<pre>{`{
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
}`
            }
            </pre>
            <ol start="2">
                <li>
                    <p>Product</p>
                </li>
            </ol>

<pre> {`{
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
}`
            }</pre>
            <ol start="3">
                <li>
                    <p>Category</p>
                </li>
            </ol>
<pre>{`{
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
}`
            }</pre>
            <ol start="4">
                <li>
                    <p>Search</p>
                </li>
            </ol>
<pre>{`{
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
}`
            }</pre>
            <ol start="5">
                <li>
                    <p>Error</p>
                </li>
            </ol>
<pre>{`{
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
}`
            }</pre>
            <ol start="6">
                <li>
                    <p>Estimate</p>
                </li>
            </ol>
<pre>{`{
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
}`
            }</pre>
            <ol start="7">
                <li>
                    <p>Add to cart</p>
                </li>
            </ol>
<pre>{`{
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
}`
            }</pre>
            <ol start="8">
                <li>
                    <p>Cart page</p>
                </li>
            </ol>
<pre> {`{
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
}`
            }</pre>
            <ol start="9">
                <li>
                    <p>Order</p>
                </li>
            </ol>
            <pre>{`
{
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
}`
            }</pre>
            <p>&nbsp;</p>
            <h4>Search additional tags</h4>
            <p>Coming soon</p>
            {/* <p>You can create additional tags to search for in the logs.</p>
            <p>They must have a name (to display), an ID and at least 1 parameter (included and/or excluded).</p> */}
            <h3>The Ad-centric Tab</h3>
            <p>The existing ad tracking filters are diplayed on the top of the tab.</p>
            <p>Default tags are the filters that natively exist. Below the following tags and their filters&nbsp;:</p>
            <ol>
                <li>
                    <p>Affiliation</p>
                </li>
            </ol>
<pre>{`{
    label: "Affiliation",
    name: "affiliationTracking",
    status: "notFound",
    includedParams: [
        "eaf-publisher",
        "eaf-name",
        "eaf-creative",
        "eaf-creativetype"
    ]
}`
            } </pre>
            <ol start="2">
                <li>
                    <p>Epub</p>
                </li>
            </ol>
<pre>{`{
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
}`}
            </pre>
            <ol start="3">
                <li>
                    <p>Comparator</p>
                </li>
            </ol>
<pre>{`{
    label: "Comparator",
    name: "comparatorTracking",
    status: "notFound",
    includedParams: [
        "etf-publisher",
        "etf-name"
    ]
}`
            }</pre>
            <ol start="4">
                <li>
                    <p>Mailing</p>
                </li>
            </ol>
<pre>{`{
    label: "Mailing",
    name: "mailingTracking",
    status: "notFound",
    includedParams: [
        "eml-publisher",
        "eml-name"
    ]
}`
            }</pre>
            <ol start="5">
                <li>
                    <p>Social</p>
                </li>
            </ol>
<pre>{`{
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
}`
            }</pre>
            <ol start="6">
                <li>
                    <p>Sponsored Links</p>
                </li>
            </ol>
<pre>{`{
    label: "Sponsored Links",
    name: "sponsoredLinksTracking",
    status: "notFound",
    includedParams: [
        "esl-k=",
        "|a",
        "|g"
    ]
}`
            }</pre>
            <ol start="7">
                <li>
                    <p>Partnerships</p>
                </li>
            </ol>
<pre>{`{
    label: "Partnerships",
    name: "partnershipsTracking",
    status: "notFound",
    includedParams: [
        "ept-publisher",
        "ept-name"
    ]
}`
            }</pre>
            <h3>The IP counter</h3>
            <p>Displays the IPs, the number of times they appear in the file and their percentage.</p>
            <p>The columns are sortable by clicking on the table headers</p>
        </div >
    )
}

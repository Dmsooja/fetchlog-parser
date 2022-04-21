import './App.css'; // style sheet
import { filters } from './filters'; // Site filters
import { filterAds } from './filterads'; // Ad filters
import Upload from './components/Upload'; // Upload component
import Output from './components/site/Output'; // Site output component
import OutputAd from './components/ad/Output'; // Ad output component
import Tags from './components/site/Tags'; // Site tags grid component
import TagsAd from './components/ad/Tags'; // Ad tags grid component
import { Tab, Container } from 'semantic-ui-react'; // UI components from Semantic-UI library, see : https://react.semantic-ui.com/
import { useState } from 'react';

// Global application, handles all data flows between components
export default function App() {

  const [updatedFilters, setUpdatedFilters] = useState(filters); // Set the new site filters list after a new site filter is created, initial state is the imported filters from ./filters
  const [updatedFilterAds, setUpdatedFilterAds] = useState(filterAds); // Set the new ad filters filters list after a new ad filter is created, initial state is the imported filters from ./filtersads
  const [loading, setLoading] = useState(false); // Set the loading to true or false, initial state is false
  const [data, setData] = useState({}); // Initialise data as an empty object, update data every time logs csv are decrypted

  const csvHeadersSite = [
    "Tag ID (label)",
    "Name",
    "Type",
    "Included Parameters (comma separated strings)",
    "Excluded Parameters (comma separated strings)",
  ];

  const csvHeadersAds = [
    "Tag ID (label)",
    "Name",
    "Type",
    "Included Parameters",
  ];

  // Update site filters
  console.log(updatedFilters);
  console.log(updatedFilterAds);

  const newFilters = (...f) => {
    setUpdatedFilters([...updatedFilters, ...f]);
  }

  // Update ad filters
  const newFilterAds = (...f) => {
    setUpdatedFilterAds([...updatedFilterAds, ...f]);
  }

  // Update loading state to true or false
  const isLoading = (bool) => {
    setLoading(bool);
  }

  // Initialize data and set loading to false
  const filteredTags = (...d) => {
    setData(...d);
    setLoading(false);
  };

  // Update data and set loading to false
  const newFilteredTags = (...d) => {
    setData(...d);
    setLoading(false);
  };

  // List the displayed tabs
  const panes = [
    {
      menuItem: 'Site-centric', render: () =>
        <Tab.Pane className={"basic"} attached={false}>
          <Container>
            <Tags filters={updatedFilters} newFilters={newFilters} newFilteredTags={newFilteredTags} isLoading={isLoading} />
            {/* If data object is not empty show Outputs */}
            {Object.entries(data).length !== 0 ?
              <Output data={data} loading={loading} filters={updatedFilters} />
              : null}
          </Container>
        </Tab.Pane>
    },{
      menuItem: 'Documentation', render: () =>
        <Tab.Pane className={"basic"} attached={false}>
          <Container>
            <p>Documentation de l'app</p>
          </Container>
        </Tab.Pane>
    },
    {
      menuItem: 'Ad-centric', render: () =>
        <Tab.Pane className={"basic"} attached={false}>
          <Container>
            <TagsAd filters={updatedFilterAds} newFilters={newFilterAds} />
            {/* If data object is not empty show Outputs */}
            {Object.entries(data).length !== 0 ?
              <OutputAd data={data} loading={loading} filters={updatedFilterAds} />
              : null}
          </Container>
        </Tab.Pane>
    },
    // Unfinished components
    // {
    //   menuItem: 'Upload tagging plan - Filters CSV', render: () =>
    //     <Tab.Pane className={"basic"} attached={false}>
    //       <Container>
    //         Tutorial + Download example csv of tagging plan
    //         <br />Upload CSV filters for site : type, label, name, includedParams and excludedParams
    //         <br />Upload CSV filters for ad : type, label, name, includedParams
    //         <br />Edit current filters (default or imported or custom and alert)
    //       </Container>
    //     </Tab.Pane>
    // },
    // {
    //   menuItem: 'IP counter', render: () =>
    //     <Tab.Pane className={"basic"} attached={false}>
    //       <Container>
    //         Show the most present IPs and the 5 full fetchlog lines of them + counter
    //       </Container>
    //     </Tab.Pane>
    // },
    {
      menuItem: 'Recap', render: () =>
        <Tab.Pane className={"basic"} attached={false}>
          <Container>
            {/* If data object is not empty show Outputs */}
            {Object.entries(data).length !== 0 ?
              <div>
                <Output data={data} loading={loading} filters={updatedFilters} />
                <OutputAd data={data} loading={loading} filters={updatedFilterAds} />
              </div>
            : null}
          </Container>
        </Tab.Pane>
    },
  ]

  return (
    <div className="App">
      <Upload filteredTags={filteredTags} isLoading={isLoading} />
      <Tab
        menu={{ fluid: false, attached: false, vertical: false, tabular: true }} // Tab links configuration, see https://react.semantic-ui.com/modules/tab/
        panes={panes} // Display the list of tabs
      />
    </div>
  );
}
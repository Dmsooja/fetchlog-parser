import './App.css'; // Style sheet
import { filters } from './store/filters'; // Site filters
import { filterAds } from './store/filterads'; // Ad filters
import Upload from './components/Upload'; // Upload component
import Output from './components/site/Output'; // Site output component
import OutputAd from './components/ad/Output'; // Ad output component
import Tags from './components/site/Tags'; // Site tags grid component
import TagsAd from './components/ad/Tags'; // Ad tags grid component
import IpCounter from './components/IpCounter'; // Ad tags grid component
import { Tab, Container } from 'semantic-ui-react'; // UI components from Semantic-UI library, see : https://react.semantic-ui.com/
import { useState } from 'react';
import { colFilter } from './functions/filters'; // Function to match collectors with the tags

/**
 * Global application, handles all data flows between components
 * @returns Upload component and tabs
 */

export default function App() {

  // Set the new site filters list after a new site filter is created, initial state is the imported filters from ./filters
  const [updatedFilters, setUpdatedFilters] = useState(filters);

  // Set the new ad filters filters list after a new ad filter is created, initial state is the imported filters from ./filtersads
  const [updatedFilterAds, setUpdatedFilterAds] = useState(filterAds);

  // Set the loading to true or false, initial state is false
  const [loading, setLoading] = useState(false);

  // Initialise data as an empty object, update data every time logs csv are decrypted
  const [data, setData] = useState({});

  /**
   * Update site filters by adding the new filter
   * @param  {...any} f - The additional filter
   */
  const newFilters = (...f) => {
    setUpdatedFilters([...updatedFilters, ...f]);
    // setData(colFilter(updatedFilters));
  }

  /**
   * Update ad filters by adding the new filter
   * @param  {...any} f - The additional filter
   */
  const newFilterAds = (...f) => {
    setUpdatedFilterAds([...updatedFilterAds, ...f]);
  }

  /**
   * Loading state
   * @param {*} bool - true to activate loading or false to deactivate loading
   */
  const isLoading = (bool) => {
    setLoading(bool);
  }

  /**
   * Initialize tags and set loading to false
   * @param  {...any} d - New tag array with corresponding collectors
   */
  const filteredTags = (...d) => {
    setData(...d);
    setLoading(false);
  };

  /**
   * Update data and set loading to false
   * @param  {...any} d - The new tags and their corresponding collectors
   */
  const newFilteredTags = (...d) => {
    setData(...data, ...d);
    setLoading(false);
  };

  // List of tabs
  const panes = [
    {
      menuItem: 'Documentation', render: () =>
        <Tab.Pane className={"basic"} attached={false}>
          <Container>
            <p>Documentation de l'app</p>
          </Container>
        </Tab.Pane>
    },{
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
    {
      menuItem: 'IP counter', render: () =>
        <Tab.Pane className={"basic"} attached={false}>
          <Container>
            <IpCounter />
          </Container>
        </Tab.Pane>
    },{
      menuItem: 'Recap', render: () =>
        <Tab.Pane className={"basic"} attached={false}>
          <Container>
            {Object.entries(data).length !== 0 ? //If data object is not empty show site and ad Outputs, if there is no data, show nothing
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
      <Upload filteredTags={filteredTags} isLoading={isLoading} filters={updatedFilters} />
      <Tab
        menu={{ fluid: false, attached: false, vertical: false, tabular: true }} // Tab links configuration, see https://react.semantic-ui.com/modules/tab/
        panes={panes} // Display the list of tabs
      />
    </div>
  );
}
import './App.css';
import { filters } from './filters';
import { filterAds } from './filterads';
import Upload from './components/Upload';
import Output from './components/site/Output';
import OutputAd from './components/ad/Output';
import Tags from './components/site/Tags';
import TagsAd from './components/ad/Tags';
import { Tab, Container } from 'semantic-ui-react';
import { useState } from 'react';


export default function App() {

  const [updatedFilters, setUpdatedFilters] = useState(filters);
  const [updatedFilterAds, setUpdatedFilterAds] = useState(filterAds);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const newFilters = (...f) => {
    setUpdatedFilters([...updatedFilters, ...f]);
  }
  const newFilterAds = (...f) => {
    setUpdatedFilterAds([...updatedFilterAds, ...f]);
  }
  
  const isLoading = (bool) => {
    setLoading(bool);
  }

  const filteredTags = (...d) => {
    setData(...d);
    setLoading(false);
  };
  
  const newFilteredTags = (...d) => {
    setData(...d);
    setLoading(false);
  };

  const panes = [
    {
      menuItem: 'Site-centric', render: () =>
        <Tab.Pane className={"basic"} attached={false}>
          <Container>
            <Tags filters={updatedFilters} newFilters={newFilters} newFilteredTags={newFilteredTags} isLoading={isLoading}/>
            {Object.entries(data).length !== 0 ?
              <Output data={data} loading={loading} filters={updatedFilters} />
              : null}
          </Container>
        </Tab.Pane>
    },
    {
      menuItem: 'Ad-centric', render: () =>
        <Tab.Pane className={"basic"} attached={false}>
          <Container>
          <TagsAd filters={updatedFilterAds} newFilters={newFilterAds} />
            {Object.entries(data).length !== 0 ?
              <OutputAd data={data} loading={loading} filters={updatedFilterAds} />
              : null}
          </Container>
        </Tab.Pane>
    },
    // {
    //   menuItem: 'Custom Tagging plan', render: () =>
    //     <Tab.Pane className={"basic"} attached={false}>
    //       <Container>
    //         Tab 3 Content
    //       </Container>
    //     </Tab.Pane>
    // },
  ]

  return (
    <div className="App">
      <Upload filteredTags={filteredTags} isLoading={isLoading} />
      <Tab
        menu={{ fluid: true, attached: false, vertical: false, tabular: true }}
        panes={panes}
        grid={{ paneWidth: 14, tabWidth: 2 }}
      />
    </div>
  );
}
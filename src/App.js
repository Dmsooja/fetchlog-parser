import './App.css';
import { filters } from './filters';
import Upload from './components/Upload';
import Output from './components/site-centric/Output';
import Tags from './components/site-centric/Tags';
import { Tab } from 'semantic-ui-react';
import { useState } from 'react';


export default function App() {

  const [updatedFilters, setUpdatedFilters] = useState(filters);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const newFilters = (...f) => {
    setUpdatedFilters([...updatedFilters, ...f]);
  }

  const callback = (...d) => {
    setLoading(true);
    setData(...d);
    setTimeout(() => setLoading(false), 500);
  };

  const panes = [
    { menuItem: 'Site-centric', render: () => <Tab.Pane className={"basic"} attached={false}>
      {Object.entries(data).length !== 0 ?
        <Output data={data} loading={loading} filters={updatedFilters} />
        : null}
      <Tags filters={updatedFilters} newFilters={newFilters} />
    </Tab.Pane> },
    { menuItem: 'Ad-centric', render: () => <Tab.Pane className={"basic"} attached={false}>Tab 2 Content</Tab.Pane> },
  ]

  return (
    <div className="App">
      <Upload callback={callback} />
      <Tab
        menu={{ fluid: true, attached: false, vertical: true, tabular: true }}
        panes={ panes }
        grid={{ paneWidth: 14, tabWidth: 2 }}
      />
    </div>
  );
}
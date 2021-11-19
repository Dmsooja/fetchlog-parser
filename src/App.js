import './App.css';
import Upload from './components/Upload';
import SiteOutput from './components/site-centric/SiteOutput';
import { Tab } from 'semantic-ui-react';
import { useState } from 'react';


function App() {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({});
  const callback = (d) => {
    setLoading(true);
    setData(d);
    setTimeout(() => setLoading(false), 2000)
  };

  const panes = [
    { menuItem: 'Site-centric', render: () => <Tab.Pane className={"basic"} attached={false}><SiteOutput data={data} loading={loading} /></Tab.Pane> },
    { menuItem: 'Ad-centric', render: () => <Tab.Pane className={"basic"} attached={false}>Tab 2 Content</Tab.Pane> },
  ]

  return (
    <div className="App">
      <Upload callback={callback} />
      {Object.entries(data).length !== 0 ?
      <Tab
        menu={{ fluid: true, attached: false, vertical: true, tabular: true }}
        panes={ panes }
        grid={{ paneWidth: 14, tabWidth: 2 }}
      /> : null}
    </div>
  );
}

export default App;

import './App.css';
import LogfileForm from './components/LogfileForm';
import Output from './components/Output';
import { Button, Checkbox, Form } from 'semantic-ui-react'

function csvToJson (logfile) {
 console.log(logfile)
}

function App() {
  return (
    <div className="App">
      <LogfileForm />
      <Output />      
    </div>
  );
}

export default App;

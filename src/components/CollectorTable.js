import { useState } from 'react';
import { Table, Accordion, Card, Pagination } from 'semantic-ui-react';
// import { filters } from '../filters';
// import { parseCollector, collectors } from '../functions'


export default function CollectorTable(props) {
  
  const collectors = {
    params : [],
    vals : []
  };

  const cols = Object.values(collectors)
  
  const [activeIndex, setActiveIndex] = useState(null);

  function parseCol(data) {
    // Clear params and values in collectors
    console.log("collectors")
    collectors.params.splice(0, collectors.params.length);
    collectors.vals.splice(0, collectors.vals.length);
    const queryParams = data.split('&');
    queryParams.forEach(qp => collectors.params.push(qp.split("=")[0]));
    queryParams.forEach(qp => collectors.vals.push(qp.split("=")[1]));
    console.log(collectors)
    // return collectors
  }
  
  function fetchData() {
    props.data.forEach(d => {
      // parseCollector(d["collector"])
      parseCol(d["collector"])
    });  
  }
  
  
  fetchData()

  
  return (
    <div>
      <Accordion fluid exclusive={false}>
        {/* { console.log(collectors)
        } */}
        {props.data.map((d, index) =>
          <div key={index}>
            <Accordion.Title
              index={index}
              active={activeIndex === index}
              onClick={() => activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)}
              style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}
            >
              {d["collector"]}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === index}>
              <Table structured collapsing basic='very' >
                <Table.Body>
                    {cols.map((col, index) =>
                      <Table.Row key={index}>
                        <Table.Cell>{col[0]}</Table.Cell>
                        <Table.Cell>{col[1]}</Table.Cell>
                      </Table.Row>
                    )}
                </Table.Body>
                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan='100'>
                      <Pagination defaultActivePage={1} totalPages={10} />
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
            </Accordion.Content>
          </div>

        )}
      </Accordion>
    </div>
  )
}
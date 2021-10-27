import { useState } from 'react';
import { Table, Accordion, Card, Pagination } from 'semantic-ui-react';
import { filters } from '../filters';
import { parseCollector, collectors } from '../functions'

export default function CollectorTable(props) {

  const [activeIndex, setActiveIndex] = useState(null);

  // props.data.forEach(d => {
  //   parseCollector(d["collector"])
  // });


  return (
    <div>
      <Accordion fluid exclusive={false}>
        {/* { console.log(collectors)
        } */}
        {/* {props.data.map((d, index) => 
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
                  <Table.Row>
                    <Table.Cell>Params</Table.Cell>
                    <Table.Cell>Values</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Param</Table.Cell>
                    <Table.Cell>Value</Table.Cell>
                  </Table.Row>
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

        )} */}
      </Accordion>
    </div>
  )
}
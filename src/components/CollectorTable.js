import { useState } from 'react';
import { Table, Accordion, Pagination } from 'semantic-ui-react';
import { parseCol, collectors } from '../functions'


export default function CollectorTable(props) {

  const [activeIndex, setActiveIndex] = useState(null);

  function fetchData() {
    props.data?.forEach(d => {
      parseCol(d["collector"])
    });
  }


  fetchData()

  let params = collectors.params;
  let values = collectors.values;

  return (
    <div>
      <Accordion fluid exclusive={false}>
        {props.data?.map((d, index) =>
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
              <Table collapsing selectable>
                <Table.Header>
                  <Table.Row style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
                    <Table.HeaderCell>Params</Table.HeaderCell>
                    <Table.HeaderCell>Values</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {collectors.params.map((col, index) =>
                    <Table.Row key={index}>
                      <Table.Cell key={params[index]}>{params[index]}</Table.Cell>
                      <Table.Cell key={values[index]}>{values[index]}</Table.Cell>
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
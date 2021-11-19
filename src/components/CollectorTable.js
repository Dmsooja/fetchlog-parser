import { useState } from 'react';
import { Table, Accordion, Card, Pagination } from 'semantic-ui-react';
// import { filters } from '../filters';
import { parseCol, cols } from '../functions'


export default function CollectorTable(props) {

  const [activeIndex, setActiveIndex] = useState(null);

  function fetchData() {
    props.data?.forEach(d => {
      parseCol(d["collector"])
    });
  }


  fetchData()


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
            <Accordion.Content active={activeIndex === index} style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
              <Table structured collapsing celled>
                <Table.Header>
                  <Table.Row>
                    {cols[0].map((param, index) =>
                      <Table.HeaderCell key={index}>{param}</Table.HeaderCell>
                    )}
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    {cols[1].map((value, index) =>
                      <Table.Cell key={index}>{value}</Table.Cell>
                    )}
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

        )}
      </Accordion>
    </div>
  )
}
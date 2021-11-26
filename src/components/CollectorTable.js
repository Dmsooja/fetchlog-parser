import { useState } from 'react';
import { Table, Accordion, Pagination } from 'semantic-ui-react';
import { parseCol, collectors } from '../functions'


export default function CollectorTable(props) {

  const [activeIndex, setActiveIndex] = useState(null);

  // const totalItems = collectors.params.length;
  // const [pageItems, setPageItems] = useState(0);
  const pageItems = collectors.params
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage] = useState(10);

  const lastItemId = activePage * itemsPerPage;
  const firstItemId = lastItemId - itemsPerPage;
  const items = pageItems.slice(firstItemId, lastItemId);

  const handlePageChange = (evt, pageData) => {
    console.log("page number", activePage);
    setActivePage(pageData.activePage);
    // setApiUrl('https://swapi.co/api/people/?page=' + page.activePage.toString());
    // setPageItems();
  }

  function fetchData() {
    props.data?.forEach(d => {
      parseCol(d["collector"]);
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
              </Table>
            </Accordion.Content>
          </div>
        )}
        <Pagination
          defaultActivePage={1}
          totalPages={Math.ceil(collectors.params.length / 10)}
          onPageChange={handlePageChange}
        />
      </Accordion>
    </div>
  )
}
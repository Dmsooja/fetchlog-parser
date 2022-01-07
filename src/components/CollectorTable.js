import { Table } from 'semantic-ui-react';


export default function CollectorTable(props) {

  const { collectorData } = props;
  console.log(collectorData);

  return (
    <div>
      <Table collapsing selectable>
        <Table.Header>
          <Table.Row style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
            <Table.HeaderCell>Params</Table.HeaderCell>
            <Table.HeaderCell>Values</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {collectorData?.values.map((v, index) =>
            <Table.Row key={index}>
              <Table.Cell key={collectorData.params[index]}>{collectorData.params[index]}</Table.Cell>
              <Table.Cell key={collectorData.values[index]}>{v}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  )
}
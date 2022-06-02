import { Table, Grid } from 'semantic-ui-react';
import _ from 'lodash';
import { useState, useReducer } from 'react';
import { ipList } from '../../functions/files';
import InfiniteScroll from 'react-infinite-scroll-component';
import TableHead from './TableHead';
import TableBody from './TableBody';


export default function IpTable() {
  const data = ipList;

  const [count, setCount] = useState({
    prev: 0,
    next: 20
  })

  const [tableData, setTableData] = useState(data.slice(count.prev, count.next));
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const [hasMore, setHasMore] = useState(true);
  // const [current, setCurrent] = useState(tableData.slice(count.prev, count.next));

  const getMoreData = () => {
    if (tableData.length === data.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setTableData(tableData.concat(data.slice(count.prev + 10, count.next + 10)))
    }, 1000)
    setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
  }

  const columns = [
    { label: "Count", accessor: "count", sortable: true, width: 3 },
    { label: "Percentage", accessor: "percentage", sortable: true, width: 3 },
    { label: "Ip", accessor: "ip", sortable: true }
  ];


  const handleSortingChange = (accessor) => {
    const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const handleSorting = (sortField, sortOrder) => {
    console.log(sortField, sortOrder);
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={tableData.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
      <Table sortable celled fixed>
        <Table.Header >
          <Table.Row>
            {columns.map(({ label, accessor, sortable, width }) => (
              <Table.HeaderCell
                key={accessor}
                width={width}
                onClick={sortable ? () => handleSortingChange(accessor) : null}
              >
                {label}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
            {tableData && tableData.map((data) => (
            <Table.Row key={data.id}>
              {columns.map(({ accessor }) => {
                const tData = data[accessor] ? data[accessor] : "——";
                return <Table.Cell key={accessor}>{tData}</Table.Cell>
              })}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      </InfiniteScroll>
    </div >
  )
}

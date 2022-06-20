import { Table, Grid, Icon } from 'semantic-ui-react';
import _ from 'lodash';
import { useState, useReducer } from 'react';
import { ipList } from '../../functions/files';
import InfiniteScroll from 'react-infinite-scroll-component';
import TableHead from './TableHead';
import TableBody from './TableBody';


export default function IpTable(props) {
  const { data } = props;

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
      <div>
        To see all the IP occurences in a file using the command line use cut :
        <pre>
          cut -d &quot; &quot; -f[column number] [file].csv | sort | uniq -c | sort -rn
        </pre>
        Usually the 3rd column contains the IP.<br />
        Example :
        <pre>
          cut -d &quot; &quot; -f3 logfile16829.csv | sort | uniq -c | sort -rn
        </pre>
        <br />
        To pipe the result in a generated csv file add
        <pre>
          {`>`} file.csv
        </pre>
        <br />
        Example :
        <pre>
          cut -d &quot; &quot; -f3 logfile16829.csv | sort | uniq -c | sort -rn &gt; ips.csv
        </pre>
      </div>
      <h4>IPs found : {ipList.length}</h4>
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
                  {accessor == sortField ?
                    <>
                      {order == "asc" ? <Icon name='caret up' /> : <Icon name='caret down' />}
                    </> : null}
                </Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {tableData && tableData.map((ip, index) => (
              <Table.Row key={index}>
                {columns.map(({ accessor }) => {
                  const tData = ip[accessor] ? ip[accessor] : "——";
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

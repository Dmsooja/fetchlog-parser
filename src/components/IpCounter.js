import { Table, Grid } from 'semantic-ui-react';
import _ from 'lodash';
import { useState, useReducer } from 'react';
import { ipList } from '../functions/files';
import InfiniteScroll from 'react-infinite-scroll-component';



// function Reducer(state, action) {
//     switch (action.type) {
//         case 'CHANGE_SORT':
//             if (state.column === action.column) {
//                 return {
//                     ...state,
//                     data: state.data.slice().reverse(),
//                     direction:
//                         state.direction === 'ascending' ? 'descending' : 'ascending',
//                 }
//             }

//             return {
//                 column: action.column,
//                 data: _.sortBy(state.data, [action.column]),
//                 direction: 'ascending',
//             }
//         default:
//             throw new Error()
//     }
// }

export default function IpCounter() {

    const ipData = ipList;
    
    // const [state, dispatch] = useReducer(Reducer, {
    //     column: null,
    //     data: ipData,
    //     direction: null,
    // })

    // const { column, data, direction } = state

    const [count, setCount] = useState({
        prev: 0,
        next: 20
    })

    const [hasMore, setHasMore] = useState(true);
    const [current, setCurrent] = useState(ipData.slice(count.prev, count.next));

    const getMoreData = () => {
        if (current.length === ipData.length) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            setCurrent(current.concat(ipData.slice(count.prev + 10, count.next + 10)))
        }, 1000)
        setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
    }


    return (
        <div id='scrollableTable'>
            Show the most present IPs and the 5 full fetchlog lines of them + counter
            Show occurences % of the overall list

            <InfiniteScroll
                dataLength={current.length}
                next={getMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
            >
                {/* <div>
                    {current && current.map(({ip, count}, index) => (
                        <div key={index} className="post">
                            <h3>{`${ip}-${count}`}</h3>
                        </div>
                    ))
                    }
                </div> */}
                <Table sortable celled fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell
                                width={3}
                            sorted={column === 'percentage' ? direction : null}
                            // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'count' })}
                            >
                                %
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                width={3}
                            sorted={column === 'count' ? direction : null}
                            // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'count' })}
                            >
                                Occurences
                            </Table.HeaderCell>
                            <Table.HeaderCell
                            sorted={column === 'ip' ? direction : null}
                            // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'ip' })}
                            >
                                IP
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {current && current.map(({ ip, count, percentage }, index) => (
                            <Table.Row key={index}>
                                <Table.Cell>{parseFloat(percentage*100).toFixed(2)}%</Table.Cell>
                                <Table.Cell>{count}</Table.Cell>
                                <Table.Cell>{ip}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </InfiniteScroll>
        </div >
    )
}

import { Table, Grid } from 'semantic-ui-react';
import _ from 'lodash';
import { useState, useReducer } from 'react';
import { ipList } from '../functions/files';



function exampleReducer(state, action) {
    switch (action.type) {
        case 'CHANGE_SORT':
            if (state.column === action.column) {
                return {
                    ...state,
                    data: state.data.slice().reverse(),
                    direction:
                        state.direction === 'ascending' ? 'descending' : 'ascending',
                }
            }

            return {
                column: action.column,
                data: _.sortBy(state.data, [action.column]),
                direction: 'ascending',
            }
        default:
            throw new Error()
    }
}

export default function IpCounter() {

    const ipData = ipList;

    const [state, dispatch] = useReducer(exampleReducer, {
        column: null,
        data: ipData,
        direction: null,
    })
    const { column, data, direction } = state
    return (
        <div>
            Show the most present IPs and the 5 full fetchlog lines of them + counter
            Show occurences % of the overall list

            <Table sortable celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            width={1}
                        // sorted={column === 'count' ? direction : null}
                        // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'count' })}
                        >
                            %
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            width={2}
                            sorted={column === 'count' ? direction : null}
                            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'count' })}
                        >
                            Occurences
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'ip' ? direction : null}
                            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'ip' })}
                        >
                            IP
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {data.map(({ ip, count }, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>{count}</Table.Cell>
                            <Table.Cell>{count}</Table.Cell>
                            <Table.Cell>{ip}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div >
    )
}

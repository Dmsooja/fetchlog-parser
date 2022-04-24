import { List, Grid } from 'semantic-ui-react';
import AddForm from './AddForm';
import { useState } from 'react';
import { colFilter } from '../../functions/filters';

export default function Tags({ filters, newFilters, newFilteredTags, isLoading }) {

    const [data, setData] = useState(filters);

    const updateFilters = (...res) => {
        newFilters(...res);
        setData([...data, ...res]);
        newFilteredTags(colFilter(...data, ...res));
    }

    return (
        <div className="ui grid three columns divided">
            <Grid.Row centered>
                <AddForm updateFilters={updateFilters} />
            </Grid.Row>
            <Grid.Row columns={3} divided>
                <Grid.Column>
                    <h2>Default tags</h2>
                    <List bulleted>
                        {data.filter(f => f.type === "default").map((filter, index) =>
                            <List.Item key={index}>
                                {filter.label}
                            </List.Item>
                        )}
                    </List>
                </Grid.Column>
                <Grid.Column>
                    <h2>Custom tags</h2>
                    <List bulleted>
                        {data.filter(f => f.type === "custom").map((custom, index) =>
                            <List.Item key={index}>
                                {custom.label}
                            </List.Item>
                        )}
                    </List>
                </Grid.Column>
                <Grid.Column>
                    <h2>Alerts</h2>
                    <List bulleted>
                        {data.filter(f => f.type === "alert").map((alert, index) =>
                            <List.Item key={index}>
                                {alert.label}
                            </List.Item>
                        )}
                    </List>
                </Grid.Column>
            </Grid.Row>
        </div >
    )
}

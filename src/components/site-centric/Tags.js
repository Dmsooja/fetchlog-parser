import { filters } from '../../filters';
import { List, Grid } from 'semantic-ui-react';
import ParamsForm from './ParamsForm';
import { useState } from 'react';

export default function Tags() {

    const [data, setData] = useState(filters);
    const updateFilters = () => {
        setData(filters);
    }

    return (
        <div className="output-section">
            <Grid divided>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <h2>Default tags</h2>
                        <List bulleted>
                            {data.filter(f => f.type === "default").map((filter, index) =>
                                <List.Item key={index}>
                                    {filter.label}
                                </List.Item>
                            )}
                        </List>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <h2>Create custom tags and alerts</h2>
                        <p>Complete current tags with additional custom search or alerts</p>
                        <ParamsForm updateFilters={updateFilters} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
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
            </Grid>
        </div >
    )
}

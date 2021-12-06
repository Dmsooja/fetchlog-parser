import { filters } from '../../filters';
import { Divider, List, Grid } from 'semantic-ui-react';
import ParamsForm from './ParamsForm';

export default function Tags(props) {

    return (
        <div className="output-section">
            <Grid divided>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <h2>Default tags</h2>
                        <List bulleted>
                            {filters.filter(f => f.type === "default").map((filter, index) =>
                                <List.Item key={index}>
                                    {filter.label}
                                </List.Item>
                            )}
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <h2>Custom tags</h2>
                        <List bulleted>
                            {filters.filter(f => f.type === "custom").map((custom, index) =>
                                <List.Item key={index}>
                                    {custom.label}
                                </List.Item>
                            )}
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <h2>Alerts</h2>
                        <List bulleted>
                            {filters.filter(f => f.type === "alert").map((alert, index) =>
                                <List.Item key={index}>
                                    {alert.label}
                                </List.Item>
                            )}
                        </List>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h2>Custom tags</h2>
                        <p>Create and search custom tags and alerts</p>
                        <ParamsForm/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div >
    )
}

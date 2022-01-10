import { List, Grid } from 'semantic-ui-react';
import { useState } from 'react';

export default function TagsAd({ filters, newFilters }) {

    const [data, setData] = useState(filters);

    //Uncomment if a form is created for custom/alerts ad tags
    // const updateFilters = (...res) => {
    //     newFilters(...res);
    //     setData([...data, ...res]);
    // }

    return (
        <div className="ui grid three columns divided">
            {/* <Grid.Row centered>
                <AddForm updateFilters={updateFilters} />
            </Grid.Row> */}
            <Grid.Row columns={3} divided>
                <Grid.Column>
                    <h2>Ad tags</h2>
                    <List bulleted>
                        {data.map((filter, index) =>
                            <List.Item key={index}>
                                {filter.label}
                            </List.Item>
                        )}
                    </List>
                </Grid.Column>
            </Grid.Row>
        </div >
    )
}

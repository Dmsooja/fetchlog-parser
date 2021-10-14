import { useState } from 'react';
import { filters } from '../filters';
import { Tab, Loader, Dimmer, Card, Icon, Container, Menu, Label } from 'semantic-ui-react';
import CollectorTable from './CollectorTable';

export default function Output(props) {

    const { loading } = props;
    // const [loading, setLoading] = useState(false);
    const [isDataReady, setIsDataReady] = useState(false);
    const [isOutputReady, setIsOutputReady] = useState(false);

    // const Acc = [
    //     filters.map((filter, index) => {
    //         key: index
    //         title: filter.label
    //         content: <CollectorTable data={props.data} />
    //     }
    //     )]

    return (
        <div className="output-section">
            <Dimmer.Dimmable as={Container} dimmed={loading}>
                <Dimmer inverted active={loading} >
                    <Loader active={loading} inverted content={isDataReady === false ? "Preparing data" : "Parsing data"} />
                </Dimmer>
                {Object.entries(props.data).length !== 0 ?
                    <div>
                        <Card.Group itemsPerRow={3}>
                            {filters.map((filter, index) =>
                                <Card key={index}>
                                    <Card.Content>
                                        <Icon size='large' color={Object.keys(props.data).includes(filter.name) ? "green" : "red"} name={Object.keys(props.data).includes(filter.name) ? "check circle outline" : "times circle outline"} />
                                        {filter.label}
                                    </Card.Content>
                                </Card>
                            )}
                        </Card.Group>
                        {/* <Tab menu={ attached= true, tabular=true, content } />
                            {filters.map((filter, index) => {
                                <Menu.Item pointing secondary key='messages'>
                                    {filter.label}<Label>count</Label>
                                </Menu.Item>
                                // <Tab.Pane>
                                //     toto
                                // </Tab.Pane>
                            })}
                        </Tab> */}
                        {/* <Accordion
                            fluid
                            // styled
                            exclusive={false}
                            style={{ margin: "2rem 0" }}
                        >
                            {filters.map((filter, index) =>
                                <div>
                                    {Object.keys(props.data).includes(filter.name) ?
                                        <Card fluid>
                                            <Accordion.Title key={index}>
                                                <Icon size='large' name="dropdown"/>
                                                {filter.label}
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p>toto</p>
                                            </Accordion.Content>
                                        </Card>
                                    : null}
                                </div>
                            )}
                        </Accordion> */}


                    </div>
                    : null
                }
            </Dimmer.Dimmable>
        </div >
    )
}

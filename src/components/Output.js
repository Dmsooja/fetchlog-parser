import { useState } from 'react';
import { filters } from '../filters';
import { Accordion, Loader, Dimmer, Card, Icon, Container } from 'semantic-ui-react';

export default function Output(props) {
    const { loading } = props;
    // const [loading, setLoading] = useState(false);
    const [isDataReady, setIsDataReady] = useState(false);
    const [isOutputReady, setIsOutputReady] = useState(false);

    return (

        <div className="output-section" >
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
                        <Accordion
                            fluid
                            styled
                            defaultActiveIndex={[0]}
                            exclusive={false}
                        >
                            {
                                Object.entries(props.data).map(arr => {
                                    <Accordion.Title>{arr[0]}</Accordion.Title>
                                })
                            }
                        </Accordion>

                    </div>

                    : null
                }
            </Dimmer.Dimmable>
        </div >
    )
}

import { useState } from 'react';
import { filters } from '../../filters';
import { Loader, Dimmer, Card, Icon, Container, Accordion, Divider } from 'semantic-ui-react';
import CollectorTable from '../CollectorTable';

export default function SiteOutput(props) {

    const { loading } = props;
    // const [isDataReady, setIsDataReady] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="output-section">
            {/* <Dimmer.Dimmable as={Container} dimmed={loading}>
                <Dimmer inverted active={loading} >
                    <Loader
                        active={loading}
                        inverted 
                        // content={isDataReady === false ? "Preparing data" : "Parsing data"} 
                    />
                </Dimmer> */}
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
                        <Divider horizontal>Details</Divider>
                        <Accordion>
                            {filters.map((filter, index) =>
                                <div key={index}>
                                    <Accordion.Title
                                        index={index}
                                        active={activeIndex === index}
                                        onClick={() => activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)}
                                    >
                                        <Card.Content>
                                            <Icon size='large' color={Object.keys(props.data).includes(filter.name) ? "green" : "red"} name={Object.keys(props.data).includes(filter.name) ? "check circle outline" : "times circle outline"} />
                                            {filter.label}
                                        </Card.Content>
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === index}>
                                        <CollectorTable data={props.data[filter.name]} />
                                    </Accordion.Content>
                                </div>
                            )}
                        </Accordion>
                    </div>
                    : null
                }
            {/* </Dimmer.Dimmable> */}
        </div >
    )
}

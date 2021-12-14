import { useState } from 'react';
import { Loader, Dimmer, Card, Icon, Container, Accordion, Divider, Label } from 'semantic-ui-react';
import CollectorTable from '../CollectorTable';

export default function Output(props) {

    const { loading, data, filters } = props;
    const [activeIndex, setActiveIndex] = useState(null);

    const defaultTags = filters.filter((d) => d.type === 'default');
    const customTags = filters.filter((d) => d.type === 'custom');
    const alertTags = filters.filter((d) => d.type === 'alert');

    return (
        <div className="output-section">
            <Dimmer.Dimmable as={Container} dimmed={loading}>
                <Dimmer inverted active={loading} >
                    <Loader
                        active={loading}
                        inverted
                    />
                </Dimmer>
                {Object.entries(data).length !== 0 ?
                    <div>
                        <Divider horizontal>Default tags</Divider>
                        <Accordion>
                            {defaultTags.map((filter, index) =>
                                <div key={index}>
                                    <Accordion.Title
                                        index={index}
                                        active={activeIndex === index}
                                        onClick={() => activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)}
                                    >
                                        <Card.Content>
                                            <Icon size='large' color={Object.keys(data).includes(filter.name) ? "green" : "red"} name={Object.keys(data).includes(filter.name) ? "check circle outline" : "times circle outline"} />
                                            {`${filter.label} `}
                                            <Label basic size="mini" color={Object.keys(data).includes(filter.name) ? "green" : "red"}>{Object.keys(data).includes(filter.name) ? data[filter.name].length : 0}</Label>
                                        </Card.Content>
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === index}>
                                        <CollectorTable data={data[filter.name]} />
                                    </Accordion.Content>
                                </div>
                            )}
                        </Accordion>
                    </div>
                    : null
                }
                {Object.entries(data).length !== 0 ?
                    <div>
                        <Divider horizontal>Custom tags</Divider>
                        <Accordion>
                            {customTags.map((filter, index) =>
                                <div key={index}>
                                    <Accordion.Title
                                        index={index}
                                        active={activeIndex === index}
                                        onClick={() => activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)}
                                    >
                                        <Card.Content>
                                            <Icon size='large' color={Object.keys(data).includes(filter.name) ? "green" : "red"} name={Object.keys(data).includes(filter.name) ? "check circle outline" : "times circle outline"} />
                                            {`${filter.label} `}
                                            <Label basic size="mini" color={Object.keys(data).includes(filter.name) ? "green" : "red"}>{Object.keys(data).includes(filter.name) ? data[filter.name].length : 0}</Label>
                                        </Card.Content>
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === index}>
                                        <CollectorTable data={data[filter.name]} />
                                    </Accordion.Content>
                                </div>
                            )}
                        </Accordion>
                    </div>
                    : null
                }
                {Object.entries(data).length !== 0 ?
                    <div>
                        <Divider horizontal>Alerts</Divider>
                        <Accordion>
                            {alertTags.map((filter, index) => 
                                <div key={index}>
                                    <Accordion.Title
                                        index={index}
                                        active={activeIndex === index}
                                        onClick={() => activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)}
                                    >
                                        <Card.Content>
                                            <Icon size='large' color="orange" name="warning circle" />
                                            {`${filter.label} `}
                                            <Label basic size="mini" color={Object.keys(data).includes(filter.name) ? "green" : "red"}>{Object.keys(data).includes(filter.name) ? data[filter.name].length : 0}</Label>
                                        </Card.Content>
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === index}>
                                        <CollectorTable data={data[filter.name]} />
                                    </Accordion.Content>

                                </div>
                            
                            )}
                        </Accordion>
                    </div>
                    : null
                }
            </Dimmer.Dimmable>
        </div >
    )
}

import { useState } from 'react';
import { Loader, Dimmer, Card, Icon, Accordion, Divider, Label, Grid } from 'semantic-ui-react';
import CollectorTable from '../CollectorTable';
import { parseCol, tagsList } from '../../functions'

export default function OutputAd(props) {

    const { loading, data, filters } = props;

    const [activeIndex, setActiveIndex] = useState(null);
    const [tableActiveIndex, setTableActiveIndex] = useState(null);

    // const [defaultActiveIndex, setDefaultActiveIndex] = useState(null);
    // const [customActiveIndex, setCustomActiveIndex] = useState(null);
    // const [alertActiveIndex, setAlertActiveIndex] = useState(null);

    // const defaultTags = filters.filter((d) => d.type === 'default');
    // const customTags = filters.filter((d) => d.type === 'custom');
    // const alertTags = filters.filter((d) => d.type === 'alert');  

    return (
        <div className="ui grid">
            <Grid.Row>
                <Grid.Column>
                    <h2>Ad Results</h2>
                    <Dimmer.Dimmable dimmed={loading}>
                        <Dimmer inverted active={loading} >
                            <Loader
                                active={loading}
                                inverted
                            />
                        </Dimmer>
                        {Object.entries(data).length !== 0 ?
                            <div>
                                <Divider horizontal>Ad tags</Divider>
                                <Accordion>
                                    {filters.map((filter, index) =>
                                        <div key={index}>
                                            <Accordion.Title
                                                index={index}
                                                active={activeIndex === index}
                                                onClick={() => activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)}
                                            >
                                                <Card.Content>
                                                    <Icon size='large' color={Object.keys(data).includes(filter.name) ? "green" : "red"} name={Object.keys(data).includes(filter.name) ? "check circle outline" : "times circle outline"} />
                                                    {`${filter.label} `}
                                                    <Label basic size="mini" color={Object.keys(tagsList).includes(filter.name) ? "green" : "red"}>
                                                        {Object.keys(tagsList).includes(filter.name) ? tagsList[filter.name].length : 0}
                                                    </Label>
                                                </Card.Content>
                                            </Accordion.Title>
                                            <Accordion.Content active={activeIndex === index}>
                                            <Accordion fluid exclusive={false}>
                                                    {data[filter.name]?.map((d, index) =>
                                                        <div key={index}>
                                                            <Accordion.Title
                                                                index={index}
                                                                active={tableActiveIndex === index}
                                                                onClick={() => tableActiveIndex === index ? setTableActiveIndex(null) : setTableActiveIndex(index)}
                                                                style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}
                                                            >
                                                                {d["collector"]}
                                                            </Accordion.Title>
                                                            <Accordion.Content active={tableActiveIndex === index}>
                                                                <CollectorTable collectorData={parseCol(d["collector"])} />
                                                            </Accordion.Content>
                                                        </div>
                                                    )}
                                                </Accordion>
                                            </Accordion.Content>
                                        </div>
                                    )}
                                </Accordion>
                            </div>
                            : null
                        }
                    </Dimmer.Dimmable>
                </Grid.Column>
            </Grid.Row>
        </div >
    )
}

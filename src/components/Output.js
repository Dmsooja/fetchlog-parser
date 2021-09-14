import { useEffect, useState } from 'react';
import { filters } from '../filters';
import { Accordion, Loader, Dimmer, Card, Icon, Container } from 'semantic-ui-react'

export default function Output(props) {
    const { data } = props
    const [loading, setLoading] = useState(false);
    const [isDataReady, setIsDataReady] = useState(false);
    const [isOutputReady, setIsOutputReady] = useState(false);

    // console.log(Object.entries(data))
    // Object.entries(data).forEach(entry => {
    //     const [key, value] = entry;
    //     console.log(key, value)
    // })
    
    // for (const t in data) {
    // console.log(data[t]);
    // }

    const Parse = () => {
        let k = "";
        let title = "";
        let content = "";
        Object.entries(data).forEach(entry => {
            const [key, value] = entry;
            console.log(key, value);
            k = key;

        }, console.log( k, title, content))
    }

    return (
        Object.entries(data).length !== 0 ?
            <div className="output-section" >
                <Container>
                    {loading === true ?
                        <Dimmer active inverted>
                            <Loader active inverted content={isDataReady === false ? "Preparing data" : "Parsing data"} />
                        </Dimmer>
                        : null
                    }
                    <Card.Group itemsPerRow={3}>
                        {filters.map((filter, index) =>
                            <Card key={index}>
                                <Card.Content>
                                    <Icon size='large' color={Object.keys(data).includes(filter.name) ? "green" : "red"} name={Object.keys(data).includes(filter.name) ? "check circle outline" : "times circle outline"} />
                                    {filter.label}
                                </Card.Content>
                            </Card>
                        )}
                    </Card.Group>

                    <div basic className="tables" style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                        {/* <Parse/> */}
                            {/* <Accordion
                                fluid
                                styled
                                defaultActiveIndex={[0]}
                                exclusive={false}
                                panels={[
                                    { key: "", title: "", content: "" }
                                ]}
                            /> */}
                    </div>
                </Container>
            </div >
            : null
    )
}

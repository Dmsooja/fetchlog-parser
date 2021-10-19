import { useState } from 'react';
import { filters } from '../filters';
import { Tab, Loader, Dimmer, Card, Icon, Container, Menu, Label, Segment } from 'semantic-ui-react';
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

    // const panes = (data) => {
    //     return [
    //         {
    //             menuItem: { key: data.label },
    //             render: () => <Tab.Pane attached={false}><CollectorTable /></Tab.Pane>
    //         }
    //     ]
    // }

    const panes = [
        { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
        { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
        { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ]
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
                    </div>
                    : null
                }
            </Dimmer.Dimmable>
            <div>
                <Menu attached='top' tabular>
                    {filters.map((filter, index) =>
                        <Menu.Item key={index} name={filter.name}>
                            {filter.label}
                        </Menu.Item>
                    )}
                </Menu>
                <Segment attached='bottom'>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need to be sure
                    there isn't anything embarrassing hidden in the middle of text. All
                    the Lorem Ipsum generators on the Internet tend to repeat predefined
                    chunks as necessary, making this the first true generator on the
                    Internet. It uses a dictionary of over 200 Latin words, combined with
                    a handful of model sentence structures, to generate Lorem Ipsum which
                    looks reasonable. The generated Lorem Ipsum is therefore always free
                    from repetition, injected humour, or non-characteristic words etc.
                </Segment>
            </div>
        </div >
    )
}

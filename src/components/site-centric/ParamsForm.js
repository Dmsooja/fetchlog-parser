import { useState } from 'react';
import { Form, Radio, Segment, Grid, Divider, Popup, Icon } from 'semantic-ui-react';
import { filters } from '../../filters';

export default function ParamsForm() {

    const [type, setType] = useState('');
    const [label, setLabel] = useState('');
    const [name, setName] = useState('');
    const [includedParams, setIncludedParams] = useState([]);
    const [excludedParams, setExcludedParams] = useState([]);
    const [excludedParamsInput, setExcludedParamsInput] = useState('');
    const [includedParamsInput, setIncludedParamsInput] = useState('');

    const handleExcludedParams = (e) => {
        const str = e.target.value;
        const arr = str.split(';').filter(param => !!param).map(p => p.trim());
        console.log(arr)
        setExcludedParams(arr);
        setExcludedParamsInput(str);
    }

    const handleIncludedParams = (e) => {
        const str = e.target.value;
        const arr = str.split(';').filter(param => !!param).map(p => p.trim());
        console.log(arr)
        setIncludedParams(arr);
        setIncludedParamsInput(str);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let res = { label, name, type, includedParams, excludedParams }
        filters.push(res);
        console.log(filters);
    };

    return (
        <div>
            <Segment>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Field>
                            <Radio
                                label='Custom'
                                name='type'
                                value='custom'
                                checked={type === 'custom'}
                                onChange={(e, { value }) => setType(value)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label='Alert'
                                name='type'
                                value='alert'
                                checked={type === 'alert'}
                                onChange={(e, { value }) => setType(value)}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Popup
                        trigger={
                            <Form.Input
                                placeholder='My Tag'
                                label='Label'
                                name='label'
                                value={label}
                                onChange={e => setLabel(e.target.value)}
                                width={5}
                            />
                        }
                        content='Name the tag to display it'
                        position='right center'
                    />
                    <Popup
                        trigger={
                            <Form.Input
                                placeholder="myTag"
                                label='Name'
                                name='name'
                                value={name}
                                onChange={e => setName(e.target.value)}
                                width={5}
                            />

                        }
                        content='Tag name ID in camelCase'
                        position='right center'
                    />
                    <Segment>
                        <Grid divided relaxed='very' columns={2}>
                            <Grid.Column>
                                <Popup
                                    trigger={
                                        <Form.Input
                                            placeholder='param1; param=0; ...'
                                            label='Included Params'
                                            name='includedParams'
                                            value={includedParamsInput}
                                            onChange={e => handleIncludedParams(e)}
                                        />
                                    }
                                    content='Params that should be present in the collector, separated with semicolon'
                                    position='right center'
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Popup
                                    trigger={
                                        <Form.Input
                                            placeholder='param1; param=0; ...'
                                            label='Excluded Params'
                                            name='excludedParams'
                                            value={excludedParamsInput}
                                            onChange={e => handleExcludedParams(e)}
                                        />
                                    }
                                    content='Params that should not be present in the collector, separated with semicolon'
                                    position='right center'
                                />
                            </Grid.Column>
                        </Grid>
                        <Divider vertical>And</Divider>
                    </Segment>
                    <Form.Button content='Submit' />
                </Form>
                <strong>onChange:</strong>
                <pre>{JSON.stringify({ label, name, type, includedParams, excludedParams }, null, 2)}</pre>
            </Segment>
        </div>
    )
}
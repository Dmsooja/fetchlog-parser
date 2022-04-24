import { useState } from 'react';
import { Form, Segment, Grid, Popup, Modal, Button, Icon } from 'semantic-ui-react';

export default function AddForm({ updateFilters }) {

    const [open, setOpen] = useState(false)
    const [isAlert, setIsAlert] = useState(false);
    const [type, setType] = useState('custom');
    const [label, setLabel] = useState('');
    const [name, setName] = useState('');
    const [includedParams, setIncludedParams] = useState([]);
    const [excludedParams, setExcludedParams] = useState([]);
    const [excludedParamsInput, setExcludedParamsInput] = useState('');
    const [includedParamsInput, setIncludedParamsInput] = useState('');

    const handleExcludedParams = (e) => {
        const str = e.target.value;
        const arr = str.split(';').filter(param => !!param).map(p => p.trim());
        setExcludedParams(arr);
        setExcludedParamsInput(str);
    }

    const handleIncludedParams = (e) => {
        const str = e.target.value;
        const arr = str.split(';').filter(param => !!param).map(p => p.trim());
        setIncludedParams(arr);
        setIncludedParamsInput(str);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let res = { label, name, type, includedParams, excludedParams }
        setIsAlert(false);
        setType('');
        setLabel('');
        setName('');
        setExcludedParamsInput('');
        setIncludedParamsInput('');
        setIncludedParams([]);
        setExcludedParams([]);
        updateFilters(res);
    };

    const handleSubmitClose = (e) => {
        e.preventDefault();
        let res = { label, name, type, includedParams, excludedParams }
        setIsAlert(false);
        setType('');
        setLabel('');
        setName('');
        setExcludedParamsInput('');
        setIncludedParamsInput('');
        setIncludedParams([]);
        setExcludedParams([]);
        updateFilters(res);
        setOpen(false);
    }

    const handleChecked = (e, data) => {
        setIsAlert(!isAlert)
        if (isAlert) {
            setType('custom')
        } else {
            setType('alert')
        }
    }

    return (
        <div>
            <Modal
                centered={false}
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                trigger={
                    <Segment as={Button} textAlign='center' primary  >
                        <Icon name="add" />
                        Create custom tags and alerts : Complete current tags with additional custom search or alerts
                    </Segment>
                }
            >
                <Modal.Header>Create tag or alert</Modal.Header>
                <Modal.Content>
                    <Grid stackable>
                        <Grid.Column width={10}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Popup
                                        trigger={
                                            <Form.Input
                                                placeholder='My Tag'
                                                label='Label'
                                                name='label'
                                                value={label}
                                                onChange={e => setLabel(e.target.value)}
                                                required
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
                                                required
                                            />

                                        }
                                        content='Tag name ID in camelCase'
                                        position='right center'
                                    />
                                </Form.Group>
                                <Popup
                                    trigger={
                                        <Form.TextArea
                                            placeholder='param1; param=0; ...'
                                            label='Parameters to include'
                                            name='includedParams'
                                            value={includedParamsInput}
                                            onChange={e => handleIncludedParams(e)}
                                        />
                                    }
                                    content='Params that should be present in the collector, separated with semicolon'
                                    position='right center'
                                />
                                <Popup
                                    trigger={
                                        <Form.TextArea
                                            placeholder='param1; param=0; ...'
                                            label='Parameters to exclude'
                                            name='excludedParams'
                                            value={excludedParamsInput}
                                            onChange={e => handleExcludedParams(e)}
                                        />
                                    }
                                    content='Params that should not be present in the collector, separated with semicolon'
                                    position='right center'
                                />
                                <Popup
                                    trigger={
                                        <Form.Checkbox
                                            label='Generate an alert'
                                            name='isAlert'
                                            value='alert'
                                            checked={isAlert}
                                            onClick={(e, data) => handleChecked(e, data)}
                                        />
                                    }
                                    content='Check the box if this custom tag is an alert'
                                    position='right center'
                                />
                                <Form.Button content='Submit and add another' />
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <strong>New filter preview</strong>
                            <Segment>
                                <pre>{JSON.stringify({ label, name, type, includedParams, excludedParams }, null, 2)}</pre>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary onClick={() => handleSubmitClose}>Save and close</Button>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}
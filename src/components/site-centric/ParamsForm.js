import { useState } from 'react';
import { filters } from '../../filters';
import { Form } from 'semantic-ui-react';

export default function ParamsForm() {

    const [label, setLabel] = useState('');
    const [name, setName] = useState('');
    const [includedParams, setIncludedParams] = useState([]);
    const [excludedParams, setExcludedParams] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log((label, name, includedParams, excludedParams))
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Input
                        placeholder='Label'
                        label='Label'
                        name='label'
                        value={label}
                        onChange={e => setLabel(e.target.value)}
                    />
                    <Form.Input
                        placeholder='Name'
                        label='Name'
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Input
                        placeholder='Included Params'
                        label='Included Params'
                        name='includedParams'
                        value={includedParams}
                        onChange={e => setIncludedParams(e.target.value)}
                    />
                    <Form.Input
                        placeholder='Excluded Params'
                        label='Excluded Params'
                        name='excludedParams'
                        value={excludedParams}
                        onChange={e => setExcludedParams(e.target.value)}
                    />
                    <Form.Button content='Submit' />
                </Form.Group>
            </Form>
            <strong>onChange:</strong>
            <pre>{JSON.stringify({ label, name, includedParams, excludedParams }, null, 2)}</pre>
        </div>
    )
}
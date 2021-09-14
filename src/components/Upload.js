import { useDropzone } from 'react-dropzone';
import { separateLines, tagsOutput } from '../functions';
import Output from './Output';
import { Segment, Message, Icon, Header, Container } from 'semantic-ui-react'
import { useState } from 'react';

//Trigger csv treatment functions

export default function Upload() {
    const [tags, setTags] = useState([]);

    const handleChange = (f) => {
        let reader = new FileReader();
        reader.onloadend = function (f) {
            let res = reader.result
            separateLines(res);
        }
        reader.readAsText(f)
        setTags(tagsOutput)
    }

    const {
        getRootProps,
        getInputProps,
        fileRejections,
        acceptedFiles,
    } = useDropzone({
        maxFiles: 1,
        maxSize: 10485760, // 10485760 pour 10Mo ou 104857600 pour 100Mo
        accept: ".csv",
        onDropAccepted: acceptedFiles => {
            acceptedFiles.forEach(file => {
                handleChange(file)
            })
        }
    });

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const fileRejectionItems = fileRejections.map(({ file, errors }) => {
        return (
            <li key={file.path}>
                {file.path} - {file.size} bytes
                <ul>
                    {errors.map(e => <li key={e.code}>{e.message}</li>)}
                </ul>

            </li>
        )
    });


    return (
        <div className="form-section">
            <Container style={{marginTop: "1rem", marginBottom: "2rem"}}>
                <Segment size="small" secondary textAlign='center' {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()}/>
                    <Header icon>
                        <Icon name='upload' />
                        Drop your fetchlog csv file here
                    </Header>
                    <br />
                    <small>or click to browse</small>
                </Segment>
                {fileRejectionItems.length ?
                    <Message warning>
                        <Message.Header>
                            <Icon name='warning' />
                            Max size : 10Mo
                        </Message.Header>
                        Your file is too large
                    </Message>
                    : null
                }
                {acceptedFileItems.length > 0 ?
                    <Message info>
                        <Message.Header>
                            {files}
                        </Message.Header>
                    </Message>
                    : null
                }
            </Container>
            
            <Output data={ tags } />

        </div>

    )
}

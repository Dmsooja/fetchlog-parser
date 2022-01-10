import { useDropzone } from 'react-dropzone';
import { separateLines, colFilter } from '../functions';
import { Segment, Message, Icon, Header, Container } from 'semantic-ui-react'
import { useState } from 'react';

//Trigger csv treatment functions

export default function Upload({ filteredTags, isLoading }) {
    const [hidden, setHidden] = useState(true)

    const handleChange = (f) => {
        isLoading(true)
        setHidden(false);

        let reader = new FileReader();

        reader.readAsText(f);

        reader.onloadend = (f) => {
            let res = reader.result
            separateLines(res);
            filteredTags(colFilter());
        }
    }

    const {
        getRootProps,
        getInputProps,
        fileRejections,
        acceptedFiles,
    } = useDropzone({
        maxFiles: 1,
        maxSize: 1048576000, // 10485760 pour 10Mo, 104857600 pour 100Mo, ou 1048576000 pour 1000Mo
        accept: ".csv",
        onDropAccepted: acceptedFiles => {
            acceptedFiles.forEach(file => {
                handleChange(file)
            })
        }
    });

    const files = acceptedFiles.map(file => (
        <p key={file.path}>
            File : {file.path}
            <br/>Size : {file.size} bytes
        </p>
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
                            Max size : 100Mo
                        </Message.Header>
                        Your file is too large
                    </Message>
                    : null
                }
                    <Message
                        info
                        hidden={hidden}
                    >
                        <Message.Header>
                            {files}
                        </Message.Header>
                    </Message>
            </Container>
        </div>

    )
}

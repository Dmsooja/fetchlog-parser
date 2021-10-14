import { useDropzone } from 'react-dropzone';
import { separateLines, tagsOutput } from '../functions';
import Output from './Output';
import { Segment, Message, Icon, Header, Container } from 'semantic-ui-react'
import { useState } from 'react';

//Trigger csv treatment functions

export default function Upload() {
    const [tags, setTags] = useState({});
    const [loading, setLoading] = useState(false)
    const [hidden, setHidden] = useState(true)

    const handleChange = (f) => {
        setLoading(true);
        setHidden(false);

        let reader = new FileReader();

        reader.onloadstart = (f) => {
            // console.log("on load start", reader.readyState)
        }

        reader.onprogress = (f) => {
            // console.log("on progress", reader.readyState)
        }

        reader.readAsText(f);

        reader.onloadend = (f) => {
            // console.log("on load end", reader.readyState)
            let res = reader.result
            separateLines(res);
            setTags(tagsOutput);
            setLoading(false);
        }
    }

    const {
        getRootProps,
        getInputProps,
        fileRejections,
        acceptedFiles,
    } = useDropzone({
        maxFiles: 1,
        maxSize: 104857600, // 10485760 pour 10Mo ou 104857600 pour 100Mo
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
            
            <Output data={ tags } loading={loading} />

        </div>

    )
}

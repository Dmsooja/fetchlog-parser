import { useDropzone } from 'react-dropzone'; // See documentation at https://react-dropzone.js.org/#src
import { separateLines } from '../functions/files';
import { colFilter } from '../functions/filters';
import { Segment, Message, Icon, Header, Container } from 'semantic-ui-react' // See documentation at https://react.semantic-ui.com/
import { useState } from 'react';

/**
 * Upload component
 * Triggers csv treatment with @function separateLines
 * Triggers collector filtering with @function colFilter
 * @param {object} filteredTags - Object of tags arrays 
 * @param {*} isLoading 
 * @param {*} filters 
 */
// Upload component, props filteredTags and isLoading communicate data to the parent component App.js
export default function Upload({ filteredTags, isLoading, filters }) {
    
    // Hide the info box
    const [hidden, setHidden] = useState(true)

    // Set isLoading to true and show info box
    // Read the file and use separateLines function to start the csv data extraction
    const handleChange = (f) => {
        isLoading(true)
        setHidden(false);
    
        let reader = new FileReader(); // See https://developer.mozilla.org/fr/docs/Web/API/FileReader

        reader.readAsText(f);

        reader.onloadend = (f) => {
            let res = reader.result
            separateLines(res);
            filteredTags(colFilter(filters));
        }
    }

    // Initialize useDropzone
    const { getRootProps, getInputProps, fileRejections, acceptedFiles } = useDropzone({
        maxFiles: 1,
        maxSize: 1048576000, // 10485760 for 10Mo, 104857600 for 100Mo, or 1048576000 for 1000Mo
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

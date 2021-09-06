import { separateLines }  from '../functions'
import { Button, Form } from 'semantic-ui-react'

//Fetch csv function
function handleChange(e) {
    //Read File
    let reader = new FileReader();
    reader.onload = function (e) {
        let res = reader.result
        //Separate lines
        separateLines(res);
    }
    reader.readAsText(e.target.files[0])
}

export default function Upload() {
    return (
        <div className="form-section">
            <Form action="">
                <div>
                    <label for="logfile">Browse</label>
                    <input
                        type="file"
                        name="logfile"
                        id="logfile"
                        accept=".csv"
                        required
                        onChange={handleChange}
                    ></input>
                </div>
            </Form>
            <Button>Decrypt</Button>
        </div>

    )
}

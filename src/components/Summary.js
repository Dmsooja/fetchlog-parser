import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function LogfileForm() {
    return (
        <div class="form-section">
            <Form action="">
                <div>
                    <label for="logfile">Browse</label>
                    <input
                        type="file"
                        name="logfile"
                        id="lofile"
                        accept=".csv"
                        required
                    ></input>
                </div>
            </Form>
            <Button>Decrypt</Button>
        </div>

    )
}

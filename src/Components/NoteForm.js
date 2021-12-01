import { Form, Button} from 'react-bootstrap'
 import { connect } from 'react-redux';
 import { addNote } from '../actions/noteActions';
 import { v4 as uuid } from "uuid";


const Note = (props) => {

    const handleSubmit = (e) => {
           e.preventDefault();
           let text = e.target.elements.text.value;
           let textarea = e.target.elements.textarea.value;

           if (text && textarea) {
               let date = new Date();
			let newNote = {
                id: uuid(),
				text,
				textarea,
                date: date.toDateString()
				//adds a unique id to the new user
				
			};
			props.addNote(newNote)
           text ="";
           textarea ="";

		}
	}
          
    return (
        <Form className="noteStyle" onSubmit={handleSubmit}>
            <h1 className="noteTitle">My NoteBook</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Title" name="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={6} placeholder="Add a Note" name="textarea"/>
            </Form.Group>
            <Button variant="success" type="submit">
                New Note
            </Button>
        </Form>
    )
}

const mDSP = {
    addNote,
}

export default connect(null,mDSP)(Note)

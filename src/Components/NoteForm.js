import { Form, Button } from 'react-bootstrap'
 import { connect } from 'react-redux';
 import { addNote } from '../actions/noteActions';
 import { v4 as uuid } from "uuid";
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";



const Note = (props) => {
    const [showNote, setShowNote] = useState(false);
    const [noteDetail, setNoteDetail] = useState({
      id:"",
      title:"",
      Note:"",
      date:""
      
    })
    
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setNoteDetail((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })

    }
    const handleSubmit = (e) => {
           e.preventDefault();
        //    let title = e.target.elements.text.value;
        //    let Note= e.target.elements.textarea.value;
        //    console.log(title,Note);
           

           if (noteDetail.title && noteDetail.Note) {
			let newNote = {
                id: uuid(),
				title: noteDetail.title,
				Note: noteDetail.Note,
                date: noteDetail.date
               };
              
			props.addNote(newNote)
               setNoteDetail({
                id:"",
                title:"",
                Note:"",
                date:""
               })
               setShowNote(!showNote);
        }
	}
          
    return (
        <Form className="noteStyle" onSubmit={handleSubmit}>
            <h1 className="noteTitle"> NoteBook </h1>{showNote ? (<><Form.Group className="mb-3 create-note" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Title" name="title" value={noteDetail.title}  onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb- create-note" controlId="formBasicEmail">
                <Form.Control type="date" placeholder="date" name="date" value={noteDetail.date}  onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3 create-note" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={6} placeholder="Add a Note" name="Note" value={noteDetail.Note} onChange={handleChange}/>
            </Form.Group>
            <Button variant="success" type="submit" style={{marginLeft:"20rem",fontFamily:"Times New Roman"}}>
            <FaPlus/>
            </Button>
            <br /><br /></>):(<Button onClick={()=> setShowNote(!showNote)} className="Note_button">New Note</Button>)}

        </Form>
    )
}

const mDSP = {
    addNote,
}

export default connect(null,mDSP)(Note)

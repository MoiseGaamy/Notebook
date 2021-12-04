import React, { useState } from 'react'
import {Card, Button} from "react-bootstrap";
import {connect} from "react-redux";
import { deleteNote , editNote } from '../actions/noteActions';
import { Form } from 'react-bootstrap';
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Note = ({ data, deleteNote, editNote }) => {
  const [editForm, setEditForm] = useState({
    id: data.id,
    title: data.title,
    date: data.date,
    Note: data.Note
  })
  const [edit, setEdit] = useState(false)
  console.log(data);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEditForm((prev) => {
      return {
        ...prev,
         [name]: value
        }
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    editNote(data.id, editForm)
    setEdit(!edit);
  }
  
  return (
    <> {edit ? (<Form className="noteStyle" onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Title" name="title" value={editForm.title}  onChange={handleChange}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="date" placeholder="date" name="date" value={editForm.date}  onChange={handleChange}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={6} placeholder="Add a Note" name="Note" value={editForm.Note} onChange={handleChange}/>
    </Form.Group>
    <Button variant="secondary" type="submit">
        Save Changes
    </Button>
    <br /><br />
    </Form>) : (
         <Card style={{ width: '18rem', margin:"2rem" }}>
         <Card.Body>
           <Card.Title>{data.title}</Card.Title>
           <Card.Text>
            {data.Note}
           </Card.Text>
           <Card.Text>
            {data.date}
           </Card.Text>
           <span  onClick={() =>deleteNote(data.id)} className="trash"  style={{margin:"5px"}}><FaTrash  /></span>
           <span className="edit" onClick={()=> setEdit(!edit)}><FaEdit/></span>
         </Card.Body>
       </Card>
        
)}
      
      </>
        
    )
}
const mDTP = {
    deleteNote,
    editNote,
}
export default connect(null,mDTP)(Note)

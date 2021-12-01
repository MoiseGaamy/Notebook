import React from 'react'
import {Card, Button} from "react-bootstrap";
import {connect} from "react-redux";
import { deleteNote } from '../actions/noteActions';

const Note = ({data, deleteNote}) => {
    console.log(data);
    return (
        <Card style={{ width: '18rem', margin:"2rem" }}>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
           {data.Note}
          </Card.Text>
          <Card.Text>
           {data.text}
          </Card.Text>
          <Card.Text>
           {data.textarea}
          </Card.Text>
          <Card.Text>
           {data.date}
          </Card.Text>
          <Button  onClick={() =>deleteNote(data.id)} variant="danger"  style={{margin:"5px"}}>delete</Button>
          <Button variant="success">edit</Button>
        </Card.Body>
      </Card>
       
    )
}
const mDTP = {
    deleteNote,
}
export default connect(null,mDTP)(Note)

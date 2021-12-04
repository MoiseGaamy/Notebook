import React from 'react';
import {connect} from "react-redux";
import Note from './Note';


const Notes = (props) => {
    console.log(props.notes);
    return (
           <div className="display">
               {props.notes.map((note,index)=>{
                   return <Note key={index} data={note} />
               })}
               
           </div>
            
    )
}
const mSTP = (state) => {
    return {
        notes: state.notes
    }
}
export default connect(mSTP) (Notes)

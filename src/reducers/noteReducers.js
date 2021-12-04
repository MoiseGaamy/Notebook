
const initialState = {
    notes : [
     {   id:1,
         title : "Geography",
         Note : " Geography is a subject that talks about countries and landmarks"
     },
     {   
         id:2,
         title : "Science",
         Note : " Science is all about science"
     },
     {    
         id:3,
         title : "English",
         Note : " English  is an awesome language but not then my language"
     }
    ]
}

const noteReducer = ( state = initialState , action ) =>{
     switch(action.type){
         case "ADD_NOTE": 
         return { ...state , notes:[...state.notes, action.payload]};
         case "DELETE_NOTE":
             const deletedNote = state.notes.filter((note)=>{
                return  note.id ? note.id !== action.payload : note
             })
             return { ...state, notes: deletedNote }
         case "EDIT":
             const editedNotes = state.notes.map((note) => {
                 return note.id === action.payload.noteId ? action.payload.editedNote : note
             })
             return { ...state, notes: editedNotes };

          default:
            return state ;
     }
    

}
export default noteReducer;
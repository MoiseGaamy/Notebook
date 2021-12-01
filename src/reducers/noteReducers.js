
const initialState = {
    notes : [
     {    
         title : "Geography",
         Note : " Geography is a subject that talks about countries and landmarks"
     },
     {   
         title : "Science",
         Note : " Science is all about science"
     },
     {    
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
                 if( note.id !== action.payload){
                     return note;
                 }
             })
          return {...state, notes: deletedNote}

          default:
            return state ;
     }
    

}
export default noteReducer;
import AddNote from "./AddNote";
import Note from "./Note";
export default function NotesList(props){
   
    return(
        
        <div className="notes-list">
            <AddNote function ={props.function}/>
           { props.noteArray.map((note)=>{
                return <Note   
                id={note.id}
                text={note.text}
                date={note.date}
                deleteFunction = {props.deleteFunction} />
            })}    
        </div>    
    );
}
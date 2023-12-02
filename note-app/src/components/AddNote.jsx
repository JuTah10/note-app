import { nanoid } from "nanoid"
import React from "react";
export default function AddNote(props){
    const [noteText,setNoteText] = React.useState("")
    const remainingCharacter = 200;
    const date = new Date();
    const object={  id: nanoid(),
                    text:noteText,
                    date: date.toLocaleDateString()}

    function handleChange(event){
        if(remainingCharacter - event.target.value.length >=0){
            setNoteText(event.target.value)
        }
         
          
    } 
    function handleSave(){
        if(object.text.trim().length>0){
            props.function(object)
        }
        else{
            alert("Your note is empty!")
        }
        setNoteText("")
    }
    return(
        <div className="note addNote">
            <textarea
            value={noteText}
            onChange={handleChange}
            rows="8"
            cols="10"
            placeholder="Type to add a new note..."></textarea>
            <div className="note-footer">
                <small>{remainingCharacter-noteText.length}</small>
                <button className="save" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}
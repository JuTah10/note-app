import React from "react";
import NotesList from "./components/NotesList";
import SearchBar from "./components/Searchbar";
import Header from "./components/Header";
export default function App(){
    const [notes,setNote] = React.useState(JSON.parse(localStorage.getItem("noteStorage")) || []) 
    const [count,setCount] = React.useState(0)

    const [search,setSearch] = React.useState("")

    const [darkMode,setDarkMode] = React.useState(false)

    React.useEffect(()=>{
        localStorage.setItem("noteStorage",JSON.stringify(notes))   
    },[notes])
       


    //adding new note
    function addNote(object){
        setNote(prevNote =>{
            return [object, ...prevNote]
        })
    }

    //delete note
    function deleteNote(id){
        const newNotes = notes.filter((note)=>note.id !== id)
        setNote(newNotes)
    }

    //for searching
    function searchText(event){
        setSearch(event.target.value)
    }
    function displayFilter(wordToSearch){
        return notes.filter((note)=>note.text.toLowerCase().includes(wordToSearch.toLowerCase()))
    }

    //dark mode
    function setMode(){
        setDarkMode(prevMode=>!prevMode);
    }
   
   

    return(
        <div className={darkMode ? "container dark": "container light"}>
            {count> 0? (
              
                <div className="finished-note">
                <Header setMode={setMode}></Header>
                <SearchBar  notes={notes}
                            value={search}
                            searchText={searchText}/>
                <NotesList  noteArray= {displayFilter(search)}
                            function ={addNote}
                            deleteFunction={deleteNote}/>

            </div>      
            ):(
                
                notes.length>0?
                <div className="first-notif">
                <div className="first-text">Welcome to Noteapp</div>
                <div className="first-text">You currently have {notes.length} {notes.length===1? "note" : "notes"}</div>
                <button className="first-button" onClick={()=>setCount(1)}>Click here to see your note</button>
            </div>
                 : 
                 <div className="first-notif">
                 <div className="first-text">Welcome to Noteapp</div>
                 <div className="first-text">You currently have no note</div>
                 <button className="first-button" onClick={()=>setCount(1)}>Create new note</button>
             </div>
               
            )}
        </div>
        
    );
}
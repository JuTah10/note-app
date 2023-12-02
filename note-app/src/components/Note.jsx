import { MdDelete } from "react-icons/md";
export default function Note(props){
    //add feature allows user to change the date by clicking on the existed date, use a ? : statement to render the page
    function changeDate(id){

    }
    return(
        <div className="note">
            <span>{props.text}</span>
            <div className="note-footer">
                <small onClick={()=>changeDate(id)}>{props.date}</small>
                <MdDelete onClick={()=>{props.deleteFunction(props.id)}} 
                className="delete-note-icon" size="1.3em"/>
            </div>
        </div>
    );
}
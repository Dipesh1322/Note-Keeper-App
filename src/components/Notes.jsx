import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';

function Notes(props) {
    function deleteNote() {
        props.onDelete(props.id);
    }
    return (
        <div className="notes">
            <h1>{props.headingNote}</h1>
            <p>{props.paraNote}</p>
            <Fab size="small" onClick={deleteNote}><DeleteIcon /></Fab>
        </div>
    );
}

export default Notes;
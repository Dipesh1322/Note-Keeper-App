import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Input(props) {
    const [note, setNote] = useState({
        headingNote: "",
        paraNote: ""
    })
    const { headingNote, paraNote } = note;

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function addNote(event) {
        props.onAdd(note);
        setNote({
            headingNote: "",
            paraNote: ""
        })
        event.preventDefault();
    }

    const [expanded, setExpanded] = useState(false);
    function expandInput() {
        setExpanded(true);
    }

    return (
        <div className="note">

            <input
                style={{ display: expanded ? "" : "none" }}
                className="headingInput"
                placeholder="Title"
                type="text"
                onChange={handleChange}
                value={headingNote}
                name="headingNote"
            />

            <input
                className="paraInput"
                placeholder="Take a note..."
                type="text"
                onClick={expandInput}
                onChange={handleChange}
                value={paraNote}
                name="paraNote"
            />
            <Zoom
                style={{ display: expanded ? "" : "none" }}
                in={expanded ? true : false}>
                <Fab
                    size="small"
                    onClick={addNote}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </div>
    )
}

export default Input;
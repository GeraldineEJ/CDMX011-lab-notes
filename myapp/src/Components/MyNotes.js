import React, {Component} from 'react';
import logo from '../Images/logoNotes.png'
import iconNewNote from '../Images/newNote.png'

class MyNotes extends Component {

    render(){
        return (
            <div className="Banner">
                <img src={logo} className="App-logo" alt="logo" />
                <button className="btnNewNote"><img src={iconNewNote} className="iconNew" alt="icon" /></button>
            </div>
        );
    }
}

export default MyNotes;
import './App.css';
import Taskdisplay from './Taskdisplay'
import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Taskdisplay />
            </div>
        );
    }
}
export default App;
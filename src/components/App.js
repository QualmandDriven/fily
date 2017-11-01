import React from 'react';
import './App.css';

import Header from './Header';
import Documents from './Documents';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div style={{marginTop: 50 + "px"}}>
                    <Documents />
                </div>
            </div>
        );
    }
}
export default App;
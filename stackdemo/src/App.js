import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <div className="HeaderFlow">
          <Header/>
        </div>
        <div className="MainPartFlow">
          <div className="PostComponents">

          </div>
          <div className="Sidebar">

          </div>
        </div>
      </div>
    )
  }
}

export default App;

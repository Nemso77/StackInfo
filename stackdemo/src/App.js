import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';
import DetailedInfo from './MainComponents/PostList/DetailedInfo/DetailedInfo';

class App extends Component {
  render() {
    return (
      <div>
        <div className="HeaderFlow">
          <Header/>
        </div>
        <div className="MainPartFlow">
          <div className="MainComponents">
            <DetailedInfo/>
          </div>
          <div className="Sidebar">
            <p>sidebar</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

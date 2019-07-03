import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';
import DetailedInfo from './MainComponents/PostList/DetailedInfo/DetailedInfo';
import Tags from './Sidebar/Tags/Tags';

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
            <div className="Tags">
              <Tags/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

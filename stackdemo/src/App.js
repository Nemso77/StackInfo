import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';
import DetailedInfo from './MainComponents/PostList/DetailedInfo/DetailedInfo';
import Tags from './Sidebar/Tags/Tags';
import SeeMoreButton from './MainComponents/Pagination/Pagination';
import Footer from './Footer/Footer';

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
            <SeeMoreButton/>
          </div>
          <div className="Sidebar">
            <div className="Tags">
              <Tags/>
            </div>
          </div>
        </div>
        <div className="Footer">
          <div><Footer/></div>
        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <ShowBookList/>
        <div>
          
          <Routes path='/create-book' component={CreateBook} />
          <Routes path='/edit-book/:id' component={UpdateBookInfo} />
          <Routes path='/show-book/:id' component={ShowBookDetails} />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowBookList/>} exact/>
        <Route path='/create-book' element={<CreateBook/>}/>
        <Route path='/edit-book/:id' element={<UpdateBookInfo/>}/>
        <Route path='/show-book/:id' element={<ShowBookDetails/>}/>
      </Routes>
     </BrowserRouter>
      // <Router>
      //   <div>
      //     <Route exact path='/'component={ShowBookList} />
      //     <Route path='/create-book' component={CreateBook} />
      //     <Route path='/edit-book/:id' component={UpdateBookInfo} />
      //     <Route path='/show-book/:id' component={ShowBookDetails} />
      //   </div>
      // </Router>
    );
  }
}

export default App;

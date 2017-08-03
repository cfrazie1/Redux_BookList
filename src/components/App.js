
import React, {Component} from 'react';
import '../styles/App.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
  constructor(props){
    super(props);
  }
    render() {
        return (
            <div className="row styleMe">
                <h1>Books N Roses: Appetite for Instruction</h1>
                <div className='containerDiv'>
                <BookList />
                <BookDetail />
              </div>
            </div>
        );
    }
}
export default App;

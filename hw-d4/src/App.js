import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './Components/WarningSign'
import { ModalBody } from 'react-bootstrap';
import MyBadge from './Components/MyBadge';
import SingleBook from './Components/SingleBook';
import historyBooks from './historyBooks.json'
import BookList from './Components/BookList'

function App() {
  return (
    <div className="App">
      <header>
        <WarningSign text="Warning!"/>
        <MyBadge text="new badge" color="info"/>
        <SingleBook book={historyBooks[0]} />
        <BookList books={historyBooks}/>
      </header>
      
    </div>
  );
}

export default App;

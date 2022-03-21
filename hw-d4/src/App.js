
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './Components/WarningSign'
import { ModalBody } from 'react-bootstrap';
import MyBadge from './Components/MyBadge';
import SingleBook from './Components/SingleBook';
import historyBooks from './historyBooks.json';
import BookList from './Components/BookList';
import {Container, Row, Col} from 'react-bootstrap'
import CommentArea from './Components/CommentArea';



function App() {
  return (
    <Container >
      <Row>
        <Col md={9} >
      
          {/* <WarningSign text="Warning!"/> */}
          {/* <MyBadge text="new badge" color="info"/> */}
          {/* <SingleBook book={historyBooks[0]} /> */}
          <BookList books={historyBooks}/>
        </Col>
        <Col md={3}>
          <CommentArea/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

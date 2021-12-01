import 'bootstrap/dist/css/bootstrap.min.css';
import Note from "./Components/NoteForm";
import Notes from "./Components/Notes";
import {Container ,Col,Row} from "react-bootstrap";


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
         <Col>
          <Note />
         </Col>
         <hr />
         <Notes />
         </Row>

      </Container>
    </div>
  );
}

export default App;

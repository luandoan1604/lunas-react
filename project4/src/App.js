import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row} from 'react-bootstrap';
import FormLogin from './FormLogin';
import FormLienHe from './FormLienHe';
import FormTimHinh from './FormTimHinh';

function App() {
  return (
    <Container>
      <Row className='header bg-primary mb-1 text-white'>HEADER</Row>
      <Row className='sec1 mt-1'>
        <Col md={6} className="bg-warning p-2" id="muc1">MUC1</Col>
        <Col md={3} className="bg-light p-3" id="muc2">MUC2</Col>
        <Col md={3} className="bg-info p-3" id="muc3">MUC3</Col>
      </Row>
      <Row className='sec2 mt-1'>
        <Col sm={9} className="bg-info" id="maindata"><FormLienHe/><hr/><FormTimHinh/></Col>
        <Col sm={3} className="bg-dark" id="ttbosung"><FormLogin/></Col>
      </Row>
      <Row className='footer my-1 bg-dark text-white'>
        <Col id="footer1" md={4} className="bg-dark">footer1</Col>
        <Col id="footer2" md={4} className="bg-warning">footer2</Col>
        <Col id="footer3" md={4} className="bg-info">footer3</Col>
      </Row>
    </Container>
  );
}

export default App;

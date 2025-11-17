import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About";
import ContactSection from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Row className="mb-5">
          <Col md={8} className="mx-auto">
            <AboutSection />
            <div className="mb-4">
              <ContactSection />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
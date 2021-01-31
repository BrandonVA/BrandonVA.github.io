import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Container from "react-bootstrap/Container";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div style={{ background: "#020202" }}>
        <Navbar />
        <Container fluid style={{ minHeight: "100%", background: "#020202" }}>
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Wrapper>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

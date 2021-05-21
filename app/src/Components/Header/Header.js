import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../styles.css"
const Header = React.memo(({ handlerSearch }) => {
  const history = useHistory();
  const search = (e) => {
      
    e.preventDefault()
    const [{value}] = e.target;
    const trimValue= value.trim();
    if(trimValue){ 
      handlerSearch(trimValue)
      history.push(`/products?search=${trimValue}`);
    }
  }
  
  return (
    <Container className="header">
      <Row className="header-row">
        <Col md={6} style={{paddingRight:"120px"}}>
        <div className="logo"/>
          <Form className="search-bar" onSubmit={search}>
            <Form.Group>
              <Form.Control
                className="search-input"
                type="text"
                name="search"
                placeholder="Buscar productos, marcas y más..."
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
});

export default Header;
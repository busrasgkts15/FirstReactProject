import React from "react";
import { Input } from "reactstrap";
import { Button, Col, Row, Table } from "reactstrap";

function SearchBar({ filterText, setFilterText }) {
  return (
    <div style={{ padding: 20, marginLeft: 100 }}>
      {/* <Row style={{display: 'flex' , justifyContent: 'center'}}> */}
      <Row className="d-flex justify-content-center">
        <Col md={4} sm={6} xs={12}>
          <Input
            placeholder="🔎 Search.."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </Col>
        <Col md={2} sm={6} xs={12}>
          <Button className="xsbutton" color="primary">
            Add Customers
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default SearchBar;

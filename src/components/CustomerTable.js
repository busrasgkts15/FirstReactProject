import React from "react";
import { Input } from "reactstrap";
import { Col, Row, Table } from "reactstrap";
import Customer from "./Customer";
import Title from "./Title";

function CustomerTable({ customer, filterText }) {
  const Titlerows = [];
  const Featurerows = [];

  Titlerows.push(<Title />);

  customer.map((item) => {
    if (item.name.indexOf(filterText) !== -1) {
      Featurerows.push(<Customer customer={item} />);
    }
  });



  return (
    <>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <Table className="table" striped>
            <thead style={{ fontFamily: "fantasy" }}>{Titlerows}</thead>
            <tbody
              style={{
                fontFamily: "sans-serif",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {Featurerows}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default CustomerTable;

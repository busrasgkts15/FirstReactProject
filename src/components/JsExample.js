import React from "react";
import { Col, Row } from "reactstrap";

function JsExample({ customer }) {
  return (
    <>
      <Row>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          {customer.map((item) => {
            return item.fullname;
          })}
        </Col>
        <Col>{customer.filter((items) => {
            if(items.balance === "$89.40") {
               return items.fullname
            }
        })}</Col>
      </Row>
    </>
  );
}

export default JsExample;

import React from "react";
import { Input } from "reactstrap";
import { Col, Row, Table } from "reactstrap";

function CustomerTitleRow() {
  return (
    <>
      <tr>
        <th>
          <Input style={{ borderRadius: 8 }} type="checkbox" disabled />
        </th>
        <th>#</th>
        <th>Name</th>
        <th>Description</th>
        <th>Status</th>
        <th>Rate</th>
        <th>Balance</th>
      </tr>
    </>
  );
}

function CustomerFeatureRow({ customer }) {
  const checkColor = (blnc) => {
    console.log(blnc);
    if (blnc.includes("-")) {
      return "red";
    } else {
      return "green";
    }
  };

  return (
    <>
      <tr>
        <th>
          <Input style={{ borderRadius: 8 }} type="checkbox" />
        </th>
        <th>{customer.id}</th>
        <th>
          {customer.fullname}
          <h6 style={{ color: "gray" }}>{customer.phonenumber}</h6>
        </th>
        <th>{customer.description}</th>
        <th>{customer.status}</th>
        <th>{customer.rate}</th>
        {/* <th style={{color: checkColor(customer.balance)}}>{customer.balance}</th> */}
        <th style={{ color: customer.balance.includes("-") ? "red" : "green" }}>
          {customer.balance}
        </th>
      </tr>
    </>
  );
}

function CustomerTable({ customer, filterText }) {
  const Titlerows = [];
  const Featurerows = [];

  Titlerows.push(<CustomerTitleRow />);

  customer.map((item) => {
    if (item.fullname.indexOf(filterText) !== -1) {
      Featurerows.push(<CustomerFeatureRow customer={item} />);
    }
  });

  // customer.forEach((a) => {
  //   if (a.fullname.indexOf(filterText) !== -1) {
  //     Featurerows.push(<CustomerFeatureRow customer={a} />);
  //   }
  // });

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

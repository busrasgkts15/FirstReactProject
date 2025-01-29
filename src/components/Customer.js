import { Input } from "reactstrap";

function Customer({ customer }) {
  // const checkColor = (blnc) => {
  //   console.log(blnc);
  //   if (blnc.includes("-")) {
  //     return "red";
  //   } else {
  //     return "green";
  //   }
  // };

  return (
    <>
      <tr>
        <th>
          <Input style={{ borderRadius: 8 }} type="checkbox" />
        </th>
        <th>{customer.id}</th>
        <th>
          {customer.name}
          <h6 style={{ color: "gray" }}>{customer.phone}</h6>
        </th>
        <th>{customer.Website}</th>
        <th>{customer.success}</th>
        {/* <th>{customer.rate}</th>
        <th>
          {customer.balance}
        </th>
        <th style={{ color: customer.balance.includes("-") ? "red" : "green" }}>
          {customer.balance}
        </th> */}
      </tr>
    </>
  );
}

export default Customer;

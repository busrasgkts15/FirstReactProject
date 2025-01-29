import { Button, Input } from "reactstrap";
import { Link, useNavigate } from "react-router";

function Customer({ customer }) {

  const navigate = useNavigate()

  const goToDetail = (id) =>{
    navigate(`/details/${id}`, {state: [customer]?.filter(item => item.id === id)})
  }

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
        <th>
          {console.log("okanId",customer)}
          <Button color="primary" outline size="md"
          onClick={() => goToDetail(customer?.id)}
          >
            Detail
          </Button>
        </th>
      </tr>
    </>
  );
}

export default Customer;

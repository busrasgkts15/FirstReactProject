import { Input } from "reactstrap";

function Title() {
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


export default Title
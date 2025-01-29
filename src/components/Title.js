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
        <th>Website</th>
        <th>Success</th>
      </tr>
    </>
  );
}


export default Title
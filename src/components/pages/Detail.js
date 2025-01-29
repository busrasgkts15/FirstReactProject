import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { useLocation, useParams } from "react-router";
import { useState } from "react";

function Detail({ customer }) {

  // const { id } = useParams(); // userID

  const locaiton = useLocation()

  const [user, setUser] = useState(locaiton?.state[0])

  return (
    <>
      <Card
        color="light"
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{user.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </>
  );
}

export default Detail;

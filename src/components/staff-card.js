import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const StaffCard = (props) => {
  return (
    <div>
      <Card body className="text-center">
        <CardImg top width="60%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText>{props.content}</CardText>
          <Button href={`mailto:${props.email}`}>
            Contact {props.title.split(" ")[0]}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default StaffCard;

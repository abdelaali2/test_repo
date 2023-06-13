import React from "react";
import "./SearchCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SearchCard(props) {
  console.log("props", props);

  function showMore() {
    console.log("showMore");
  }

  return (
    <Card className="mb-2 col-2 text-center">
      <Card.Img variant="top" src={props.thumbnail} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary" onClick={showMore}>
          See More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SearchCard;

import React from "react";
import { Button, Card } from "react-bootstrap";
import { useMainContext } from "../context/main-context";
import { formatCurrency } from "../utilities/currency-format";

interface ItemProps {
  id: number;
  name: String;
  price: number;
  imgUrl: string;
}

export function MenuItem(props: ItemProps) {
  const { getItemAmount, increaseBagAmount, decreaseBagAmount, removeFromBag } =
    useMainContext();
  const amount = getItemAmount(props.id);
  return (
    <Card className="h-100 w-18rem">
      <Card.Img
        variant="top"
        src={props.imgUrl}
        height="256px"
        width="256 px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          <span className="fs-3 me-auto">{props.name}</span>
          <span className="ms-2 text-muted">{props.price}$</span>
        </Card.Title>
        <div className="mt-auto">
          {amount === 0 ? (
            <Button
              className="mb-3 mt-3"
              onClick={() => increaseBagAmount(props.id)}
            >
              Add to the bag
            </Button>
          ) : (
            <div>
              <div className="d-flex align-items-center flex-row">
                <Button
                  onClick={() => increaseBagAmount(props.id)}
                  className="w-30 me-auto "
                  style={{ fontSize: 10 }}
                >
                  Add to the bag
                </Button>
                <Button
                  onClick={() => decreaseBagAmount(props.id)}
                  style={{ fontSize: 10 }}
                  className="m-2"
                >
                  Remove one
                </Button>
                <Button
                  onClick={() => removeFromBag(props.id)}
                  style={{ fontSize: 10 }}
                >
                  Remove all
                </Button>
              </div>
              <span className="me-auto" style={{ fontSize: 14 }}>
                In the bag: {amount} {amount > 1 ? "items" : "item"} for{" "}
                {formatCurrency(amount * props.price)}
              </span>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

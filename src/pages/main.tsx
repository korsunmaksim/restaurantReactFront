import React from "react";
import "../styles/app.css";
import { Button } from "react-bootstrap";
import { BsTelephoneFill } from "react-icons/bs";

export function Main() {
  return (
    <>
      <div className="main-text">Restaurant "Mariner's bistro"</div>;
      <div className="under-text">
        We invite you to sit back, unwind and delight in the elegant atmosphere
        of Mariner’s Bistro while our chef takes you on a culinary experience of
        contemporary, seasonal local cuisine with elements of rustic Italian
        cooking.
      </div>
      <Button className="button" href="/menu">
        Check menu
      </Button>
    </>
  );
}

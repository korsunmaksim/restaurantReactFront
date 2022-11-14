import { Navbar as NavbarBS, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useMainContext } from "../context/main-context";

export function Navbar() {
  const { openBag, bagTotalAmount } = useMainContext();
  return (
    <NavbarBS sticky="top" className="bg-dark  mb-3  ">
      <Container>
        <Nav className="navbar navbar-dark pb-0 pt-0" style={{ fontSize: 20 }}>
          <Nav.Link to={"/"} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={"/menu"} as={NavLink}>
            Menu
          </Nav.Link>
          <Nav.Link to={"/about"} as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          onClick={() => openBag()}
          style={{ background: "cyan", color: "black", position: "relative" }}
        >
          Bag
          {bagTotalAmount > 0 && (
            <div
              className="rounded-circle d-flex justify-content-center
          aligh-items-center"
              style={{
                color: "white",
                background: "crimson",
                position: "absolute",
                width: "1rem",
                height: "1rem",
                bottom: 0,
                right: 0,
                transform: "translate(25%,25%)",
                fontSize: 12,
              }}
            >
              {bagTotalAmount}
            </div>
          )}
        </Button>
      </Container>
    </NavbarBS>
  );
}

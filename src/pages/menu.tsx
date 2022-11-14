import React from "react";
import { MenuItem } from "../components/menu-item";
import menuItems from "../data/menu.json";
import { Col, Row } from "react-bootstrap";

export function Menu() {
  return (
    <>
      <h1 style={{ color: "white" }}>Menu</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {menuItems.map((item) => (
          <Col key={item.id}>
            <MenuItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

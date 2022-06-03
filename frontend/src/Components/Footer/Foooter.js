import React from "react";
import './footer.css'
import { Container, Row, Col } from "react-bootstrap"

export default function Foooter() {
  return (
    <div className="footer">
        <Row>
          <Col>
            <h4>Developed by PICT Web Team</h4>
          </Col>
          <Col>
          <div>
            <a href=""><i class="fa fa-linkedin circle"></i></a>
            <a href=""><i class="fa fa-facebook circle"></i></a>
            <a href=""><i class="fa fa-envelope circle"></i></a>
            <a href=""><i class="fa fa-instagram circle"></i></a>
            </div>
          </Col>
        </Row>
    </div>
  );
}

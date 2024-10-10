import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/icons8-email-24.png";
import navIcon2 from "../assets/img/icons8-phone-30.png";
import navIcon3 from "../assets/img/icons8-github-24.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img  alt="ZK" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
               <a href="mailto:zeenatkhan2252@gmail.com"><img src={navIcon1} alt="" /></a>
                <a href="tel:+918839048493"><img src={navIcon2} alt="" /></a>
                <a href="https://github.com/Iam-Zeenat-Khan"><img src={navIcon3} alt="" /></a>
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.creative-tim.com?ref=nudr-footer"
                target="_blank"
              >
                ImmoAsk Business
              </a>
            </li>
            <li>
              <a
                href="https://presentation.creative-tim.com?ref=nudr-footer"
                target="_blank"
              >
                A propos de nous
              </a>
            </li>
            <li>
              <a
                href="https://blog.creative-tim.com?ref=nudr-footer"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright">
          &copy; {1900 + new Date().getYear()}, {" "}
      
          Développé par{" "}
          <a
            href="https://www."
            target="_blank"
            rel=""
          >
            ImmoAsk Business
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;

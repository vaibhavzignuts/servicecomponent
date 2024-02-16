import React from "react";
import { Col, Container, Row } from "reactstrap";
import data from "../../src/Components/data";
import CommonComponent from "./Commoncomponent";
import asset5 from "../../src/Asset5.svg";
import asset6 from "../../src/Asset6.svg";
import asset7 from "../../src/Asset7.svg";
import asset8 from "../../src/Asset8.svg";
import asset11 from "../../src/Assets11.svg";
import asset10 from "../../src/Asset10.svg";
// import "bootstrap/dist/css/bootstrap.min.css";

import asset12 from "../../src/Asset12.svg";

const ServiceComponent = () => {
  return (
    <div className="services-container mt-5" id="service">
      <img src={asset5} className="asset5" />
      <img src={asset6} className="asset6" />
      <img src={asset7} className="asset7" />
      <img src={asset8} className="asset8" />
      <img src={asset10} className="asset10" />
      <img src={asset11} className="asset11" />
      <img src={asset12} className="asset12" />

      <Container>
        <div className="mt-5 services-text">
          <CommonComponent
            textAlign={"center"}
            flexDirection={"center"}
            height1={"7px"}
            height2={"2px"}
            width1={"60px"}
            width2={"170px"}
            text={"SERVICES"}
          />
        </div>
        {data.map((item, index) => {
          return (
            <Row className="mt-5 gx-5">
              <Col
                key={item.index}
                className={`${item.order ? "order-1" : "order-2"} mt-5 `}
              >
                <div>
                  <p
                    className={` ${
                      item.order ? "text-end" : "text-start"
                    }   service-text-head `}
                  >
                    {item.imgHeading}
                  </p>
                  <p
                    className={` ${
                      item.order ? "text-end" : "text-start"
                    }   service-text-content `}
                  >
                    {item.imgText}
                  </p>
                </div>
              </Col>
              <Col
                key={item.index}
                className={`${item.order ? "order-2" : "order-1"} `}
              >
                <img src={item.imgLink} className="services-img order-2 " />
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
};

export default ServiceComponent;

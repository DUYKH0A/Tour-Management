import React from "react";
import { Col } from "reactstrap";
import ServiceCard from "./ServiceCard";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Caculate Weather",
    desc: "description service 1",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "description service 2",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "description service 3",
  },
];
const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;

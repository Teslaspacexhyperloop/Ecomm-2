// CarouselComponent.js
import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import "../styles/Carousel.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

export const ProductCarouselComponent1 = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.1 },
  };

  const cards1 = [
    {
      img: "/images/home1.jpg",
    },
    {
      img: "/images/home2.jpg",
    },
    {
      img: "/images/home3.jpg",
    },
    {
      img: "/images/home4.jpg",
    },
  ];

  const cards2 = [
    {
      img: "/images/home5.jpg",
    },
    {
      img: "/images/home6.jpg",
    },
    {
      img: "/images/home7.jpg",
    },
    {
      img: "/images/home8.jpg",
    },
  ];

  return (
    <Carousel
      className="mycarousel product-carousel"
      style={{ marginLeft: "30px", marginRight: "30px", position: "relative" }}
    >
      <CarouselItem>
        <Container style={{}}>
          <Row>
            <h1 style={{ marginBottom: "50px" }}>Home Decor</h1>
            {cards1.map((card, index) => (
              <Col key={index} sm={12} md={6} lg={3} className="mb-4">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Card style={{ width: "200px", height: "200px" }}>
                    <Card.Img
                      variant="top"
                      src={card.img}
                      alt={`Image for ${card.title}`}
                    />
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </CarouselItem>
      <Carousel.Item>
        <Container>
          <Row>
            <h1 style={{ marginBottom: "50px" }}>Home Decor</h1>
            {cards2.map((card, index) => (
              <Col key={index} sm={12} md={6} lg={3} className="mb-4">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Card style={{ width: "200px", height: "200px" }}>
                    <Card.Img
                      variant="top"
                      src={card.img}
                      alt={`Image for ${card.title}`}
                    />
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};
export const ProductCarouselComponent2 = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.1 },
  };

  const cards1 = [
    {
      img: "/images/book1.jpg",
    },
    {
      img: "/images/book2.jpg",
    },
    {
      img: "/images/book3.jpg",
    },
    {
      img: "/images/book4.jpg",
    },
  ];

  const cards2 = [
    {
      img: "/images/book5.jpg",
    },
    {
      img: "/images/book6.jpg",
    },
    {
      img: "/images/book7.jpg",
    },
    {
      img: "/images/book8.jpg",
    },
  ];

  return (
    <Carousel
      className="mycarousel product-carousel"
      style={{ marginLeft: "30px", marginRight: "30px" }}
    >
      <CarouselItem style={{}}>
        <Container>
          <Row>
            <h1 style={{ marginBottom: "80px" }}>Popular Books</h1>
            {cards1.map((card, index) => (
              <Col key={index} sm={12} md={6} lg={3} className="mb-4">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Card style={{ width: "200px", height: "200px" }}>
                    <Card.Img
                      variant="top"
                      src={card.img}
                      alt={`Image for ${card.title}`}
                    />
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </CarouselItem>
      <Carousel.Item>
        <Container>
          <Row>
            <h1 style={{ marginBottom: "80px" }}>Popular Books</h1>
            {cards2.map((card, index) => (
              <Col key={index} sm={12} md={6} lg={3} className="mb-4">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Card style={{ width: "200px", height: "200px" }}>
                    <Card.Img
                      variant="top"
                      src={card.img}
                      alt={`Image for ${card.title}`}
                    />
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};

// const cards3 = [
//   {
//     img: "/images/book1.jpg",
//   },
//   {
//     img: "/images/book2.jpg",
//   },
//   {
//     img: "/images/book3.jpg",
//   },
//   {
//     img: "/images/book4.jpg",
//   },
// ];

// const cards4 = [
//   {
//     img: "/images/book5.jpg",
//   },
//   {
//     img: "/images/book6.jpg",
//   },
//   {
//     img: "/images/book7.jpg",
//   },
//   {
//     img: "/images/book8.jpg",
//   },
// ];

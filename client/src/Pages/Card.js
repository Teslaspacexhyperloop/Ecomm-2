import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

export const CardGridComponent1 = (cards) => {
    // const cards = [
    //     {
    //         img: '/images/computer.jpg',
    //         title: 'Shop Amazing PC',
            
    //     },
    //     {
    //         img: '/images/toy.jpg',
    //         title: 'Toys for baby',
            
    //     },
    //     {
    //         img: '/images/personal_care.jpg',
    //         title: 'SkinCare',
            
    //     },
    //     {
    //         img: '/images/sports.jpg',
    //         title: 'Sports and Accesories',
            
    //     },  {
    //         img: '/images/plants.jpg',
    //         title: 'Plants and Home Decor',
            
    //     },
    //     {
    //         img: '/images/bike.jpg',
    //         title: 'Electronic vehicles',
            
    //     },
    //     {
    //         img: '/images/fitness.jpg',
    //         title: 'Health and Fitness',
            
    //     },
    //     {
    //         img: '/images/pharmacy.jpg',
    //         title: 'Medical Essentials',
            
    //     }
    // ];

    const cardVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hover: { scale: 1.1 },
    };

    return (
        <Container>
            <Row>
                {cards.map((p) => (
                    <Col key={p._id} sm={12} md={6} lg={3} className="mb-4">
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                        >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`/api/v1/category/category-photo/${p._id}`} alt={`Image for ${p.name}`} />
                                <Card.Body>
                                    <Card.Title>{p.name}</Card.Title>
                                    
                                    <Button variant="primary">Explore More</Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};



  
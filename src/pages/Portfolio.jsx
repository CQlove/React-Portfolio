import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import cardData from '../cards.js'
import backgroundImage from '../assets/background.jpg';


export default function Portfolio() {
    return (
        <Container fluid style={{
            backgroundImage: `url("${backgroundImage}")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no - repeat',
            backgroundAttachment: 'fixed',
            color: 'aliceblue',
            minHeight: '100vh',
            padding: '0 15%',
        }}>
            <Container style={{ padding: '10% 0' }}>
                <Row>
                    {cardData.map((card) => (
                        <ProjectCard key={card.id} cardData={card} />
                    ))}
                </Row>
            </Container>
        </Container >
    );
}
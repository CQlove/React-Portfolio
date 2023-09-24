import React from 'react';
import { Col, Card } from 'react-bootstrap';

export default function ProjectCard({ cardData }) {
    return (
        <Col xxl={4} md={6} sm={12} style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Card>
                <img
                    src={cardData.screenShot}
                    className="card-img-top"
                    alt={cardData.title}
                    style={{ height: '300px' }}
                />
                <div className="card-body text-center">
                    <h5 className="card-title ">{cardData.title}</h5>
                    <p className="card-text">{cardData.text}</p>
                    <div className="d-flex justify-content-around align-items-center">
                        <a href={cardData.githubRepo} className="btn btn-outline-dark">Github Repo</a>
                        <a href={cardData.deployedPage} className="btn btn-outline-dark">Deployed page</a>
                    </div>
                </div>
            </Card>
        </Col>
    );
}
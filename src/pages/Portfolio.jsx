import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import backgroundImage from '../assets/background.jpg';
import Krapyak from '../assets/krapyak.gif';
import Maryze from '../assets/maryze.png';
import Coming from '../assets/coming-soon.png';
import Jate from '../assets/jate.png';
import NoteTaker from '../assets/note-taker-cj.png';
import WeatherDash from '../assets/weather-dashboard.png';
import WorkDay from '../assets/work-day-scheduler.png';
import Quize from '../assets/code-quize.png';
import Password from '../assets/password-generator.png';

const cardData = [
    {
        id: 1,
        title: 'krapyak',
        text: 'This is my first team Project (front end)- Krapyak. ',
        githubRepo: "https://github.com/CQlove/krapyak",
        deployedPage: "https://ronin1702.github.io/krapyak/",
        screenShot: Krapyak,
    },
    {
        id: 2,
        title: 'maryze',
        text: 'This is my second team Project (full-stack) - maryze. ',
        githubRepo: "https://github.com/CQlove/cover-letter-generator",
        deployedPage: "https://maryze-t1p2-1c897d7fd819.herokuapp.com/",
        screenShot: Maryze,
    },
    // {
    //     id: 3,
    //     title: 'coming soon',
    //     text: 'This is my final team Project - it will coming soon. ',
    //     githubRepo: "",
    //     deployedPage: "",
    //     screenShot: Coming,
    // },
    {
        id: 4,
        title: 'work-day-scheduler',
        text: 'I use HTML, CSS and Javascript to make this API challenge.',
        githubRepo: "https://github.com/CQlove/work-day-scheduler",
        deployedPage: "https://cqlove.github.io/work-day-scheduler/",
        screenShot: WorkDay,
    },
    {
        id: 5,
        title: 'PWA-Text-Editor',
        text: 'This is a PWA text editor application that can be use offline and online.',
        githubRepo: "https://github.com/CQlove/PWA-Text-Editor",
        deployedPage: "https://cj-jate-8ec415473575.herokuapp.com/",
        screenShot: Jate,
    },
    {
        id: 6,
        title: 'Note-taker',
        text: 'This Note Taker mainly uses express.js to connect front-end and back-end.',
        githubRepo: "https://github.com/CQlove/Note-Taker",
        deployedPage: "https://note-taker-cj-b9f86cc37802.herokuapp.com/",
        screenShot: NoteTaker,
    },
    {
        id: 7,
        title: 'weather-dashboard',
        text: 'This is a weather dashboard by fetching open-source API data.',
        githubRepo: "https://github.com/CQlove/Weather-Dashboard",
        deployedPage: "https://cqlove.github.io/Weather-Dashboard/",
        screenShot: WeatherDash,
    },
    {
        id: 8,
        title: 'Code-quiz',
        text: 'This API is using HTML, CSS, and Javascript to build',
        githubRepo: "https://github.com/CQlove/Code-quiz",
        deployedPage: "https://cqlove.github.io/Code-quiz/",
        screenShot: Quize,
    },
    {
        id: 9,
        title: 'pawssword-generator',
        text: 'This password-generator API is mainly use Javascript to build',
        githubRepo: "https://github.com/CQlove/code-refactorting-js-password-generator",
        deployedPage: "https://cqlove.github.io/code-refactorting-js-password-generator/",
        screenShot: Password,
    },
];

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
            <Container style={{ padding: '10% 0', }}>
                <Row>
                    {/* using map to create all the data by using template */}
                    {cardData.map((card) => (
                        <Col xxl={4} md={6} sm={12} key={card.id} style={{ marginTop: "20px", marginBottom: "20px" }}>
                            <Card>
                                <img
                                    src={card.screenShot}
                                    className="card-img-top"
                                    alt={card.title}
                                    style={{ height: '300px' }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title ">{card.title}</h5>
                                    <p className="card-text">{card.text}</p>
                                    <div className="d-flex justify-content-around align-items-center">
                                        <a href={card.githubRepo} className="btn btn-outline-secondary">Github Repo</a>
                                        <a href={card.deployedPage} className="btn btn-outline-secondary">Deployed page</a>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container >
        </Container >
    );
}
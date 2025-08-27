// CheckGeoPage.jsx
import CheckUserGeoButton from "../components/button/CheckUserGeoButton";
import HeaderComponent from "../components/header/HeaderComponent";
import FooterComponent from "../components/footer/FooterComponent";
import { Container, Row, Col } from "react-bootstrap";
import './CheckGeoPage.css';

const CheckGeoPage = () => {
    return (
        <div className="check-geo-page d-flex flex-column min-vh-100">
            <header>
                <HeaderComponent />
            </header>

            <main className="flex-grow-1 d-flex align-items-center justify-content-center">
                <Container className="text-center main-content">
                    <Row className="mb-4">
                        <Col>
                            <h1 className="display-5 fw-bold">
                                Share Your Location with RockyAI
                            </h1>
                            <p className="lead mt-3">
                                This app helps the bot know your timezone and location in real time.  
                                Stay connected and discover cool features.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CheckUserGeoButton />
                        </Col>
                    </Row>
                </Container>
            </main>

            <footer>
                <FooterComponent />
            </footer>
        </div>
    );
}

export default CheckGeoPage;

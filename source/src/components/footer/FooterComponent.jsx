// FooterComponent.jsx
import './FooterComponent.css';
import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
    return (
        <footer className="footer-com">
            <Container>
                <Row>
                    <Col className="text-center footer-txt">
                        <small>© {new Date().getFullYear()} RockyAI. All rights reserved.</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterComponent;

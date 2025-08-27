import './HeaderComponent.css';
import { Navbar, Container } from 'react-bootstrap';
import { FaMapMarkerAlt } from "react-icons/fa";


const HeaderComponent = () => {
    return (
        <Navbar expand="lg" className="header-comp shadow-sm" sticky="top">
            <Container>
                <div className='logo-title'>
                    <FaMapMarkerAlt/> Check GEO-Tool
                </div>
            </Container>
        </Navbar>
    );
};

export default HeaderComponent;

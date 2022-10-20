import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 768;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
    }, [])
    return (
        <Container fluid className="bg-dark" style={{ color: "white" }}>
            {width > breakpoint ? (
                <Row>
                    <Col>
                        <a href="https://www.flaticon.com/authors/freepik" alt="icons' credit" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Icons by Freepick - Flaticon</a>
                    </Col>
                    <Col>
                        <p className="mb-0">© 2022 Yernaux Alexis, Inc. All rights reserved</p>
                    </Col>
                </Row>
            ) : (
                <Row>
                    <a href="https://www.flaticon.com/authors/freepik" alt="icons' credit" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Icons by Freepick - Flaticon</a>
                    <p className="mb-0">© 2022 Yernaux Alexis, Inc. All rights reserved</p>
                </Row>
            )}
        </Container>
    )
}
export default Footer
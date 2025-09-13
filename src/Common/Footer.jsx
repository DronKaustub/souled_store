import React from 'react'
import "./Footer.css"
import { Container, Row, Col } from 'react-bootstrap'
import footerLinks from './FooterData'
import { useState } from 'react'

export default function Footer() {
    // Creates state to track which sections are expanded/collapsed
    // const [expandedSections, setExpandedSections] = useState({});
    const [showAllStores, setShowAllStores] = useState(false);

    return (
        <>
            <div className='homeFooterTag'>
                HOMEGROWN INDIAN BRAND
            </div>
            <div className="sixMillionFooterTag">
                Over&nbsp;<strong>6 Million</strong>&nbsp;Happy Customers
            </div>
            <div className='mainFooter'>
                <Container>
                    <Row>
                        {Object.entries(footerLinks).map(([section, links]) => (
                            <Col key={section} xs={6} md={3}>
                                <h3>{section}</h3>
                                <ul className="footer-list">
                                    {/* Show all links for sections ≤5 items, or first 5/all for STORE NEAR ME */}
                                    {(section === "STORE NEAR ME" 
                                        ? (showAllStores ? links : links.slice(0, 4))
                                        : links
                                    ).map((link, index) => (
                                        <li key={index}>
                                            <a href={link.href}>{link.label}</a>
                                        </li>
                                    ))}
                                    
                                    {/* Only show button for STORE NEAR ME section */}
                                    {section === "STORE NEAR ME" && (
                                        <li>
                                            <button 
                                                className="view-more-btn"
                                                onClick={() => setShowAllStores(!showAllStores)}
                                            >
                                                {showAllStores ? 'View Less' : 'View More'}
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}
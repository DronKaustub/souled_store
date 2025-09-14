import React from 'react'
import "./Footer.css"
import { Container, Row, Col } from 'react-bootstrap'
import footerLinks from './FooterData'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import loop1 from '../logo/loop.png'
import { faFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'



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
                    <Row >
                        <div className='returnFooter'>
                            <FontAwesomeIcon icon={faIndianRupeeSign} className='footerIcon1' />
                            <h2>COD Available</h2></div>
                    </Row>
                    <Row >
                        <div className='returnFooter'>
                            <img src={loop1} alt="Returns" className='footerIcon2' />
                            <h2>30 Days Easy Returns & Exchanges</h2>
                        </div>
                    </Row>
                    <Row className='downloadAppFooter'>
                        <h2> EXPERIENCE THE SOULED STORE APP</h2>
                        <Col className='googleAppFooter'>
                            <img src='https://tss-static-images.gumlet.io/icons/play-store.png' alt='googleAppFooter' />
                        </Col>
                        <Col className='appleAppFooter'><img src='https://tss-static-images.gumlet.io/icons/app-store.png' alt='appleAppFooter' /></Col>
                    </Row>
                    <Row className="socialIconFooter">
                        <Col className='socialIconFooterCol'>
                            <h3 className="mb-0">Follow Us:</h3>
                            <FontAwesomeIcon icon={faFacebook} className="social-icon" style={{ color: "#6080c0" }} />
                            <FontAwesomeIcon icon={faSquareInstagram} className="social-icon" style={{ color: "#c03694" }} />
                            <FontAwesomeIcon icon={faFacebook} className="social-icon" style={{ color: "#f9b927" }} />
                            <FontAwesomeIcon icon={faFacebook} className="social-icon" style={{ color: "black" }} />

                        </Col>
                    </Row>
                    <Row className='bottomBoxFooter'>
                        <h3>NAVIGATION LINKS</h3>
                        <h3>WHO WE ARE</h3>
                    </Row>
                    <Row className='socialIconFooter'>
                        <Col className='paymentAndDeliveryFooter'>
                        <h3 style={{padding:'10px 0px 0px 0px'}}>100% Secure Payment:</h3>
                        <img src='https://tss-static-images.gumlet.io/payments-icon.png' alt='paymentMethod' className='paymentMethod'/>
                        <h3 style={{padding:'6px 10px 4px 10px', borderLeft:'1px solid #58595b69'}}> Shipping Partners:</h3>
                        <img src='https://tss-static-images.gumlet.io/icons/dtdc.png' alt='deliveryMethod' className='deliveryMethod'/>
                        <img src='https://prod-img.thesouledstore.com/public/theSoul/images/icons/XPRESSBEES.png' alt='deliveryMethod' className='deliveryMethod'/>
                        <img src='https://tss-static-images.gumlet.io/icons/delivery.png' alt='deliveryMethod' className='deliveryMethod'/>
                        <img src='https://prod-img.thesouledstore.com/public/theSoul/images/icons/ECOM-Express.png' alt='deliveryMethod' className='deliveryMethod'/>
                        </Col>
                    </Row>
                    <Row>
                        <h3 style={{display:'flex',justifyContent:'center',color:'#58595b',fontSize:'small',}}>The Souled Store 2025-26</h3> 
                    </Row>


                </Container>
            </div>
        </>
    )
}
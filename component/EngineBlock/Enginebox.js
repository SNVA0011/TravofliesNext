import React from "react";
import styles from "./engine.module.css"
import { Col, Container, Row } from "react-bootstrap"; 

export default function Enginebox(props) {
  return (
    <section className={styles.EngineboxArea}>
      <Container className={styles.ContainerEng}>
          <Row className="align-items-center">
            <Col xs={12} md={6}> 
            <p className={styles.ExploreAmz}>Amazing Places</p>
              <h1>
                 The Beautiful Place in the <span>World <img src="/images/vector-yellow.png" alt="line-yellow"></img></span>
              </h1>
              <p className={styles.ExploreMore}>
              The sky is never the limit when you choose to fly with us to exotic locations and vibrant destinations under our exclusive itinerary. 
              </p>
            </Col>
            <Col xs={12} md={6} className="center text-md-right mt-5 mt-md-0">
              <img src="/images/airplane-engine.png" alt="airplane-background" className={styles.ExplorPlx} />
            </Col>
          </Row>
        </Container>
    </section>
  );
}

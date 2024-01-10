import React from "react";
import styles from "./engine.module.css"
import { Col, Container, Row } from "react-bootstrap"; 
import Image from "next/image";

export default function Enginebox(props) {
  return (
    <section className={styles.EngineboxArea}>
      <Container className={styles.ContainerEng}>
          <Row className="align-items-center">
            <Col xs={12} md={6}>  
              <h1>
              Mapping the skies with  <span>Travoflies 

<span className={styles.ExploreAmzImg}><Image src="/images/vector-yellow.png" alt="line-yellow" width={168} height={12}></Image></span>

</span>' boundless travel plans

       
        

              </h1>
              <p className={styles.ExploreMore}>
              The sky is never the limit when you choose to fly with us to exotic locations and vibrant destinations under our exclusive itinerary. 
              </p>
            </Col>
            <Col xs={12} md={6} className="center text-md-right mt-5 mt-md-0">
              <Image src="/images/airplane-engine.png" alt="airplane-background" className={styles.ExplorPlx} 
                width={482}
                        height={514} />
            </Col>
          </Row>
        </Container>
    </section>
  );
}

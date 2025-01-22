import React, { useEffect, useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Procedure.css';
import { LanguageContext } from "../LanguageContext";

const Procedure = () => {
    const { language } = useContext(LanguageContext);

  useEffect(() => {
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Pratite tok razvoja aplikacije, od kontakta sa korisnikom do održavanja.';
    document.head.appendChild(metaDescription);
  }, []);

  const content = {
    serbian: {
      title: "Tok razvoja aplikacije",
      description: "Od prvog kontakta do održavanja, evo kako se razvija vaša aplikacija.",
      steps: [
        { title: "Kontaktiranje korisnika", description: "Prvi kontakt sa korisnikom ili potencijalnim klijentom." },
        { title: "Upoznavanje sa korisnikom", description: "Sastanak sa klijentom da bismo razumeli njegove potrebe." },
        { title: "Razvoj arhitekture", description: "Razvijamo tehničku arhitekturu rešenja." },
        { title: "Prezentacija arhitekture", description: "Prikazujemo arhitekturu i diskutujemo detalje sa klijentom." },
        { title: "Implementacija i testiranje", description: "Implementacija i temeljno testiranje rešenja." },
        { title: "Prezentacija rešenja", description: "Prezentacija gotovog rešenja korisniku." },
        { title: "Deployment", description: "Deploy rešenja na produkciju." },
        { title: "Održavanje i unapređenja", description: "Nastavak podrške i implementacija novih funkcionalnosti." },
      ]
    },
    english: {
      title: "Application Development Process",
      description: "From the first contact to maintenance, here's how your application is developed.",
      steps: [
        { title: "Contacting the customer", description: "The first contact with the customer or potential client." },
        { title: "Getting to know the customer", description: "A meeting with the client to understand their needs." },
        { title: "Architecture development", description: "We develop the technical architecture of the solution." },
        { title: "Architecture presentation", description: "We present the architecture and discuss details with the client." },
        { title: "Implementation and testing", description: "Implementation and thorough testing of the solution." },
        { title: "Solution presentation", description: "Presenting the final solution to the client." },
        { title: "Deployment", description: "Deploying the solution to production." },
        { title: "Maintenance and improvements", description: "Ongoing support and implementation of new features." },
      ]
    },
    german: {
      title: "Anwendungsentwicklungsprozess",
      description: "Vom ersten Kontakt bis zur Wartung, so wird Ihre Anwendung entwickelt.",
      steps: [
        { title: "Kundenkontakt", description: "Der erste Kontakt mit dem Kunden oder potenziellen Kunden." },
        { title: "Kennenlernen des Kunden", description: "Ein Treffen mit dem Kunden, um seine Bedürfnisse zu verstehen." },
        { title: "Architekturentwicklung", description: "Wir entwickeln die technische Architektur der Lösung." },
        { title: "Architekturpräsentation", description: "Wir präsentieren die Architektur und besprechen Details mit dem Kunden." },
        { title: "Implementierung und Tests", description: "Implementierung und gründliche Tests der Lösung." },
        { title: "Präsentation der Lösung", description: "Präsentation der endgültigen Lösung für den Kunden." },
        { title: "Bereitstellung", description: "Bereitstellung der Lösung in der Produktion." },
        { title: "Wartung und Verbesserungen", description: "Laufende Unterstützung und Implementierung neuer Funktionen." },
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="procedure-container">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-4">{currentContent.title}</h2>
            <p className="procedure-text">{currentContent.description}</p>
          </Col>
        </Row>

        {currentContent.steps.map((step, index) => (
          <Row key={index} className="mb-4">
            <Col>
              <Card className="procedure-content">
                <Card.Body>
                  <Card.Title>{step.title}</Card.Title>
                  <Card.Text>{step.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}

      </Container>
    </div>
  );
};

export default Procedure;

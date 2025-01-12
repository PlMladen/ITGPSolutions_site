import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../LanguageContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  const { language } = useContext(LanguageContext);

  const content = {
    serbian: {
      title: "Naše Usluge",
      description:
        "Specijalizovani smo za profesionalne usluge izrade web stranica, web aplikacija, SEO optimizacije i brendiranja. Poboljšajte svoj online nastup uz nas.",
      services: [
        {
          title: "Izrada web stranica",
          desc: "Moderni, funkcionalni i responzivni sajtovi prilagođeni vašem brendu.",
          icon: "bi-code-slash",
        },
        {
          title: "Web aplikacije",
          desc: "Prilagodljive i skalabilne aplikacije za vaš biznis.",
          icon: "bi-laptop",
        },
        {
          title: "Windows aplikacije",
          desc: "Razvoj moćnih desktop rešenja za Windows platformu.",
          icon: "bi-windows",
        },
        {
          title: "Web dizajn",
          desc: "Privlačan dizajn koji se ističe.",
          icon: "bi-palette",
        },
        {
          title: "Logo dizajn i brendiranje",
          desc: "Kreiranje upečatljivog vizuelnog identiteta.",
          icon: "bi-brush",
        },
        {
          title: "SEO optimizacija",
          desc: "Poboljšajte rangiranje vašeg sajta na pretraživačima.",
          icon: "bi-search",
        },
      ],
    },
    english: {
      title: "Our Services",
      description:
        "We specialize in professional web development, web applications, SEO optimization, and branding. Enhance your online presence with us.",
      services: [
        {
          title: "Web Development",
          desc: "Modern, functional, and responsive websites tailored to your brand.",
          icon: "bi-code-slash",
        },
        {
          title: "Web Applications",
          desc: "Adaptable and scalable solutions for your business.",
          icon: "bi-laptop",
        },
        {
          title: "Windows Applications",
          desc: "Powerful desktop solutions for the Windows platform.",
          icon: "bi-windows",
        },
        {
          title: "Web Design",
          desc: "Eye-catching designs that stand out.",
          icon: "bi-palette",
        },
        {
          title: "Logo Design & Branding",
          desc: "Creating memorable visual identities.",
          icon: "bi-brush",
        },
        {
          title: "SEO Optimization",
          desc: "Improve your website's ranking on search engines.",
          icon: "bi-search",
        },
      ],
    },
    german: {
      title: "Unsere Dienstleistungen",
      description:
        "Wir bieten professionelle Dienstleistungen in den Bereichen Webentwicklung, Webanwendungen, SEO-Optimierung und Branding an. Verbessern Sie Ihre Online-Präsenz mit uns.",
      services: [
        {
          title: "Webentwicklung",
          desc: "Moderne, funktionale und responsive Webseiten, die zu Ihrer Marke passen.",
          icon: "bi-code-slash",
        },
        {
          title: "Webanwendungen",
          desc: "Anpassbare und skalierbare Lösungen für Ihr Geschäft.",
          icon: "bi-laptop",
        },
        {
          title: "Windows-Anwendungen",
          desc: "Leistungsstarke Desktop-Lösungen für die Windows-Plattform.",
          icon: "bi-windows",
        },
        {
          title: "Webdesign",
          desc: "Auffällige Designs, die ins Auge fallen.",
          icon: "bi-palette",
        },
        {
          title: "Logo Design & Branding",
          desc: "Unvergessliche visuelle Identitäten schaffen.",
          icon: "bi-brush",
        },
        {
          title: "SEO-Optimierung",
          desc: "Verbessern Sie das Ranking Ihrer Website in Suchmaschinen.",
          icon: "bi-search",
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <section className="services-section py-5" id="services">
      <div className="container">
        <h2 className="text-center mb-4 custom-services-class" data-aos="fade-up">
          {currentContent.title}
        </h2>
        <p className="text-center custom-services-class mb-5" data-aos="fade-up">
        {currentContent.description}
        </p>
        <div className="row g-4">
          {currentContent.services.map((service, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <div className="icon-container mb-3">
                    <i className={`${service.icon} text-primary display-4`}></i>
                  </div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text text-muted">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

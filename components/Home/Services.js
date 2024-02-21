import React from "react";


export default function Services() {
  return (
    <div className="contanier-fluid services">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-1 ">
            {[1, 2, 3].map((index) => (
              <section key={index} className="services__item">
                <figure className="services__item-wrap">
                  <img
                    src="/assets/home/icon-dev.svg"
                    alt={`Imagen ${index}`}
                    className="services__item-icon"
                  />
                  <div>
                    <h3 className="services__item-title">Web Development</h3>
                    <p className="services__item-subtitle">2 Projets</p>
                  </div>
                </figure>
              </section>
            ))}
          </div>

          <section className="col-lg-6 order-0">
            <h2 className="services__title">What do I help?</h2>
            <p className="services__text">
              I will hel you with finging a solution and solve your problems. We
              use process design to create digital products. Besids that also
              help their business
            </p>
            <p className="services__text">
              We use process design to create digital products. Besids that also
              help their business
            </p>
            <div className="services__info">
                <div>
                    <h3 className="services__info-title">12+</h3>
                    <p className="services__info-subtitle">Project Complete</p>
                </div>                
                <div>
                    <h3 className="services__info-title">5+</h3>
                    <p className="services__info-subtitle">Happy Clients</p>
                </div>                
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

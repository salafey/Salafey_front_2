import { useState, useEffect } from 'react';
import Contact from '../../components/contact';
import { Event } from '../../components/event';
import Titre, { Grand_Titre, SousTitre_1 } from '../../components/titre';
import { Vide } from '../../components/vide';
import Data from './event.json';

import { CountDown } from '../../constantes/countdown';
import Head from 'next/head';

export default function Evenement() {
  const ArticleListe = Data.map((el, key) => (
    <Event
      image={el.image}
      titre={el.titre}
      soustitre={el.desc}
      publie={el.date}
      url={el.url}
      key={key}
    />
  ));

  return (
    <div>
      <Head>
        <title>SALAFEY 2022 | Evenements</title>
        <meta
          name="title"
          content="SALAFEY - Le Salon du Livre Africain pour les Enfants de Yaoundé"
        />
        <meta
          name="description"
          content="le SALAFEY a pour objectif de bâtir une génération d'enfants Africains avec une identité culturelle positive. Sensibiliser, impliquer et accompagner les parents, les éducateurs et les écoles à l'éveil, la promotion de la lecture et l'éducation consciente des enfants. Éveiller les enfants à la lecture, à la découverte culturelle et la confiance en soi en mettant à leur disposition le maximum de livres, jouets, jeux ainsi que tout autre contenu éducatif et de divertissement qui participe à construire leur identité culturelle positive"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://salafey.net/" />
        <meta
          property="og:title"
          content="SALAFEY - Le Salon du Livre Africain pour les Enfants de Yaoundé"
        />
        <meta
          property="og:description"
          content="le SALAFEY a pour objectif de bâtir une génération d'enfants Africains avec une identité culturelle positive. Sensibiliser, impliquer et accompagner les parents, les éducateurs et les écoles à l'éveil, la promotion de la lecture et l'éducation consciente des enfants. Éveiller les enfants à la lecture, à la découverte culturelle et la confiance en soi en mettant à leur disposition le maximum de livres, jouets, jeux ainsi que tout autre contenu éducatif et de divertissement qui participe à construire leur identité culturelle positive"
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/66aXX2RLqVRhTYuPmFqw"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://salafey.net/" />
        <meta
          property="twitter:title"
          content="SALAFEY - Le Salon du Livre Africain pour les Enfants de Yaoundé"
        />
        <meta
          property="twitter:description"
          content="le SALAFEY a pour objectif de bâtir une génération d'enfants Africains avec une identité culturelle positive. Sensibiliser, impliquer et accompagner les parents, les éducateurs et les écoles à l'éveil, la promotion de la lecture et l'éducation consciente des enfants. Éveiller les enfants à la lecture, à la découverte culturelle et la confiance en soi en mettant à leur disposition le maximum de livres, jouets, jeux ainsi que tout autre contenu éducatif et de divertissement qui participe à construire leur identité culturelle positive"
        />
        <meta
          property="twitter:image"
          content="https://media.graphassets.com/66aXX2RLqVRhTYuPmFqw"
        />
      </Head>
      <section class="bannierePage">
        <EventProche
          image={'https://media.graphassets.com/8cGoCZsERSq3Qw9SBR3S'}
        />
      </section>
      <section>
        <div className="container">
          <SousTitre_1 style={{ marginBottom: 36 }}>
            Évènements passés
          </SousTitre_1>
          {Data.length === 0 ? (
            <div
              style={{
                width: '100%',
                height: 200,
                padding: 18,
                backgroundColor: '#ededed',
                borderRadius: 12,
                textAlign: 'center',
              }}
            >
              Aucun articles pour le moment
            </div>
          ) : (
            ArticleListe
          )}
        </div>
        <Vide />
        <Contact />
      </section>
    </div>
  );
}

export function EventProche({ image }) {
  const [day, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setDay(CountDown('Feb 7, 2023 12:00:00').day);
      setHours(CountDown('Feb 7, 2023 12:00:00').hours);
      setMinutes(CountDown('Feb 7, 2023 12:00:00').minutes);
      setSeconds(CountDown('Feb 7, 2023 12:00:00').seconds);
    }, 1000);
  }, [day, hours, minutes, seconds]);

  return (
    <>
      <div className="vide"></div>
      <div className="eventProche" style={{ backgroundImage: `url(${image})` }}>
        <div className="container">
          <Titre style={{ color: 'white', marginBottom: 16 }}>Évènement</Titre>
          <div
            className="eventHaut"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="content">
              <div>
                <div className="left">
                  <Titre style={{ color: 'white' }}>
                    <span className="theme">BAfoussam</span>
                    LE SALAFEY EN CARAVANE
                  </Titre>
                  <div className="countdown">
                    <h1>
                      {day} Jrs {hours} : {minutes} : {seconds}s
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eventPartenaire">
            <Partenaire image="https://media.graphassets.com/KZ2gR6rQw29kb2HQlY5j" />
            <Partenaire image="https://media.graphassets.com/QcrLBsL4Qae7kCgknhLG" />
            <Partenaire image="https://media.graphassets.com/bLuHMXtwQSuN3qXJrj7A" />
            <Partenaire image="https://media.graphassets.com/AsUAhGdgSmmW09axTjh8" />
            <Partenaire image="https://media.graphassets.com/3lS4080gQxCUxtUrfarZ" />
            <Partenaire image="https://media.graphassets.com/PpFZZ5Z3Sk6E2qN0RRVL" />
            <Partenaire image="https://media.graphassets.com/ceyhHraRUOhs78VZSKfU" />
          </div>
        </div>
      </div>
    </>
  );
}

function Partenaire({ image }) {
  return (
    <div className="Partenaire_logo">
      <div>
        <img src={image} alt="" height="58px" />
      </div>
    </div>
  );
}

// Uwx83KHzRr2Wyy1lGtHT

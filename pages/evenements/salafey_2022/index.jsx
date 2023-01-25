import { EventPartenaire } from '../../../components/apropos';
import { Banniere_second } from '../../../components/banniere';
import Contact from '../../../components/contact';
import { EvenIntro, EventComponent_2 } from '../../../components/event';
import Paragraph from '../../../components/paragraph';
import TeamMember from '../../../components/team';
import Titre, {
  Grand_Titre,
  SousTitre_1,
  SousTitre_2,
} from '../../../components/titre';
import Telecharger from '../composants/telecharger';

import gallerie from './gallerie.json';

export default function Apropos() {
  const Element = gallerie.map((el) => (
    <div
      className="items-grid"
      style={{ backgroundImage: `url(${el.image})` }}
    ></div>
  ));
  return (
    <>
      <Head>
        <title>SALAFEY 2022 | Evenement SALAFEY 2022</title>
        <meta
          name="title"
          content="SALAFEY - Le Salon du Livre Africain pour les Enfants de Yaoundé"
        />
        <meta
          name="description"
          content="le SALAFEY a pour objectif de bâtir une génération d'enfants Africains avec une identité culturelle positive. Sensibiliser, impliquer et accompagner les parents, les éducateurs et les écoles à l'éveil, la promotion de la lecture et l'éducation consciente des enfants. Éveiller les enfants à la lecture, à la découverte culturelle et la confiance en soi en mettant à leur disposition le maximum de livres, jouets, jeux ainsi que tout autre contenu éducatif et de divertissement qui participe à construire leur identité culturelle positive"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://salafey.net/evenements/salafey_2022"
        />
        <meta
          property="og:title"
          content="SALAFEY - Le Salon du Livre Africain pour les Enfants de Yaoundé"
        />
        <meta
          property="og:description"
          content="L' un des premiers objectifs du Salon du Livre Africain pour
          Enfants de Yaoundé est de sensibiliser les familles et éducateurs
          sur la place du livre et la lecture plaisir pour transmettre les
          valeurs socio-culturelles aux enfants. "
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/w7b0Dq0FTrqk424yOap5"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://salafey.net/evenements/salafey_2022"
        />
        <meta
          property="twitter:title"
          content="SALAFEY - Le Salon du Livre Africain pour les Enfants de Yaoundé"
        />
        <meta
          property="twitter:description"
          content="L' un des premiers objectifs du Salon du Livre Africain pour
          Enfants de Yaoundé est de sensibiliser les familles et éducateurs
          sur la place du livre et la lecture plaisir pour transmettre les
          valeurs socio-culturelles aux enfants. "
        />
        <meta
          property="twitter:image"
          content="https://media.graphassets.com/w7b0Dq0FTrqk424yOap5"
        />
      </Head>
      <div>
        <div className="vide"></div>
        <Banniere_second
          image={'https://media.graphassets.com/w7b0Dq0FTrqk424yOap5'}
        >
          <Grand_Titre style={{ color: 'white' }}>
            le SALAFEY 2022 en image
          </Grand_Titre>
          <h3>
            Le Salon du livre africain pour enfants de Yaoundé-SALAFEY résumé en
            quelques images
          </h3>
        </Banniere_second>

        <div className="container" style={{ padding: '64px 0' }}>
          <SousTitre_1
            style={{ width: '100%', textAlign: 'center', margin: '24px 0' }}
          >
            De quoi sera fait <br />
            l'identité de l'enfant africain ?
          </SousTitre_1>
          <section style={{ marginBottom: 64 }}>
            <Paragraph>
              <span className="quote">
                L' un des premiers objectifs du Salon du Livre Africain pour
                Enfants de Yaoundé est de sensibiliser les familles et
                éducateurs sur la place du livre et la lecture plaisir pour
                transmettre les valeurs socio-culturelles aux enfants. 
              </span>
               Le SALAFEY 2022 a révélé toute  sa splendeur sur l’esplanade de
              la salle des convivialités, où une vingtaine
              d’éditeurs, libraires, entreprises de distributions de livres et
              de jouets et jeux africains pour enfants, auteurs, et promoteurs
              culturels ont eu rendez-vous avec le public venu nombreux. La
              ville de Yaoundé a ainsi célébré les livres africains pour enfants
              avec un  programme riche en spectacles de contes, dédicaces ,
              rencontres, tables rondes et de magnifiques moments de bonheur
              avec les tout petits.
            </Paragraph>
          </section>
        </div>
        <section id="events">
          <EventComponent_2
            image={'https://media.graphassets.com/FOEyFHd9T1SP0mmHCo5u'}
          >
            <SousTitre_1>
              Coupure du ruban symbolique d'ouverture des stands par le
              Ministère des Arts et de la Culture
            </SousTitre_1>

            <p>
              Nous allons tous à la découverte des stands de livres pour 
              enfants, des stands de jeux et des stands de contes. Notons que
              parmi ces livres africains pour enfants, figurent des livres
              écrits en diverses langues africaines qui viennent  renforcer
              l’idée du thème « Mon identité ». Des interventions autour du
              thème du Salon, du numérique comme moyen d’épanouissement et de
              créativité positive, et bien d’autres ont donné de l’allure à
              cette  cérémonie d’ouverture. Un thème très  communicateur et
              interpellatif qui invite l’africain authentique à s’identifier
              davantage à sa culture à travers les contes, les livres puisés de
              ses traditions et les jouets typiquement africains.
            </p>
          </EventComponent_2>
          <EventComponent_2
            image={'https://media.graphassets.com/5DVO1poQ0mDp3dbOf93A'}
            inverse
          >
            <SousTitre_1>
              Conférence inaugurale à la salle des convivialités du Musée
              national du Cameroun
            </SousTitre_1>

            <p>
              La conférence inaugurale a eu lieu le 16 décembre dans la salle
              des convivialités du Musée national avec comme intervenants :
              Serge Alain Dzotap, Parrain du SALAFEY 2022, Arielle Kitio, CEO de
              CAYSTI, Pabe  Mongo, Coordonnateur du pôle des arts littéraires,
              Ndika Tandjong, Directeur de la Fondation Muna, Daniel Nadjiber,
              Coordonnateur du pôle des éditeurs et le Ministère des arts et de
              la culture.  Suite à ces divers échanges, l’immense foule –
              enfants, parents, directeurs d’écoles, artistes, écrivains, etc. –
              présente a assisté à la coupure du ruban symbolique et à
              l’ouverture officielle des stands.
            </p>
          </EventComponent_2>
          <EventComponent_2
            image={'https://media.graphassets.com/29Wqt2cRbGQRc6T22rp9'}
          >
            <SousTitre_1>
              Lecture à voix haute avec le Parrain Alain Serge Dzotap
            </SousTitre_1>
            <p>
              Lecture à voix haute avec le Parrain de la première édition du
              Salon du Livre Africain pour Enfants de Yaoundé -SALAFEY, Alain
              Serge Dzotap. C'était d'ailleurs l'un des moments favoris pour les
              enfants qui ont eu la chance de côtoyer d'un des meilleurs
              raconteur de belles histoires au enfants que le Cameroun et
              l'Afrique comptent en ce moment. L' objectif était de stimuler la
              lecture-plaisir chez les enfants, outil de promotion de
              l'excellence scolaire et de transmission des valeurs
              socio-culturelles à ces derniers.
            </p>
          </EventComponent_2>
        </section>
        <Banniere_second
          image={'https://media.graphassets.com/iyDO7wp8SsGBAeRU28xG'}
        ></Banniere_second>
        <EvenIntro image={'https://media.graphassets.com/1q7m8hFqRAO8UDBgp5pJ'}>
          <SousTitre_1>
            Atelier d'initiation des enfants à la photographie par la
            professionnelle du Cinéma Tatiane Tchiguia
          </SousTitre_1>
          <p>
            Stimuler l'imagination et la curiosité de l'enfant étant au coeur de
            nos actions, nous avons offert aux tout petits de magnifiques
            moments d'initiation à la photographie avec la professionnelle du
            Cinéma Tatiane Tchiguia. Ils ont adoré !
          </p>
        </EvenIntro>
        <section style={{ padding: '64px 0' }}>
          <div className="container">
            <SousTitre_1
              style={{ width: '100%', textAlign: 'center', marginBottom: 36 }}
            >
              Quelques images
            </SousTitre_1>
          </div>
          <div className="container">
            <div className="grid-4">{Element}</div>
          </div>
        </section>
        <Telecharger
          url="https://media.graphassets.com/RVQr8qpSi62xJoWqZg1M"
          href="https://media.graphassets.com/MxEQJJvzRDqKLycz44b1"
        />
        <section id="team">
          <div className="container">
            <SousTitre_1 style={{ marginBottom: 36, color: 'white' }}>
              Notre Equipe
            </SousTitre_1>
            <div className="grid">
              <TeamMember
                image={'https://media.graphassets.com/yBpiAdbQV2Db7bYLt8JQ'}
                nom="Nadine Mekougoum"
                role={
                  'Fondatrice de l’association Harambee Africa | Les Librairies M’wina, Directrice du SALAFEY'
                }
              />
              <TeamMember
                image={'https://media.graphassets.com/RtvSG8xuSCSfYAc3JIRw'}
                nom="Ray NDEBI"
                role={'Développement et Prospective'}
              />
              <TeamMember
                image={'https://media.graphassets.com/WVGaz53UQMaeCZpqLYxA'}
                nom="Pauline ONGONO"
                role={'Communication et Relation publique'}
              />
            </div>
          </div>
        </section>
        <Contact />
      </div>
    </>
  );
}

// FsXZQlmIR2yGOME5jzNo

import Contact from '../../../components/contact';
import Paragraph from '../../../components/paragraph';
import Titre from '../../../components/titre';
import Banniere from '../composants/banniere';

import gallerie from './gallerie.json';

export default function EventArticle() {
  const Element = gallerie.map((el) => (
    <div
      className="items-grid"
      style={{ backgroundImage: `url(${el.image})` }}
    ></div>
  ));

  return (
    <div>
      <div className="vide"></div>
      <Banniere url={'https://media.graphassets.com/MS1uDmeARzC90ZNodidP'} />
      <div className="container">
        <Paragraph>
          <Titre style={{ marginBottom: 24 }}>LES ATELIERS READ'ARTS</Titre>
          <p style={{ textAlign: 'justify' }}>
            Les Ateliers Read'Arts est l'une des activités majeurs que nous
            organisons depuis 2019 pour initier les enfants à la
            lecture-plaisir, à l'art et à la science. Nous les organisons dans
            les musées et les espaces culturelles tels que le Musée
            Ethographique et d'histoire des peuples de la forêt d'Afrique
            Centrale, Musée la BlacKitude, Musée National, Africréa, palais des
            Arts, The Forest Creative Loft à Douala et dans les écoles. Nous
            avons également développer les lectures à domicile pour un suivi
            plus rapproché dans certaines familles et aidé à l'installation des
            bibliothèques familiales avec un minimum de 200 enfants formés à ce
            jour.
          </p>
          <span className="quote">
            L'objectif des Ateliers Read'Arts est d'initier les enfants à la
            lecture-plaisir, à la découverte culturelle et à la confiance en
            soi.
          </span>
          <p style={{ textAlign: 'justify' }}>
            Au Cameroun et en Afrique de manière générale, les familles ont un
            faible culture du livre d'eveil et de divertissement. Pendant
            longtemps, les enfants africains ont été exposé à des modèles
            externes à nos réalités socioculturelle. Ce qui à causer une perte
            de repère identitaire et de confiance en soi. Nous avons alors pensé
            qu'il était important de mettre en place une activité qui va non
            seulement aider les enfants à découvrir la joie et le pouvoir de la
            lecture-plaisir, mais aussi leur permettre d'avoir des livres avec
            des héros et héroïnes auxquels ils peuvent s'identifier.
          </p>
          <p style={{ margin: '28px 0' }}>
            <div>
              <img
                src="https://media.graphassets.com/O3sMnWRQRcqDveVMkGfx"
                alt="read'art"
                width="100%"
                style={{
                  borderRadius: '16px',
                }}
              />
              <span style={{ fontWeight: '600' }}>
                Les débuts des Ateliers Read'Art dans le salon de Nadine
                MEKOUGOUM
              </span>
            </div>
          </p>
          <p style={{ textAlign: 'justify' }}>
            Des lectures hebdomadaires avec les enfants de notre entourage dans
            mon salon en 2019, nous avons organisé notre premier atelier
            officiel en Août 2020 au musée ethnographique et d'histoire des
            peuples de la forêt d'Afrique centrale avec environ 30 enfants
            participants. À ce jour, nous sommes à plus de 10 Ateliers Read'Arts
            et près de 300 enfants impactés.
          </p>
        </Paragraph>
        <Paragraph>
          <h2 style={{ textAlign: 'left', fontSize: 28, marginTop: '36px' }}>
            Quelques photos
          </h2>
        </Paragraph>
        <div className="grid-4">{Element}</div>
      </div>
      <Contact />
    </div>
  );
}

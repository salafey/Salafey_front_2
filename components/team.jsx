import { SousTitre_1 } from "./titre";

export default function Team(){
  return (
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
  )
}
import './section3.css'
import im1 from './image 256.png'
import im2 from './image 257.png'
import im3 from './image 258.png'
import im4 from './image 260.png'
import im5 from './image 259.png'
import im6 from './image 261.png'
import Section30 from './section30/section30'
export default function Section3(){
    return(
        <div>
        <div>
            <div id='sect33'>
            <h1>Les services les plus populaires</h1>
            <h2>Voir plus...</h2>
            </div>
            <div id='sect34'>
            <Section30 
            image={im1}
            tit='Plombier'
            description='Conception des bâtiments | Résidentielle | urbaine | Moderne | Décoration intérieure'
            date='12 /07/2023'
            personne='Jhon Doe'
            adresse='MONTREAL QC  H3Z 2Y7'
            />
            <Section30 
            image={im2}
            tit='Restaurant asiatique'
            description='Conception des bâtiments | Résidentielle | urbaine | Moderne | Décoration intérieure'
            date='12 /07/2023'
            personne='Jhon Doe'
            adresse='MONTREAL QC  H3Z 2Y7'
            />
            <Section30 
            image={im3}
            tit='Garderie enfant'
            description='Conception des bâtiments | Résidentielle | urbaine | Moderne | Décoration intérieure'
            date='12 /07/2023'
            personne='Jhon Doe'
            adresse='MONTREAL QC  H3Z 2Y7'
            />
            </div>
        </div>
        <div>
            <div id='sect33'>
            <h1>Les services les plus récents</h1>
            <h2>Voir plus...</h2>
            </div>
            <div id='sect34'>
            <Section30 
            image={im4}
            tit='Plombier'
            description='Conception des bâtiments | Résidentielle | urbaine | Moderne | Décoration intérieure'
            date='12 /07/2023'
            personne='Jhon Doe'
            adresse='MONTREAL QC  H3Z 2Y7'
            />
            <Section30 
            image={im5}
            tit='Restaurant asiatique'
            description='Conception des bâtiments | Résidentielle | urbaine | Moderne | Décoration intérieure'
            date='12 /07/2023'
            personne='Jhon Doe'
            adresse='MONTREAL QC  H3Z 2Y7'
            />
            <Section30 
            image={im6}
            tit='Garderie enfant'
            description='Conception des bâtiments | Résidentielle | urbaine | Moderne | Décoration intérieure'
            date='12 /07/2023'
            personne='Jhon Doe'
            adresse='MONTREAL QC  H3Z 2Y7'
            />
            </div>
        </div>
        </div>
    )
}
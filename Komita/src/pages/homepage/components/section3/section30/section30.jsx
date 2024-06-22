import './section30.css'
import person from './pers.png'
import adress from './Vector.png'
import verif from './image 267.png'
export default function Section30({image,tit,description,date,personne,adresse}){
    return(
        <div id='sect30'>
            <img id='imaaage' src={image} alt="" />
            <div id='sect31'><h1>{tit}</h1>
            <img src={verif} alt="" />
            </div>
            <p>{description}</p>
            <p>{date}</p>
            <div className='sect32'>
                <img  src={person} alt="" />
                <p>{personne}</p>
            </div>
            <div className='sect32'>
                <img  src={adress} alt="" />
                <p>{adresse}</p>
            </div>
        </div>
    )
}
import './section4.css'
import groupe from './Group 246.png'
export default function Section4(){
    return(
        <div>
        <div id='sect4'>
            <div id='sect40'>
                <h1>Explorez Notre Univers</h1>
                <h3>Lorem ipsum dolor sit amet,</h3>
                <p>consectetur adipiscing elit. Etiam egestas odio vel dictum eleifend. Aliquam ligula dui, eleifend nec ante non, gravida dapibus felis. Integer rutrum eget nisl sit amet faucibus.  sit amet faucibus. sit amet faucibus.</p>
                <p id='voirplus'>-- Voir plus ....</p>
            </div>
            <div id='sect41'>
                <img src={groupe} alt="" />
            </div>
        </div>
        <div id='sec4'>
            <div id='sec40'>
            <h1>Joindre Notre Komita Professionnelle</h1>
            <p>consectetur adipiscing elit. Etiam egestas odio vel dictum eleifend. Aliquam ligula dui, eleifend nec ante </p>
            </div>
            <button>S'inscrire</button>
        </div>
        </div>
    )
}
import './footer.css'
import logo from './komitaaa light.png'
import send from './Mask group.png'
import logos from './Groupe 49.png'
import foot from './Maskgroup.png'
export default function Footer(){
    return(
        <div id='foot'>
            <div id='sect'>
            <img src={foot} alt="" />
            </div>
            <div id='foot0'>
                <div className='foot01'>
                <img id='logo' src={logo} alt="" />
                <p id='brush'>Un monde de services</p>
                <p id='brush'>Un monde tunisien</p>
                </div>
                <div className='foot01'>
                    <h1>Pages</h1>
                    <p>Accueil</p>
                    <p>A propos</p>
                    <p>Services</p>
                </div>
                <div className='foot01'>
                    <h1>Contact</h1>
                    <p>Komita@exemple.com</p>
                    <p>+216 22 222 222</p>
                    <p>11 rue de mars, Quebec</p>
                </div>
                <div className='foot01'>
                    <h1>Newsletter</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur !</p>
                    <div id='foot010'>
                    <input id='subs' type="text" placeholder='Subscibe to our newsletter'/>
                    <img id='sent' src={send} alt="" />
                    </div>
                    <div id='foot011'>
                    <p>Nous contacter !</p>
                    <img src={logos} alt="" />
                    </div>
                </div>
            </div>
            <div id='foot1'>© 2024 author tunisia. All Rights Reserved.  </div>
        </div>
    )
}
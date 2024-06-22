import './header.css'
import logo from './komita.png'
export default function Header(){
    return(
        <div id='head'> 
            <div>
                <img src={logo} alt="" />
            </div>
            <div id='head1'>
                <p className='head10'>Accueil</p>
                <p className='head10'>A propos</p>
                <p className='head10'>Services</p>
                <button id='head11'>Sign Up</button>
                <button id='head12'>Login</button>
            </div>
        </div>
    )
}
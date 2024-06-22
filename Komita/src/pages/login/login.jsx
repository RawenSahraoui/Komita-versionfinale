import './login.css'
import b from './back.png'
import logo from './komita.png'
export default function Login(){
    return(
        <div id='container'>
            <div id='container1'>
            <button id='back'>
                <img src={b} alt="" />
                <p>Back</p>
            </button>
            <div id='container10'>
                <h3>Welcome back</h3>
                <h1>Komita</h1></div>
                <div id='container11'>
                    <img src={logo} alt="" />
                    <p>Un monde de services</p>
                    <p>Un monde tunisien</p>
                </div>
            </div>
        <div id='signup'>
            <div id='sign1'>
            <h1>Login</h1>
            <div id='sign10'>
            <p>Don't have an account ?</p>
            <a href="#">Sign up</a>
            </div>
            </div>
            <form id='formulaire' action="">
                <label htmlFor="">E-mail adress</label>
                <input className='inp' type="email" placeholder='Username or email address'/>
                <label htmlFor="">Enter your Password</label>
                <input className='inp' type="password" placeholder='*********'/>
                <p id='forg'>Forgot your password ?</p>
                <button id='signin'>Sign In</button>
            </form>
        </div>
        
        </div>
    )
}
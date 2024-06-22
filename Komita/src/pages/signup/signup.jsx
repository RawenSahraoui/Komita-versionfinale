import './signup.css'
import b from './back.png'
import logo from './komita.png'
export default  function Signup(){
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
            <h1>Sign up</h1>
            <div id='sign10'>
            <p>Have an account ?</p>
            <a href="#">Sign in</a>
            </div>
            </div>
            <form id='formulaire' action="">
                <div id='name'>
                <div className='name0'>
                <label className='label' htmlFor="">First Name</label>
                <input className='name1' type="text" placeholder='First Name'/>
                </div>
                <div className='name0'>
                <label className='label' htmlFor="">Last Name</label>
                <input className='name1' type="text" placeholder='Last Name'/>
                </div>
                </div>
                <label className='label' htmlFor="">Username</label>
                <input className='inp' type="text" placeholder='Username'/>
                <label className='label' htmlFor="">E-mail adress</label>
                <input className='inp' type="email" placeholder='Username or email address'/>
                <label className='label' htmlFor="">Enter your Password</label>
                <input className='inp' type="password" placeholder='*********'/>
                <button id='but'>Next</button>
            </form>
        </div>
        
        </div>
    )
}
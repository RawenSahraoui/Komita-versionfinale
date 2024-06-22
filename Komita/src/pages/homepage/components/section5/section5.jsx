import './section5.css'
import image from './image 255.png'
import circle from './plus-circle.png'
export default function Section5(){
    return(
        <div id='sect5'>
            <h1>Frequently asked questions</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            <img src={image} alt="" />
            <div className='sect50'><p>Is there a free trial available?</p>
            <img src={circle} alt="" /></div>
            <div className='sect50'><p>What is your cancellation policy?</p>
            <img src={circle} alt="" /></div>
            <div className='sect50'><p>Can I change my plan later?</p>
            <img src={circle} alt="" /></div>
            <div className='sect50'><p>Can other info be added to an invoice?</p>
            <img src={circle} alt="" /></div>
            <div className='sect50'><p>How does billing work?</p>
            <img src={circle} alt="" /></div>
            <div className='sect50'><p>How do I change my account email?</p>
            <img src={circle} alt="" /></div>
        </div>
    )
}
import './section1.css'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import img5 from './5.png'
import img6 from './6.png'
import DAL from './DALL.png'
export default function Section1(){
    return(
        <div id='sect1'>
        <div id='sect10'>
            <h1>Trouver les meilleurs [services] dans votre région .</h1>
            <div id='sect100'>
                <div className='sec'><img src={img1} alt="" /></div>
                <div className='sec'><img src={img2} alt="" /></div>
                <div className='sec'><img src={img3} alt="" /></div>
                <div className='sec'><img src={img4} alt="" /></div>
                <div className='sec'><img src={img5} alt="" /></div>
                <div className='sec'><img src={img6} alt="" /></div>
            </div>
        </div>
        <div id='sect11'>
            <img src={DAL} alt="" />
        </div>
        </div>
    )
}
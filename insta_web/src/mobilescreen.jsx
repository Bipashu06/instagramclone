import './mobilescreen.css'
import mobile from './assets/mobile/mobile_phone.png'
import pic1 from './assets/mobile/screenshot1.png'
import pic2 from './assets/mobile/screenshot2.png'
import pic3 from './assets/mobile/screenshot3.png'
import pic4 from './assets/mobile/screenshot4.png'
import { useEffect, useState } from 'react'
export default function Mobiles(){
    const [currentIndex, steCurrentIndex] = useState(0);
    const screen_shots = [pic1, pic2, pic3, pic4];
    useEffect(() => {
        const interval = setInterval(() => {
            steCurrentIndex((currentIndex) => (currentIndex + 1) % screen_shots.length)
        }, 4000);
        return() => {
            clearInterval(interval);
        }
    })
    return(
        <div className="mobiles-container">
            <img src={mobile} alt="" id='screen' style={{width: '460px', height: '630px'}}/>
            <img src={screen_shots[currentIndex]} alt="" id='pic'/>
        </div>
    )
}
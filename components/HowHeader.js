import Image from 'next/image'
import mobileApp from '../public/mobile-app.png'
import appleStore from '../public/appstore.svg'
import googlePlay from "../public/googleplay.svg"
import ring from "../public/ring.png"
import sphere from "../public/sphere.png"
import cube from "../public/cube.png"
import style from '../styles/Home.module.css'

export default function HowHeader() {
    return(
        <div className={style.pageBlock}>
            <div className={style.hero}>
           <div className={style.wrapperSmaller}>
            <div className={style.row}>
                <div className={style.col12}>
                        <h1>How Monirates Works?</h1>
                        <p>Select the currency you want, place an order and be paired automatically.</p>
                    </div>
            </div>
           </div>
      </div>
        </div>
    )
}
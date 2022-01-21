import Image from 'next/image'
import mobileApp from '../public/mobile-app.png'
import appleStore from '../public/appstore.svg'
import googlePlay from "../public/googleplay.svg"
import ring from "../public/ring.png"
import sphere from "../public/sphere.png"
import cube from "../public/cube.png"
import style from '../styles/Home.module.css'

export default function BenefitHeader() {
    return(
        <div className={style.pageBlock}>
            <div className={style.hero}>
           <div className={style.wrapperSmaller}>
            <div className={style.row}>
                <div className={style.col12}>
                        <h1>Why Should I Use Monirates?</h1>
                        <p>Monirates is built with the user satisfaction as top-most priority.</p>
                    </div>
            </div>
           </div>
      </div>
        </div>
    )
}
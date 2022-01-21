import Image from 'next/image'
import mobileApp from '../public/mobile-app.png'
import appleStore from '../public/appstore.svg'
import googlePlay from "../public/googleplay.svg"
import ring from "../public/ring.png"
import sphere from "../public/sphere.png"
import cube from "../public/cube.png"
import style from '../styles/Home.module.css'

export default function FeatureHeader() {
    return(
        <div className={style.pageBlock}>
            <div className={style.hero}>
           <div className={style.wrapperSmaller}>
            <div className={style.row}>
                <div className={style.col12}>
                        <h1>Monirates Features.</h1>
                        <p>App features to make your life easier and much more exciting.</p>
                    </div>
            </div>
           </div>
      </div>
        </div>
    )
}
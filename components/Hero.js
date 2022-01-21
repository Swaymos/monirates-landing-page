import Image from 'next/image'
import Link from 'next/link'
import mobileApp from '../public/mobile-app.png'
import appleStore from '../public/appstore.svg'
import googlePlay from "../public/googleplay.svg"
import ring from "../public/ring.png"
import sphere from "../public/sphere.png"
import cube from "../public/cube.png"
import style from '../styles/Home.module.css'

export default function Hero() {
    return(
        <div className={style.hero}>
           <div className={style.wrapperSmaller}>
            <div className={style.row}>
                <div className={style.col4}>
                        <h1>Secure and fast peer to peer currency exchange now in your pocket.</h1>
                        <p>Buy or Sell any currency at your own rate at zero exchange fee.</p>
                        <ul className={style.actionButton}>
                            <li><Link href="" passHref><Image src={appleStore} alt = "App Store Icon"/></Link></li>
                            <li><Link href="" passHref><Image src={googlePlay} alt = "Google Play Store Icon"/></Link></li>
                        </ul>
                    </div>
                    <div className={style.col4}>
                        <ul className={style.floatingPic}>
                            <li className={style.firstPic}><Image src={mobileApp}  alt = "mobile app image"/></li>
                            <li className={style.Ring}><Image src={ring} alt = "floating ring image" /></li>
                            <li className={style.Cube}><Image src={cube} alt = "floating cube image" /></li>
                            <li className={style.Sphere}><Image src={sphere} alt = "floating sphere image"/></li>
                        </ul>
                    </div>
            </div>
           </div>
      </div>
    )
}
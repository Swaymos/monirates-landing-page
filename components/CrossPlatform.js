import Image from 'next/image'
import clock from '../public/clock.svg'
import macbook from '../public/macbook.png'
import scan from "../public/scan.svg"
import ring from "../public/ring.png"
import cube from "../public/cube.png"
import sphere from "../public/sphere.png"
import divider from '../public/divider.svg'
import style from '../styles/Home.module.css'

export default function CrossPlatform() {
    return(
       <div className={style.featureBlock}>
           <div className={style.wrapperSmaller}>
           <div className={style.row}>
           <div className={style.col5}>
                <ul className={style.floatingPic}>
                    <li className={style.firstPicLarger}><Image src={macbook} alt = "Macbook image"/></li>
                    <li className={style.Ring}><Image src={ring} alt = "floating ring image"/></li>
                    <li className={style.Cube}><Image src={cube} alt = "floating cube image"/></li>
                    <li className={style.Sphere}><Image src={sphere} alt = "floating sphere image"/></li>
                </ul>
            </div>
            <div className={style.col4}>
                <h2>Cross platform compatibility.</h2>
                <p>Monirates can be used on any device. Fully accessible on android, ios and web.</p>
                <ul className={style.benefitBlock}>
                    <li><Image src={clock} alt="clock icon"/><span><h4>24/7 full access</h4><p>Use monirates on your pc or mobile devices, it’s always available to you.</p></span></li>
                    <li><Image src={scan} alt="clock icon"/><span><h4>Secure Platform</h4><p>Carry out transfers and transactions with otp confirmations.</p></span></li>
                </ul>
            </div>
      </div>
           </div>
       </div>
    )
}
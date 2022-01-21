import Image from 'next/image'
import lock from '../public/lock.svg'
import securewallet from '../public/secure-wallet.png'
import multiple from "../public/multiple.svg"
import ring from "../public/ring.png"
import cube from "../public/cube.png"
import divider from '../public/divider.svg'
import style from '../styles/Home.module.css'

export default function SecureWallet() {
    return(
       <div className={style.secureWallet}>
           <div className={style.featureBlock}>
            <div className={style.wrapperSmaller}>
            <div className={style.row}>
            <div className={style.col5}>
                <ul className={style.floatingPic}>
                    <li className={style.firstPic}><Image src={securewallet} alt = "Secure wallet image" /></li>
                    <li className={style.Ring}><Image src={ring} alt = "floating ring image" /></li>
                    <li className={style.Cube}><Image src={cube} alt = "floating cube image" /></li>
                </ul>
            </div>
            <div className={style.col4}>
                <h2>Secure wallet for all your supported currency.</h2>
                <p>Easily receive any currency to your wallet. A seperate wallet is created for different currencies.</p>
                <ul className={style.benefitBlock}>
                    <li><Image src={lock} alt = "lock icon" /><span><h4>Fully secure</h4><p>Your currency wallet is fully secure. Store your currencies with no worries</p></span></li>
                    <li><Image src={multiple} alt = "multiple icon" /><span><h4>Multiple Options</h4><p>You have a plethora of choices when it comes to your wallet and currency.</p></span></li>
                </ul>
            </div>
            <div className={style.sectionDivider}>
                <Image src={divider} alt="divider image"></Image>
            </div>
            </div>
      </div>
       </div>
       </div>
    )
}
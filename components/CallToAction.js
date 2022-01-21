import Image from 'next/image'
import Link from 'next/link'
import createWallet from '../public/create-wallet.png'
import appleStore from '../public/appstore.svg'
import googlePlay from "../public/googleplay.svg"
import currencyBlock from "../public/currency-block.png"
import transactionBlock from "../public/transaction-block.png"
import style from '../styles/Home.module.css'

export default function CallToAction() {
    return(
        <div className={style.callToAction}>
           <div className={style.wrapper}>
           <div className={style.row}>
           <div className={style.col5}>
                <h2>Secure wallet for all your supported currency.</h2>
                <ul className={style.callToActionButton}>
                    <li><Link href="" passHref><Image src={appleStore} alt = "App Store Icon"/></Link></li>
                    <li><Link href="" passHref><Image src={googlePlay}  alt = "Google Play Store Icon"/></Link></li>
                </ul>
            </div>
            <div className={style.col5}>
                <ul className={style.floatingPic}>
                    <li className={style.firstPicAbsolute}><Image src={createWallet} alt = "Create wallet image"/></li>
                    <li className={style.currencyBlock}><Image src={currencyBlock} alt = "Currency block image"/></li>
                    <li className={style.transactionBlock}><Image src={transactionBlock} alt = "Transaction block image"/></li>
                </ul>
            </div>
           </div>
           </div>
      </div>
    )
}
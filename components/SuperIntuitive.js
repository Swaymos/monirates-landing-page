import Image from 'next/image'
import pairing from '../public/pairing.svg'
import mobileLayout from '../public/mobile-layout.png'
import intuitive from "../public/intuitive.svg"
import currencyBlock from "../public/currency-block.png"
import transactionBlock from "../public/transaction-block.png"
import divider from '../public/divider.svg'
import style from '../styles/Home.module.css'

export default function SuperIntuitive() {
    return(
        <div className={style.featureBlock}>
            <div className={style.wrapperSmaller}>
            <div className={style.row}>
            <div className={style.col4}>
                <h2>Easy and super intuitive.</h2>
                <p>Monirates can be used by anyone, all you have to do is place a buy or sell request and you automatically get paired.</p>
                <ul  className={style.benefitBlock}>
                    <li><Image src={intuitive} alt = "intuitive icon" /><span><h4>Super Intuitive</h4><p>Your currency wallet is fully secure. Store your currencies with no worries</p></span></li>
                    <li><Image src={pairing} alt = "pairing icon"/><span><h4>Automatic Pairing</h4><p>Once you place a buy or sell request. It’s automatically paired with a request.</p></span></li>
                </ul>
            </div>
            <div className={style.col5}>
                <ul className={style.floatingPic}>
                    <li className={style.firstPicLarger}><Image src={mobileLayout} alt = "mobile layout image"/></li>
                    <li className={style.currencyBlock}><Image src={currencyBlock} alt = "currency block image"/></li>
                    <li className={style.transactionBlock}><Image src={transactionBlock} alt = "transaction block image"/></li>
                </ul>
            </div>
            <div className={style.sectionDivider}>
                <Image src={divider} alt = "section divider"></Image>
            </div>
            </div>
      </div>
        </div>
    )
}
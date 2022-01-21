import Image from 'next/image'
import currency from '../public/currency.svg'
import offers from '../public/offers.svg'
import swap from "../public/swap.svg"
import automaticPairing from "../public/automaticPairing.svg"
import wallet from "../public/wallet.svg"
import withdraw from "../public/withdraw.svg"
import send from "../public/send.svg"
import pieChart from "../public/pieChart.svg"
import style from '../styles/Home.module.css'

export default function MonirateFeature() {
    return(
        <div className={style.MonirateFeature}>
            <div className={style.wrapper}>
            <div className={style.appBenefit}>
                <h2>6 reasons to use monirates?</h2>
                <p>Buy or Sell any currency at your own rate at zero exchange fee</p>
                <ul className={style.row}>
                    <li className={style.col3}><Image src={pieChart} alt = "pie chart icon"/><h3>Avoid Annoying Charges</h3><p>With monirates you can swap currencies with a very low fee.</p></li>
                    <li className={style.col3}><Image src={wallet} alt = "wallet icon"/><h3>Multiple Wallets</h3><p>Your currencies are fully secure and stored in different wallet.</p></li>
                    <li className={style.col3}><Image src={swap} alt = "swap icon"/><h3>Swap Any Currency</h3><p>Easily swap currencies on monirates, exchange currencies.</p></li>
                    <li className={style.col3}><Image src={automaticPairing} alt = "automatic pairing icon"/><h3>Automatic Pairing</h3><p>Go to sleep knowing your buy or sell offer would be paired.</p></li>
                    <li className={style.col3}><Image src={send} alt = "send icon"/><h3>Send To Your Loved Ones</h3><p>Make a swift transfer to your friends and family. It’s instant.</p></li>
                    <li className={style.col3}><Image src={withdraw} alt = "withdraw icon"/><h3>Swift Withdrawal</h3><p>Directly withdraw to your local currency bank account.</p></li>
                </ul>
            </div>
      </div>
        </div>
    )
}
import Image from 'next/image'
import Link from 'next/link'
import currency from '../public/currency.svg'
import offers from '../public/offers.svg'
import swap from "../public/swap.svg"
import arrow from "../public/arrow.svg"
import BiRightArrowAlt from 'react-icons/bi'
import style from '../styles/Home.module.css'

export default function HowItWork() {
    return(
        <div className={style.HowItWork}>
            <div className={style.wrapper}>
            <div className={style.appBenefit}>
                <h2>How monirates work?</h2>
                <p>Buy or Sell any currency at your own rate at zero exchange fee.</p>
                <ul className={style.row}>
                    <li className={style.col3}>
                            <Image src={currency} alt = "currency icon"/>
                            <h3>Select Currency</h3>
                            <p>Place a buy or sell request by selecting the currency you wish to exchange.</p>
                        <Link href="" passHref>
                        Select Currency
                        </Link>
                    </li>
                    <li className={style.col3}>
                            <Image src={offers} alt = "currency offers"/>
                            <h3>View Offers</h3>
                            <p>Multiple offers already waiting for your request. Get started in seconds</p>
                        <Link href="" passHref>
                        View Offers
                        </Link>
                    </li>
                    <li className={style.col3}>
                            <Image src={swap} alt = "currency swap"/>
                            <h3>Swap Currency</h3>
                            <p>Quickly swap any currency you have to the one you want.</p>
                        <Link href="" passHref>
                        Swap Currency
                        </Link>
                    </li>
                </ul>
            </div>
      </div>
        </div>
    )
}
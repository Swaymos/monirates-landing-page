import Image from 'next/image'
import quote from '../public/quote.svg'
import style from '../styles/Home.module.css'


export default function Testimonial() {
    return(
        <div className={style.Testimonial}>
            <div className={style.wrapper}>
            <h2 className={style.header}>What customers are saying about Monirates</h2>
            <div className={style.row}>
                <ul className={style.col5}>
                    <li>
                        <div className={style.testimonyBlock}>
                            <span><Image src={quote} alt = "quote icon"></Image></span>
                            <p>Monirates is an amazing app. I have been using it for the past 3 months and the results have been amazing.</p>
                        </div>
                    </li>
                    <li>
                    <div className={style.testifierBlock}>
                            <h2>Mark Adenuga</h2>
                            <h4>Business Owner</h4>
                        </div>
                    </li>
                </ul>
                <ul className={style.col5}>
                    <li>
                        <div className={style.testimonyBlock}>
                            <span><Image src={quote} alt = "quote icon"></Image></span>
                            <p>Monirates is an amazing app. I have been using it for the past 3 months and the results have been amazing.</p>
                        </div>
                    </li>
                    <li>
                    <div className={style.testifierBlock}>
                            <h2>Mark Adenuga</h2>
                            <h4>Business Owner</h4>
                        </div>
                    </li>
                </ul>
                <ul className={style.col5}>
                    <li>
                        <div className={style.testimonyBlock}>
                            <span><Image src={quote} alt = "quote icon"></Image></span>
                            <p>Monirates is an amazing app. I have been using it for the past 3 months and the results have been amazing.</p>
                        </div>
                    </li>
                    <li>
                    <div className={style.testifierBlock}>
                            <h2>Mark Adenuga</h2>
                            <h4>Business Owner</h4>
                        </div>
                    </li>
                </ul>
                <ul className={style.col5}>
                    <li>
                        <div className={style.testimonyBlock}>
                            <span><Image src={quote} alt = "quote icon"></Image></span>
                            <p>Monirates is an amazing app. I have been using it for the past 3 months and the results have been amazing.</p>
                        </div>
                    </li>
                    <li>
                    <div className={style.testifierBlock}>
                            <h2>Mark Adenuga</h2>
                            <h4>Business Owner</h4>
                        </div>
                    </li>
                </ul>
            </div>
      </div>
        </div>
    )
}
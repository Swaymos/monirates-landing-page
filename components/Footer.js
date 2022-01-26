import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.svg'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import style from '../styles/Home.module.css'

export default function Footer() {
    return(
        <div className={style.footer}>
            <div>
            <div className={style.footerContent}>
                <h2>Start swapping currencies today!</h2>
                <p>Easily receive any currency to your wallet.</p>
                <div className={style.footerButton}><Link href='' passHref>👋 Say Hello!</Link></div>
            </div>
           <div className={style.mainFooter}>
           <div className={style.row}>
                <ul className={style.col3}>
                    <li className={style.monirateLogo}><Link href="" passHref><Image src={logo} alt="Monirates Logo"/></Link></li>
                </ul>
                <ul className={style.col3}>
                <li><p>© 2022 Monirates. All Rights Reserved.</p></li>
                </ul>
                    <div className={style.col3}>
                    <ul className={style.footerLink}>
                        <li><a href=''><FaFacebookSquare /></a></li>
                        <li><a href=''><FaLinkedin /></a></li>
                        <li><a href=''><FaTwitterSquare /></a></li>
                    </ul>
                    </div>
                
            </div>
           </div>
      </div>
        </div>
    )
}
import Image from 'next/image'
import style from '../styles/Home.module.css'
import logo from '../public/logo.svg'
import React, { useState, useEffect } from 'react';
import { IoMdMenu } from 'react-icons/io';
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    useEffect(()=>{
        const changeBackground = () =>{
            if(window.scrollY >= 80){
              setNavbar(true);
              console.log(window.scrollY);
            }else{
              setNavbar(false);
            }
          }
        
          window.addEventListener("scroll", changeBackground);
    }, []); 
    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
    }
    const router = useRouter();
    return(
        <div className={navbar ? style.mainMenuActive : style.mainMenu}>
        <div className={style.desktopHeader}>
           <div className={style.wrapper}>
           <div className={style.navigation}>
            <div className={style.row}>
                <ul className={style.col3}>
                <li className={style.monirateLogo}><Link href="/" passHref><Image src={logo} alt="Monirates logo"/></Link></li>
                </ul>
                <ul className={style.col4}>
                    <li><Link className={router.pathname == "/how" ? "active" : ""} href='/how' passHref>How It Works</Link></li>
                    <li><Link className={router.pathname == "/benefit" ? "active" : ""} href='/benefit' passHref>Benefits</Link></li>
                    <li><Link className={router.pathname == "/feature" ? "active" : ""} href='/feature' passHref>Monirates Features</Link></li>
                </ul>
                <ul className={style.col3}>
                <li><Link href='#' className={style.buttonOutlined} passHref>Log In</Link></li>
                <li ><Link href='#' className={style.button} passHref>Get Started</Link></li>
                </ul>
            </div>
      </div>
           </div>
        </div>
                <div className={style.mobileHeader}>
                <div className={style.navigation}>
                <div className={style.row}>
                    <ul className={style.col12}>
                        <div className={style.row}>
                        <li className={style.col6}><li className={style.monirateLogo}><Link href="/" passHref><Image src={logo} alt="Monirates logo"/></Link></li></li>
                    <li className={style.col3}><button className={style.toggleButton} onClick={toggle}><IoMdMenu /></button></li>
                        </div>
                    </ul>
                    <ul style={{display: showMe?"block":"none"}} className={style.col12}>
                        <li><Link className={router.pathname == "/how" ? "active" : ""} href='/how' passHref>How It Works</Link></li>
                        <li><Link className={router.pathname == "/benefit" ? "active" : ""} href='/benefit' passHref>Benefits</Link></li>
                        <li><Link className={router.pathname == "/feature" ? "active" : ""} href='/feature' passHref>Monirates Features</Link></li>
                    </ul>
                    <ul style={{display: showMe?"block":"none"}} className={style.col12}>
                    <li><Link href='#' passHref>Log In</Link></li>
                    <li ><Link href='#' className='button'>Get Started</Link></li>
                    </ul>
                </div>
          </div>
            </div>
        </div>
    )
}
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import HowItWork from '../components/HowItWork'
import SecureWallet from '../components/SecureWallet'
import SuperIntuitive from '../components/SuperIntuitive'
import CrossPlatform from '../components/CrossPlatform'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import MonirateFeature from '../components/MonirateFeatures'
import Testimonial from '../components/Testimonial'
import BenefitHeader from '../components/BenefitHeader'
import AppHead from '../components/AppHead'
import Head from 'next/head'




export default function Home() {
  return (
    <AppHead>
      <div className={styles.container}>
      <NavBar />
      <BenefitHeader />
      <SecureWallet />
      <SuperIntuitive />
      <CrossPlatform />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
    </AppHead>
  )
}

"use client"
import { useState } from "react"
import styles from "./styles/navbar.module.css"
import Link from 'next/link'
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return <>
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <span></span>
                <h1>Yash Yadav</h1>
            </Link>

            <div className={`${styles.menuBtn} ${menu ? styles.close : ""}`} onClick={() => setMenu(!menu)}>
                <span /><span /><span />
            </div>
        </header>
        <div className={styles.space}>

        </div>
        <div className={`${styles.menu} ${menu ? styles.active : ""}`}>
            <h1>Navbar</h1>
            <Link href="/" className={styles.navLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                <span>Home</span>
            </Link>
            <Link href="/" className={styles.navLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                <span>Projects</span>
            </Link>
            <Link href="/" className={styles.navLink}>
                <svg height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 232.688 232.688" xmlSpace="preserve"> <g id="XMLID_350_"> <g id="XMLID_351_"> <path id="XMLID_352_" d="M97.688,61.344h120c8.284,0,15-6.716,15-15s-6.716-15-15-15h-120c-8.284,0-15,6.716-15,15 S89.403,61.344,97.688,61.344z" /> </g> <g id="XMLID_439_"> <path id="XMLID_440_" d="M217.688,101.344h-120c-8.284,0-15,6.716-15,15s6.716,15,15,15h120c8.284,0,15-6.716,15-15 S225.972,101.344,217.688,101.344z" /> </g> <g id="XMLID_441_"> <path id="XMLID_443_" d="M217.688,171.344h-120c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h120c8.284,0,15-6.716,15-15 C232.688,178.06,225.972,171.344,217.688,171.344z" /> </g> <g id="XMLID_444_"> <path id="XMLID_445_" d="M48.785,104.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181 c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104 c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336 c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698 c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142-0.001,7.499-3.358,7.499-7.5 c0-0.629-0.077-1.241-0.223-1.825l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688 C53.958,106.797,51.61,104.818,48.785,104.408z" /> </g> <g id="XMLID_446_"> <path id="XMLID_447_" d="M48.785,34.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181 c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104 c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336 c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698 c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142,0,7.499-3.358,7.499-7.5c0-0.629-0.077-1.241-0.223-1.825 l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688C53.958,36.797,51.61,34.818,48.785,34.408z" /> </g> <g id="XMLID_448_"> <path id="XMLID_449_" d="M48.785,174.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181 c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104 c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336 c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698 c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142-0.001,7.499-3.358,7.499-7.5 c0-0.629-0.077-1.241-0.223-1.825l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688 C53.958,176.797,51.61,174.818,48.785,174.408z" /> </g> </g> </svg>
                <span>Skills</span>
            </Link>
            <h1>Social media</h1>
            <a href="https://www.instagram.com/yashyadav_243" target="_blank" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b5179e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                <span>Instagram</span>
            </a>
            <a href="/" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                <span>Github</span>
            </a>
        </div>
    </>
}

export default Navbar
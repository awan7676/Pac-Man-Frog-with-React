import React from 'react';
import { useState } from 'react';
import Styles from './Home.module.css';
import Button from "../Button/Button";
import DropDown from '../DropDown/DropDown';


function Home(props) {
    const [dropDown, setDropDown] = useState(false);
    return (
        <div className={Styles.Home} id='home'>
            <div className={Styles.nav_bar}>
                <div className={Styles.nav_first_item}>
                    <img className={Styles.what_do_img} src="/img/what_do_img.png" alt="what_do_img" />
                    <span className={Styles.nav_heading}>Pac-Man<span className={Styles.font_bold}>Frog</span></span>
                </div>
                <div className={Styles.menu_div}>
                    <div>
                        <button className={Styles.menu_button} type='button' onClick={() => setDropDown(!dropDown)} style={{ cursor: 'pointer' }}>
                            <img className={Styles.menu_img} src="/img/menu_icon.png" alt="menu_icon" />
                            <div className={Styles.drop_down_div}>
                                {dropDown && <DropDown />}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className={Styles.home_container}>
                <div className={Styles.home_content}>
                    <div className={Styles.first_column}>
                        <span className={Styles.span1}>Introducing</span>
                        <span className={Styles.span2}>Pac-ManFrog</span>
                        <span className={Styles.span3}>Fueled By Community.</span>
                        <span className={Styles.span4}>Tailored for everyone.</span>
                        <span className={Styles.span5}>Pacman Frog was conceived from an exclusive idea to build a decentralized community token on Solana leading
                            the future of Web 3.0.</span>
                        <div className={Styles.buttons}>
                            <Button className={Styles.first_button} text="Enter Presale" />
                            <Button className={Styles.second_button} text="Whitepaper" />
                        </div>
                        <div className={Styles.icons}>
                            <a
                                href="https://www.instagram.com/pacmanfrogtoken"
                                className={Styles.icon_svg}>
                                <svg
                                    stroke="currentColor" fill="currentColor" strokeWidth="0"
                                    viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
                                    </path>
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/PacmanfrogToken"
                                className={Styles.icon_svg}>
                                <svg
                                    stroke="currentColor" fill="currentColor" strokeWidth="0"
                                    viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                    </path>
                                </svg>
                            </a>
                            <a
                                href="https://t.me/PACMANFROGOFFICIAL"
                                className={Styles.icon_svg}>
                                <svg
                                    stroke="currentColor" fill="currentColor" strokeWidth="0"
                                    viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className={Styles.bg_images}>
                        <img className={Styles.hero_section_bg} src="/img/hero-section-bg.png" alt="hero-section-bg" />
                        <img className={Styles.hero_section_side} src="/img/hero-section-side.svg" alt="hero-section-side" />
                    </div>
                </div>
                <div className={Styles.scroll_down}>
                    <img className={Styles.scroll_down_img} src="/img/move-downward-icon.svg" alt="move_downward.svg" />
                    <span className={Styles.scroll_down_text}><a className={Styles.scroll_down_link} href="#abt-us">SCROLL DOWN</a></span>
                </div>
            </div>
        </div>


    );
}

export default Home
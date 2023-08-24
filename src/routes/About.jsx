import React from "react";
import styles from "../styles/About.module.css"

function About() {
    return(
        <div className={styles.AboutMe} id="AboutMe">
             <header>
                <div className={styles.MyName}>
                    <h1>Muhammad Dimas Firmanda</h1>
                </div>
                    <h4>my resume</h4>
                <div id="link-page">
                    <a href="mailto:dimasfirmanda27@gmail.com">
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimage_gallery%2F205347.png&f=1&nofb=1&ipt=234995c292ee0eb50842919ece5deff24113960c40d79524ca5f9998b6b0e5e7&ipo=images" alt=""/>
                    </a>
                    <a href="https://github.com/dim-27">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fgithub%2Fgithub_PNG53.png&f=1&nofb=1&ipt=53fae1e40dcaa69f70cf20f6da6edcd7dbd70aa74449d0958068630208244722&ipo=images" alt=""/>
                    </a>
                    <a href="https://linkedin.com/in/muhammad-dimas-firmanda-282394117">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fopenvisualfx.com%2Fwp-content%2Fuploads%2F2019%2F10%2Flinkedin-icon-logo-png-transparent.png&f=1&nofb=1&ipt=f5bebff720c6f233f7e30ccfa87bc19d3bfc3b7e556aa49e22d9451595399295&ipo=images" alt=""/>
                    </a>
                </div>        
            </header>
            <section className="AboutDetails">
                <h2>about me</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </p>
            </section>
            <section className={styles.WhatIDo}>
                <h2>what i do?</h2>
                <p>
                    i develop professional webistes and apps for client
                    here are some of the technologies that i am currently using:
                </p>
                <div id="lang-list">
                    <ul>
                        <li>javascript</li>
                        <li>node.JS</li>
                        <li>react.JS</li>
                        <li>html & css</li>
                        <li>mongoDB</li>
                        <li>mySQL</li>
                    </ul>
                </div>  
            </section>
        </div>
    )
}

export default About
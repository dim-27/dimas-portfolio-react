import React from "react";
import Navbar from "../components/Navbar";
import About from "./About";
import Creations from "./Creations";
import styles from "../styles/Home.module.css"

function Home() {
    return(
        <div className={styles.HomePage} id="HomePage">
            <nav>
                <Navbar/>
            </nav>
            <section>
                <About/>
            </section>
            <section>
                <Creations/>
            </section>
        </div>
    )
}

export default Home
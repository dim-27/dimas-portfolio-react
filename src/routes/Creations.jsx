import React from "react";
import styles from "../styles/Creations.module.css"

function Creations() {
    return(
        <div className={styles.MyCreations} id="MyCreations">
            <section> 
                <h2>my creations</h2>
                <div className={styles.Portfolio}>
                    <div id="Portfolio1">
                        <h3>work1</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.           
                        </p>
                    </div>
                    <div id="Portfolio2">
                        <h3>work2</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                    <div id="Portfolio3">
                        <h3>work3</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Creations
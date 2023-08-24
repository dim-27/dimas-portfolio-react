import React from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'
import styles from '../styles/Navbar.module.css'
import Home from '../routes/Home.jsx'

const Navbar = () => {
    return(
        <div className={styles.MenuList}>
            <ul>
                <li>
                    <Link to="HomePage" spy={true} smooth={true} offset={-50} duration={500}>
                        /homepage
                    </Link>
                </li>
                <li>
                    <Link to="AboutMe" spy={true} smooth={true} offset={100} duration={500} >
                        /about-me
                    </Link>
                </li>
                <li>
                    <Link to="MyCreations" spy={true} smooth={true} duration={500}>
                        /my-creations
                    </Link>
                </li>
        </ul>
        </div>
        
        
    )
}

export default Navbar


import React from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return(
        <div className={styles.MenuList}>
            <ul>
                <li>
                    <Link to="/#" smooth={true}>
                        /homepage
                    </Link>
                </li>
                <li>
                    <Link to="/AboutMe" smooth={true} >
                        /about-me
                    </Link>
                </li>
                <li>
                    <Link to="/#my-creations" smooth={true}>
                        /my-creations
                    </Link>
                </li>
        </ul>
        </div>
        
        
    )
}

export default Navbar


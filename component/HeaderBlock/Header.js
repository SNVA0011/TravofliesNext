import { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Link from "next/link"
import { useRouter } from 'next/router';
import styles from './header.module.css'
import { PageStaicJson } from '../../static/StaticJson';
import Image from 'next/image';


export default function Header() {

    const router = useRouter();
    const HeaderUrl = PageStaicJson('header');
    const FooterUrl = PageStaicJson('footer');
    const ForHomePage = router?.asPath === '/'

    // sticky header
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);
    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 150 ? true : false;
        setSticky(stickyClass);
    };


    const location = useRouter();
    const [expanded, setExpanded] = useState(false);


    return (
        <>
            <header className={`${styles.siteHeader} ${sticky ? styles.StickyHeader : ''} ${ForHomePage ? styles.HomeHeader : ''}`}>
                <Navbar collapseOnSelect expanded={expanded} expand="md" className={styles.NavbarMain}>
                    <Container>
                        <Navbar.Brand>
                            <Link href={`/`}>
                                <a onClick={() => window.innerWidth < 768 ? setExpanded(false) : ''} className={'navbar-brand ' + (location.pathname === "/" ? 'active ' : '') + (styles.NavbarImage)}>

                                    <span className={styles.NavbarPicOne}>
                                        <Image src='/images/travoflies-logo.png' alt='travoflies'
                                            width={216}
                                            height={42}
                                        ></Image>
                                    </span>

                                    <span className={styles.NavbarPicTwo}>
                                        <Image src='/images/travoflies-logo-white.png' alt='travoflies'
                                            width={216}
                                            height={42}
                                        ></Image>
                                    </span>
                                </a>
                            </Link>
                        </Navbar.Brand>


                        <div onClick={() => window.innerWidth < 768 ? setExpanded(expanded ? false : "expanded") : ''} className={`menu ${expanded ? 'open' : ''} ${styles.NavToggle}`}>
                            <span className={`${styles.MenuItem} ${expanded ? styles.ActiveOne : ''}`}></span>
                            <span className={`${styles.MenuItem} ${expanded ? styles.ActiveTwo : ''}`}></span>
                            <span className={`${styles.MenuItem} ${expanded ? styles.ActiveThree : ''}`}></span>
                        </div>


                        <Navbar.Collapse className={`${styles.NavbarColp} ${ForHomePage ? '' : styles.Other}`}>
                            {HeaderUrl?.length > 0 && <Nav className="ml-auto">
                                <ul className={`navbar-nav ${styles.NavbarNav}`}>
                                    {HeaderUrl.map((item, index) => {
                                        return (
                                            <li className={`nav-item ${styles.NavbarItem}`} key={index}>
                                                <Link href={item.url}>
                                                    <a onClick={() => window.innerWidth < 768 ? setExpanded(expanded ? false : "expanded") : ''} className={'nav-link ' + (location.pathname === item.url ? `${styles.NavbarLinkAct} ` : '') + (styles.NavbarLink)}>
                                                        {item.title}
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </Nav>}

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            {expanded && <div className={`d-md-none ${styles.offcanvasBackdrop} ${ForHomePage ? '' : styles.Other}`} onClick={() => window.innerWidth < 768 ? setExpanded(false) : ''}></div>}

            <div className='new_header_area_empty full-w'></div>

            <a href={FooterUrl.ConnectWithUs.LinksUrl[1].url} className={`${styles.PhoneNoWrp} d-flex align-items-center`}>
                <div className={styles.PhoneNo}>
                    <Image src='/images/phone-icon.png' alt='phone-icon'  width={36}
                                        height={36}/>
                </div>
                <div className={styles.PhoneNoImg}>
                    Fell free to Ask
                    <b className='d-block'>{FooterUrl.ConnectWithUs.LinksUrl[1].title}</b>
                </div>
            </a>
        </>
    )
}









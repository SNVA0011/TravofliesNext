import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Link from "next/link" 
import { useRouter } from 'next/router';
import { HeaderUrls } from '../static/HeaderUrls';
export default function Header({ homepgurl, langtext, urls }) {
    const location = useRouter();

    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <header className="site-header p-0">
                <Navbar collapseOnSelect expanded={expanded} bg="" expand="lg">
                    <Container>
                        <Navbar.Brand>
                            <Link href={`/`}>
                                <a onClick={() => window.innerWidth < 1200 ? setExpanded(false) : ''} className={'navbar-brand ' + (location.pathname === "/" ? 'active' : '')}>
                                    <img src='/images/logo.svg' alt='logo' width={211}></img> 
                                </a>
                            </Link> 
                        </Navbar.Brand> 
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''}></Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            {urls?.length > 0 && <Nav className="mx-auto">
                                <ul className='navbar-nav'>
                                    {urls.map((item, index) => {
                                        return (
                                            <li className='nav-item mx-lg-2' key={index}>
                                                <Link href={item.url}>
                                                    <a onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} className={'nav-link ' + (location.pathname === item.url ? 'active' : '')}>
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
            <div className='new_header_area_empty full-w'></div> 
        </>
    )
}









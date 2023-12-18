import Header from './Header'
import Footer from './Footer'
import { HeaderUrls } from '../static/HeaderUrls'
import { FooterUrls } from '../static/FooterUrls'

export default function Layout({ children}) { 
    return (
        <>
            <Header/> 
            <>{children}</> 
            <Footer />
        </>
    )
}
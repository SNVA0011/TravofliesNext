 
import Footer from './FooterBlock/Footer'
import Header from './HeaderBlock/Header'

export default function Layout({ children}) { 
    return (
        <>
            <Header/> 
            <>{children}</> 
            <Footer />
        </>
    )
}
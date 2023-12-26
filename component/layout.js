
import { useRouter } from 'next/router'
import Footer from './FooterBlock/Footer'
import Header from './HeaderBlock/Header'

export default function Layout({ children }) {
    const router = useRouter()
    const ErrorPage = router.pathname !== '/_error'

    return (
        <>
            {ErrorPage && <Header />}
            <>{children}</>
            {ErrorPage && <Footer />}
        </>
    )
}
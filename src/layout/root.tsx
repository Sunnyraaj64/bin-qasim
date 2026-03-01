import Footer from '@/components/sections/footer'
import HeaderOne from '@/components/headers/headerOne'
import WhatsAppButton from '@/components/ui/whatsappButton'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import useAnimation from '@/hooks/useAnimation';

const RootLayout = () => {
    useAnimation()
    return (
        <>
            <HeaderOne />
            <Outlet />
            <Footer />
            <WhatsAppButton />
            <ScrollRestoration />
        </>
    )
}

export default RootLayout
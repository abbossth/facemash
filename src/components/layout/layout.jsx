import Header from "../header/header"
import { Outlet } from "react-router-dom"
import Footer from "../footer/footer"

const Layout = () => {
    return (
    <main role="main">
        <Header />
        <div style={{
            minHeight: '84.5vh'
        }}>
            <Outlet />
        </div>
        <Footer />
    </main>
    )
}

export default Layout

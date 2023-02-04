import Header from "../header/header"
import { Outlet } from "react-router-dom"
import Footer from "../footer/footer"

const Layout = () => {
    return (
    <main role="main" style={{
        height: '100vh'
    }}>
        <Header/>
        <div>
            <Outlet />
        </div>
        <Footer />
    </main>
    )
}

export default Layout

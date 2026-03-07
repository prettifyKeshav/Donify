import Header from "../organisms/Header"
import Footer from "../organisms/Footer"

const MainTemplates = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default MainTemplates
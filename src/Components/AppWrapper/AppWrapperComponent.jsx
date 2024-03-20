import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MainComponent } from "../Main/MainComponent";

function AppWrapperComponent() {
    return(
        <>
            <Header />
            <MainComponent />
            <Footer />
        </>
    )
}

export {AppWrapperComponent}
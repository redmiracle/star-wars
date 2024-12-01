import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {defaultHero} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";

function App() {
    const [hero, setHero] = useState(defaultHero);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <SWContext.Provider value={{
                hero, changeHero: setHero,isError,setIsError,setIsLoading
            }}>
                <div className={!isLoading ? "opacity-0 z-1" :''}>
                <Header/>
                <Main/>
                <Footer/>
                </div>

            </SWContext.Provider>
        </>
    )
}

export default App
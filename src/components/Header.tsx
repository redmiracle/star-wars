import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";

const Header = () => {
    const {hero,isError} = useContext(SWContext);


    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation/>
            <div className={''}>
            <h1 className="text-center py-6 text-3xl">
                {!isError?characters[hero].name:"Error"}</h1>
            </div>
        </header>
    );
};

export default Header;
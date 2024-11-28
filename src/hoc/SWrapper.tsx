import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "../components/ErrorPage.tsx";


export const SWrapper=(WrappedComponent)=>props=>{
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if (!characters[heroId]) {
            return;
        }
        changeHero(heroId);
    }, [heroId])

    return characters[heroId] ? (
        <div>
            <WrappedComponent {...props} heroId={heroId} />
        </div>
    )
    :<ErrorPage/>
}
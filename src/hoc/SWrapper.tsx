import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router-dom";
import { ComponentType, useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "../components/ErrorPage.tsx";



export const SWrapper =<T extends object>  (WrappedComponent: ComponentType<T>) => (props:T) => {
    let {heroId = defaultHero} = useParams();
    const {changeHero,setIsLoading} = useContext(SWContext);

    useEffect(() => {
        setIsLoading(true);
        if (!characters[heroId]) {
            return;
        }
        changeHero(heroId);
    }, [heroId])

    return characters[heroId] ? (
            <div>
                <WrappedComponent {...props} heroId={heroId}/>
            </div>
        )
        : <ErrorPage/>
}
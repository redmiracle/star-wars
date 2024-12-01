import {createContext} from "react";
import {SWContextValue} from "./types";
import {defaultHero} from "./constants.ts";


export const SWContext = createContext<SWContextValue>({
    hero: defaultHero,
    changeHero: (hero: string) => console.log(hero),
    isError:false,
    setIsError:(isError: boolean) =>console.log(isError),
    setIsLoading:(isLoading: boolean) => console.log(isLoading),
});
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";


const ErrorPage = () => {
    const{setIsError}=useContext(SWContext)

     useEffect(() => {
         setIsError(true)
         return () => {
             setIsError(false);
         }
     },[])

    return (
        <div className={'text-3xl text-center tracking-widest leading-loose'}>
            O-o-ops, something went wrong!
        </div>
    );
};

export default ErrorPage;
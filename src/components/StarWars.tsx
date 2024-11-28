import {starWarsInfo} from "../utils/constants.ts";

import {SWrapper} from "../hoc/SWrapper.tsx";

const StarWars = () => {


    return (
            <div className={'text-[2em] text-justify tracking-[.2em] leading-normal'}>
                {starWarsInfo}
            </div>
        )

};

export default SWrapper(StarWars) ;
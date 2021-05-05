import React from "react";
import { InfoSection, } from "../../components";
import { homeObjFour, homeObjTwo } from "../../Data";

const SignUp = () => {
    return (
        <>
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjFour} />
        </>
    );
};

export default SignUp;

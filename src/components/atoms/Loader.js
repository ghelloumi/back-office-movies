import React from 'react'
import Image from "./Image";
import {Images} from "../../constants";

const Loader = () => (
    <div className="loader">
        <Image src={Images.loader} alt="Loading..."/>
    </div>
)

export default Loader

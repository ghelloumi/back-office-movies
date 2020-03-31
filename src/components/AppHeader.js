import React from 'react';
import Image from "./atoms/Image";
import {Images, Texts} from "../constants";

const AppHeader = () => {
    return (
        <div className="App__header">
            <Image src={Images.logo} alt="App logo"/>
            <span>{Texts.APP_TITLE}</span>
        </div>
    );
}

export default AppHeader;

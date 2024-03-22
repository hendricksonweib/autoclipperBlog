import React from 'react';
import MiranteSessionImg from "../src/assets/miranteSession.svg";
import '../src/css/MiranteSession.css';
import TitleMirantesession from './TitleMirantesession';

function BigCase() {
    return (
        <div className="BigCaseBg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <img className="MiranteSessionImg" src={MiranteSessionImg} alt="MiranteSessionImg" />
                    </div>
                    <div className="col-md-5">
                        <TitleMirantesession/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BigCase;

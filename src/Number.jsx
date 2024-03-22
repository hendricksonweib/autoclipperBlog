import React from 'react';
import '../src/css/MiranteSession.css';

function Number(props) {
    const { title, paragraph } = props;

    return (
        <div className="d-flex justify-content-center align-items-center">
                <h1 className="numberTxt">{title}<span className="spanTxt">%</span></h1>
            <div className="col-6 mx-4 text-star">
                <p className="numberP">{paragraph}</p>
            </div>
        </div>
    );
}

export default Number;

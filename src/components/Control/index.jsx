import React from 'react';
import Search from '../Search';
import Sort from '../Sort';

Control.propTypes = {

};

function Control(props) {
    return (
        <div className="row">
            <div className="col col-sm-7 col-md-7 col-lg-7">
                <Search />
            </div>
            <div className="col col-sm-5 col-md-5 col-lg-5">
                <Sort />
            </div>
        </div>
    );
}

export default Control;
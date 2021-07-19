
import React from 'react';



const SlotM = (props) => {


    let { x, y, z } = props


    if ((x === y) && (y === z)) {
        return (
            <>

                <div className="inner-slot">
                    <h1>{x} {y} {z}</h1>
                    <h1>This is matching...</h1>
                </div>
            </>

        );
    }
    else {
        return (
            <>

                <div className="inner-slot">
                    <h1>{x} {y} {z}</h1>
                    <h1>This is Not matching...</h1>
                </div>
            </>

        );

    }

}


export default SlotM;
import React from 'react';
import AddressLabel from './AddressLabel';

function Envelope(prop) {

    return (
        <>
                <AddressLabel person={prop.toPerson} className="ret_add"/>
                <AddressLabel person={prop.fromPerson} className="rec_add"/>
        </>
    );
}

export default Envelope;

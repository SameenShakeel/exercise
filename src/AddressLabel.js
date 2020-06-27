import React from 'react'

export default function AddressLabel(prop) {
    return (
        <div>
            <p>{prop.person.name}</p>
            <p>{prop.person.address}</p>
            <p>{prop.person.city}, {prop.person.state} {prop.person.zipcode}</p>
        </div>
    )
}

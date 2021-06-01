import React from 'react';

export default function LabelText({label, text}: any) {
    return (
        <div className="country-info">
            <label className="country-info__label">{label} : </label>
            <p className="text country-info__text">{text}</p>
        </div>
    )
}
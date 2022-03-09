import React from 'react';

export default function BorderItem({name} : any){
    return(
        <div className="borderItem">
            <p className="borderItem__text">{name}</p>
        </div>
    )
}
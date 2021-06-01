import React from 'react';

export default function NotFound(){
    return(
      <div className="notfound">
          <i className="fas fa-exclamation-triangle notfound__icon"></i>
          <h2 className="notfound__text">Looks like the page you're looking for does not exist.</h2>
      </div>  
    )
}
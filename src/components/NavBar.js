import React from 'react';

export default function NavBar(props){

    const {tittle} = props; 

    return(
        <nav className="navbar navbar-light bg-light">
            <div className="container">        
                <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"/>
                {tittle}
            </div>            
      </nav>
    );
} 
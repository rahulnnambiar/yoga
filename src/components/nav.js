import React from 'react';
import './nav.css';

const Nav = props =>{  
    return(
        <>  
            <div className='Navigation'>
                <div className='CompanyName'>
                    <h3>Yoga</h3>
                </div>
                <div className='Bookaclass'>
                    <button>Book a Class</button>
                </div>
            </div>
        </>
    )
}
export default Nav
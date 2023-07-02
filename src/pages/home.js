import React from 'react';
import Nav from '../components/nav.js'
import Footer from '../components/footer.js'
import './home.css'

const Home = props =>{  
    return(
        <>  
            <Nav/>
            <div className='main-div'>
                <h1>You aren't just welcome here, you belong here</h1>
                <button>Get Started</button>
            </div>
            
            <Footer/>
        </>
    )
}
export default Home
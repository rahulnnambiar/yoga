import React from 'react';
import './footer.css'

const Footer = props =>{  
    return(
        <>  
            <div className='Footer'>
                <div className='Footer-1'>
                    <h3>Follow us on</h3>
                    <div className='Instagram'>Instagram</div>
                    <div className='Twitter'>Twitter</div>
                    <div className='Facebook'>Facebook</div>
                </div>

                <div className='Footer-2'>
                    <div className='CompanyDetails'>
                        <p>We believe that yoga is for everyone and every body, which is why, from beginner to advanced, all levels of practice are welcome in our studios. </p>
                    </div>
                    <div className='AboutUs'>AboutUs</div>
                    <div className='ContactUs'>ContactUs</div>
                    <div className='Faq'>FAQ</div>
                </div>

                <div className='Footer-3'>
                    <div className='Terms'>Terms of Service</div>
                    <div className='Privacy'>Privacy Policies</div>
                    <div className='Copyright'>2023 Yoga. All rights reserved</div>
                </div>

            </div>
            
        </>
    )
}
export default Footer
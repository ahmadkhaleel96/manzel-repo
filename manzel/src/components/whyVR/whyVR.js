import React from "react";
import BenefitsOfVR from '../../assets/why-vr.jpg'
import './whyVR.css'

const WhyVR = () => {
    return (
        <div className="why-container" id='why' >
            <div className="why" data-aos='fade-up' data-aos-duration='2000'>Why Vr?</div>
            
            <div className="reason-contianer" data-aos='fade-right' data-aos-duration='2000'>
            <div className="reason">Enhanced Visualization</div>
            <div className="Explaination">Studies showed that VR is a major factor in enhancing Visualization</div>
            </div>

            <div className="reason-contianer" data-aos='fade-right' data-aos-duration='2000'>
            <div className="reason">Improved Education Quality</div>
            <div className="Explaination">VR Opens a whole different aspect of education where all the written words are a reality</div>
            </div>

            <div className="reason-contianer" data-aos='fade-right' data-aos-duration='2000'>
            <div className="reason">Collaborative Learning</div>
            <div className="Explaination">Education is made better with other students around espcially students with other majors and universities!!</div>
            </div>

            <div className="reason-contianer" data-aos='fade-right' data-aos-duration='2000'>
            <div className="reason">Global Outreach</div>
            <div className="Explaination">Want to interact with people outside your university? we will do you one better how about outside the country?</div>
            </div>

            <div className="reason-contianer" data-aos='fade-right' data-aos-duration='2000'>
            <div className="reason">Better Student Appraisal</div>
            <div className="Explaination">A common issue students have is old out-dated method of education.</div>
            </div>

            <div className="reason-contianer" data-aos='fade-right' data-aos-duration='2000'>
            <div className="reason">Improved Research</div>
            <div className="Explaination">VR gives the ability to interact with anyone with the same interset and reasearch is a big plus</div>
            </div>

            <div className="why-image" data-aos='fade-left' data-aos-duration='2000'>
            <img src={BenefitsOfVR} alt='why VR' />
            </div>
        </div>
    )
}

export default WhyVR;
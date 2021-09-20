import React from 'react'

const ServicesData= (props) =>{
    return (
        <div className="col-lg-4 col-md-6 text-center">
            <div className="services-selection">
                <div className="services-icon">
                    <i className={props.icon}></i>
                </div>
                <div className="services-description">
                    <p>{props.title}</p>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesData

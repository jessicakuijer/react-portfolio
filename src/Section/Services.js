import React, {Component} from 'react'
import ServicesData from '../Component/ServicesData';
import servicesList from '../data';

export class Services extends Component {

    constructor() {
        super();
        this.state = {
            services: servicesList
        }
    }

    render() {
        return (
            <section id="services">
                <div className="container">
                    <div className="section-title">
                        Services
                    </div>
                    <div className="services-detail">
                        <div className="row">
                        { this.state.services.map( (service) => 
                                <ServicesData key={service.id} icon={service.icon} title={service.title} desc={service.desc} /> )}
                        </div>
                    </div>
                </div>
            </section>
        )

    }
}
    


export default Services

import React, {useState} from 'react'
import ServiceApi from './API/ServiceAPI'

const Services = () => {

    const [service, setService] = useState(ServiceApi);
    console.log(service)

    return(
        <>
        <section className="service-main-container" id='service'>
            <div className="container service-container">
                <h1 className="main-heading text-center fw-bolder">How To Send Money?</h1>
                <div className="row">

                    {
                        service.map((curElem)=>{
                            const{id, logo, title, info}=curElem;
                            return (<>
                             <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" key={id}>
                        <i className={`fontawesome-style ${logo}`}></i>
                        <h2 className="sub-heading">{title}</h2>
                        <p className="service-para">{info}</p>
                    </div>
                            </>)
                        })
                    }

                   
                </div>
            </div>
        </section>
        </>
    )
}

export default Services
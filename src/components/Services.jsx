import Title from './Title'
import {services} from '../../data';
import Service from './Service';
const Services = () => {
  return (

    <section className="section services" id="services">
<Title title="our" subTitle="services" />
        <div className="section-center services-center">
                            {services.map((service)=>{
                return (<Service icon={service.icon} title={service.title} info={service.info} />)
            })}

{/* first service  */}
{/* second icon  */}
{/* third icon  */}

        </div>
    </section>
  )
}

export default Services
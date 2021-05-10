import React from 'react'
import services1 from './../assets/services1.png'
import services2 from './../assets/services2.png'


function Services(){
    return (
<section className="services">
<div className="services_item">
    <img src={services1} className="services_item--img"/>
    <p className="services_item--p"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae nulla eaque dolores maxime dolorum id deserunt at delectus eius. Dicta voluptatum eum nemo laboriosam accusamus iure dolorum cum illum.</p>
</div>
<div className="services_item">
    <img src={services2} className="services_item--img"/>
    <p className="services_item--p"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae nulla eaque dolores maxime dolorum id deserunt at delectus eius. Dicta voluptatum eum nemo laboriosam accusamus iure dolorum cum illum.</p>
</div>
<div className="services_item">
    <img src={services2} className="services_item--img"/>
    <p className="services_item--p"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae nulla eaque dolores maxime dolorum id deserunt at delectus eius. Dicta voluptatum eum nemo laboriosam accusamus iure dolorum cum illum.</p>
</div>
</section>

    )
}


export default Services
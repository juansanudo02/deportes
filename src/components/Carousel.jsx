import  React from 'react'
import '../style/Carousel.scss'
import jaroslav from '../icons/jaroslav.jpg'
import nicolas from '../icons/nicolas.jpg'
import oscar from '../icons/oscar.jpg'
import left from '../icons/arrow-left.svg'
import right from '../icons/arrow-right.svg'



 function Carousel() {


  return (
     <>
   <section className="slider">

<div className="slider__container container">
    <img src={left} class="slider__arrow" id="before"/>
    <section className="slider__body slider__body--show" data-id="1">
        <div className="slider__text">
            <h2 className="subtitle">¡Hola! mi nombre es Jordan Alenxander</h2>
            <p className="slider__review">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Consectetur vel pariatur ullam, unde blanditiis eligendi
                  aspernatur aut,
            </p>
        </div>
        
              <figure className="slider__picture">
                  <img src={jaroslav} className="slider__img"/>
              </figure>
    </section>
    <img src={right} className="slider__arrow" id="next"/>




         {/* Second image  */}

    
    <section className="slider__body" data-id="2">
        <div className="slider__text">
            <h2 className="subtitle">¡Hola! mi nombre es Zaquead Zacon</h2>
            <p className="slider__review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Neque laboriosam odit autem, magni incidunt eos debitis 
                 impedit officiis.
            </p>
        </div>
        
              <figure className="slider__picture">
                  <img src={nicolas}className="slider__img"/>
              </figure>
    </section>
    


       {/* Third image */}


        
        <section className="slider__body" data-id="3">
            <div className="slider__text">
                <h2 className="subtitle">¡Hola! mi nombre es Tiburcia Gutierrez</h2>
                <p className="slider__review">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Cum consectetur sapiente cumque nobis sed explicabo!
                </p>
            </div>
            
                  <figure className="slider__picture">
                      <img src={oscar} className="slider__img"/>
                  </figure>
        </section>
        
    

    </div>

</section>
   
  
    
    
     
    </>
    
  );
}

export default Carousel

import  React from 'react'
import '../style/Carousel.scss'
import futbol1 from '../icons/futbol1.jpg'
import futbol2 from '../icons/futbol2.jpg'
import futbol3 from '../icons/futbol3.jpg'
import left from '../icons/arrow-left.svg'
import right from '../icons/arrow-right.svg'



 function Carousel() {


  return (
     <>
   <section className="slider">

<div className="slider__container container">
    <img src={left} class="slider__arrow" id="before"/>
    <section className="slider__body slider__body--show" data-id="1">
       
        <img src={futbol1} className="slider__img"/>
            <h2 className="subtitle">El futbol es mi pasión</h2>
            <p className='subtitle1'>Hacer deporte nos ayuda tener mejor salud fisica y mental,
            <br /> debido a que oxigena nuestro cerebro y ayuda al mejor circulamiento <br />
            de la sangre</p>
        
        
              
    </section>
    <img src={right} className="slider__arrow" id="next"/>




         {/* Second image  */}

    
    <section className="slider__body" data-id="2">
        {/* <div className="slider__text">
            <h2 className="subtitle">¡Hola! mi nombre es Zaquead Zacon</h2>
            <p className="slider__review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Neque laboriosam odit autem, magni incidunt eos debitis 
                 impedit officiis.
            </p>
        </div> */}
        
              <figure className="slider__picture">
                  <img src={futbol2}className="slider__img"/>
              </figure>
    </section>
    


       {/* Third image */}


        
        <section className="slider__body" data-id="3">
            {/* <div className="slider__text">
                <h2 className="subtitle">¡Hola! mi nombre es Tiburcia Gutierrez</h2>
                <p className="slider__review">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Cum consectetur sapiente cumque nobis sed explicabo!
                </p>
            </div> */}
            
                  <figure className="slider__picture">
                      <img src={futbol3} className="slider__img"/>
                  </figure>
        </section>
        
    

    </div>

</section>
   
  
    
    
     
    </>
    
  );
}

export default Carousel

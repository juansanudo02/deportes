import  React from 'react'

import Foxes from '../../src/icons/foxes.png'
import Dragons from '../../src/icons/dragons.png'

 function Results() {


  return (
    <>
   
   <div class="container-score">
                    <h1>Resultados</h1>
                    <div class="title-box">
                        <p>Local </p>
                        <p id="elapsed">45'</p>
                        <p>Visitor </p>
                    </div>
                    <div class="title-box">
                        <div class="team">
                            <img  id="homeLogo" src={Foxes} />
                            <p id="homeName">Foxes</p>
                        </div>
                        <p id="goals">3  -   1</p>
                        <div class="team">
                            <img id="awayLogo" src={Dragons}/>
                            <p id="awayName">Dragons</p>
                        </div>


                        

                        
                        
                    </div>
                    <hr/>
                    <div id="matchTable" class="matches-table">


            </div>
        </div>
    
      
     
    
     
    </>
    
  );
}

export default Results

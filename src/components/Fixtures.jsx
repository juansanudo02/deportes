import  React from 'react'
import '../style/Fixtures.scss'

 function Fixtures() {


  return (
    <>
   
   <div class="container">
                    <h1>ScoreBoard</h1>
                    <div class="title-box">
                        <p>Local Team</p>
                        <p id="elapsed">45'</p>
                        <p>Visitor Team</p>
                    </div>
                    <div class="title-box">
                        <div class="team">
                            <img  id="homeLogo" />
                            <p id="homeName">Team name</p>
                        </div>
                        <p id="goals">3  -  1</p>
                        <div class="team">
                            <img id="awayLogo"/>
                            <p id="awayName">Team name</p>
                        </div>
                        
                    </div>
                    <hr/>
                    <div id="matchTable" class="matches-table">


            </div>
        </div>
    
      
     
    
     
    </>
    
  );
}

export default Fixtures

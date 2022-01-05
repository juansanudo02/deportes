import  React from 'react'
import '../style/Header.scss'




 function Header() {

//   addEventListener('DOMContentLoaded',() =>{
//     const btn_menu = document.querySelector('.btn_menu')
//     if(btn_menu){
//         btn_menu.addEventListener('onClick',()=>{
//             const menu_items = document.querySelector('.menu_items')
//             menu_items.classList.toggle('show')
//         })
//     }
// })


 const handleClick = e =>{
   console.log(e)
 }

  return (
    <>
   
   
    <header className='menu-principal'>
      
     <nav className="menu">
        <label className="logo">sportspress</label>
            <ul className="menu_items">
                <li className="active"><a href="#">Inicio</a></li>
                <li><a href="#">Proximos Encuentros</a></li>
                <li><a href="#">Resultados</a></li>
                <li><a href="#">Standing</a></li>
                <li><a href="#">Jugadores</a></li>
                <li><a href="#">Noticias</a></li>
            </ul>
            <span  className="btn_menu">
                <i className="fa fa-bars"></i>
            </span>
      </nav>
   

        
    </header>
    
    
     
    </>
    
  );
}

export default Header

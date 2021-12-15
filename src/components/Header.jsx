import  React from 'react'
import '../style/style.scss'
import search from'../icons/search.svg'
import emblem from '../icons/emblem.png'


 function Header() {
  return (
    <>
      

    <header className='menu'>
      
        <figure className='logo'>
            <img  src={emblem}/>
        </figure>

          <ul >
            <li><a href='#'>Home</a></li><hr />
            <li><a href='#'>Fixtures</a></li><hr />
            <li><a href='#'>Results</a></li><hr />
            <li><a href='#'>Players</a></li><hr />
            <li><a href='#'>Standing</a></li>  
          
          </ul>

          <div className='search'>
                <form className='search-form' autocomplete="off">
                <div>
                  <input className='search-form-input' type="text" name="q" placeholder="Buscar" />
                </div>
              </form>
          </div>
        
    </header>
     
    </>
  );
}

export default Header

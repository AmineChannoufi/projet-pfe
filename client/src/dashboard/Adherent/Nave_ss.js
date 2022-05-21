import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
function Nave_ss() {
  return (
    <div>
<div className='header'>
      <div className='search-wrapper'>
        <span className='las la-search'></span>
        <input type='search' placeholder='Search here' />
      </div>
  
      <div className='user-wrapper'>
  
        <div>
         
          <small> Welcome Back !</small>
        </div>
  
      </div>
  
    </div>
    <div className='sidebar'>
            <div className='sidebar-brand'>
            <h1><span className='las la-accusoft'></span><img className='img' src={logo}/></h1>
            </div>
            <div className='sidebar-menu'>
              <ul>
                <li >
                  <Link to="/NormalDashboard" className='active link'>
                    <span className='las la-igloo'>
                    </span>
                    <span>Tableau de bord</span>
                  </Link>
                </li>
                <li>
                <Link to="/Demande" className='active link'>
                    <span className='lab la-flickr'>
                    </span>
                   
                    <span>Demande d'autorisation </span>
                  </Link>
                </li>
                
                <li>
                <Link to="/Feedback" className='active link'>
                    <span className='lar la-comment-dots'>
                    </span>
                    <span> Poser une question</span>
                  </Link>
                </li>
                <li>
                <Link to="/Suivie" className='active link'>
                    <span className='lar la-comment-dots'>
                    </span>
                    <span>Suivie Demande</span>
                  </Link>
                </li>
              
                <li>
                <Link to="/SuivieComent" className='active link '>
                    <span className='las la-envelope-open-text'>
                    </span>
                    <span className='boite'>Boite de reception</span>  <p className='notif'>0</p>   
                    
                  </Link>
                </li>
                <li className='logout'>
                <button  id="btn"className='active link' >
                    <span className='la la-sign-out-alt'>
                    </span>
                    <span>Se déconnecter</span>
                  </button>
                </li>
                
              </ul>
    
            </div>
          </div>

    </div>
  )
}

export default Nave_ss
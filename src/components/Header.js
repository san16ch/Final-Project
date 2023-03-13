import react from "react";
import { Link } from "react-router-dom";
import AuthenticateService from "./AuthenticateService";
import './header.css'
import DatePicker from "react-datepicker";
import { useState } from "react";
import Languageoption from '../components/language-dropdown'
import { useTranslation } from 'react-i18next'
import i18next from "i18next"


function Header()
{
    const myStyle={ 
  backgroundImage: 
 "url('https://images.designtrends.com/wp-content/uploads/2015/11/30144027/Plain-Blue-Backgrounds1.jpg')",
        height:'10vh',
        marginTop:'0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color:"white"
    };
   
    const {t} = useTranslation();
    const handleClick=(e)=>{
    i18next.changeLanguage(e.target.value)
}
    return(
        <div className="gradient__bg">
            <nav className="navbar navbar-expand-lg shadow-5-strong " style={myStyle}>
                <div className="container  ">
                
                <a class="mya navbar-brand" href="/" onClick={AuthenticateService.logout} style={{color:"white"}}>
                <img src="https://img.freepik.com/premium-vector/flat-design-farmers-market-logo_23-2149331958.jpg?w=740"  alt="Loading..." width="40" height="30" class="rounded float-start d-inline-block align-text-top me-3"/>
                 KisanSEVA
                 </a>
 
                    <button className="navbar-toggler rounded-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav" >
                        <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto data-toggle-pill">
                        {/* <li className="nav-item ">
                                <a className="nav-link active" aria-current="page" href="/terms-condition">Terms & Condition</a>
                            </li> */}
                            
                             <li className="nav-item dropdown" > 
                             <div className="langg" >
                            <Languageoption onChange={(e)=> handleClick(e)} />
                            </div>
                            </li> 
                            <li className="nav-item ">
                                <a className="mya nav-link active" aria-current="page" href="/" style={{color:"white"}}>{t('Home')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="mya nav-link" href="https://en.wikipedia.org/wiki/Farm" style={{color:"white"}}>{t('Info')}</a>
                            </li>
                            { ! AuthenticateService.isUserLoggedIn()
                            
                            && 
                            
                            
                            <li className="nav-item dropdown">
                                <a className="mya nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{color:"white"}}>
                                    {t('Sign-Up')}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/farmer-reg" >Farmer</Link></li>
                                    <li><Link className="dropdown-item" to="/buyer-reg" >Buyer</Link></li>
                                </ul>
                            </li>
                            
                            }
                            { ! AuthenticateService.isUserLoggedIn() && 
                            <li className="nav-item dropdown">
                                <a className="mya nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
                                    {t('Login')}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/farmer-login" >Farmer Login</Link></li>
                                    <li><Link className="dropdown-item" to="/buyer-login">Buyer Login</Link></li>
                                    <li><Link className="dropdown-item" to="/admin-login">Admin Login</Link></li>
                                </ul>
                            </li>}

                            {  AuthenticateService.isUserLoggedIn() && 
                            <li className="nav-item">
                            <a className="mya nav-link" href="/" onClick={AuthenticateService.logout} style={{color:"white"}}>Logout</a>
                            
                            </li>
                            }

                            {           
                                (sessionStorage.getItem('userType') === 'buyer') && <li className="nav-item">
                                <a className="mya nav-link ms-3" href="/buyer-myCart" ><img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" style={{width : "30px" ,height: "30px",color:"white"}}></img><span>My Cart</span></a>
                                </li> 
                                     
                            }   

           
                               { AuthenticateService.isUserLoggedIn() &&
                                <li className="nav-item">
                                <a className="mya nav-link ms-3" href={"/"+sessionStorage.getItem('userType')+"/profile"} style={{color:"white"}} ><span>My Profile</span></a>
                                </li> 
                                }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Header;
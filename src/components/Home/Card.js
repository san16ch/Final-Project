import React from 'react'
import Languageoption from '../../components/language-dropdown'
import { useTranslation } from 'react-i18next'
import i18next from "i18next"

function Card() {
   const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
  return (
    <div className='container'>
      
    <div className='row col-12'>
        <div class="col-md-6 mt-10 ">
        
         <div class="card border-warning flex-md-row mb-4 shadow-sm h-md-250 bg-light " style={{borderRadius:"40px",marginTop:"20px"}}>
            <div class="card-body d-flex flex-column align-items-start">
               <strong class="d-inline-block mb-2 text-warning">{t('You Can Buy')} !!!</strong>
               
         
               <p class="card-text mb-auto">{t('Buy Product From Recognised Farmers With Market Price')}</p>
               <a class="btn btn-outline-warning btn-sm" href="/buyer-login">{t('Continue Buying')}</a>
            </div>
            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="https://img.freepik.com/premium-vector/flat-design-farmers-market-logo_23-2149331958.jpg?w=740" style={{borderRadius:"40px",width: "200px", height: "250px"}}/>
         </div>
      </div>
      <div class="col-md-6 mt-10 ">
         <div class="card border-warning flex-md-row mb-4 shadow-sm h-md-250 bg-light " style={{borderRadius:"40px",marginTop:"20px"}}>
            <div class="card-body d-flex flex-column align-items-start">
               <strong class="d-inline-block mb-2 text-warning">{t('You Can Sell')} !!!</strong>
               
          
               <p class="card-text mb-auto">{t('You Can Sell Your Product To Recognised Buyer')}</p>
               <a class="btn btn-outline-warning btn-sm" href="/farmer-login">{t('Continue Selling')}</a>
            </div>
            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="https://img.freepik.com/premium-vector/flat-design-farmers-market-logo_23-2149331958.jpg?w=740" style={{borderRadius:"40px",width: "200px", height: "250px"}}/>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Card
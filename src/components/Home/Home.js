
import Card from "./Card";
import Slider from "./Slider";
import './home.css'
import { useTranslation } from 'react-i18next'
import i18next from "i18next" 
function Home() {
    const {t} = useTranslation();
    const myStyle = {
        backgroundImage:
            "url('https://cdn.pixabay.com/photo/2013/07/25/12/07/tractor-167079_1280.jpg')",
        height: '130vh',
        marginTop: '-60px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };


    return (
        <div className="gradient__bg">
            <div>
                <div style={myStyle}  >
                    <h1 className="overlay-text" style={{position:"relative",color:"white",textAlign:"center",top:'100px'}}>{t('Welcome to the Kisan Seva Portal')}</h1>
                    <h4 className="overlay-text" style={{position:"relative",color:"white",textAlign:"center",top:'100px'}}>{t('Revolutionizing Agriculture Services')}</h4>
                </div>
            </div>

            <div className="container-fluid d-flex justify-content-evenly" >

                 <Card />
                              
            </div>

           <Slider />

        </div>
)};
export default Home;
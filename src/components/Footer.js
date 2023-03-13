import { useTranslation } from 'react-i18next'

function Footer() {
    const {t} = useTranslation();
    

    return (
            <footer
                class="text-center text-lg-start text-white"
                style={{ backgroundColor: "#1c2331" }}
            >

                <section
                    class="d-flex justify-content-between p-4"
                    style={{ backgroundColor: "rgb(72, 129, 153)" }}
                >

                    <div class="me-5">
                        <h6 class="text-uppercase fw-bold">{t('Get Connected With Us On Social Media')}</h6>
                    </div>

                    <div>
                        <a href="https://www.instagram.com/accounts/login/?hl=en" class="text-white me-4">
                            <img className="mt-2 me-2" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" style={{ height: "30px", width: "30px" }}></img>
                        </a>

                        <a href="https://www.facebook.com/login/" class="text-white me-4">
                            <img className="mt-2 me-2" src="https://cdn-icons-png.flaticon.com/512/733/733547.png?w=740&t=st=1678247083~exp=1678247683~hmac=559cb0aa14c6629179b6ba79b3721bb7c98623b80952200549a05d49e5325638://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.pngttps://cdn-icons-png.flaticon.com/512/2111/2111463.png" style={{ height: "30px", width: "30px" }}></img>
                        </a>
                        <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" class="text-white me-4">
                            <img className="mt-2 me-2" src="https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png" style={{ height: "30px", width: "30px" }}></img>
                        </a>

                    </div>
                   

                </section>

                <section class="">
                    <div class="container-fluid text-center text-md-start mt-5">

                        <div class="row mt-3">

                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 class="fw-bold">{t('KisanSEVA')}</h6>
                                <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p>
                                    {t('A farmer is a person engaged in agriculture, raising living organisms for food or raw materials. The term usually applies to people who do some combination of raising field crops, orchards, vineyards, poultry, or other livestock')}

                                </p>
                            </div>

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold">   {t('Home')}</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p>
                                    <a href="/admin-login" class="text-white">{t('Admin')}</a>
                                </p>
                                <p>
                                    <a href="/farmer-login" class="text-white">{t('Farmer')}</a>
                                </p>
                                <p>
                                    <a href="/buyer-login" class="text-white">{t('Buyer')}</a>
                                </p>
                                {/* <p>
                                        <a href="#!" class="text-white">Bootstrap Angular</a>
                                    </p> */}
                            </div>



                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold">{t('USEFUL LINKS')}</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p>
                                    <a href="/" class="text-white">{t('Contact us')}</a>
                                </p>
                                {/* <p>
                                        <a href="#!" class="text-white">Become an Affiliate</a>
                                    </p> */}
                                <p>
                                    <a href="/" class="text-white">{t('About us')}</a>
                                </p>
                                <p>
                                    <a href="/" class="text-white">{t('Help')}</a>
                                </p>
                            </div>



                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold">{t('Contact')}</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                
                                <p><i class="fas fa-envelope mr-3"></i>kisanseva@gmail.com</p>
                                <p><i class="fas fa-phone mr-3"></i></p>
                                <p><i class="fas fa-phone mr-3"></i>Rohit Thakur</p>
                                <p><i class="fas fa-phone mr-3"></i>Gaurav Jaiswal</p>
                                <p><i class="fas fa-phone mr-3"></i>Sanket Choudhary</p>
                                <p><i class="fas fa-phone mr-3"></i>Shiv Narayan Banchhor</p>
                                
                            </div>

                        </div>

                    </div>
                </section>

                <div
                    class="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    <hr class="mb-4"></hr>
                    Copyright ©2023 All rights reserved by :
                    <a class="text-white" href="https://kissanseva.com/">Infoway Tech Pvt Limited Pune.</a
                    >
                </div>

            </footer>
        
    );
}

export default Footer;
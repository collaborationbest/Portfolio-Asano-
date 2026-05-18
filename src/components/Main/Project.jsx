import React from 'react';
import '../../pages/Project/ProjectPage.css';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-18.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Dermatology</h3>
                            <p>
                                Platform for an online skin clinic.
                            </p>
                            <p className="tecnologias">
                                Angular
                                <span> -</span> Zone.js
                                <span> -</span> Bootstrap
                                <span> -</span> TypeScript
                            </p>
                            <a href="https://onlineskinclinic.com/home" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Visit Website</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-14.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Justice</h3>
                            <p>
                                Rreal estate website
                            </p>
                            <p className="tecnologias">
                                Angular
                                <span> -</span> Zone.js
                                <span> -</span> TypeScript
                            </p>
                            <a href="https://www.immobg.fr/ " className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Visit Website</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-17.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Homecult</h3>
                            <p>
                                Studio Design Marketing
                            </p>
                            <p className="tecnologias">
                                Angular
                                <span> -</span> GSAP
                                <span> -</span> anime.js
                                <span> -</span> NodeJS
                                <span> -</span> ExpressJS
                                <span> -</span> core-js
                            </p>
                            <a href="https://homecult.com.ua/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Visit Website</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-7.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>DropKit</h3>
                            <p>
                                Launching Website
                            </p>
                            <p className="tecnologias">
                                Next
                                <span> -</span> React
                                <span> -</span> Framework Motion
                                <span> -</span> Tailwind CSS
                            </p>
                            <a href="https://dropkit-ten.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Visit Website</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-6.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Headphone Launch</h3>
                            <p>
                                Headphones marketing
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Next
                                <span> -</span> Tailwind CSS
                                <span> -</span> TypeScript
                            </p>
                            <a href="https://product-yt.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Visit Website</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-12.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Kidiboard</h3>
                            <p>
                                Children's activity platform
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Next
                                <span> -</span> TypeScript
                                <span> -</span> Tailwind CSS
                            </p>
                            <a href="https://kidiboard.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Visit Website</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-5.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Visionary House</h3>
                            <p>
                                Complete Business Ecosystem
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Next
                                <span> -</span> TypeScript
                                <span> -</span> Framer Motion
                                <span> -</span> Tailwind CSS
                            </p>
                            <a href="https://www.visionaryhouse.company/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Visit Website</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-8.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>ShopTec</h3>
                            <p>
                                Online support platform
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Emotion
                                <span> -</span> Nginx
                                <span> -</span> TypeScript
                                <span> -</span> core-js
                            </p>
                            <a href="https://ojtconnect.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Visit Website</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-10.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Duct Cleaning</h3>
                            <p>
                                HVAC services
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Next
                                <span> -</span> Tailwind CSS
                                <span> -</span> TypeScript
                            </p>
                            <a href="https://ductcleaningcanada.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Visit Website</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-9.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>RX Company</h3>
                            <p>
                                Marketing Website
                            </p>
                            <p className="tecnologias">
                                Vue.js
                                <span> -</span> Nuxt.js
                                <span> -</span> GSAP
                                <span> -</span> core-js
                            </p>
                            <a href="https://realation.jp/ " className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Visit Website</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-11.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Plus Anime</h3>
                            <p>
                                Anime website
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Next
                                <span> -</span> GSAP
                                <span> -</span> Nginx
                                <span> -</span> TypeScript
                                <span> -</span> Tailwind CSS
                            </p>
                            <a href="https://datconsultancy.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Visit Website</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-13.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>FMCSA</h3>
                            <p>
                                Freight transpost company
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Tailwind CSS
                                <span> -</span> TypeScript
                            </p>
                            <a href="https://nexmuv.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Visit Website</span></a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
        </section>

    )
};
export default React.memo(Project);
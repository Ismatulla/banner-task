import React from 'react';
import { secondSquareData, images } from '../components/allData.js'
import SecondSquareBanner from './SecondSquareBanner';
import '/node_modules/react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery';
import useWindowSize from './useWindowSize.js';
function SecondMainBanner({ 'carousel-on-mobile': carouselOnMobile }) {
    const [width] = useWindowSize()
    return (
        <>
            {

                width < '700' && carouselOnMobile ? (
                    <div className='main_banner1 mobile_carousel'>
                        <div className=' cta_1 square '>
                            <div className=" cta_box img2">
                                <a href='https://example.com/link1' className='anchor_link'></a>
                                <div className='CTA_inner img_container'>
                                    <h2>CTA Title</h2>
                                    <button className='cta_button' >CTA Button</button>
                                </div>
                            </div>
                        </div>
                        <ImageGallery
                            showFullscreenButton={false}
                            showPlayButton={false}
                            showNav={false}
                            items={images}
                            disableSwipe={false}
                        />
                    </div>
                ) : (
                    <div className='main_banner1'>
                        {secondSquareData.map((data) => (
                            <SecondSquareBanner key={data.id}
                                src={data.src ? data.src : ''}
                                button={data.button ? data.button : ''}
                                title={data.title ? data.title : ''}
                                link={data.link}
                                type={data.type}
                            />
                        ))
                        }
                    </div>

                )
            }
        </>
    );
}
export default SecondMainBanner;
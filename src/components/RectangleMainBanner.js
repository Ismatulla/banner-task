import React from 'react';
import RectangleBanner from './RectangleBanner';
import { rectangleData } from '../components/allData'
import useWindowSize from './useWindowSize'
function RectangleMainBanner(props) {
    const [width] = useWindowSize()
    console.log(width);
    return (
        <div className='rectangle_banner1'>
            <div className='flex_rectangle'>
                {width > 700 ? (<a href={rectangleData[0].link}>
                    <img src={rectangleData[0].src} alt="" className='bg_img' />
                </a>) : (<a href={rectangleData[1].link} >
                    <img src={rectangleData[1].src} alt="phone img" className='mobile_rectangle' />
                </a>)}

                <div className="CTA_container">
                    <a href={rectangleData[2].link} >
                        <div className='CTA_rectangle'>
                            <h2>{rectangleData[2].title}</h2>
                            <button className='cta_button' >{rectangleData[2].button}</button>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default RectangleMainBanner;
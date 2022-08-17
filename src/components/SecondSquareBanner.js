import React from 'react';

function SecondSquareBanner({ src, button, title, link }) {
    return (
        <React.Fragment>

            {src ? (
                <div className='square'>
                    <div className="square_box">
                        <a href={link} className='anchor_link' ></a>
                        <div className='img_container'>
                            <img src={src} alt='not image found' />
                        </div>
                    </div>
                </div>
            ) : (
                <div className=' cta_1 square '>
                    <div className=" cta_box img2">
                        <a href={link} className='anchor_link'></a>
                        <div className='CTA_inner img_container'>
                            <h2>{title}</h2>
                            <button className='cta_button' >{button}</button>
                        </div>
                    </div>
                </div>
            )
            }

        </React.Fragment >
    );
}

export default SecondSquareBanner;
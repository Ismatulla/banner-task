import React from 'react';
import FirstSquareBanner from './FirstSquareBanner';
import { firstSqaureData } from '../components/allData'
function FirstMainBanner(props) {
    return (
        <div className='main_banner1'>
            {firstSqaureData.map((data) => (
                <FirstSquareBanner key={data.link}
                    src={data.src ? data.src : ''}
                    button={data.button ? data.button : ''}
                    title={data.title ? data.title : ''}
                    link={data.link}
                    type={data.type}
                />
            ))
            }
        </div>
    );
}

export default FirstMainBanner;
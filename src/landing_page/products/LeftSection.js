import React from 'react'

function LeftSection({imageURL, productName, productDescription, tryDemo, learnmore, googlePlay, appStore}) {
    return (
        <div className='container '>
            <div className='row    '>
                <div className='col-1'></div>
                <div className='col-5 me-5 '>
                    <img src={imageURL} alt="product image" />
                </div>
                <div className='col-1'></div>   
                <div className='col-4 ps-5  mt-5'>
                    <h2 className="mb-4">{productName}</h2>
                    <p className='text-muted'>{productDescription}</p>
                    <a href={tryDemo} className="text-decoration-none pe-2 me-5">Try Demo →</a>
                    <a href={learnmore} className="text-decoration-none">Learn More →</a>
                    <div className='pt-4'>
                        <a href={googlePlay} className="pe-3 "><img src='media/images/googlePlayBadge.svg'></img></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg"></img></a>
                    </div>
                
                </div>
                <div className='col-1'></div>
                
            </div>
        </div>
    );
}

export default LeftSection;
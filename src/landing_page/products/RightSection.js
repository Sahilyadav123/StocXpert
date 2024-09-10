import React from 'react'

function RightSection({imageURL, productName, productDescription, learnmore}) {
    return ( 
        <div className='container mt-5 '>
        <div className='row mt-5 '>
            <div className='col-1'></div>
            <div className='col-4 ps-5 ' style={{marginTop:"170px"}}>
                <h2 className="mb-4">{productName}</h2>
                <p className='text-muted'>{productDescription}</p>
                
                <a href={learnmore} className="text-decoration-none">Learn More →</a>
                
            </div>
            <div className='col-1'></div>   
            <div className='col-5 me-5 '>
                <img src={imageURL} alt="product image" />
            </div>
            
            
            <div className='col-1'></div>
            
        </div>
    </div>
     );
}

export default RightSection;
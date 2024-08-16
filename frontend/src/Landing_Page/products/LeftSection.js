import React from 'react'

function LeftSection({
    imageURL,
    productName,
    productDesription,
    tryDemo,
    learnDemo,
    learnMore,
    googolePlay,
    appStore,
}) {
    return <div className='container mt-5'>
        <div className='row p-5'>
            <div className='col-6 '>
                <img src={imageURL}></img>
            </div>
            <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p>{productDesription}</p>
                <div>
                <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i className='fa fa-long-arrow-right ' aria-hidden="true"></i></a>

                <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More <i className='fa fa-long-arrow-right ' aria-hidden="true"></i></a>
                </div>
                <div className='mt-4'>
                <a href={googolePlay}><img src='media/images/googlePlayBadge.svg'></img></a>
                <a href={appStore}><img src='media/images/appstoreBadge.svg' style={{marginLeft:"50px"}}></img></a>
                </div>
                
            </div>
        </div>
    </div>;

}

export default LeftSection;
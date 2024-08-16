import React from 'react'

function Team() {
    return (  
        <div className='container'>
        <div className='row p-3  mt-5 border-top'>
            <h1 className=' text-center mt-5 '>People</h1>
        </div>
        <div className='row p-3  text-muted ' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
            <div className='col-6 p-5 text-center' >
               <img src='./media/images/au.jpg' style={{width:"60%", height:"50%",borderRadius:"100%"}}></img>
               <h2 className='mt-5'>Akash Patel</h2>
               <h4>Developer,Coder </h4>
            </div>
            <div className='col-6 p-3'>
                <p>Akash patel bootstraped and founded Zerodha in 2020 to overcome the hurdles he faced during his decade long stint as trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p> 
                <p>Playing basketball in his zen.</p> <p>Connect on<a href='' style={{textDecoration:"none"}}> Homepage </a>/ <a href='' style={{textDecoration:"none"}}>TradingQnA</a> /<a href='' style={{textDecoration:"none"}}> Twitter</a></p>

            </div>
        </div>
    </div>
    );
}

export default Team;
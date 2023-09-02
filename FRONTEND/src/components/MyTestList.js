import React from 'react'
import { useContext } from 'react';

import { ContextApi } from '../Context/Context';
function MyTestList(props) {
    const context= useContext(ContextApi);
    let {imagePath,viewReport} = context;
//console.log(new Date().toUTCString())

//viewing report in pdf
let path = `${window.URL}`;
console.log('this is path',path)


  return (  
    // style={{maxWidth:'540px'}}
    <>
    <div className='container'>
    <div id='card0' className="card mb-4" style={{width: '80%',maxWidth:'100%',marginLeft:'10%'}}>
  <div className="row g-0" >
    <div className="col-md-4" >
      <img src={imagePath(props.tcode)} className="img-fluid rounded-start" style={{width:'100%',height:'100%'}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body" >
    
          
        <h4 className="card-title">TEST STATUS: {props.status===0?"PENDING":"REPORT ARRIVED"}
        <span>
        {
        props.status===1&&
        <button id='report' onClick={()=> viewReport(props.tid,props.fname,props.tcode)} type="button" className="btn btn-primary " style={{float:'right'}} >DOWNLOAD REPORT</button>
      }  
        </span>
        </h4>
      


        <div className="card-text">
          <p>Test ID: {props.tid}</p>
          <p>Test Code: {props.tcode}</p>
            <p>Patient Name: {props.fname[0].toUpperCase()+props.fname.slice(1).toLowerCase ()}  {props.lname[0].toUpperCase()+props.lname.slice(1).toLowerCase()}</p>
            <p>Gender: {props.pgender}</p>
            <p>Contact: {props.pcontact}</p>
            <p>Address: {props.paddress} </p>
        </div>
        <p className="card-text"><small className="text-primary">Schduled Test Date: {new Date(props.tdate).toUTCString()}</small></p>
        <p className="card-text"><small className="text-primary">Test Booking Date: {new Date(props.bookDate).toUTCString()}</small></p>
      </div>
    </div>
  </div>
</div></div>
    </>
  )
}

export default MyTestList

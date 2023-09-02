
import {React,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import CardFormat from './CardFormat';
import Footer from './Footer';


function Home() {
  var txt0='Welcome to HealthCare Online'
  var txt1 = 'Choose the best by choosing us';
  var i = 0;
  var j = 0;
  var speed0 = 100;
  var speed1 = 50;


  var typeWriter1=()=>{
    if (j < txt1.length) {
      document.getElementById("txt1").innerHTML += txt1.charAt(j);
      j++;
      setTimeout(typeWriter1, speed1);
    }
        };
var typeWriter0=()=>{
  if (i < txt0.length) {
    document.getElementById("txt0").innerHTML += txt0.charAt(i);
    i++;
    setTimeout(typeWriter0, speed0);
  }
  else{
    typeWriter1()}
      };


  // Similar to componentDidMount and componentDidUpdate:
  useEffect( ()=>{
    typeWriter0()
    // Update the document title using the browser API    
  }
    );



  
  return (
    <>
      <div className='headertext' style={{ height: "20%", backgroundColor: "#b3d9ff", paddingTop: "50px", paddingBottom: "30px" }}>

        <div className='text-center'>

          <h2 id='txt0'> </h2>
          <p id='txt1' ></p>
        </div>
      </div>
      <img className="img-fluid"
          src={`${process.env.PUBLIC_URL}/assets/mainimages/team.jpeg`}
          alt="logo" />
      <CardFormat />
      <Footer />




    </>)
}
export default Home;


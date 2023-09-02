
//import Resizer from "react-image-file-resizer";
//to do while uploading from admin portal

import axios from "axios";
import {createContext, useState,useEffect} from "react";

let ContextApi = createContext();

const NoteState = (props)=>{


    /// getting test list
    const [testData, setTestData] = useState([]);
//let testData='';

    const getTest = async () => {
        try {
            let response = await axios.get('/api/v1/tests/getalltests');
            if (response.data.success) {
                setTestData(response.data.data);
            } else {
                console.log('nothing to print');
            }
        } catch (err) {
            console.log('something went wrong:', err);
        }
    }
useEffect(() => {
    getTest();
}, []); 


console.log(testData)

    const viewReport = (tid,fname,tcode) => {
        //let pdfFile= require('F:/react js/IPT Project/healthcareonline/reports/1.pdf');
    
let pdfFile = `${process.env.PUBLIC_URL}/reports/${tid}.pdf`;

console.log(pdfFile,'ye new adress hy')
        
        //console.log('onclick is clicked and path is',pdfFile)
        // using Java Script method to get PDF file
        fetch(pdfFile).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                 //Setting various property values
                 //console.log('blob url',fileURL);
                 

                  let alink = document.createElement('a');
                  
                 //alink.download = 
                 
                  alink.href = fileURL;
                  alink.download = `Report of ${fname[0].toUpperCase()+fname.slice(1)} for ${tcode.toUpperCase()}.pdf`
                  alink.click();
                


            })})}



    
    
    
    

    let imagePath=(path) =>{
        let img = `${process.env.PUBLIC_URL}/assets/testimages/${path}.jpeg`;
    return img};


// yahan login sign up waly users aye gy
let [user,setUser]=useState({fname:'',lname:'',dob:'',gender:'',email:'',mobile:'',password:''})

//local object to get input values    

// yahan local variable store hongy db mai save krny kliye


let [patient,setPatient]=useState({tid:'',tcode:'',fname:'ali',lname:'khankk',pgender:'',pdob:'',pcontact:'',tdate:'',
pcity:'',ppostal:'',paddress:'',bookDate:Date(Date.now()).toString(),status:0,bookedBy:''}) //to implement in mongoose
    
//bookedBy mai logged in user ka name aye ga  phir hm relevant user ko relevant test show kry gy

//to do api call on myTest global 

// yahan sary test aye gy jo book hogye hein
  //const [bookings,setBookings]= useState([]);

    const [myTest,setMyTest]=useState([]) /*yahan */
    


    
    
    const book = (code) => {
        console.log('cilcked current test with',code)  //to get current test name
        console.log('clicked hua');
    };

// ye test ka pattern hy jo db mai save hoga field check kro

//     let data =[{
//         title: "Sugar Test",
//         code: "SG01", 
//         group: "general",
//         description: "THIS IS THE SUGAR TEST",
//         price:"2000",
//         discountedPrice:"1500"}

// ,

// {
//         title: "24 URIC ACID",
//         code:  "UA01", 
//         group: "general",
//         description: "THIS IS THE URIC ACID TEST",
//         price:"2500",
//         discountedPrice:"1800"}

// ,

// {
//         title: "COVID 19  ANTIGEN",
//         code:  "C19A01", 
//         group: "general",
//         description: "THIS IS THE COVID19 ANTIGEN",
//         price:"3000",
//         discountedPrice:"1700"}

// ,
// {
//         title: "DENGUE TEST",
//         code:  "DEN01", 
//         group: "general",
//         description: "THIS IS THE DENGUE IGM TEST",
//         price:"1900",
//         discountedPrice:"1500"}

// ,
// {
//         title: "DIABETES TEST",
//         code:  "DIA01", 
//         group: "general",
//         description: "THIS IS THE DIABETES TEST",
//         price:"1900",
//         discountedPrice:"1500"}

// ,{
//         title: "IRON TEST",
//         code:  "IR01", 
//         group: "general",
//         description: "THIS IS THE IRON TEST",
//         price:"1000",
//         discountedPrice:"800"}

// ,


// {
//         title: "LEPTIN LEVEL TEST",
//         code:  "LP01", 
//         group: "general",
//         description: "THIS IS THE LEPTIN LEVEL TEST",
//         price:"1900",
//         discountedPrice:"1500"},{
//         title: "VITAMIN B-12 LEVEL TEST",
//         code:  "VB201", 
//         group: "general",
//         description: "THIS IS THE B12 LEVEL TEST",
//         price:"1000",
//         discountedPrice:"700"},{
//         title: "Blood Sugar Test",
//         code: "SG01", // here code is used to fetch image of relevant testloaded from assests // TO DO IMPLEMENT IN MONGOOSE
//         group: "general",
//         description: "THIS IS THE SUGAR TEST",
//         price:"2000",
//         discountedPrice:"1500"},

//     {title: "Covid 19 Test",
//         code: "COV19",
//         group: "general",
//         description: "THIS IS THE COV19 TEST	",
//         price:"2000",
//         discountedPrice:"1700"},


//     {title: "Malaria test",
//         code: "MAL01",
//         group: "general",
//         description: "THIS IS THE MALARIA TEST	",
//         price:"1900",
//         discountedPrice:"1300"},

//         {title: "Glucose Test",
//         code: "GAL01",
//         group: "general",
//         description: "THIS IS THE GLUCOSE TEST	",
//         price:"1700",
//         discountedPrice:"1500"}];
    

        // 1 demo test add krky dekhata hn 1 min

    return(
        <ContextApi.Provider value={{patient,setPatient,testData,setTestData,book,myTest,setMyTest,imagePath,user,setUser,viewReport}}>
            {props.children}
        </ContextApi.Provider>
    )
}
export {ContextApi,NoteState}
//NoteState for app.js
//ContextAPi for everywhere else
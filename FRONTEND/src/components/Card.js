import React, { useRef } from 'react';
import { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { ContextApi } from '../Context/Context';
import axios from 'axios';
import {  message } from 'antd';
//import ProtectedRoute from './ProtectedRoute';

// fix the range of the date of birth input and test date

function Card(props) {

    let navigateTo = useNavigate()
    const context = useContext(ContextApi);
    let { patient, setPatient, myTest, setMyTest, imagePath } = context


    const ref = useRef(null);//launching modal
    let closeRef = useRef(null);//closing modal;



    // let patientVar ={tcode:'',fname:'ali',lname:'khan',pdob:'',pcontact:'',tdate:'',
    // pcity:'',ppostal:'',paddress:''}



    //changing tcode value using the ref because it will give error if we value={state.var}
    let tcodeInput = useRef('')



    //on clicking test

    

    const onBook = async (code) => {
        if (localStorage.getItem("token")){
        ref.current.click();
        document.getElementById("tcode").value = code;
        //let datenow = new Date().toUTCString();
        //bookDate: datenow.now()
        //console.log(datenow)
        //let lastTid = Number(myTest[myTest.length - 1].tid) + 1
        //console.log(lastTid);
        let bdate = Date(Date.now()).toString();

        let Userid = localStorage.getItem("Userid")
        //console.log(Userid);
        setPatient({  tcode: code, status: 0, bookedBy: Userid,bookDate:bdate});
        }

    else{
        
        navigateTo('/login')
        }

        //patient.status is set to 1 to view reports

        // TO DO: USE EMAIL/ID

        //console.log(Date(Date.now()))
        //setPatient({bookDate:Date(Date.now())}) // to implement data.now as default in para
    };

    //test name should come automatically
    let onChange = (e) => {

        setPatient({ ...patient, [e.target.name]: e.target.value });


    };



    //onsubmiting form

    const onSubmit =async (event) => {

        event.preventDefault();// do onsubmit on form not button
        //const closeRef = useRef(null);

        const closeModal = () => {
         closeRef.current.click();
        };

        try {
            const response = await axios.post('/api/v1/user/bookTest', patient);
            if (response.data.success) {
                message.success('Test booked successfully');
                closeModal();
            } else {
                message.error('Error while booking test');
            }
        } catch (error) {
            console.error(error);
            message.error('Error while booking test');
        }
        //setMyTest(patient)
        console.log('original array', patient)
        //console.log('concatenated array', myTest)
        //console.log(patient.pgender)
        //console.log(patient.bookDate)
        closeRef.current.click();
        // let t = document.getElementById("tdate").value;
        // console.log('input', t);
        // t = new Date(t).toUTCString();
        // console.log('utc', t)
        // setPatient({tdate:t});
        // console.log('aftersetting date', patient.tdate)
        // use fuction from context api to push to database
        //TO DO : clear all input values

    }




    //const [variable, setvariable] = useState('');
    return (
        <>


            <button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" style={{ display: 'none' }} data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Patient Details </h5>
                            <button ref={closeRef} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="container text-center mb-0">
                                    <h3>BOOKING</h3>
                                </div>
                                <form onSubmit={onSubmit} className='needs-validation' >
                                    <div className="mb-2">

                                        <label htmlFor="tcode" className="form-label">Test Name</label>


                                        <input readOnly={true} value={patient.tcode || ""} onChange={onchange} name='tdcode' ref={tcodeInput} type="text" className="form-control" id="tcode" required />



                                        <label htmlFor="pfname" className="form-label">First Name</label>
                                        <input value={patient.fname || ""} onChange={onChange} name='fname' type="text" className="form-control" id="pfname" required />



                                        <label htmlFor="plname" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="plname" value={patient.lname || ""} onChange={onChange} name='lname' required />

                                        <label htmlFor="plname" className="form-label">Gender</label>

                                        <select name="pgender" value={patient.pgender || "Select"}
                                            onChange={onChange} className="form-select" aria-label="Default select example" minLength={4} required={true}>
                                            <option value="">Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>



                                        <label htmlFor="pdob" className="form-label">Date of Birth</label>
                                        <input type="date" className="form-control" id="pdob" value={patient.pdob || ""} name='pdob' onChange={onChange} required />

                                        <label htmlFor="pcontact" className="form-label">Active Contact Number</label>
                                        <input type='tel' className="form-control" id="pcontact" value={patient.pcontact || ""} name='pcontact' onChange={onChange} required />


                                        <label htmlFor="tdate" className="form-label">Sample Collection Time</label>
                                        <input type='datetime-local' className="form-control" id="tdate" value={patient.tdate || ""} name='tdate' onChange={onChange} required />


                                        <label htmlFor="pcity" className="form-label">City</label>
                                        <input type="text" className="form-control" id="pcity" value={patient.pcity || ""} name='pcity' onChange={onChange} required />

                                        <label htmlFor="ppcode" className="form-label">Postal/Zip Code</label>
                                        <input type="text" className="form-control" id="ppcode" value={patient.ppostal || ""} name='ppostal' onChange={onChange} required />

                                        <label htmlFor="paddress" className="form-label">Complete Address</label>
                                        <textarea type='text' className="form-control" id="paddress" value={patient.paddress || ""} name='paddress' onChange={onChange} required />


                                     

                                    </div>

                                    <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                </form>
                            </div>



                        </div>

                    </div>
                </div>
            </div>




            <div id='card0' className="card" style={{ width: '18rem' }}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{(parseFloat((props.actualPrice - props.discountedPrice) / props.actualPrice) * 100).toPrecision(4) + '% OFF'}</span>
                <img width='550px' height='250px 'src={imagePath(props.code)} className="card-img-top" alt="" />


                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <button className="btn btn-primary mx-0" onClick={() => onBook(props.code)}>Book Now</button>
                    <span className='mx-2 fw-bold'><s>Rs.{props.actualPrice}</s></span>
                    <span className='mx-0 fw-bold'>Rs.{props.discountedPrice}</span>
                </div>
            </div>


        </>
    )
};
export default Card;

//<Link to="/liaquat" className="btn btn-primary mx-0">Book Now</Link>

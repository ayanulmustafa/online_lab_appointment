import React from 'react';



function Book() {
    
    return (
        <>
            <div className="container">
                <div className="container text-center mb-0">
                    <h3>BOOKING</h3>
                </div>
                <form>
                    <div className="mb-2">

                    <label htmlFor="tcode" className="form-label">Test Name</label>
                        <input type="text" className="form-control" id="tcode" required />


                        <label htmlFor="pfname" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="pfname" required />

                        <label htmlFor="plname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="plname" required />

                        <label htmlFor="pdob" className="form-label">Date of Birth</label>
                        <input type="date" className="form-control" id="pdob" required />

                        <label htmlFor="pcontact" className="form-label">Active Contact Number</label>
                        <input type='tel' className="form-control" id="pcontact" required />


                        <label htmlFor="pbstime" className="form-label">Sample Collection Time</label>
                        <input type='datetime-local' className="form-control" id="bstime" required />


                        <label htmlFor="pcity" className="form-label">City</label>
                        <input type="text" className="form-control" id="pcity" required />

                        <label htmlFor="ppcode" className="form-label">Postal/Zip Code</label>
                        <input type="text" className="form-control" id="ppcode" required />

                        <label htmlFor="paddress" className="form-label">Complete Address</label>
                        <textarea type='text' className="form-control" id="paddress" required />

                    </div>

                </form>
            </div>
        </>
    )
}

export default Book
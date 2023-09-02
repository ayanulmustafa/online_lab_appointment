import {React} from 'react'
import { ContextApi } from '../Context/Context'
import { useContext,useEffect } from 'react'
import MyTestList from './MyTestList';
import axios from 'axios';
function MyTest() {
    const context = useContext(ContextApi);
    
    const {myTest,setMyTest}=context;
    useEffect(() => {
      // Fetch new data or any other action that you want to perform on componentDidMount
      const getBookings = async () => {
        try {
          const userID = localStorage.getItem("Userid")
          console.log(userID)
            let response = await axios.get('/api/v1/user/my-bookings',{params:{userid:userID}});
            if (response.data.success) {
              
                setMyTest(response.data.data);
                console.log(response.data.data)
            } else {
                console.log('nothing to print');
            }
        } catch (err) {
            console.log('Something Went Wrong:', err);
        }
    }
    getBookings();
  }, []);
  return (
  <>

<h1 className='text-center mb-5 mt-3'>MY BOOKING </h1>
      
          {myTest.map((element) => {
            return( 
              <div  className="col-md-18" key={element.tid} >
              <MyTestList tcode={element.tcode} status={element.status} tdate={element.tdate} fname={element.fname} lname={element.lname} pcontact={element.pcontact} paddress={element.paddress} bookDate={element.bookDate} tid={element.tid} pgender={element.pgender} />
              </div>
              
              )})}
      
    </>
  )
}

export default MyTest
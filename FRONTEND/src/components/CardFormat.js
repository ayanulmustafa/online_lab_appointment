import React from 'react';
import Card from './Card';
import { useContext } from 'react';
import { ContextApi } from '../Context/Context';


 


function CardFormat() {
	let context =useContext(ContextApi);
  // const [tests, setTests] = useState([]);
  // const getTests = async () => {
  //   try {
  //     const res = await axios.get("/api/v1/tests/getalltests");
  //     if (res.data.success) {
  //       setTests(res.data.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getTests();
  // }, []);
  
	let {testData} = context;
  return (
    <>
    <h1 className='text-center my-5 mb-5 py-5'>List Of Lab Tests</h1>
      <div className="cards">
        <div className="container">
        <div className="row" style={{marginRight:'-225px'}}>
          {testData.map((element) => {
            return <div className="col-md-3 mb-5 mx-4"  style={{paddingRight:'1px'}} key={element.title}>
              <Card title={element.title} desc={element.description} code={element.code} actualPrice={element.price} discountedPrice={element.discountedPrice}/>
            </div>
          })}
        </div>
      </div></div>
    </>)
}

export default CardFormat;


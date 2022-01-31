import { Rate } from 'antd';
import React from 'react';

function FiltreByRate({rating,isRating, rate, setRate}) {
    let desc=["terrible","bad","good","excellent","awsome"]
  return ( 
  <div style={{display:"flex",justifyContent:"center"}}>
      {isRating?
      <div >
      <Rate  disabled value={rating}/>
      </div>:
      <div>
      <Rate value={rate}
      tooltips={desc}
      onChange={(e)=>setRate(e)} />
       </div>}
  </div>
  );
}

export default FiltreByRate;

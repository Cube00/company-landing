import React, {useEffect, useState} from 'react';

import './company-strength.styles.scss';

import IMAGE1 from '../../assets/solutions.png';
import IMAGE2 from '../../assets/experience.png';
import IMAGE3 from '../../assets/profit.png';

import StrengthItem from '../strength-item/strength-item.component';

let strengthList = [{
  id: 0,
  title: 'DIGITAL SOLUTIONS',
  image:IMAGE1,
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},{
  id: 1,
  title: 'SMART EXPERIENCE',
  image:IMAGE2,
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},{
  id: 2,
  title: 'RESULTS WITH PROFIT',
  image:IMAGE3,
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}]

const CompanyStrength = () =>{
  const [strengths, setStrengths] = useState([]);

  useEffect(()=>{
    setStrengths(()=> (
      strengthList
    ))
  },[])

  return <>
    <div className="company-strengths">
      <div className="content">
        {strengths?.map((item)=>{
          return <StrengthItem key={item.id} {...item} />
        })}
      </div>
    </div>
  </>
}

export default CompanyStrength;

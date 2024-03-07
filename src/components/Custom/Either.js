import React from 'react';
import MayCodyImg from '@site/static/img/May_Cody.png'

export default function Either({children, title='EITHER'}) {
  return (
    <div className={'either'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem'}}>
        <img src={MayCodyImg} style={{maxWidth: '30px', marginTop: '-10px'}}></img>
        <span style={{fontSize: '1.3rem', fontWeight: 'bold'}}>{title}</span>
      </div>
      {children}
    </div>
    
  );
}
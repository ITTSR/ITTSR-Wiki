import React from 'react';
import MayImg from '@site/static/img/May.png'

export default function May({children}) {
  return (
    <div className={'may'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem'}}>
        <img src={MayImg} style={{maxWidth: '30px', marginTop: '-10px'}}></img>
        <span style={{fontSize: '1.3rem', fontWeight: 'bold'}}> MAY</span>
      </div>
      {children}
    </div>
    
  );
}
import React from 'react';
import CodyImg from '@site/static/img/Cody.png'

export default function Cody({children}) {
  return (
    <div className={'cody'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem'}}>
        <img src={CodyImg} style={{maxHeight: '30px', marginTop: '-10px'}}></img>
        <span style={{fontSize: '1.3rem', fontWeight: 'bold'}}> CODY</span>
      </div>
      {children}
    </div>
  );
}
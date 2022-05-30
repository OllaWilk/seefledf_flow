import React from 'react';

import './Headlines.scss';

const Headlines = ({props}) => {

  return (
    <div >
      <h2 className='app__headlines'>{props}</h2>
    </div>
  )
}

export default Headlines;


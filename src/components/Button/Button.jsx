import React from 'react';

import './Button.scss';

const Button = ({props}) => {

  return (
    <a className='btn' href="http://localhost:3001/seefledf_flow" >{ props }</a>
  )
}

export default Button;


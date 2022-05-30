import React from 'react';

import './ButtonBlack.scss';

const ButtonBlack = ({props}) => {

  return (
    <a className='btn' href={props}  >{ props }</a>
  )
}

export default ButtonBlack;


import React from 'react';

import './ButtonWhite.scss';

const ButtonWhite = ({props}) => {

  return (
    <a className='btnwhite' href={props}  >{ props }</a>
  )
}

export default ButtonWhite;


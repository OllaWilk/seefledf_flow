import React from 'react';

import './NamePlusIkon.scss';

const NamePlusIkon = ({name, ikon}) => {

  return (
    <div className="app__img-modal-wrap">
        <img src={ikon} alt={name} />
        <h3 className="title" > {name}</h3>
    </div>
  )
}

export default NamePlusIkon;


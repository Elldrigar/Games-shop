import React from 'react';
import './collection-item.scss';

const baseUrl = 'https://demo.gawron.me/img/gamecovers';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${baseUrl}${imageUrl}.jpg`,
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default CollectionItem;

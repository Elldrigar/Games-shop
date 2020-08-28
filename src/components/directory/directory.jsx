import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'playstation',
          imageUrl: 'https://demo.gawron.me/img/gameshop/logo_playstation.jpg',
          size: 'large',
          id: 1,
        },
        {
          title: 'atari',
          imageUrl: 'https://demo.gawron.me/img/gameshop/logo_atari.jpg',
          size: 'large',
          id: 2,
        },
        {
          title: 'nintendo',
          imageUrl: 'https://demo.gawron.me/img/gameshop/logo_nintendo.jpg',
          id: 3,
        },
        {
          title: 'sega',
          imageUrl: 'https://demo.gawron.me/img/gameshop/logo_sega.jpg',
          id: 4,
        },
        {
          title: 'xbox',
          imageUrl: 'https://demo.gawron.me/img/gameshop/logo_xbox.jpg',
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;

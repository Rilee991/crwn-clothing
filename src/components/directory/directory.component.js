import React, { Component } from 'react';

import './directory.component.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
                linkUrl: 'hats',
                id: 1
            },{
                title: 'watches',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
                linkUrl: '',
                id: 2
            },{
                title: 'glasses',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
                linkUrl: '',
                id: 3
            },{
                title: 'underwear',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
                linkUrl: '',
                size: 'large',
                id: 4
            },{
                title: 'banyan',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
                linkUrl: '',
                size: 'large',
                id: 5
            }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...sectionProps }) => (
                        <MenuItem key={id} {...sectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;
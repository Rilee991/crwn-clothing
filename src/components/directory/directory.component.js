import React from 'react';

import './directory.component.scss';
import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from './../../redux/directory/directory.selectors';
import { connect } from 'react-redux';

const Directory = ({ sections }) => {
    console.log(sections);
    return (
        <div className='directory-menu'>
            {
                sections.map(({id, ...sectionProps }) => (
                    <MenuItem key={id} {...sectionProps} />
                ))
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
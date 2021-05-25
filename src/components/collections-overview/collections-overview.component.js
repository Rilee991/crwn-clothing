import React from 'react';

import './collections-overview.styles.scss';
import CollectionPreview from './../preview/preview.component';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from './../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

const CollectionsOverview = ({ collections }) => {

    return (
        <div className='collections-overview'>
            {collections.map(({id, ...collectionProps }) => (
                <CollectionPreview key={id} {...collectionProps} />
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
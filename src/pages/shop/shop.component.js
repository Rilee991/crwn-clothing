import React, { Component } from 'react';

import { SHOP_DATA } from './shop.data.js';
import CollectionPreview from './../../components/preview/preview.component';

class ShopPage extends Component {
    constructor(props) {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;

        return (
            <div className='shop-page'>
                {collections.map(({id, ...collectionProps }) => (
                    <CollectionPreview key={id} {...collectionProps} />
                ))
                }
            </div>
        );
    }
}

export default ShopPage;
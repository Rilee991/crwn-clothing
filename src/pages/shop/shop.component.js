import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { fetchCollectionsStartAsync } from './../../redux/shop/shop.action';
import { connect } from 'react-redux';
import WithSpinner from './../../components/withSpinner/withSpinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { selectIsCollectionLoaded } from './../../redux/shop/shop.selectors';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    componentDidMount() {
        const { fetchCollectionStartAsync } = this.props;
        fetchCollectionStartAsync();
    }

    render () {
        const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
        return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={(props) => 
                        <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
                    }
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => 
                        <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} /> 
                    } 
                />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionLoaded
})
const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);
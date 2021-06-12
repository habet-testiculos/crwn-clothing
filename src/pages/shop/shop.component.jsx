import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collections-overview.component.js';
import CollectionPage from './Collection/collection.component';


const ShopPage = ({ match }) => (
    <div className="shop-data">
        <Route exact path={`${match.url}`} component={CollectionOverview} />
        <Route exact path={`${match.url}/:collectionId`} component={CollectionPage} />
    </div>
);

export default ShopPage;
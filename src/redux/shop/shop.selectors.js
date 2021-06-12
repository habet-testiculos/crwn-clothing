import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop], (shop) => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShop], (shop) => Object.keys(shop.collections)
        .map(key => shop.collections[key])
)


export const selectCollection = memoize((collectonUrlParam) => createSelector(
    [selectCollections],
    (collections) =>
        collections[collectonUrlParam]
))
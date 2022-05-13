import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectALLCampsites = () => {
    return CAMPSITES;
};

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id ===id);
};

export const selectedFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};
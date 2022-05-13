import { PROMOTIONS} from '../../app/shared/PROMOTIONS';

export const selectedFeaturedPromotions = () => {
    return PROMOTIONS.find((promotion) => promotion.featured);
};
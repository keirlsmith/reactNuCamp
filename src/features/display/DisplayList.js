import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectedFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectedFeaturedPromotions } from '../promotions/promotionsSlice';


const DisplayList = () => {
    const items = [ selectedFeaturedCampsite(), selectedFeaturedPromotions() ];

    return (
        <Row>
            {items.map((items, idx) => {
                return (
                    <Col md className='m-1'>
                        <DisplayCard item = {items} />
                    </Col>
                )
            })}
        </Row>
    )
};

export default DisplayList;
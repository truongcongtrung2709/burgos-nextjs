import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
const STAR_COUNT = 5;
const Rating = ({ value }:any) => {
  const stars = Array.from({length: STAR_COUNT}, (star,index) => <FontAwesomeIcon key={index} icon={faStar} className='text-gray' />);
  let i;
  for (i = 0; i < value; i++) { 
    stars[i] = <FontAwesomeIcon key={i} icon={faStar} className='text-yellow' />;
  }
  return <div className="rating">{stars}</div>;
};
export default Rating;
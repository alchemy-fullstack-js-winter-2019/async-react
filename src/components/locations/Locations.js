import Location from './Location';
import Results from '../paging/Results';
import { getLocations } from '../../services/rickAndMortyApi';

export default Results(Location, getLocations);

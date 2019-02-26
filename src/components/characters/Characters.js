import Character from './Character';
import Results from '../paging/Results';
import { getCharacters } from '../../services/rickAndMortyApi';

export default Results(Character, getCharacters);

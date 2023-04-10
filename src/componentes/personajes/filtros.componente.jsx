import { useAppDispatch } from '../../redux/hooks';
import { getCharactersByName } from '../slice/charactersSlice';
import './filtros.css';

const Filtros = () => {
    
    const dispatch = useAppDispatch();
    return <div className="filtros">
        <label for="nombre">Filtrar por nombre:</label>
        <input onChange={(event) => dispatch(getCharactersByName(event.target.value))} type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" />
    </div>
}

export default Filtros;
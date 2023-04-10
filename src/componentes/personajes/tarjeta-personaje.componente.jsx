import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import BotonFavorito from '../botones/boton-favorito.componente';
import { addFavorito, removeFavorito } from '../slice/charactersSlice';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({character}) => {
    const characters = useAppSelector(state => state.Characters)
    const dispatch = useAppDispatch();

    function favorito() {
        !characters.favoritos.find(((favorito) => favorito.id === character.id)) 
            ?
        dispatch(addFavorito(character))
            :
        dispatch(removeFavorito(character))
        
    }
    return <div className="tarjeta-personaje">
        <img src={character.image} alt={character.name}/>
        <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            <BotonFavorito esFavorito={characters.favoritos.find(((favorito) => favorito.id === character.id))} onClick={favorito}/>
        </div>
    </div>
}

export default TarjetaPersonaje;
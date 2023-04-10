import { useAppSelector } from '../../redux/hooks';

import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';


/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = ({characters}) => {
    

    return <div className="grilla-personajes">
       {
        characters.map(character => 
            <TarjetaPersonaje character={character}/>
        )
       }
    </div>
}
 
export default GrillaPersonajes;
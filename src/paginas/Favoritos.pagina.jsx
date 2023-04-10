import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { removeAllFavoritos } from "../componentes/slice/charactersSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const characters = useAppSelector(state => state.Characters.favoritos)
    const dispach = useAppDispatch();
    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button onClick={() => dispach(removeAllFavoritos())} className="danger">Eliminar Todos</button>
        </div>
        {characters.length != 0 ?
        <GrillaPersonajes characters={characters} />:
        <h4>No seleccionaste ningún personaje como favorito</h4>
        }
    </div>
}

export default PaginaFavoritos
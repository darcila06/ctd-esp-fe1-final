import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { getCharactersByName } from "../componentes/slice/charactersSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    const characters = useAppSelector(state => state.Characters.results)
    const dispatch = useAppDispatch();
    function reset () {
        dispatch(getCharactersByName(""))
        document.getElementsByName("nombre")[0].value = ""
    }
    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button onClick={reset} className="danger">Limpiar Filtros</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes characters={characters}/>
        <Paginacion />
    </div>
}

export default PaginaInicio
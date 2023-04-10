import './paginacion.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {useEffect, useState} from 'react';
import { getCharacters } from '../slice/charactersSlice';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const characters = useAppSelector(state => state.Characters)
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(characters.info.next);
    
    useEffect(() => {
        dispatch(getCharacters(page))
    }, [page])
    
    return <div className="paginacion">
        <button onClick={() => setPage(characters.info.prev)} disabled={characters.info.prev ? false : true} className={"primary"}>Anterior</button>
        <button onClick={() => setPage(characters.info.next)} disabled={characters.info.next ? false : true} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Character {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: {
        name: string
        url: string
    }
    location: {
        name: string
        url: string
    }
    image: string
    episode: [string]
    url: string
    created: string
}

interface info {
    count: number
    pages: number
    next: string,
    prev: string | null
}
interface initialType {
    info: info
    results: Character[]
    favoritos: Character[]
    loading: boolean
}

export const getCharacters = createAsyncThunk(
    'Characters/getCharacters',
    async (url: string) => {
        const response = await fetch(url);
        const parseResponse = await response.json()
        return parseResponse
    }
)

export const getCharactersByName = createAsyncThunk(
    'Characters/getCharactersByName',
    async (name) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
        const parseResponse = await response.json()
        return parseResponse
    }
)

const initialState: initialType = {
    info: {
        count: 1,
        pages: 1,
        next: "https://rickandmortyapi.com/api/character/",
        prev: null
    },
    results: [],
    favoritos: [],
    loading: false
}
const characterSlice = createSlice({
    name: 'Characters',
    initialState,
    reducers: {
        addFavorito: (state, action: PayloadAction<Character>) => {
            state.favoritos.push(action.payload)
        },
        removeFavorito: (state, action: PayloadAction<Character>) => {
            state.favoritos = state.favoritos.filter((character) => character.id !== action.payload.id)
        },
        removeAllFavoritos: (state) => {
            console.log("Entro")
            console.log(state.favoritos)
            console.log(initialState.favoritos)
            state.favoritos = initialState.favoritos
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCharacters.pending, (state) => {
                state.loading = true
            })
            .addCase(getCharacters.fulfilled, (state, action) => {
                state.loading = false
                state.info = action.payload.info
                state.results = action.payload.results
            })
            .addCase(getCharactersByName.fulfilled, (state, action) => {
                state.info = action.payload.info
                state.results = action.payload.results
            })
    }
})
export const {addFavorito , removeFavorito, removeAllFavoritos} = characterSlice.actions
export default characterSlice.reducer
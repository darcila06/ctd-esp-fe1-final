  /**
 * Represent the response information
 *
 * @author Daniel Arcila 
 * @see https://rickandmortyapi.com/documentation/#get-all-episodes
 */

export interface Info {
    count: number
    pages: number
    next: string,
    prev: string | null
}
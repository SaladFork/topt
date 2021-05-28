/**
 * Wrapper around an external resource being loaded (usually from the API) 
 */
export type Loading<T> =
    { state: "loading", data: null }
    | { state: "loaded", data: T }
    | { state: "error", message: string }
    | { state: "nocontent", data: null }
    | { state: "idle", data: null }
    | { state: "saving", data: T }
    ;

/**
 * Helper class to generating Loading instances
 */
export class Loadable {

    /**
     * Create a Loading that is in the state of 'loading'. Data will be null
     */
    public static loading<T>(): Loading<T> {
        return { state: "loading", data: null };
    }

    /**
     * Create a Loading that is in the state of 'idle'. Data will be null
     */
    public static idle<T>(): Loading<T> {
        return { state: "idle", data: null };
    }

    /**
     * Create a Loading that is in the state of 'loaded'. Data will be what is passed
     * 
     * @param data Data that was loaded externally
     */
    public static loaded<T>(data: T): Loading<T> {
        return { state: "loaded", data: data };
    }

    /**
     * Create a Loading that is in the state of 'error'. Data will be the error passed
     * 
     * @param err Error that occured while attemping to load this external resource
     */
    public static error<T>(err: string): Loading<T> {
        return { state: "error", message: err };
    }

    /**
     * Create a Loading that is in the state of 'nocontent'. Data will be null 
     */
    public static nocontent<T>(): Loading<T> {
        return { state: "nocontent", data: null };
    }

    /**
     * Creating a Loading that is in the state of 'saving'. Data will be what is passed.
     *  Used when an external resource has been loaded, but is now being changed. The data is still loaded and valid,
     *      but is being updated. This is useful for a saving icon that rotates when the data is being saved, but
     *      the data that is loaded should still be displayed
     * 
     * @param data Data that was previously loaded, but is now saving
     */
    public static saving<T>(data: T): Loading<T> {
        return { state: "saving", data: data };
    }

}

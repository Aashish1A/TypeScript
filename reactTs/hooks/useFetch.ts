import { useEffect, useState } from "react";

interface FetchState<T> {
    data: T | null,
    loading: boolean,
    error: string | null
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null
    })
    // useEffect to make fetch request when url changes
    useEffect(() => {
        // setState({ data: null, loading: true, error: null }) -> Calling setState synchronously within an effect can trigger cascading renders
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Error fetching data: ${res.statusText}`)
                }
                return res.json()
            })
            .then((data) => setState({ data, loading: false, error: null }))
            .catch((error) => setState({ data: null, loading: false, error: error.message }))
            
    }, [url])

    return state;
}
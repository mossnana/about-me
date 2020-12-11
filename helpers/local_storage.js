
export const getLocalStorage = (field, defaultValue) => {
    if (typeof window !== 'undefined') return localStorage.getItem(field, defaultValue)
}
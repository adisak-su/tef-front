
export function saveLocalStorage(item,value) {
    localStorage.setItem(item, JSON.stringify(value));
}

export function getLocalStorage(item) {
    try {
        const value = JSON.parse(localStorage.getItem(item));
        if (value) {
         return value;
        }
        else
          return undefined
    }
    catch(error) {
        return undefined
    }
}

export default {saveLocalStorage, getLocalStorage}
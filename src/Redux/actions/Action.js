export const Add = (item) => {
    return {
        type: "Add",
        payload: item
    }
}
export const Delete = (id) => {
    return {
        type: "Delete",
        payload: id
    }
}

// remove individual iteam

export const REMOVE = (item) => {
    return {
        type: "Remove_One_Item",
        payload: item
    }
}

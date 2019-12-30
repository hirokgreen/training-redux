
export const addUser = (id, name, age) => {
    return {
        type: 'USER_ADDED',
        payload: {id:id, name: name, age: age}
    }
};

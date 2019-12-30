let users = [
    {id: 1, name: 'Raisul Islam', age: 25},
    {id: 2, name: 'Hirok Biswas', age: 25},
    {id: 3, name: 'IH Khan Mishkat', age: 27}
]

export default (state = users, action) => {
    console.log(...state);
    switch (action.type) {
      case 'USER_ADDED':
        return [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            age: action.payload.age
          }
        ]
      default:
        return state;
    }
}

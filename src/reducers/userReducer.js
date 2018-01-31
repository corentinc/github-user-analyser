export default function reducer(state={
        username: "corentinc"
    }, action) {
        switch (action.type) {
            case "CHANGE_USER": {
                return {...state, username: action.payload.username};
            }
            default : {
                return state;
            }
        }
}
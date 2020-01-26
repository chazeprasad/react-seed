export const Action = {
    Create: (type, payload) => {
        const action = {}
        action.type = type
        action.payload = payload || {}

        return action
    },
}

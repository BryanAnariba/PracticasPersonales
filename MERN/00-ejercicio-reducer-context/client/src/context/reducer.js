const reducer = ( state, action ) => {
    switch ( action.type ) {
        case '@create':
            { return console.log( 'Creating...' ) }
        case '@update':
            { return console.log( 'Updating...' ) }
        case '@delete':
            { return console.log( 'Deleting...' ) }
        default:
            return state;
    }
}

export {
    reducer as studentReducer
}
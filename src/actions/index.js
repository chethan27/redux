
export const incrementNumber = (data) => {

    console.log('data in actions', data)

    return {
        type: 'INCREMENT', data: data
    };

}
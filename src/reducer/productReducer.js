const productReducer = (state, action) => {

    // if (action.type === "SET_LOADING") {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // }

    // if (action.type === "API_ERROR") {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //   };
    // }

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "SET_API_DATA":

            const featuredData = action.payload.filter((curElem) => {

                return curElem.featured === true; //mtlb vhi data chayeyi jisme featured :true ho
            })

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featuredProducts: featuredData,

            };

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        default:
            return state;
    }

    return state;
}

export default productReducer;
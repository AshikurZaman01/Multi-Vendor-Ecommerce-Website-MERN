import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "../Reducers/rootReducer";

const store = configureStore({

    reducer: rootReducer,

    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
    },
    devTools: true,

})
export default store;
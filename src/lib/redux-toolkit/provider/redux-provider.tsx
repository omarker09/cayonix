"use client"

import { Provider } from "react-redux"
import { store } from "../store/index"


export function ProviderS({ children }: any) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
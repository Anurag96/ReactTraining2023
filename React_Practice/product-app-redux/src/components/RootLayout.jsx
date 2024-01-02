import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import store from '../store/store'
import { Provider } from 'react-redux';

function RootLayout() {
    return (
        <Provider store={store}>
            <Header />
            <main>
                <Outlet />
            </main>
        </Provider>
    )
}

export default RootLayout

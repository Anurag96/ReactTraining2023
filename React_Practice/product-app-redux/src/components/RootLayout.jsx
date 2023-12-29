import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../containers/Header'

function RootLayout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout

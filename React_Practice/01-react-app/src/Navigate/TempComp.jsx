import React from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'

const TempComp = () => {
    const params = useParams();

    return (
        <div>
            <p>{params.id}</p>
        </div>
    )
}

export default TempComp

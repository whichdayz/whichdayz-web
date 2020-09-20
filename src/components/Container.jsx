import React from 'react'
import NavBar from '../components/shared/NavBar'
import { Routes } from "../routes"
import firebase from "firebase"

export default function Container () {
        return (
            <>
                <header className="navbar">
                    <NavBar
                     />
                </header>
                {/* main */}
                <main>
                    {/* Routes Comp */}
                    <Routes
                    />
                </main>
            </>
        )
}

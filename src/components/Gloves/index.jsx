import React, { useState, useEffect } from 'react'
import axios from 'axios'
import baseUrl from '../../services/config'

export default function Gloves() {
    const [gloves, setGloves] = useState(null)

    useEffect (() => {
        async function loadGloves() {
            await axios
                .get(`${baseUrl}/gloves`)
                .then(response => {
                    setGloves(response.data[0].name)
                })
        }
        
        loadGloves()
    }, [])

    return (
        <div>
            Gloves:<br />
            {gloves}
        </div>
    )
}
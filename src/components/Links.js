import React from 'react'

export default function Links({ linkedin, github }) {
    return (
        <>
            <h3>Links</h3>
            <a href={github}>{github}</a>
            <a href={linkedin}>{linkedin}</a>
        </>
    )
}

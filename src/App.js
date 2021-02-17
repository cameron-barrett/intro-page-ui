import React from 'react';
import "./styles.css"

export default function App() {
    return(
        <div
        style= {{ display: 'flex', justifyContent: 'center' }}
        >
            <a href="something" class="button1 bouncy" style= {{ border: `solid lightgreen`}}>
                Easy
            </a>
            <a 
                href="something" 
                class="button1 bouncy" style={{ 
                animationDelay: `0.07s`, 
                border: `solid lightblue` }}>
                Medium
            </a>
            <a href="something" class="button1 bouncy" style={{ animationDelay: `0.14s`, border: `solid yellow` }}>
                Hard
            </a>
            <a href="something" class="button1 bouncy" style={{ animationDelay: `0.21s`, border: `solid red` }}>
                Expert
            </a>
            <a href="something" class="button1 bouncy" style={{ animationDelay: `0.28s`, border: `solid black` }}>
                Goodluck
            </a>
        </div>
    );
}
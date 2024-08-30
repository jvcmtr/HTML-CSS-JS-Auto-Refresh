import React from 'react'
import './App.css' 

export default function App() {
return (
    <div className='app'>
        <h1 className="page_title"> João Cícero Fundamentos de React TP2.1</h1>
        <div className='parte_container'>
            <div style={{padding: '20px'}}>
                <h1 className="title"> "Hello, World!" </h1>
                <p className="description"> 
                    <b> Fraze de efeito: </b> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo labore at culpa. Sunt in magni, ut harum voluptatum facere dicta nulla! Numquam repellendus molestiae eius. Ipsa obcaecati vero dolorem ducimus! 
                    </p> 
            </div>
        </div>
        <div className='parte_container'>
                <section className="grid">
                    <a href='https://github.com/jvcmtr'>
                        <h2> Joao Cicero </h2>
                        <p> visite minha pagina do github </p>
                    </a>
                </section> 
        </div>
    </div>
    )
}
//main or hompage

import './Main.css';

export function Main() {
    
    return(
        <section className='Main'>
            <div className="Main-title">
            <h1>Welcome To Plantwave Paradise</h1>
            </div>
            <div className="Main-des">
                <p>
                    This is my portfolio site and final project for Interactive Media 4
                </p>
            </div>
            <div className='Main-about'>
                <p>
                    this plantwave paradise is meant to be a calming tranquil experience
                </p>
                <p>
                    if you want to see more feel free to go to my GitHub
                </p>
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                    <button>Github</button>
                </a>
            </div>
							
        </section>
    );
};
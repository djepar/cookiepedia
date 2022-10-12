import { useState } from 'react';

export default function Panel({title, children}){
    const [isActive, setIsActive] = useState(false)
    return (
        <section className="panel">
            <h2>{title}</h2>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={() => setIsActive(true)}>
                    Show
                </button>
            )}
        </section>
    );
}
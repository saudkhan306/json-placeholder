import React from 'react'

function Loader({loading}) {
    return <section className={`loaderContainer bg-dark ${loading ? '' : 'hidden'}`}>
        <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>        
        <span className="mt-3">Loading...</span>
    </section>
}

export default Loader

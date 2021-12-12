const { Link } = ReactRouterDOM

export function Home() {
    return (
        <section className="home">
            <h1>Welcome to KeepApp</h1>
            <div className="links-to-pages">
                <div className="link" >
                    <Link to="/keep">Keeps</Link>
                </div>
            </div>
        </section>
    )
}
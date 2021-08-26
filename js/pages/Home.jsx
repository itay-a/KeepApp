const { Link } = ReactRouterDOM

export function Home() {
    return (
        <section className="home">
            <h1>Welcome to Uppsus</h1>
            <h3>Your Keeps and Email are Connected</h3>
            <div className="links-to-pages">
                <div className="link">Keeps</div>
                <div className="link">Email</div>
                <div className="link">Books</div>
            </div>
        </section>
    )
}
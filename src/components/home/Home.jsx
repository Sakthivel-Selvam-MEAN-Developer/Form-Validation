import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="home">
            <h2>Welcome to Home...!</h2>
            <button className="btn btn-primary" onClick={() => navigate('/')}>Signout</button>
        </div>
    )
}

export { Home }
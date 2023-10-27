import Header from "../Header"
import Main from "../Main"

const Home = ({ loggedIn }) => {
    return (
        <>
            <Header showHeaderOptions={true} loggedIn={loggedIn} />
            <Main/>
        </>
    )
}

export default Home
import { useLocation } from "react-router-dom"
import Header from "../Header"
import Main from "../Main"

const Home =  () => {
    const state = useLocation()
    console.log(state)
    console.log("*********************")
    return (
        <>
            {
                state.state
                    ? state.state.loggedIn
                    : false
            }
            <Header showHeaderOptions={true} isLoggedIn={state.state
                    ? state.state.loggedIn
                    : false}  />
            <Main/>
        </>
    )
}

export default Home
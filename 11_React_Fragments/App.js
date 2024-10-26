import { Incrementer } from "./components/Incrementer"
import Counter from "./components/Counter"
import { Fragment } from "react"

const App = () =>{
    return (
        // Way -1 for Fragments
        // <>
        //     <Incrementer />
        //     <Counter />
        // </>

        // Way -2 for Fragments
        <Fragment>
            <Incrementer />
            <Counter />
        </Fragment>
    )
}

export default App
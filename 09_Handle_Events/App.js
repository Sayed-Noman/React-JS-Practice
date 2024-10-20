import Counter from './components/Counter'

const App = () =>{
    return (
        <Counter onClick={(e) => console.log('Section Clicked')}/>
    )
}

export default App
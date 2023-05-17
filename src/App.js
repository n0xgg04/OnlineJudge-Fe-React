import Router from '../src/routes/index'
import React from 'react'

class App extends React.Component{

    componentWillUnmount() {
        console.log('App unmounted')
    }

    componentDidMount() {
        console.log('App mounted')
    }

  render(){
        return (
            <>
                <Router/>
            </>
        )
    }
}

export default App;

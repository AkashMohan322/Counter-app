import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

function Counter() {
    //state creation
    const [counter,setCounter]=useState(0)//apply 0 as initial state value

    //function counter
    function incrementCounter(){
        //increment by 1
        setCounter(counter+1)
    }
    function decrementCounter(){
        if(counter!=0){
            //decrement by 1
        setCounter(counter-1)
        }
    }
    function resetCounter(){
        setCounter(0)
    }
  return (
    <div className='m-5 p-5 d-flex justify-content-center align-items-center'>
        <div className='container m-5 p-5 border border-2 border-success shadow rounded w-50 bg-secondary'>
            <h1 className='text-center text-light'>Counter App</h1>
            <h1 className='text-center'>{counter}</h1>
            <div className='d-flex justify-content-between'>
                <MDBBtn color='primary' onClick={incrementCounter}>Increment</MDBBtn>
                <MDBBtn color='dark' onClick={decrementCounter}>Decrement</MDBBtn>
                <MDBBtn color='danger' onClick={resetCounter}>Reset</MDBBtn>
            </div>

        </div>
    </div>
  )
}

export default Counter
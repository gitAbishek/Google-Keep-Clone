import React, { useReducer, useState } from 'react'

const initialState = 0


const reducer = (state, action) => {
    switch (action.type) {
        case 'title':
            const title = action.payload
            const id = new Date().getTime().toString()
            
            //console.log(title)
            return { ...state, title,id }


        case 'content':
            const content = action.payload
            //console.log(content)
            return { ...state, content }

        case 'empty':
            return {
                title: ' ',
                content: ' '
            }

        default:
            return state
    }
}

const Main = () => {

    const [data, setData] = useState([])
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleClick = (e) => {
        e.preventDefault()
        if(!state){
            alert('plz enter the data')
        }else{
        setData([...data,state])
        dispatch({ type: 'empty'})
        }
    }

    const deleteItem = (ind) =>{
        const updatedData = data.filter((curElem,id)=>{
            return curElem.id !== ind;
        })

        setData(updatedData)
    }

    //console.log(state)
    console.log(data)

    return (
        <div>
            <div className="content">

                <div className="inner_content">

                    <div className="inner">
                        <div className="input_field">
                            <div className="title">
                                <p className='inputname'>Title</p>
                                <input type="text"
                                   
                                    className='input1'
                                    value={state.title}
                                    
                                    onChange={(e) => dispatch({ type: 'title', payload: e.target.value })}
                                />
                            </div>

                            <div className="textarea">
                                <p className='inputname'>Content</p>
                                <textarea cols="30" rows="5"
                                    className='input2'
                                    
                                    value={state.content}
                                    
                                    onChange={(e) => dispatch({ type: 'content', payload: e.target.value })}
                                ></textarea>
                            </div>
                        </div>

                        <div className="button">
                            <button onClick={handleClick}>Save</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="show_content">
            
            {
                data.map((data,id)=>{
                    return(
                    <div className="box" key={id}>
                    <div className="inner_content" >
                    <p className='show_title'>{data.title}</p>
                    <p className='show_content'>{data.content}</p>
                    <button className='btn2' onClick={() => deleteItem(data.id)}>Delete</button>
                    </div>
                    </div>
                    )
                })
            }
            
            </div>

        </div>
    )
}

export default Main
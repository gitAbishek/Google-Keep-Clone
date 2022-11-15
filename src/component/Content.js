import React, { useState } from 'react'

const Content = () => {
    const [data,setData] = useState({})
    const [saveData,setSavaData] = useState()
    const handleClick = (e) =>{
        e.preventDefaue()
        setSavaData(data)
    }

    return (
        <div>
            <div className="content">

                <div className="inner_content">

                    <div className="inner">
                        <div className="input_field">
                            <div className="title">
                                <input type="text"
                                    placeholder='Title'
                                    className='input1'
                                    value={data}
                                    onChange={(e) => setData(e.target.value)}
                                />
                            </div>

                            <div className="textarea">
                                <textarea cols="30" rows="5"
                                    className='input2'
                                    placeholder='Content'
                                    value={data}
                                    onChange={(e) => setData(e.target.value)}
                                ></textarea>
                            </div>
                        </div>

                        <div className="button">
                            <button onClick={handleClick}>Save</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Content
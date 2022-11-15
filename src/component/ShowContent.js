import React from 'react'

const ShowContent = ({ data }) => {
 // console.log(state)
  return (
    <div>
      <div className="show_content">
        
          <div className="box">
                <h4>{data.title}</h4>
                <p>{data.content}</p>
                <button>Delete</button>
              </div>
          
      </div>

    </div>
  )
}

export default ShowContent
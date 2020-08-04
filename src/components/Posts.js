import React from 'react'

const Posts = ({posts}) => {
  
  return posts.map(p => {
    return  <div id={p.id}>
              <p>{p.title}</p>
            </div>
  })

}

export default Posts
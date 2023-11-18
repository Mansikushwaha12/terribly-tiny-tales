import React from 'react'
import SinglePost from './SinglePost'

function Posts() {
  return (
    <div className='posts'>
    <SinglePost title="A Changing World Order" description="The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including..." creator="musing by anujgosaliya" time="August 2 | 2 mins read | 102 view"/>
    <SinglePost title="India V/s Australia" description="Think about it - this cricket series was akin to therapy.

    
    
    Laying our childhood trauma up top, working with it slowly and surely over two m.." creator="thought by anujgosaliya" time="January 21 | 1 mins read | 156 view"/>
    <SinglePost title="Where to Build" description="Writing is the first step to create:

    - stories
    
    - products
    
    - companies" creator="thought by anujgosaliya" time="Novemeber 18 | 1 mins read | 228 view"/>
    </div>
  )
}

export default Posts
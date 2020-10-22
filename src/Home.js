import React,{useEffect, useState} from 'react';
import {db} from './firebase';
import './Home.css'

function Home() {
   const [posts, setPosts] = useState([])

   useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
    setPosts(snapshot.docs.map(doc => ({
      id: doc.id,
      post: doc.data()

    })));
    })

  }, [ ]);

    return (
        <div className='home'>
            <div className='home__posts'>
             { console.log(posts)}
            {posts.map(item=>(
             
              <div className='home__post'>
                <p>{item.post.title}</p>
                <p>{item.post.text}</p>
                
                <img src={item.post.img} className='home__img'/>
                </div>
            ))

            }
            </div>
        </div>
    )
}

export default Home

import React from 'react';

//seytam 2
// const getPost =async()=>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data =await res.json()
//     return data
// }


//seytam 3
const getPost =async()=>{
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/posts");
          const data = await res.json();
          return data;
        } catch (err) {
          throw new Error("Filed to fetch posts");
        }
}

//seytam 4


// const getPost =async()=>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if(!res.ok){
//           throw new Error("Filed to fetch posts");
//     }
//     const data =await res.json()

//     return data
// }




const PostPage = async() => {
    const post =await getPost()
    // console.log(post)
    //seytam 1
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const post=await res.json()
    return (
        <div>
            <h2>Poster cooming soon {post.length}</h2>
            
        </div>
    );
};

export default PostPage;
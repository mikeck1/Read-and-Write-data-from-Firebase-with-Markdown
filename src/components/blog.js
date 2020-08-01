import React from 'react';
import 'firebase/firestore';
import firestore from '../utils/firestore';

import "../App.css"

function Blog() {
    // You can initilize posts with a parameter into Blog
    // const [posts, setPosts] = React.useState(props.posts)
    const [posts, setPosts] = React.useState([])


    React.useEffect(() => {

        const fetchData = async () => {
            const db = firestore.firestore()
            const data = await db.collection("posts").get()
            setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        fetchData()
    }, [setPosts])


    return (
        <div style={{ width: "100%" }}>
            {posts.map(post => (
                < div style={{ marginTop: "30px", marginBottom: "30px" }}>
                    <div style={{ textAlign: "center" }}>
                        <h1>{post.title}</h1>
                        <hr />
                        <img src={post.image} style={{ width: "400px", height: "200px" }} />
                    </div>
                </div>
            ))
            }
        </div>
    );
}
export default Blog;

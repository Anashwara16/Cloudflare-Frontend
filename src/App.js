import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import Help from './components/Help';

const workerURL = 'https://worker.anshwara-rp.workers.dev/posts/';
const workerDelURL = 'https://worker.anshwara-rp.workers.dev/delposts/';

const App = () => {
    const [showAddPost, setShowAddPost] = useState(false);
    const [posts, setPosts] = useState([]);
    const [showRecent, setShowRecent] = useState(false);

    useEffect(() => {
        const getPosts = async () => {
            const postsFromServer = await fetchPosts();
            setPosts(postsFromServer);
        };

        getPosts();
    }, []);

    // Fetch Posts
    const fetchPosts = async () => {
        let data = [];
        let res;
        res = await fetch(workerURL);
        if (res instanceof Error) {
            console.log(fetchPost);
        } else {
            const unformatData = await res.json();
            for (const post in unformatData) {
                let jsonPost = JSON.parse(unformatData[post]);
                data.push(jsonPost);
            }
        }
        return data;
    };

    // Add Post
    const addPost = async (post) => {
        setShowAddPost(!showAddPost);
        let updNamePost = post;
        if (post.username === '') {
            updNamePost = { ...post, username: 'Anonymous Mouse' };
        }
        const date = new Date();
        let time = date.getTime().toString();
        let updPost = { ...updNamePost, id: time };
        const res = await fetch(workerURL, {
            method: 'POST',
            body: JSON.stringify(updPost),
        });
        const data = await res.json();
        if (data.status === 'success') {
            setPosts([...posts, updPost]);
        }
    };

    // Update Post
    const updatePost = async (post) => {
        let data = null;
        const res = await fetch(workerURL, {
            method: 'POST',
            body: JSON.stringify(post),
        });
        if (res instanceof Error) {
            console.log(fetchPost);
        } else {
            data = await res.json();
        }
        return data;
    };

    // Fetch Post
    const fetchPost = async (id) => {
        let data = null;
        const res = await fetch(`${workerURL}${id}`);
        if (res instanceof Error) {
            console.log(fetchPost);
        } else {
            data = await res.json();
        }
        return data;
    };

    // Increment the likes of a Post
    const incrementPostLike = async (id) => {
        const postToIncrement = await fetchPost(id);
        if (!postToIncrement) {
            return;
        }
        let post = JSON.parse(postToIncrement);
        let likes = post.likes;
        const updPost = { ...post, likes: likes + 1 };
        const res = await updatePost(updPost);
        if (res.status !== 'success') {
            console.log('like increment failed');
            return;
        }
        setPosts(
            posts.map((post) =>
                post.id === id ? { ...post, likes: updPost.likes } : post
            )
        );
    };

    // Increment the laughs of a Post
    const incrementPostLaugh = async (id) => {
        const postToIncrement = await fetchPost(id);
        if (!postToIncrement) {
            return;
        }
        let post = JSON.parse(postToIncrement);
        let laughs = post.laughs;
        const updPost = { ...post, laughs: laughs + 1 };
        const res = await updatePost(updPost);
        if (res.status !== 'success') {
            console.log('laugh increment failed');
            return;
        }
        setPosts(
            posts.map((post) =>
                post.id === id ? { ...post, laughs: updPost.laughs } : post
            )
        );
    };

    // Delete Post (Sending POST request as server is not able to handle DELETE request)
    const deletePost = async (id) => {
        const res = await fetch(`${workerDelURL}${id}`, {
            method: 'POST',
        });
        console.log(res);
        //We should control the response status to decide if we will change the state or not.
        res.status === 200
            ? setPosts(posts.filter((post) => post.id !== id))
            : alert('Error Deleting This Post');
    };

    // Show most recent post first
    const showRecentPosts = () => {
        let sortedPosts = posts.sort((a, b) => b.id - a.id);
        setPosts(sortedPosts);
        setShowRecent(!showRecent);
    };

    // Show most liked post first
    const showLikedPosts = async () => {
        let sortedPosts = posts.sort((a, b) => b.likes - a.likes);
        setPosts(sortedPosts);
        setShowRecent(!showRecent);
    };

    return (
        <Router>
            <div className="container">
                <Header
                    onAdd={() => {
                        setShowAddPost(!showAddPost);
                        showRecentPosts();
                    }}
                    showAdd={showAddPost}
                    onRecent={() => showRecentPosts()}
                    onLikes={() => showLikedPosts()}
                />
                <Route
                    path="/"
                    exact
                    render={(props) => (
                        <>
                            {showAddPost && <AddPost onAdd={addPost} />}
                            {posts.length > 0 ? (
                                <Posts
                                    posts={posts}
                                    onDelete={deletePost}
                                    onLikeIncrement={incrementPostLike}
                                    onLaughIncrement={incrementPostLaugh}
                                />
                            ) : (
                                'No Posts To Show'
                            )}
                        </>
                    )}
                />
                <Route path="/help" component={Help} />
                <Footer />
            </div>
        </Router>
    );
};

export default App;

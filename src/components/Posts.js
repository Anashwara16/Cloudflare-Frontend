import Post from './Post';

const Posts = ({ posts, onDelete, onLikeIncrement, onLaughIncrement }) => {
    return (
        <>
            {posts.map((post, index) => {
                return (
                    <Post
                        key={index}
                        post={post}
                        onDelete={onDelete}
                        onLikeIncrement={onLikeIncrement}
                        onLaughIncrement={onLaughIncrement}
                    />
                );
            })}
        </>
    );
};

export default Posts;

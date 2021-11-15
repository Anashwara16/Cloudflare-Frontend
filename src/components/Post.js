import { FaThumbsUp, FaAt, FaTrash, FaLaugh } from 'react-icons/fa';
import ReactPlayer from 'react-player';

const Post = ({ post, onDelete, onLikeIncrement, onLaughIncrement }) => {
    return (
        <div className="post">
            <div className="post-header">
                <span style={{ color: 'blue' }}>
                    <FaAt></FaAt>&nbsp;&nbsp;{post.username}{' '}
                </span>
                <h3>{post.title} </h3>
                <div className="emoji-container">
                    <div className="like-container">
                        <p style={{ color: 'grey' }}>
                            {post.likes}&nbsp;&nbsp;
                        </p>
                        <FaThumbsUp
                            style={{ color: 'green', cursor: 'pointer' }}
                            onClick={() => onLikeIncrement(post.id)}
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}></div>
                    <div className="laugh-container">
                        <p style={{ color: 'grey' }}>
                            {post.laughs}&nbsp;&nbsp;
                        </p>
                        <FaLaugh
                            style={{ color: 'green', cursor: 'pointer' }}
                            onClick={() => onLaughIncrement(post.id)}
                        />
                    </div>
                </div>
            </div>
            <div className="post-body">
                <p className="post-body-item">{post.content}</p>
                <div style={{ marginBottom: '10px' }}></div>
                <img
                    className="post-body-item-image"
                    src={post.selectedImage}
                    alt=""
                />
                <div>
                    {post.youtubeUrl !== '' && (
                        <div className="post-body-item">
                            <ReactPlayer url={post.youtubeUrl} />
                        </div>
                    )}
                </div>
            </div>
            <div
                style={{ marginTop: '20px', marginBottom: '10px' }}
                className="post-footer"
            >
                <FaTrash
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(post.id)}
                />
            </div>
        </div>
    );
};

export default Post;

import { useState } from 'react';
import SearchBar from './SearchBar';
import ImageList from './imageList';

import axios from 'axios';

const API_KEY = 'JNShkdyOyG28UynUcHfCRItHSSzwHm6cwBeC1c9_SQM';

const AddPost = ({ onAdd }) => {
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [youtubeUrl, setYouTubeUrl] = useState('');

    const [likes, setLikes] = useState(0);
    const [laughs, setLaughs] = useState(0);
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!content && !youtubeUrl && !selectedImage) {
            alert('Please add a post');
            return;
        }

        onAdd({
            username,
            title,
            content,
            youtubeUrl,
            selectedImage,
            likes,
            laughs,
        });

        setUsername('');
        setTitle('');
        setContent('');
        setYouTubeUrl('');
        setLikes(0);
        setLaughs(0);
    };

    const onSearchSubmit = async (term) => {
        const response = await axios.get(
            'https://api.unsplash.com/search/photos',
            {
                params: { query: term },
                headers: {
                    Authorization: `Client-ID ${API_KEY}`,
                },
            }
        );

        setImages(response.data.results);
    };

    const setSelectedImageTest = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    return (
        <div>
            <form className="add-form split-form" onSubmit={onSubmit}>
                <div className="split-form-one">
                    <div className="form-control ">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="Your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label>Title</label>
                        <input
                            type="text"
                            placeholder="Title of the post"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label>Content</label>
                        <textarea
                            className="form-control"
                            placeholder="What's on your mind?"
                            rows="5"
                            cols="80"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label>Youtube Link</label>
                        <input
                            type="text"
                            placeholder="Paste a valid youtube link"
                            value={youtubeUrl}
                            onChange={(e) => setYouTubeUrl(e.target.value)}
                        />
                    </div>
                </div>
                <div className="split-form-split"></div>
                <div className="split-form-two">
                    <input
                        type="submit"
                        value="Submit Post"
                        className="btn btn-block"
                    />
                </div>
            </form>
            <div>
                <SearchBar userSubmit={onSearchSubmit} />
                {{ images }.length > 0 && (
                    <span>Found: {images.length} images</span>
                )}
                {
                    <ImageList
                        foundImages={images}
                        onSelect={(imageSrc) => setSelectedImageTest(imageSrc)}
                    />
                }
            </div>

            <div className="divider"></div>
        </div>
    );
};

export default AddPost;

import { Link } from 'react-router-dom';

const Help = () => {
    return (
        <div>
            <h1>General Assignment CloudFlare</h1>
            <br></br>
            <h2>Features</h2>
            <h3> &emsp;&emsp;User Posts</h3>

            <h3> &emsp;&emsp;Content Variety</h3>
            <h4> &emsp;&emsp;&emsp;&emsp;Text </h4>
            <h4> &emsp;&emsp;&emsp;&emsp;Youtube Video </h4>
            <h4> &emsp;&emsp;&emsp;&emsp;Image </h4>

            <h3> &emsp;&emsp;Interactivity </h3>
            <h4>
                {' '}
                &emsp;&emsp;&emsp;&emsp;Users can like a post and it see all
                posts sorted by likes
            </h4>
            <h4> &emsp;&emsp;&emsp;&emsp;Users can react with a laugh emoji</h4>
            <h4> &emsp;&emsp;&emsp;&emsp;Users can delete a post</h4>
            <br></br>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default Help;

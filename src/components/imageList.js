import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';
import { useState } from 'react';

const ImageList = (props) => {
    const [chosenImage, setChosenImage] = useState({});
    const imgs = props.foundImages.map((img) => {
        return (
            <ImageCard
                key={img.id}
                image={img}
                onSelect={() => onSelectImage(img)}
            />
        );
    });

    const onSelectImage = (img) => {
        setChosenImage(img);
        console.log(img.urls.regular);
        props.onSelect(img.urls.regular);
    };

    return (
        <div>
            {chosenImage.urls && (
                <span>
                    <h3>Image Selected :</h3> {chosenImage.alt_description}{' '}
                </span>
            )}
            <div className="description-space"></div>
            <div className="image__list">{imgs}</div>
        </div>
    );
};

export default ImageList;

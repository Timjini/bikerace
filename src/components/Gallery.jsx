// get gallery from flickr

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Gallery() {

// get pexels gallery from api
const [gallery, setGallery] = useState([]);
//show more images on click
const [page, setPage] = useState(1);



useEffect(() => {
    axios.get(`https://api.pexels.com/v1/search?query=cycling&per_page=10&page=${page}`, {
        headers: {
                accept: 'application/json',
                Authorization : "563492ad6f91700001000001c5a80c11984b4823b56ed6918e0c232a",
            }
        })
        .then(res => {
            setGallery([...gallery, ...res.data.photos]);
        }
    )
}, [page]);


const showMore = () => {
    setPage(page + 1);
}

    return (
        <div className="gallery">
            <h1 className="gallery__title">Event Gallery</h1>
            <div className="gallery__container">
                {gallery.map((image, index) => (
                    <div className="gallery__image" key={index}>
                        <img className='galleryImg' src={image.src.medium} alt="gallery" />
                    </div>
                ))}
            </div>
            <button className="gallery__button  rounded-lg bg-red-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-700 hover:bg-red-800 hover:ring-red-800" onClick={showMore}>Show More</button>
        </div>
    )
}


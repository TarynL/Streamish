import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos, searchVideos } from "../modules/videoManager";
import { useParams } from "react-router-dom";

const UserVideoList = () => {
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    const getVideos = () => {
        getAllVideos().then(videos => {
            var userVids = videos.filter(vid => vid.userProfileId.toString() === id)
            setVideos(userVids)
        });
    };



    // const handleSearch = (evt) => {
    //     evt.preventDefault()

    //     let userInput = evt.target.value
    //     let searchMatch = {}
    //     searchMatch[evt.target.id] = userInput
    //     searchVideos(userInput, true)
    //         .then(videos => setVideos(videos))


    // }

    useEffect(() => {
        getVideos();

    }, []);

    return (
        <div>
            {/* <form>
                <input class="search" type="text" required placeholder="Search for Video..."
                    onChange={handleSearch} />
            </form> */}
            <div className="container">
                <div className="row justify-content-center">

                    {videos.map((video) => (
                        <Video video={video} key={video.id} />
                    ))}


                </div>
            </div>
        </div>
    );
};

export default UserVideoList;
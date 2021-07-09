import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addVideo, getAllVideos } from "../modules/videoManager";

const VideoForm = () => {
    const emptyVideo = {
        title: '',
        description: '',
        url: ''
    };

    const [video, setVideo] = useState(emptyVideo);

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const videoCopy = { ...video };

        videoCopy[key] = value;
        setVideo(videoCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();

        addVideo(video).then(() => {
            setVideo(emptyVideo);
            getAllVideos();
        });
    };

    return (
        <Form>
            <h2>New Video Form</h2>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" placeholder="video title"
                    value={video.title}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="url">URL</Label>
                <Input type="text" name="url" id="url" placeholder="video link"
                    value={video.url}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" name="description" id="description"
                    value={video.description}
                    onChange={handleInputChange} />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
        </Form>
    );
};

export default VideoForm;

import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import {storage, db } from "./firebase";
import firebase from 'firebase';
import './ImageUpload.css';

function ImageUpload({username}) {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState("");
    
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () =>{
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalbytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                alert(error.message);

            },
            () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    db.collection("posts").add({
                        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        imageUrl: url,
                        username: username

                    });

                    setProgress(0);
                    setCaption("");
                    setImage(null);
                }); 
            }
        );
         
    };

    return (
        <div className="imageUpload">
            <progress className="imageUpload__progress" value={progress} max="100"/>
            <input className="imageUpload__caption" type="text" placeholder="Add caption......" onChange={event => setCaption(event.target.value) } value={caption}/>
            <input className="imageUpload__file" type="file" onChange={handleChange} />
            <Button className="imageUpload__button" onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload

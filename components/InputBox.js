import { EmojiHappyIcon } from "@heroicons/react/outline";
import { PhotographIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/client";
import Image from "next/image";
import { db, storage } from "../firebase";
import firebase from "firebase";
import { useRef, useState } from "react";

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
                storage.ref("posts").child(doc.id).getDownloadURL().then(url =>{
                    db.collection('posts').doc(doc.id).set({
                        postImage: url
                    }, {merge: true})
                })
            }
          );
        }
      });

    inputRef.current.value = "";
  };
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="flex flex-col bg-white rounded-xl px-4 ">
      <div className="flex items-center py-4 space-x-2">
        <Image
          src={session.user.image}
          height={40}
          width={40}
          layout="fixed"
          className="rounded-full"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className=" flex-grow bg-gray-100 hover:bg-gray-200 cursor-pointer focus:outline-none rounded-full px-5 py-3 "
            type="text"
            placeholder={`What's on your mind, ${
              session.user.name.split(" ")[0]
            }`}
          />
          <button onClick={sendPost} type="submit" className="hidden">
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            className="flex flex-col cursor-pointer transition transform ease-in-out duration-150 hover:scale-105 filter hover:brightness-150"
            onClick={removeImage}
          >
            <img
              className="h-10 object-contain"
              src={imageToPost}
              alt="post image"
            />
            <p className="text-center text-xs text-red-600">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly border-t py-3">
        <div className="inputIcon ">
          <VideoCameraIcon className="h-8 text-red-500" />
          <p className="whitespace-nowrap">Live Video</p>
        </div>
        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <PhotographIcon className="h-8 text-green-500" />
          <p>Photo/Video</p>
          <input
            onChange={addImageToPost}
            ref={filePickerRef}
            hidden
            type="file"
          />
        </div>
        <div className="hidden md:inputIcon ">
          <EmojiHappyIcon className="h-8  text-yellow-500" />
          <p>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;

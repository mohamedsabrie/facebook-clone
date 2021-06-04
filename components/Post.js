import Image from "next/image";
import { format } from "timeago.js";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
function Post({ name, email, image, postImage, timestamp, message }) {
  return (
    <div className="flex flex-col ">
      <div className="bg-white p-5 rounded-t-xl shadow-sm mt-5">
        <div className="flex items-center space-x-3">
          <img
            loading="lazy"
            className="object-contain rounded-full"
            src={image}
            width={40}
            height={40}
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm">
              {timestamp ? (
                format(new Date(timestamp?.toDate()).toLocaleString())
              ):(
                <p>Loading ....</p>
              )}
              
            </p>
          </div>
        </div>
        <p className="mt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
      <div className="flex justify-between items-center rounded-b-2xl bg-white">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-7" />
          <p>Like</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-7" />
          <p>Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-7" />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;

import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed({posts}) {
    return (
        <div className=" flex-grow max-w-2xl mx-auto overflow-y-auto pb-44 px-5">
            <Stories />
            <InputBox />
            <Posts posts={posts} />
            
            
        </div>
    )
}

export default Feed

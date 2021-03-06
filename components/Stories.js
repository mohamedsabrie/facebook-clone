import StoryCard from "./StoryCard"

function Stories() {
    const stories = [
        {
            name: "Mohamed Sabry",
            src:"/my_profile_pic.jpg",
            profile : "/profile-pic.jpg"

        },
        {
            name: "Elon Musk",
            src:"https://links.papareact.com/4zn",
            profile : "https://links.papareact.com/kxk"

        },
        {
            name: "Jeff Bezoz",
            src:"https://links.papareact.com/k2j",
            profile : "https://links.papareact.com/f0p"

        },
        {
            name: "Mark Zuckerberg",
            src:"https://links.papareact.com/xql",
            profile : "https://links.papareact.com/snf"

        },
        {
            name: "Bill Gates",
            src:"https://links.papareact.com/4u4",
            profile : "https://links.papareact.com/zvy"

        },
    ]
    return (
        <div className="flex-grow flex justify-center py-6 ">
            {stories.map(story =>(
                <StoryCard key={story.name} name={story.name} src={story.src} profile={story.profile}/>
            ))}
        </div>
    )
}

export default Stories

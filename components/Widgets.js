import { VideoCameraIcon } from "@heroicons/react/solid"
import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline"
import Contact from "./Contact"

const contacts  =[
    {src: "https://links.papareact.com/f0p", name:"Jeff Bezoz"},
    {src: "https://links.papareact.com/kxk", name:"Elon Musk"},
    {src: "https://links.papareact.com/zvy", name:"Bell Gates"},
    {src: "https://links.papareact.com/snf", name:"Mark Zuckerberg"},
    {src: "https://links.papareact.com/d0c", name:"Harry Poter"},
    {src: "https://links.papareact.com/6gg", name:"The Queen"},
    {src: "https://links.papareact.com/r57", name:"James Bond"},
]

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col  w-60">
 <div className="  fixed right-0 top-20 h-screen w-60  p-2 mt-5 ">
            <div className="flex justify-between items-center text-gray-500 mb-5" >
                <h2 className="text-sm">Contacts</h2>
                <div className="flex items-center space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>
            {contacts.map(contact => (
                <Contact key={contact.src} src={contact.src} name={contact.name} />
            ))}
            
        </div>
        </div>
       
    )
}

export default Widgets

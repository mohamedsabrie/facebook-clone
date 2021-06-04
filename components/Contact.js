import Image from "next/image";

function Contact({name, src}) {
    return (
        <div className="relative flex items-center space-x-3 mb-2 hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
            <Image
            src={src}
            height={50}
            width={50}
            layout="fixed"
            className="rounded-full"
            />
            <p>{name}</p>
            <div className="absolute bottom-3 left-8 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-100" />
        </div>

    )
}

export default Contact

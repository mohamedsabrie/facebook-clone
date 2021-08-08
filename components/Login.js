import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center  h-screen">
      <div className=" p-20 border shadow-lg flex flex-col items-center justify-center">
        <Image
          src="/facebook_logo.png"
          height={150}
          width={150}
          objectFit="contain"
        />
        <h1
          onClick={signIn}
          className=" mt-10 p-5 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600 active:shadow-lg"
        >
          Login With Facebook
        </h1>
      </div>
    </div>
  );
}

export default Login;

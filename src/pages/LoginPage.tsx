import Image from "next/image";
import Link from "next/link";
import React from "react";
import Poster from "../../public/bg.jpg";
import ThemeButton from "./components/ThemeButton";
import Carousel from "./components/Carousel";

export default function LoginPage() {
  return (
    <div className="flex flex-wrap">
      <div className="flex w-full flex-col items-end md:w-[30%] h-screen">
        <div className="mt-4 mr-8">
          <ThemeButton />
        </div>
        <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          <p className="text-center text-2xl font-bold text-blue-600 ">
            Login to your account
          </p>
          <form className="flex flex-col pt-3 md:pt-2">
            <div className="flex flex-col pt-4">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-4 font-bold inline-block text-sm "
                >
                  Enter Email Address
                </label>
                <input
                  type="text"
                  className="block w-full cursor-text appearance-none bg-transparent rounded-md border py-2 px-3 text-sm outline-none focus:border-blue-500  focus:shadow "
                  id="email"
                  name="email-username"
                  placeholder="Email *"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-4 font-bold inline-block text-sm "
                >
                  Enter Your Password
                </label>
                <input
                  type="text"
                  className="block w-full cursor-text appearance-none rounded-md border bg-transparent py-2 px-3 text-sm outline-none focus:border--500 focus:shadow "
                  id="email"
                  name="email-username"
                  placeholder="Password *"
                />
              </div>
            </div>
            <Link href={"#"} className="mb-4 mt-6">
              {" "}
              <span className="text-sm text-blue-700 hover:underline">
                Forgot Password?
              </span>{" "}
            </Link>
            <button
              type="submit"
              className="w-max mx-auto border border-blue-600 text-blue-600 hover:bg-blue-600 px-4 py-1.5 text-center text-sm uppercase hover:text-white transition-all duration-300 ring-gray-500 ring-offset-2 rounded-sm focus:ring-2"
            >
              Log in
            </button>
          </form>
          <Link href={"#"} className="py-6 text-left">
            <p className="whitespace-nowrap text-sm hover:text-blue-600 hover:underline">
              Create a free account?
            </p>
          </Link>
        </div>
      </div>

      <div className="relative hidden h-screen select-none bg-black md:block md:w-[70%]">
        <div className="absolute z-10 px-8 text-black opacity-100 top-8 w-[55%] left-12">
          <h2 className="mb-8 text-[1.75rem] font-bold leading-7 top-0 left-0 text-black z-10">
            Heading Of The Login Page And It Is The Demo Heading
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            quisquam, quam laboriosam quibusdam nisi totam harum quae cupiditate
            illo, enim consequatur? Expedita commodi doloribus tempore, culpa at
            facere voluptates sint aut ut voluptatibus fugit placeat nam
            similique magni eveniet ipsa quod velit eos temporibus. Quae sit
            voluptatum suscipit totam commodi?
          </p>
          <button className=" flex items-center justify-center space-x-2 cursor-pointer mt-4 py-2 font-light text-black text-xs transition hover:text-blue-500">
            <span className="border-b-4 border-gray-700 pb-1 hover:text-blue-500">
              {" "}
              Learn more{" "}
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
        <Carousel />
      </div>
    </div>
  );
}

import Elliptic from "../assets/elliptic.png";
import { BsPersonCircle } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="card p-4 dark:bg-gray-100 dark:text-gray-800 ">
      {/* navbar */}
      <section className="container flex justify-between h-16 mx-auto">
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
            >
              <BsPersonCircle />
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              <MdFavoriteBorder />
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              <IoCartOutline />
            </a>
          </li>
        </ul>
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img src={Elliptic} className="w-24" />
        </a>
        <div className="flex items-center md:space-x-4">
          <button
            type="button"
            className="hidden px-6 py-2 font-semibold rounded lg:block dark:bg-violet-600 dark:text-gray-50"
          >
            <a href="/signin"> Sign In</a>
          </button>
          <button
            type="button"
            className="hidden px-6 py-2 font-semibold rounded lg:block dark:bg-violet-600 dark:text-gray-50"
          >
            <a href="/signup">Sign Up</a>{" "}
          </button>
        </div>
        <button title="Open menu" type="button" className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </section>

      {/* child navbar */}
      <section>
        <div className="">
          <ul className="container-child-navbar">
            <li>Man&apos;s Clothing</li>
            <li>Jewelery</li>
            <li>Women&apos;s Clothing</li>
            <li>Electronics</li>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Navbar;

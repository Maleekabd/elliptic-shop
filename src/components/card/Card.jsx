import { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";
import Category from "../category/Category";
import slugify from "slugify";

const Card = () => {
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get("https://fakestoreapi.com/products/");
      try {
        if (!data || data.length === 0) {
          setLoading(false);
          setNoData(true);
        } else {
          setLoading(false);
          setDatas(data);
          setNoData(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // const newData = datas?.map((item) => item.title);
  // const slugCat = slugify(newData, {
  //   remove: "%",
  //   replacement: "-",
  //   lower: true,
  // });

  if (!datas) {
    return (
      <>
        <h2>loading</h2>
      </>
    );
  } else {
    return (
      <>
        <Category data={datas} />
        <section>
          <header>
            <h2 className="m-1 text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>
          </header>
          <div className="grid min-[320px]:max-w-screen-sm min-[320px]:grid-cols-3 sm:grid-cols-4 sm:max-w-screen-sm md:grid-cols-5 md:max-w-screen-md lg:max-w-full lg:grid-cols-6 m-1 gap-2">
            {datas?.map((item) => (
              <>
                <a
                  key={item.id}
                  href={`/products/category?=${item.category}=${item.id}`}
                  className="group relative block overflow-hidden"
                >
                  <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                    <span className="sr-only">Wishlist</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </button>

                  <img
                    src={item?.image}
                    alt=""
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                  />

                  <div className="relative h-52 border text-sm border-gray-100 bg-white p-2">
                    {/* <p>{datas.description}</p> */}

                    <h3 className="mt-4 text-sm font-medium text-gray-900">
                      {item?.title}
                    </h3>

                    <p className="mt-1.5 text-sm text-gray-700">
                      $ {item?.price}
                    </p>

                    <form className="mt-4">
                      <button className="absolute bottom-0 left-0 block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                        Add to Cart
                      </button>
                    </form>
                  </div>
                </a>
              </>
            ))}
          </div>
        </section>
      </>
    );
  }
};

export default Card;

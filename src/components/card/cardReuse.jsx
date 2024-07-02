// eslint-disable-next-line react/prop-types
const CardReuse = ({ id, image, judl, price }) => {
  return (
    <a
      key={id}
      href={`/products/${id}`}
      className="group relative block overflow-hidden"
    >
      <button className="max-[420px]:hidden absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
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
        src={image}
        alt=""
        className="max-[420px]:h-32 h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="max-[420px]:h-24 relative h-52 border text-sm border-gray-100 bg-white p-2">
        {/* <p>{datas.description}</p> */}

        <h3 className="line-clamp-1 md:line-clamp-none lg:line-clamp-none mt-4 text-sm font-medium text-gray-900">
          {judl}
        </h3>

        <p className="mt-1.5 text-sm text-gray-700">$ {price}</p>

        <form className="max-[420px]:hidden md:block lg:block mt-4">
          <button className="absolute bottom-0 left-0 block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
            Add to Cart
          </button>
        </form>
      </div>
    </a>
  );
};

export default CardReuse;

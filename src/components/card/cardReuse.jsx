import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CardReuse = ({ id, image, judl, price }) => {
  return (
    <Link
      key={id}
      to={`/products/${id}`}
      className="group relative block overflow-hidden"
    >
      <img
        src={image}
        alt=""
        className="min-[320px]:h-48  md:h-36 lg:h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-32"
      />

      <div className="min-[320px]:h-28 relative md:h-52 lg:h-40 shadow-md text-sm border-gray-100 bg-white p-2">
        {/* <p>{datas.description}</p> */}

        <h3 className="min-[320px]:text-[11px] lg:text-sm line-clamp-2 md:line-clamp-none lg:line-clamp-2 mt-4 font-medium text-gray-900">
          {judl}
        </h3>

        <p className="mt-1.5 min-[320px]:text-xl min-[320px]:font-bold   text-black">
          $ {price}
        </p>

        <form className="min-[320px]:hidden md:block lg:block mt-4">
          <button className="absolute bottom-0 left-0 block w-full rounded bg-yellow-400 p-2 text-sm font-medium transition hover:scale-105">
            Add to Cart
          </button>
        </form>
      </div>
    </Link>
  );
};

export default CardReuse;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDataById } from "../../redux/FetchDataStore/fetchDataReducerById";

const CardId = () => {
  const dispatch = useDispatch();
  const dataById = useSelector((state) => state.fetchDataById);
  const { id } = useParams();

  useEffect(() => {
    try {
      if (id) {
        dispatch(fetchDataById(id));
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, id]);

  if (dataById.loading) {
    return;
  } else {
    return (
      <section className="h-auto">
        {/* gambar */}
        <div key={dataById?.data.id} className="flex">
          <div className="min-[320px]:m-2 sm:m-7 md:m-10 lg:m-10 min-[320px]:p-0 sm:p-3 md:p-5 lg:p-5 w-full flex items-center justify-center">
            <figure>
              <img
                src={dataById?.data.image}
                className="min-[320px]:w-32 sm:w-72 md:w-72 lg:w-72"
                alt=""
              />
            </figure>
          </div>
          {/* detail produk */}
          <div className="w-full m-10 p-5">
            <h2 className="text-xl font-bold p-2">{dataById.data.title}</h2>
            <h3 className="text-lg font-bold p-2">$ {dataById.data.price}</h3>
            <p className="p-2">{dataById.data.description}</p>
            <button
              className="border m-2 p-2 rounded hover:bg-emerald-300"
              type="button"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </section>
    );
  }
};

export default CardId;

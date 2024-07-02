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
      } else {
        return <div>loading...</div>;
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, id]);

  return (
    <section className="h-auto">
      {/* gambar */}
      <div key={dataById.data.id} className="flex">
        <div className="m-10 p-5 w-full flex items-center justify-center">
          <figure>
            <img src={dataById.data.image} className="w-72" alt="" />
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
};

export default CardId;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardId = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(datas);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        if (!data) {
          setLoading(true);
        } else {
          setLoading(false);
          setDatas(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <section className="h-auto">
        {/* gambar */}
        <div key={datas.id} className="flex">
          <div className="m-10 p-5 w-full flex items-center justify-center">
            <figure>
              <img src={datas.image} className="w-72" alt="" />
            </figure>
          </div>
          {/* detail produk */}
          <div className="w-full m-10 p-5">
            <h2 className="text-xl font-bold p-2">{datas.title}</h2>
            <h3 className="text-lg font-bold p-2">$ {datas.price}</h3>
            <p className="p-2">{datas.description}</p>
            <button className="border m-2 p-2 rounded hover:bg-emerald-300" type="button">Add To Cart</button>
          </div>
        </div>
      </section>
    );
  }
};

export default CardId;

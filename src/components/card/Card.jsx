import { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";
import Category from "../category/Category";
import slugify from "slugify";
import CardReuse from "./cardReuse";

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
                <CardReuse image={item.image} judl={item.title} price={item.price} id={item.id} category={item.category} />
              </>
            ))}
          </div>
        </section>
      </>
    );
  }
};

export default Card;

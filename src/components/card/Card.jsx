import { useEffect } from "react";
import "./Card.css";
import Category from "../category/Category";
import CardReuse from "./cardReuse";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/FetchDataStore/fetchDataReducer";

const Card = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.data);
  console.log(datas.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (datas.loading) {
    return (
      <>
        <h2>loading</h2>
      </>
    );
  } else {
    return (
      <>
        <Category data={datas.data} />
        <section>
          <header>
            <h2 className="m-1 text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>
          </header>
          <div className="grid min-[320px]:max-w-screen-sm min-[320px]:grid-cols-3 sm:grid-cols-4 sm:max-w-screen-sm md:grid-cols-5 md:max-w-screen-md lg:max-w-full lg:grid-cols-6 m-1 gap-2">
            {datas.data.map((item) => (
              <>
                <CardReuse
                  image={item.image}
                  judl={item.title}
                  price={item.price}
                  id={item.id}
                  category={item.category}
                />
              </>
            ))}
          </div>
        </section>
      </>
    );
  }
};

export default Card;

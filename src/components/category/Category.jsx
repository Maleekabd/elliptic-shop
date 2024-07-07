import "./Category.css";

// eslint-disable-next-line react/prop-types
const Category = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const uniqueCategories = [...new Set(data?.map((item) => item.category))];
  const categorizedItems = uniqueCategories.map((category) => {
    return {
      category,
      // eslint-disable-next-line react/prop-types
      items: data.filter((item) => item.category === category),
    };
  });

  return (
    <section className=" py-5 h-auto">
      <header>
        <h2 className=" mx-auto p-4 pb-2 text-3xl font-bold">Category</h2>
      </header>
      <div className="w-full grid min-[320px]:grid-cols-2 h-[36rem] p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-5">
        {categorizedItems.map((newItem, index) => (
          <div key={index} className="h-auto">
            <a href="" className="group relative">
              <h2 className="absolute bottom-2 right-9 text-xl bg-emerald-200 p-2 rounded tracking-tighter">
                {newItem.category}
              </h2>
              <img
                loading="lazy"
                src={newItem.items[0].image}
                alt=""
                className="min-[320px]:w-full min-[320px]:h-64 sm:w-full sm:h-64 md:w-full md:h-64 container rounded lg:h-full lg:w-full object-cover hover:transition hover:duration-300 hover:scale-105"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;

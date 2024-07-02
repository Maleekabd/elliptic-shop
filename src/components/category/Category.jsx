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
    <section className="py-5 h-auto">
      <header>
        <h2 className="mx-auto p-4 pb-2 text-3xl font-bold">Category</h2>
      </header>
      <div className="h-[36rem] grid p-4 grid-cols-2 grid-rows-2 gap-5 w-full aspect-square">
        {categorizedItems.map((newItem) => (
          <>
            <div key={newItem.id} className="h-auto">
              <a href="" className="group relative">
                <h2 className="absolute bottom-2 right-9 text-xl bg-emerald-200 p-2 rounded tracking-tighter">
                  {newItem.category}
                </h2>
                <img
                  src={newItem.items[0].image}
                  alt=""
                  className="container rounded h-full w-full object-cover hover:transition hover:duration-300 hover:scale-105"
                />
              </a>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Category;

import "./Category.css";

const Category = ({ data }) => {
  const uniqueCategories = [...new Set(data?.map((item) => item.category))];
  const categorizedItems = uniqueCategories.map((category) => {
    return {
      category,
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

        {/* <img src="https://images.unsplash.com/photo-1550344071-13ecada2a91d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="rounded w-full h-full min-h-28 aspect-square"
              />
              <img
                src="https://jooinn.com/images/gold-jewelry.jpg"
                alt=""
                className="rounded w-full h-full min-h-28 aspect-square"
              />
              <img
                src="https://wallpaperaccess.com/full/742156.jpg"
                alt=""
                className="rounded w-full h-full min-h-28 aspect-square"
              /> */}
      </div>
    </section>
  );
};

export default Category;

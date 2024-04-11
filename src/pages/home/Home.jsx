import Banner from "../../components/banner/Banner";
import { useLoaderData } from "react-router-dom";
import Categories from "../../components/categories/Categories";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Helmet>
        <title>HomeSell | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="mx-auto w-1/3 mt-10">
        <h1 className="text-4xl font-bold text-center mb-6">Estate</h1>
        <p>Here our all kinds of collections are available for you</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 mt-8">
        {data.map((val, idx) => {
          return <Categories category={val} key={idx}></Categories>;
        })}
      </div>
    </div>
  );
};

export default Home;

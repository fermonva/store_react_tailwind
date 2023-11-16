import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../index";

export const FeaturedProducts = ({ type }) => {
  const products = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Camiseta",
      isNew: true,
      oldPrice: 100,
      price: 80,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Pantalones vaqueros",
      isNew: false,
      oldPrice: null,
      price: 50,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Chaqueta",
      isNew: true,
      oldPrice: 200,
      price: 150,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Vestido",
      isNew: false,
      oldPrice: null,
      price: 30,
    },
  ];

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(true);
        const res = await axios.get(
          import.meta.env.VITE_REACT_APP_API_URL + "/products",
          {
            // params: {
            //   populate: "*",
            //   filters: {
            //     type: {
            //       $eq: type,
            //     },
            //   },
            // },
            headers: {
              Authorization: `Bearer ${
                import.meta.env.VITE_REACT_APP_API_TOKEN
              }`,
            },
          },
        );
        setProductsList(res.data.data);
        console.log(res.data.data);
      } catch (err) {
        // setError(true);
        console.error(err);
      }
      // setLoading(false);
    };
    fetchData();
  }, []);

  const {
    data = products,
    loading,
    error,
  } = `/products?populate=*&[filters][type][$eq]=${type}`;
  return (
    <div className="featuredProducts py-2">
      <div className="flex flex-col text-center">
        <h1 className="text-5xl font-bold w-full py-2 text-gray-800">
          {type} products
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="flex gap-5 py-10 justify-center">
        {error && <p className="text-red-500">Something went wrong!</p>}
        {loading && <p className="text-gray-500">loading...</p>}
        {!loading &&
          !error &&
          data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

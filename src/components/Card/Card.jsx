import { HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  return (
    <div className="bg-white text-gray-800 w-72 min-h-[10rem] shadow-lg rounded-md my-2">
      <Link to={`/product/${item.id}`}>
        <div className="w-full relative">
          <img
            className="object-cover hover:opacity-0 z-2 absolute"
            src={item.img}
            alt={item.title}
          />
          <img className="object-cover z-1" src={item.img2} alt={item.title} />
        </div>
      </Link>
      <div className="p-5 flex-col">
        <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
          {item.title}
        </h2>
        <div className="flex gap-2 py-2 mt-2 justify-between">
          <span className="px-3 py-1 rounded-full bg-gray-100 capitalize">
            now: ${item.price}
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-100 line-through text-gray-400 capitalize">
            before: ${item.oldPrice}
          </span>
        </div>
        {/* <div className="mt-5 flex gap-2 justify-between">
          <button className="bg-red-500 hover:bg-green-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
            Add to cart
          </button>
          <button className="relative rounded-full bg-white p-1 text-red-500 hover:text-green-500/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-500">
            <HeartIcon
              className="h-8 w-8 opacity-50 flex-grow flex justify-center items-center"
              aria-hidden="true"
            />
          </button>
        </div> */}
      </div>
    </div>
  );
};

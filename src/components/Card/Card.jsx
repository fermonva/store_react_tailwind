import { HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  return (
    <section className="rounded-xl shadow-lg bg-white text-gray-800">
      <Link to={`/product/${item.id}`}>
        <div className="w-full relative">
          <img
            className="w-full h-full object-cover hover:opacity-0 z-2 absolute"
            src={item.img}
            alt={item.title}
          />
          <img
            className="w-full h-full object-cover"
            src={item.img2}
            alt={item.title}
          />
        </div>
      </Link>

      <div className="p-5 flex-col">
        <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
          {item.title}
        </h2>

        <div className="flex gap-2 py-2 mt-2 justify-between">
          <span className="py-3 px-2 rounded-2xl bg-gray-100 capitalize text-xs">
            now: ${item.price}
          </span>
          <span className="py-3 px-2 rounded-2xl bg-gray-100 line-through text-gray-400 capitalize text-xs">
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
    </section>
  );
};

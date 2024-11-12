import { Link } from "react-router-dom";
export const Categories = () => {
  return (
    <section
      className="grid grid-cols-2
      md:grid-cols-4 md:mx-auto md:md:w-auto
      lg:grid-cols-6 gap-2 lg:grid-rows-3  py-4 lg:mx-auto lg:md:w-auto"
    >
      <article className="grid col-span-2 row-span-2 justify-items-center items-center">
        <img
          src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb"
          alt=""
        />
        <button
          type="button"
          className="absolute w-20 h-12 p-2 cursor-pointer uppercase font-medium bg-white hover:bg-blue-600 hover:text-white rounded-lg"
        >
          <Link className="link" to="/products/1">
            Sale
          </Link>
        </button>
      </article>

      <article className="grid col-span-2 row-span-3 justify-items-center items-center relative overflow-hidden bg-red-200">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb"
          alt=""
        />
        <button
          type="button"
          className="absolute w-30 h-12 p-2 cursor-pointer uppercase font-medium bg-white hover:bg-blue-600 hover:text-white rounded-lg"
        >
          <Link to="/products/1" className="link">
            New Season
          </Link>
        </button>
      </article>

      <article className="grid md:col-span-1 max-sm:col-span-2 sm:col-span-2  justify-items-center items-center relative overflow-hidden bg-red-200">
        <img
          src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb"
          alt=""
        />
        <button
          type="button"
          className="absolute w-30 h-12 p-2 cursor-pointer uppercase font-medium bg-white hover:bg-blue-600 hover:text-white rounded-lg"
        >
          <Link to="/products/1" className="link">
            Men
          </Link>
        </button>
      </article>

      <article className="grid md:col-span-1 max-sm:col-span-2 sm:col-span-2 justify-items-center items-center relative overflow-hidden bg-red-200">
        <img
          src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb"
          alt=""
        />
        <button
          type="button"
          className="absolute w-30 h-12 p-2 cursor-pointer uppercase font-medium bg-white hover:bg-blue-600 hover:text-white rounded-lg"
        >
          <Link to="/products/1" className="link">
            Accessories
          </Link>
        </button>
      </article>

      <article className="grid col-span-2 row-span-2 justify-items-center items-center relative overflow-hidden bg-red-200">
        <img
          src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb"
          alt=""
        />
        <button
          type="button"
          className="absolute w-30 h-12 p-2 cursor-pointer uppercase font-medium bg-white hover:bg-blue-600 hover:text-white rounded-lg"
        >
          <Link to="/products/1" className="link">
            Shoes
          </Link>
        </button>
      </article>

      <article
        className="grid lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-2 max-sm:col-span-2 sm:col-span-2
        justify-items-center items-center bg-red-200"
      >
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb"
          alt=""
        />
        <button
          type="button"
          className="absolute w-30 h-12 p-2 cursor-pointer uppercase font-medium bg-white hover:bg-blue-600 hover:text-white rounded-lg"
        >
          <Link to="/products/1" className="link">
            Women
          </Link>
        </button>
      </article>
    </section>
  );
};

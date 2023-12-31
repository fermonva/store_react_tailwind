import { Link } from "react-router-dom";
export const Categories = () => {
  return (
    <div className="w-auto flex h-screen gap-2 mb-10">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex-1 flex gap-2 relative overflow-hidden justify-center items-center">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute w-20 h-12 p-2 cursor-pointer uppercase font-medium bg-white hover:bg-blue-600 hover:text-white">
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="flex gap-2 relative overflow-hidden justify-center items-center">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute w-20 h-12 p-2 cursor-pointer uppercase font-medium bg-white hover:bg-blue-600 hover:text-white">
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="flex flex-1  gap-2">
        <div className="flex gap-2 relative overflow-hidden justify-center items-center">
          {" "}
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute w-30 h-12 p-2 cursor-pointer uppercase font-medium bg-white hover:bg-blue-600 hover:text-white">
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-row gap-2">
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex-1 flex gap-2 relative overflow-hidden justify-center items-center">
              <img
                className="w-full h-80 object-cover"
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button className="absolute w-20 h-12 p-2 cursor-pointer uppercase font-medium bg-white hover:bg-blue-600 hover:text-white">
                <Link to="/products/1" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex-1 flex gap-2 relative overflow-hidden justify-center items-center">
              {" "}
              <img
                className="w-full h-80 object-cover"
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button className="absolute w-30 h-12 p-2 cursor-pointer uppercase font-medium bg-white hover:bg-blue-600 hover:text-white">
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex gap-2 relative overflow-hidden justify-center items-center">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute w-20 h-12 p-2 cursor-pointer uppercase font-medium bg-white hover:bg-blue-600 hover:text-white">
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

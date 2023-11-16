import { TrashIcon } from "@heroicons/react/24/outline";

export const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Camiseta",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isNew: true,
      oldPrice: 100,
      price: 80,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Pantalones vaqueros",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isNew: false,
      oldPrice: null,
      price: 50,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Pantalones vaqueros",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isNew: false,
      oldPrice: null,
      price: 50,
    },
  ];
  return (
    <div className="absolute right-12 top-20 z-10 bg-white p-4 shadow-lg w-[400px] h-[700px] overflow-auto flex flex-col">
      <h1 className="text-2xl font-bold text-gray-700 py-4 text-center">
        PRODUCT IN YOUR CART
      </h1>
      {data.map((item) => (
        <div className="flex flex-row items-center mb-4" key={item.id}>
          <img
            src={item.img}
            className="h-36 w-36 pr-4 object-cover mb-2"
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="text-gray-400 text-lg pb-6">{item.title}</h1>
            <p className="text-gray-400">{item.desc?.substring(0, 100)}</p>
            <p className="py-4 text-gray-400">1 x ${item.price}</p>
          </div>
          <TrashIcon className="h-10 w-10 cursor-pointer text-red-500 border-solid" />
        </div>
      ))}
      <hr />
      <div className="flex flex-row justify-between py-4  text-gray-700 font-bold">
        <span>SUBTOTAL</span>
        <span>$80</span>
      </div>
      <div className="flex flex-col justify-between py-2 gap-4">
        <button className="bg-green-500/90 hover:bg-blue-500/90 px-6 rounded-md text-white font-medium tracking-wider transition h-12 items-center justify-center block">
          PROCEDE TO CHECKOUT
        </button>

        <button className="bg-red-500/90 hover:bg-blue-500/90 px-6 rounded-md text-white font-medium tracking-wider transition h-12 items-center justify-center block">
          RESET CART
        </button>
      </div>
    </div>
  );
};

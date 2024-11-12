import { useState } from "react";

import {
	ScaleIcon,
	ShoppingCartIcon,
	StarIcon,
} from "@heroicons/react/24/outline";

export const Product = () => {
	const [selectedImg, setSelectedImg] = useState(0);
	const [quantity, setQuantity] = useState(1);

	const images = [
		"https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
		"https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
	];
	return (
		<div className="py-12 flex gap-12">
			<div className="flex-1 flex gap-5">
				<div className="flex-col">
					<img
						className="h-36 w-full object-cover cursor-pointer mb-2 border-solid border-2 border-gray-200"
						src={images[0]}
						alt=""
						onClick={(e) => setSelectedImg(0)}
						onKeyUp={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								setSelectedImg(0);
							}
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								setSelectedImg(0);
							}
						}}
					/>
					<img
						className="h-36 w-full object-cover cursor-pointer mb-2 border-solid border-2 border-gray-200"
						src={images[1]}
						alt=""
						onClick={(e) => setSelectedImg(1)}
						onKeyUp={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								setSelectedImg(0);
							}
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								setSelectedImg(0);
							}
						}}
					/>
				</div>
				<div className="flex-1">
					<img
						src={images[selectedImg]}
						className="w-full max-h-[800px] object-cover cursor-pointer mb-2 border-solid border-2 border-gray-200 transition duration-300 shadow-lg flex-center"
						alt=""
					/>
				</div>
			</div>
			<div className="flex-1 flex flex-col gap-7">
				<h1 className="text-3xl font-bold">Long Sleeve Graphic T-Shirt</h1>
				<span className="text-red-500 text-2xl">$19.9</span>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
					alias quo sunt illo et aspernatur. Tempora doloribus labore tempore
					aliquam, sequi excepturi quos sint quibusdam sunt placeat cum commodi
					recusandae!
				</p>
				<div className="flex items-center gap-2">
					<button
						type="button"
						className="w-12 h-12 flex items-center justify-center cursor-pointer border-solid border-2 bg-gray-200"
						onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
					>
						-
					</button>
					<span>{quantity}</span>
					<button
						type="button"
						className="w-12 h-12 flex items-center justify-center cursor-pointer border-solid border-2 bg-gray-200"
						onClick={() => setQuantity((prev) => prev + 1)}
					>
						+
					</button>
				</div>
				<div className="flex flex-col gap-5">
					<button
						type="button"
						className="bg-red-500 hover:bg-green-500/90 px-6 rounded-md text-white font-medium tracking-wider transition w-full h-12 flex items-center justify-center"
					>
						<ShoppingCartIcon className="h-6 w-6 mr-4 text-white" />
						ADD TO CART
					</button>
				</div>

				<div className="flex items-center justify-start gap-5">
					<div className="flex text-red-500">
						<StarIcon className="h-6 w-6 mr-2 text-red-500" />
						ADD TO WISH LIST
					</div>
					<div className="flex text-red-500">
						<ScaleIcon className="h-6 w-6 mr-2 text-red-500" />
						ADD TO COMPARE
					</div>
				</div>

				<div className="flex flex-col text-gray-400">
					<span>Vendor: Polo</span>
					<span>Product type: T-Shirt</span>
					<span>Tag: T-Shirt, Women, Top</span>
				</div>

				<hr className="w-full border-solid border-1 border-gray-300" />
				<div className="flex flex-col text-gray-400">
					<span>DESCRIPTION</span>
					<hr className="w-52 border-solid border-1 border-gray-300" />
					<span>ADITIONAL INFORMATION</span>
					<hr className="w-52 border-solid border-1 border-gray-300" />
					<span>FAQ</span>
				</div>
			</div>
		</div>
	);
};

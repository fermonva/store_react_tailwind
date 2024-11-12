import { List } from "../../components/List/List";

export const Products = () => {
	return (
		<div className="flex flex-row pt-6 gap-4">
			<div className="flex flex-col sticky h-full top-12 items-start gap-2 flex-shrink-0 w-64 overflow-y-auto rounded-md shadow-md bg-white p-4">
				<div className="mb-7">
					<h2 className="font-normal text-2xl mb-5">Product Categories</h2>
					<div className="flex">
						<input type="checkbox" name="" id="" />
						<label className="ml-2" htmlFor="">
							Men
						</label>
					</div>
				</div>

				<div className="mb-7">
					<h2 className="font-normal text-2xl mb-5">Filter by price</h2>
					<div className="flex justify-between">
						<span className="text-sm text-gray-500">$0</span>
						<input
							className="w-2/4 overflow-hidden rounded-md shadow-sm bg-white hover:cursor-grab active:cursor-grabbing"
							type="range"
							name=""
							id=""
							min={0}
							max={1000}
						/>
						<span className="text-sm text-gray-500">$1000</span>
					</div>
				</div>

				<div className="mb-7">
					<h2 className="font-normal text-2xl mb-5">Sort by</h2>
					<div className="flex">
						<input type="radio" name="price" id="asc" value={"asc"} />
						<label className="ml-2" htmlFor="asc">
							Price: (Lowest First)
						</label>
					</div>
					<div className="flex">
						<input type="radio" name="price" id="desc" value={"desc"} />
						<label className="ml-2" htmlFor="desc">
							Price: (Highest First)
						</label>
					</div>
				</div>
			</div>

			<div className="flex-1">
				<img
					className="w-full h-72 object-cover mb-4"
					src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt=""
				/>
				<List />
			</div>
		</div>
	);
};

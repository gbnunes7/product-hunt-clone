"use client";
import Button from "@/components/Button";
import InputSearch from "@/components/Input";
import Title from "@/components/Title";
import useMyContext from "@/hooks/useMyContext";

export default function NewProduct() {
	const {
		productDescription,
		setProductDescription,
		productName,
		setProductName,
		productImageUrl,
		setProductImageUrl,
		productIsReviewed,
		setProductIsReviewed,
		productTags,
		setProductTags,
		onSubmit,
		error,
		clearForm,
	} = useMyContext()!;
	return (
		<form
			onSubmit={onSubmit}
			className="bg-[#da552f] p-6 w-4/5 md:grid md:grid-cols-2 flex flex-col mx-auto rounded-lg shadow-lg shadow-gray-500 gap-4 my-12"
		>
			<Title
				level={5}
				className="text-2xl font-bold text-white text-center mb-2 md:col-span-2"
			>
				Register a new product
			</Title>
			<div className="flex flex-col md:w-5/5 gap-2">
				<label className="text-black font-semibold" htmlFor="name">
					Product Name
				</label>
				<InputSearch
					required
					minLength={3}
					maxLength={50}
					value={productName}
					onChange={(event) => setProductName(event.target.value)}
					placeholder="Enter the product name here..."
					name="name"
					id="name"
					type="text"
					autoComplete="off"
					className="text-black bg-[#fef6f2] border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#da552f] focus:border-transparent transition-all duration-200"
				/>
			</div>
			<div className="flex flex-col gap-2 md:w-5/5">
				<label className="text-black font-semibold" htmlFor="description">
					Product Description
				</label>
				<InputSearch
					required
					minLength={3}
					maxLength={500}
					value={productDescription}
					onChange={(event) => setProductDescription(event.target.value)}
					placeholder="Enter the product description here..."
					name="description"
					id="description"
					type="text"
					autoComplete="off"
					className="text-black bg-[#fef6f2] border border-gray-300 min-h-[100px] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#da552f] focus:border-transparent transition-all duration-200"
				/>
			</div>
			<div className="flex flex-col gap-2 md:w-5/5">
				<label className="text-black font-semibold" htmlFor="url">
					Product Image URL
				</label>
				<InputSearch
					required
					minLength={3}
					value={productImageUrl}
					onChange={(event) => setProductImageUrl(event.target.value)}
					placeholder="Enter the product URL image here..."
					name="url"
					id="url"
					type="text"
					autoComplete="off"
					className="text-black bg-[#fef6f2] border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#da552f] focus:border-transparent transition-all duration-200"
				/>
			</div>
			<div className="flex flex-col gap-2 md:w-5/5">
				<label className="text-black font-semibold" htmlFor="tags">
					Product Tags
				</label>
				<InputSearch
					required
					minLength={3}
					maxLength={50}
					value={productTags}
					onChange={(event) => setProductTags(event.target.value.split(","))}
					placeholder="Enter the product tags here..."
					name="tags"
					id="tags"
					type="text"
					autoComplete="off"
					className="text-black bg-[#fef6f2] border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#da552f] focus:border-transparent transition-all duration-200"
				/>
			</div>
			<label className="flex items-center text-black text-sm md:text-base font-semibold">
				<InputSearch
					checked={productIsReviewed as boolean}
					onChange={(event) => setProductIsReviewed(event.target.checked)}
					placeholder=""
					name="isReviewed"
					id="isReviewed"
					type="checkbox"
					autoComplete="off"
					className="mr-2"
				/>
				Check if this product has been reviewed by the team
			</label>
			<div className="flex flex-col justify-center gap-4 mt-4 md:w-5/5 md:col-span-2">
				<Button
					type="submit"
					className="bg-[#FEF6F2] text-[#FF6154] px-3 py-1.5 w-[90%] md:w-full mx-auto rounded-md transition-all duration-200 hover:bg-gray-200"
				>
					Submit
				</Button>
				<Button
					type="button"
					onClick={clearForm}
					className="bg-[#2980B9] text-white px-3 py-1.5 w-[90%] md:w-full mx-auto rounded-md transition-all duration-200 hover:bg-[#2C3E50]"
				>
					Clear
				</Button>
				{error && (
					<span className="text-white text-center text-lg">{error}</span>
				)}
			</div>
		</form>
	);
}

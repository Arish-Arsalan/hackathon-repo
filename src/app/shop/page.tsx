import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../component/header";
import ShopLine from "../component/shopLine";
import Field from "../component/field";
import { client } from "@/sanity/lib/client";
import Page from "../component/page";

async function getProducts() {
  const query = `*[_type == "product"]`;
  return await client.fetch(query);
}
async function Shop() {
  const products = await getProducts();
  return (
    <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
      <div className="bg-[#faf4f4]">
        <Header />
      </div>
      {/* Banner Section */}
      <div className="relative text-black">
        <Image
          src="/Rectangle 1 (1).png" // Replace with the correct image file path
          alt="Shop Banner"
          height={400}
          width={1600}
          className="w-full h-40 md:h-auto object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold ">
          Shop
        </h1>
        {/* Breadcrumb Section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-700 text-xs md:text-xl flex items-center">
            <Link href="/" className="font-bold hover:underline">
              Home
            </Link>
            <span className="font-bold mx-2">{">"}</span>
            <Link href="/shop" className=" hover:underline">
              Shop
            </Link>
          </p>
        </div>
      </div>

      <div className="my-6">
        <ShopLine />
      </div>

      <div>
        {/* Product List */}
        <div className="flex flex-wrap justify-center md:justify-start  gap-6 ">
          {/* Product Item */}
          {products.map((product: any) => (
            <Link href={`/product/${product.id}`} key={product._id}>
            <div
              className="flex flex-col text-left mx-auto h-[300px] w-[350px]">
              <Image
                src={product.imagePath}
                alt={product.name}
                height={300}
                width={350}
                className="rounded-lg h-[300px] w-[300px] object-cover"
              />
              <p className="text-sm font-medium">{product.name}</p>
              <h3 className="text-xl font-semibold">
                Rs. {product.price.toFixed(2)}
              </h3>
            </div>
            </Link>
          ))}

          <div className="justify-center mx-auto">
            <Page />
          </div>
        </div>
      </div>

      <Field />
    </div>
  );
}

export default Shop;

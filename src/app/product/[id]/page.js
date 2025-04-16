"use client";
import { useEffect, useState } from "react";
import "@/i18n";
import Ad from "@/components/A_ad";
import Navigation from "@/components/B_navigation";
import Footer from "@/components/K_Footer";
import ProductDetail from "@/components/ProductDetail";
import ThumbnailImage from "@/components/ThumbnailImage";
import { useParams } from "next/navigation";
import database from "@/app/database";
import { notFound } from "next/navigation";
import CopyTodays from "@/components/d_copyTodays";

const ProductDetails = () => {
  const { id } = useParams();
  const [mounted, setMounted] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const foundProduct = database.find((item) => item.id.toString() === id);
      if (!foundProduct) {
        notFound();
      } else {
        setProduct(foundProduct);
      }
    }
  }, [mounted, id]);

  if (!mounted || !product) return null;

  return (
    <div>
      <Ad />
      <Navigation />
      <div className="w-full max-w-[1170px] mx-auto flex flex-col lg:flex-row items-start gap-x-16 lg:items-stretch my-10">
        <div className="flex-shrink-0">
          <ThumbnailImage
            mainImage={product.mainImage}
            thumbnails={product.thumbnails}
          />
        </div>
        <div className="flex-grow mt-4 lg:mt-0 lg:ml-4">
          <ProductDetail product={product} />
        </div>
      </div>
      <CopyTodays />
      <Footer />
    </div>
  );
};

export default ProductDetails;


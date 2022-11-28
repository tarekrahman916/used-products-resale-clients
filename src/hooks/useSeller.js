import { useState, useEffect } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://used-products-resale-server-nine.vercel.app/users/seller/${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsSeller(data.isSeller);
        setIsSellerLoading(false);
      });
  }, [email]);
  return [isSeller, isSellerLoading];
};

export default useSeller;

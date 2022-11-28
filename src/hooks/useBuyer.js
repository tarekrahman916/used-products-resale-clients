import { useState, useEffect } from "react";

const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://used-products-resale-server-nine.vercel.app/users/buyer/${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsBuyer(data.isBuyer);
        setIsBuyerLoading(false);
      });
  }, [email]);
  return [isBuyer, isBuyerLoading];
};

export default useBuyer;

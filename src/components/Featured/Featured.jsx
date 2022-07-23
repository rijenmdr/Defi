import React from "react";
import useFetch from "../../hooks/useFetch";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

import "./Featured.css";

const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false
`;

const Featured = () => {
  const [response, isLoading] = useFetch(url, {});

  console.log(response);

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>

        <div className="right">
          {response &&
            response.length !== 0 &&
            response.map((coin) => (
              <div key={coin?.id} className="card">
                <div className="logo-container">
                  <img src={coin?.image} alt="" />
                </div>

                <>
                  <h5>{coin?.name}</h5>
                  <p>${coin?.current_price?.toLocaleString()}</p>
                </>

                {coin?.price_change_percentage_24h < 0 ? (
                  <span className="red">
                    <FiArrowDown className="icon" />
                    {coin?.price_change_percentage_24h.toFixed(2)}%
                  </span>
                ) : (
                  <span className="green">
                    <FiArrowUpRight className="icon" />
                    {coin?.price_change_percentage_24h.toFixed(2)}%
                  </span>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;

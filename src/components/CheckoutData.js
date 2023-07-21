import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import { TfiClose } from "react-icons/tfi";
import { useBalance } from "wagmi";
import { useAccount } from "wagmi";
const CheckoutData = ({ setCheckoutModal }) => {
  const account = useAccount();
  const { data } = useBalance({ address: account.address });
  return (
    <div className="checkout-bg flex justify-center items-center px-5 ">
      <div className="checkout-card-bg  ">
        <div className="flex justify-end pr-20 mt-4">
          <TfiClose
            onClick={() => setCheckoutModal(false)}
            className=" text-[30px] text-[#EC8424] font-[800] transition-all rounded-lg hover:bg-[#d7bca5] cursor-pointer"
          />
        </div>
        <div className="flex justify-center md:flex-row flex-col items-center md:p-16 p-5 gap-10">
          <div className="flex justify-center  flex-col items-center ">
            <h3 className=" mb-10  text-[#EC8424]  font-[700]  text-4xl font-['headingFont']">
              Checkout
            </h3>
            <div className="border-2   border-[#E3A770] bg-white rounded-[34px] lg:p-10 p-4 lg:w-[500px] w-[300px] ">
              <p className="text-center   mb-5">
                You are about to mint&nbsp;
                <span className="text-black font-[700]">
                  1 NFT <br />
                </span>
                from{" "}
                <span className="text-black font-[700]">
                  0x690...8a94&nbsp;
                </span>
                collection
              </p>
              {/* <div className="border-2 border-[#EC8424] bg-white rounded-[10px] p-1">
                <div className="flex lg:flex-row flex-col  items-center justify-between">
                  <div className="flex gap-4">
                    <img src="/assets/images/binance.png" alt="binance" />
                    <h4>
                      <span className=" font-['headingFont'] text-[#EC8424] text-xl">
                        0x3ac...fbc8
                      </span>
                      <br />
                      <span>Binance</span>
                    </h4>
                  </div>
                  <div className="text-[#37C34A] flex items-center justify-center gap-2">
                    <span className="block h-2 w-2 rounded-full bg-[#37C34A]"></span>
                    Connected
                  </div>
                </div>
              </div> */}
              <div className="border-2 border-[#EC8424] bg-white rounded-[10px] p-1">
                <ConnectButton />
              </div>
              <div className="flex justify-between items-center mt-3">
                <p>100 BNB x 1 edition</p>
                <p className="text-black font-[700]">100 BNB</p>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p>Platform fee</p>
                <p className="text-black font-[700]">0 BNB</p>
              </div>
              <div className="w-full h-[3px] bg-[#E3A770]"></div>
              <div className="flex justify-between items-center mt-3">
                <p>Balance</p>
                {/* Balance: {data?.formatted} {data?.symbol} */}
                <p className="text-black font-[700]">0 BNB</p>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p>You will pay</p>
                <p className="text-black font-[700]">100 BNB</p>
              </div>
              <div className="flex justify-center ">
                <button className="bg-[#EC8424] transition-all hover:bg-[#f89335] mt-5 my-3 py-3 px-20 rounded-md text-white text-2xl font-['headingFont'] active:scale-95">
                  Confirm{" "}
                </button>
              </div>
            </div>
          </div>
          <div>
            <img src="/assets/images/mint-nft.png" alt="mint-nft" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutData;

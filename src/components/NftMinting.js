import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Web3 from "web3";
import minterAbi from "../../contracts/minter.json";
import nftAbi from "../../contracts/nft.json";
import CheckoutData from "./CheckoutData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const nftaddress = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS;
const minterAddress = process.env.NEXT_PUBLIC_MINTER_CONTRACT_ADDRESS;
const fantomrpc = process.env.NEXT_PUBLIC_FANTOM_RPC;
const fantomChainId = process.env.NEXT_PUBLIC_FANTOM_CHAINID;
console.log(fantomrpc, "fantomrpc");
const NftMinting = () => {
  const [count, setCount] = useState(0);
  const [remainingNfts, setremainingNfts] = useState(0);
  const [price, setPrice] = useState(0);
  const [supply, setSpply] = useState(0);
  const [minted, setMinted] = useState(0);
  const [isDisable, setisDisable] = useState(false);
  const [checkoutModal, setCheckoutModal] = useState(false);
  const account = useAccount();
  const address = account.address;
  console.log(count, "count----");
  const getRpcUrl = () => {
    return fantomrpc;
  };
  let _web3;
  if (typeof window !== "undefined") {
    _web3 = new Web3(getRpcUrl());
  } else {
    _web3 = new Web3(new Web3.providers.HttpProvider(fantomrpc));
  }
  useEffect(() => {
    async function fetchData() {
      const data = new _web3.eth.Contract(minterAbi, minterAddress);
      let remainingcontri = await data.methods
        .remainigContribution(address)
        .call();

      let p = await data.methods.price().call();
      let pricee = Number(p) / 10 ** 18;
      let remainingnfts = Number(remainingcontri) / 10 ** 18;
      const remainingnftsvalue = remainingnfts / pricee;

      setremainingNfts(remainingnftsvalue);
    }
    if (address) {
      fetchData();
    }
  }, [address]);
  console.log(remainingNfts, "remainingNfts");
  const decrementCountHandler = () => {
    if (count == 0) {
      return 0;
    } else {
      setCount(count - 1);
    }
  };

  const incrementCountHandler = () => {
    if (count >= remainingNfts) {
      return remainingNfts;
    } else {
      setCount(Number(count) + 1);
    }
    console.log("click");
  };
  const changeHandler = (e) => {
    let num = e.target.value;
    if (num > 10) {
      return;
    } else {
      setCount(num);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const data = new _web3.eth.Contract(minterAbi, minterAddress);
      const pri = await data.methods.price().call();
      setPrice(Number(pri) / 10 ** 18);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = new _web3.eth.Contract(nftAbi, nftaddress);
      const totalSupply = await data.methods.MAX_SUPPLY().call();
      setSpply(totalSupply);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = new _web3.eth.Contract(minterAbi, minterAddress);
      const mint = await data.methods.claimIndex().call();
      setMinted(Number(mint));
    }
    fetchData();
  }, []);

  const mint = async () => {
    const _web3 = new Web3(window.ethereum);
    try {
      setisDisable(true);
      const data = new _web3.eth.Contract(minterAbi, minterAddress);

      await data.methods.trade(count).send({
        from: address,
        value: _web3.utils.toWei((count * price).toString()),
      });
      // .estimateGas();
      setisDisable(false);
      toast("Tx Success");
      setCheckoutModal(true);
    } catch (e) {
      console.log(e, " error ");
      setisDisable(false);
      toast("Tx Fail");
    }
  };

  return (
    <>
      <>
        <div className="nft-bg md:pt-10 md:px-10 relative  isolate overflow-hidden">
          <Navbar />
          <div className=" md:py-8 md:px-0  px-5">
            <div className="flex justify-center lg:items-start items-center md:flex-row flex-col lg:gap-8  gap-3 md:pb-0 pb-10 border bg-[#fff2cf]    2xl:w-[60%] xl:w-[90%]   rounded-[60px] lg:mt-4  mt-10 z-50 container mx-auto">
              <h3 className="md:hidden  text-[#EC8424]  font-[700] text-center  text-2xl font-['Ubuntu'] mt-5">
                Mint is Live Now
              </h3>
              <div>
                <img
                  src="/assets/images/mint-hero.png"
                  alt="hero"
                  className="md:block hidden bbbb"
                />
                <img
                  src="/assets/images/mob-nft-hero.png"
                  alt="hero"
                  className="md:hidden "
                />
              </div>
              <div className="text-center lg:mt-10 relative">
                <h3 className="hidden md:block text-[#EC8424] lg:mb-5  font-[700] lg:text-[50px] text-2xl font-['Ubuntu']">
                  Mint is Live Now
                </h3>
                <p className="max-w-[80%] mx-auto">
                  MOOKY is the ultimate memecoin platform, and it couldn't be
                  easier to get your hands on the token in our presale.
                </p>
                {address ? (
                  <>
                    <div className="flex justify-center items-center gap-3    ">
                      <button onClick={decrementCountHandler}>
                        <img
                          src="/assets/images/minus.png"
                          alt="minus"
                          className="lg:h-14 h-10 active:scale-95"
                        />
                      </button>
                      <div className="bg-white h-14   flex items-center justify-center border-2 px-5  border-x-0 placeholder:text-black text-black font-bold  border-t-0 border-[#EC8424] ">
                        {count}
                      </div>
                      <button onClick={incrementCountHandler}>
                        <img
                          src="/assets/images/plush.png"
                          alt="minus"
                          className="lg:h-14 h-10 active:scale-95"
                        />
                      </button>
                      <button
                        onClick={() => setCount(remainingNfts)}
                        className="  bg-[#EC8424] transition-all hover:bg-[#f89335]  my-3 md:py-3 py-2 px-4 rounded-md text-white text-2xl font-['headingFont'] active:scale-95 z-50"
                      >
                        Max
                      </button>
                    </div>
                    <button
                      onClick={mint}
                      className="  bg-[#EC8424] transition-all hover:bg-[#f89335]  my-3 py-3 px-20 rounded-md text-white text-2xl font-['headingFont'] active:scale-95 z-50"
                    >
                      Mint Now
                    </button>
                  </>
                ) : (
                  <div className="w-full items-center justify-center flex">
                    <div className=" border-[#EC8424] border-2 rounded-md overflow-hidden mt-20 mb-10">
                      <ConnectButton />
                    </div>
                  </div>
                )}
                <p className="">
                  Public Mint {price} ETH + GAS
                  <br />
                  Floor Price {price * count} ETH
                </p>
                <div className="flex justify-between gap-x-10 px-20">
                  <p className="font-bold text-black">
                    Supply:{" "}
                    <span className="font-normal">{address ? supply : 0}</span>
                  </p>
                  <p className="font-bold text-black">
                    Minted:{" "}
                    <span className="font-normal">{address ? minted : 0}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/assets/images/bb.png"
            alt="bott0m"
            className={`w-full absolute -bottom-20 md:hidden `}
          />
        </div>
      </>
      <ToastContainer />
    </>
  );
};

export default NftMinting;

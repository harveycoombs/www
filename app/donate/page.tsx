"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faBitcoinSign } from "@fortawesome/free-solid-svg-icons";
import { faBitcoin, faEthereum, faSolana } from "@fortawesome/free-brands-svg-icons";
import { AnimatePresence } from "motion/react";

import Button from "@/app/components/Button";
import Popup from "@/app/components/Popup";
import Field from "@/app/components/Field";

export default function Donate() {
    const [openCrypto, setOpenCrypto] = useState<string>("");
    
    const [openCryptoTitle, setOpenCryptoTitle] = useState<string>("");
    const [openCryptoAddress, setOpenCryptoAddress] = useState<string>("");
    const [openCryptoIcon, setOpenCryptoIcon] = useState<any>(null);

    useEffect(() => {
        switch (openCrypto) {
            case "btc":
                setOpenCryptoTitle("Bitcoin");
                setOpenCryptoAddress(process.env.NEXT_PUBLIC_BITCOIN_ADDRESS ?? "");
                setOpenCryptoIcon(faBitcoinSign);
                break;
            case "eth":
                setOpenCryptoTitle("Ethereum");
                setOpenCryptoAddress(process.env.NEXT_PUBLIC_ETHEREUM_ADDRESS ?? "");
                setOpenCryptoIcon(faEthereum);
                break;
            case "sol":
                setOpenCryptoTitle("Solana");
                setOpenCryptoAddress(process.env.NEXT_PUBLIC_SOLANA_ADDRESS ?? "");
                setOpenCryptoIcon(faSolana);
                break;
            case "usdt":
                setOpenCryptoTitle("Tether");
                setOpenCryptoAddress(process.env.NEXT_PUBLIC_USDT_ADDRESS ?? "");
                setOpenCryptoIcon(null);
                break;
            default:
                setOpenCryptoTitle("");
                setOpenCryptoAddress("");
                setOpenCryptoIcon(null);
                break;
        }
    }, [openCrypto]);

    return (
        <>
            <main className="min-h-[calc(100vh-133px)] text-gray-400">
                <section className="py-30 text-center px-5 max-md:py-15">
                    <h1 className="text-3xl font-bold text-gray-700">Donate to Harvey</h1>
                    <p className="mt-3">Donating fiat or crypto via the methods below</p>
                </section>

                <section className="w-200 px-5 mx-auto max-lg:w-full">
                    <DonationOption title="Fiat" description="Buy Me A Coffee" icon={faDollarSign} iconColor="text-green-300" url="https://buymeacoffee.com/harveycoombs" />
                    <DonationOption title="Bitcoin" description="Bitcoin Network" icon={faBitcoin} iconColor="text-orange-400" onClick={() => setOpenCrypto("btc")} />
                    <DonationOption title="Ethereum" description="Ethereum Mainnet" icon={faEthereum} iconColor="text-gray-800" onClick={() => setOpenCrypto("eth")} />
                    <DonationOption title="Solana" description="Solana Network" icon={faSolana} iconColor="text-purple-400" onClick={() => setOpenCrypto("sol")} />
                    
                    <div className="flex items-center border border-gray-200 rounded-2xl p-3.5 mb-3 select-none justify-between">
                        <div className="flex items-center gap-2">
                            <svg width="45" height="36" viewBox="0 0 111 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24.4825 0.862305H88.0496C89.5663 0.862305 90.9675 1.64827 91.7239 2.92338L110.244 34.1419C111.204 35.7609 110.919 37.8043 109.549 39.1171L58.5729 87.9703C56.9216 89.5528 54.2652 89.5528 52.6139 87.9703L1.70699 39.1831C0.305262 37.8398 0.0427812 35.7367 1.07354 34.1077L20.8696 2.82322C21.6406 1.60483 23.0087 0.862305 24.4825 0.862305ZM79.8419 14.8003V23.5597H61.7343V29.6329C74.4518 30.2819 83.9934 32.9475 84.0642 36.1425L84.0638 42.803C83.993 45.998 74.4518 48.6635 61.7343 49.3125V64.2168H49.7105V49.3125C36.9929 48.6635 27.4513 45.998 27.3805 42.803L27.381 36.1425C27.4517 32.9475 36.9929 30.2819 49.7105 29.6329V23.5597H31.6028V14.8003H79.8419ZM55.7224 44.7367C69.2943 44.7367 80.6382 42.4827 83.4143 39.4727C81.0601 36.9202 72.5448 34.9114 61.7343 34.3597V40.7183C59.7966 40.8172 57.7852 40.8693 55.7224 40.8693C53.6595 40.8693 51.6481 40.8172 49.7105 40.7183V34.3597C38.8999 34.9114 30.3846 36.9202 28.0304 39.4727C30.8066 42.4827 42.1504 44.7367 55.7224 44.7367Z" fill="#009393"/>
                            </svg>
                            
                            <div>
                                <strong className="block text-lg leading-none font-semibold text-gray-700">Tether</strong>
                                <div className="text-sm mt-1 font-medium max-sm:text-xs">Polygon Network</div>
                            </div>
                        </div>

                        <Button onClick={() => setOpenCrypto("usdt")}>Donate</Button>
                    </div>
                </section>
            </main>

            <AnimatePresence>
                {openCrypto.length > 0 && (
                    <Popup title={`Donate ${openCryptoTitle}`} onClose={() => setOpenCrypto("")}>
                        <div>
                            <label className="text-sm text-gray-500 font-medium">Wallet Address</label>

                            <div className="flex gap-2.5 mt-0.75">
                                {openCryptoIcon && (
                                    <div className="p-1.75 rounded-lg bg-gray-100 grid place-items-center">
                                        <FontAwesomeIcon icon={openCryptoIcon} className="text-gray-500 text-xl" />
                                    </div>
                                )}

                                <Field type="text" classes="w-full" readOnly value={openCryptoAddress} />
                            </div>

                            <Button onClick={() => navigator.clipboard.writeText(openCryptoAddress)} classes="block w-full mt-3">Copy Address</Button>
                        </div>
                    </Popup>
                )}
            </AnimatePresence>
        </>
    );
}

function DonationOption({ title, description, icon, iconColor = "", ...rest }: any) {
    return (
        <div className="flex items-center border border-gray-200 rounded-2xl p-3.5 mb-3 select-none justify-between">
            <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={icon} className={`text-4xl ${iconColor}`} />
                
                <div>
                    <strong className="block text-lg leading-none font-semibold text-gray-700">{title}</strong>
                    <div className="text-sm mt-1 font-medium max-sm:text-xs">{description}</div>
                </div>
            </div>

            <Button {...rest}>Donate</Button>
        </div>
    );
}
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
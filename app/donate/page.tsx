"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin, faPaypal } from "@fortawesome/free-brands-svg-icons";

import Panel from "@/app/components/common/Panel";
import Label from "@/app/components/common/Label";
import Field from "@/app/components/common/Field";
import TextBox from "@/app/components/common/TextBox";
import Button from "@/app/components/common/Button";

export default function DonationPage() {
     const [donationMethod, setDonationMethod] = useState<"fiat" | "crypto">("fiat");
     
     return (
          <main className="push flex flex-col items-center justify-center gap-12 w-188 mx-auto max-md:px-6 max-md:w-full">
               <section className="w-full text-center">
                    <h1 className="block text-4xl font-extrabold tracking-wide uppercase text-white">Donations</h1>
                    <p className="block font-medium mt-2 text-zinc-500">Support my open-source projects</p>
               </section>

               <section className="w-full">
                    <div className="flex gap-4 mb-4">
                         <PaymentOption
                              icon={faPaypal}
                              title="Credit/Debit Card"
                              description="Via PayPal"
                              activeBorderColor="border-blue-400/25"
                              activeTextColor="text-blue-400/50"
                              activeTitleColor="text-blue-400"
                              activeBackgroundColor="bg-blue-400/8"
                              selected={donationMethod === "fiat"}
                              onClick={() => setDonationMethod("fiat")}
                         />
                         
                         <PaymentOption
                              icon={faBitcoin}
                              title="Cryptocurrency"
                              description="BTC, ETH &amp; SOL accepted"
                              activeBorderColor="border-amber-400/25"
                              activeTextColor="text-amber-400/50"
                              activeTitleColor="text-amber-400"
                              activeBackgroundColor="bg-amber-400/8"
                              selected={donationMethod === "crypto"}
                              onClick={() => setDonationMethod("crypto")}
                         />
                    </div>
                    
                    <Panel classes="w-full">
                         <div className="flex gap-3">
                              <div className="w-1/2">
                                   <Label classes="block mb-1.5">Name</Label>
                                   <Field classes="block w-full" />
                              </div>
                              
                              <div className="w-1/2">
                                   <Label classes="block mb-1.5">Amount</Label>
                                   <div className="flex items-center gap-2.5 text-white">
                                        <Field classes="block w-full" type="number" min="5" max="2147483647" />
                                        <div>USD</div>
                                   </div>
                              </div>
                         </div>

                         <Label classes="block mb-1.5 mt-2.5">Message</Label>
                         <TextBox classes="block w-full" rows={6} />

                         <Button classes="block w-full mt-2.5">Donate</Button>
                    </Panel>
               </section>
          </main>
     );
}

function PaymentOption({ title, description, icon, activeBorderColor, activeTitleColor, activeTextColor, activeBackgroundColor, selected = false, ...rest }: any) {
     const colors = selected ? `${activeBorderColor} ${activeTextColor} ${activeBackgroundColor}` : "border-white/9 bg-white/4 text-neutral-600";
     
     return (
          <button className={`w-1/2 p-3 rounded-xl border ${colors} flex items-center gap-1 select-none cursor-pointer text-left duration-150 hover:bg-white/6 hover:border-white/11 hover:-translate-y-1 active:bg-white/5 active:border-white/10 active:-translate-y-px`} {...rest}>
               <FontAwesomeIcon icon={icon} className={`text-4xl ${selected ? activeTitleColor : "text-neutral-600"}`} />
               
               <div>
                    <strong className={`${selected ? activeTitleColor : "text-white"} font-semibold`}>{title}</strong>
                    <div className="text-sm">{description}</div>
               </div>
          </button>
     );
}
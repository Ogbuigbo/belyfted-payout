"use client";

import React, { useState } from "react";

export default function CardPaymentForm({ 
  paymentData = {
    name: "Donation",
    description: "Payment for free will donation",
    currency: "NGN",
    amount: "1000.00",
    email: "test@gmail.com"
  },
  onPaymentSubmit,
  onBack
}) {
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [formData, setFormData] = useState({
    cardNumber: "",
    validTill: "",
    cvv: ""
  });
  const [copiedField, setCopiedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === "cardNumber") {
      const formatted = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      setFormData(prev => ({ ...prev, [name]: formatted }));
    }
    // Format valid till with slash
    else if (name === "validTill") {
      const formatted = value.replace(/\D/g, '').replace(/(.{2})/, '$1/');
      setFormData(prev => ({ ...prev, [name]: formatted }));
    }
    // CVV - only numbers, max 4 digits
    else if (name === "cvv") {
      const formatted = value.replace(/\D/g, '').slice(0, 4);
      setFormData(prev => ({ ...prev, [name]: formatted }));
    }
    else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Call the parent component's submit handler if provided
    if (onPaymentSubmit) {
      onPaymentSubmit({ 
        ...formData, 
        ...paymentData, 
        paymentMethod: selectedMethod 
      });
    } else {
      // Default behavior - show alert
      alert(`Card payment of ${paymentData.currency} ${paymentData.amount} processed successfully!`);
    }
  };

  const handleCopyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className=" rounded-2xl  max-w-4xl w-full p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Payment Methods */}
          <div className="lg:w-1/3">
            <h2 className=" font-bold text-gray-900 mb-6">PAY WITH</h2>
            
            <div className="space-y-4">
              {/* Card Option */}
              <button
                onClick={() => setSelectedMethod("card")}
                className={`w-full py-[10px] pl-2 pr-6 rounded-[4px]  transition-all duration-200 ${
                  selectedMethod === "card"
                    ? "border-orange-400 bg-[#FAD69E]"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8.50586H22" stroke="#945F0B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 16.5059H8" stroke="#945F0B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 16.5059H14.5" stroke="#945F0B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.44 3.50586H17.55C21.11 3.50586 22 4.38586 22 7.89586V16.1059C22 19.6159 21.11 20.4959 17.56 20.4959H6.44C2.89 20.5059 2 19.6259 2 16.1159V7.89586C2 4.38586 2.89 3.50586 6.44 3.50586Z" stroke="#945F0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </div>
                  <span className={`font-medium  text-sm ${selectedMethod === "card" ? "text-[#945F0B]" : "text-gray-900"}`}>CARD</span>
                </div>
              </button>

              {/* Transfer Option */}
              <button
                onClick={() => setSelectedMethod("transfer")}
                className={`w-full py-[10px] pl-2 pr-6 rounded-[4px]  transition-all duration-200 ${
                  selectedMethod === "transfer"
                    ? "border-orange-400 bg-[#FAD69E]"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 22H3.5" stroke="#777779" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 3.5L5 17.5" stroke="#777779" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 13.77V3.5H8.73" stroke="#777779" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </div>
                  <span className={`font-medium text-gray-900 text-sm ${selectedMethod === "transfer" ? "text-[#945F0B]" : "text-gray-900"}`}>TRANSFER</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Payment Form */}
          <div className="lg:w-[60%] bg-white py-[32px] px-4 rounded-[16px]">
            {/* Payment Summary Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-4">
                <div className="w-[44px] h-[44px] bg-[#800080] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BL</span>
                </div>
                <div className="flex flex-col gap-1 text-sm font-semibold text-[#777779]">
                  <p className="">TO:</p>
                  <p className="font-semibold ">BELYFTED LIMITED</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold ">{paymentData.currency} {paymentData.amount}</p>
                <p className="text-sm [#777779] font-medium">{paymentData.email}</p>
              </div>
            </div>

            <hr className="border-[#C8C6C9]" />

            {/* Instructions */}
            <p className="text-[#777779] my-8 text-center font-medium">
              {selectedMethod === "card" 
                ? "Enter your card details to pay" 
                : " Please make a bank transfer to the account details below"
              }
            </p>

            {/* Payment Form */}
            {selectedMethod === "card" ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Card Number */}
                <div>
                  <label className="block text-sm font-medium text-[#303032] mb-2">
                    CARD NUMBER
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full border border-[#C9C9C9] rounded-[12px] px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0000 0000 0000 0000"
                      maxLength="19"
                      required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8.50586H22" stroke="#042656" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 16.5059H8" stroke="#042656" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 16.5059H14.5" stroke="#042656" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.44 3.50586H17.55C21.11 3.50586 22 4.38586 22 7.89586V16.1059C22 19.6159 21.11 20.4959 17.56 20.4959H6.44C2.89 20.5059 2 19.6259 2 16.1159V7.89586C2 4.38586 2.89 3.50586 6.44 3.50586Z" stroke="#042656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </div>
                  </div>
                </div>

                {/* Valid Till and CVV */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      VALID TILL
                    </label>
                    <input
                      type="text"
                      name="validTill"
                      value={formData.validTill}
                      onChange={handleInputChange}
                      className="w-full border border-[#C9C9C9] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="MM/YY"
                      maxLength="5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                      CVV
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5" stroke="#9CA3AF" strokeWidth="1"/>
                        <path d="M6 8V6M6 4H6.01" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full border border-[#C9C9C9] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="123"
                      maxLength="4"
                      required
                    />
                  </div>
                </div>

                {/* Pay Button */}
                <button
                  type="submit"
                  className="w-full bg-[#042656] hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200"
                >
                  Pay {paymentData.currency} {paymentData.amount}
                </button>
              </form>
            ) : (
              <div className="space-y-6">
             

                {/* Bank Details Card */}
                <div className="bg-gray-50 rounded-[12px] p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[#777779]">Bank Name:</span>
                    <span className="text-sm text-[#303032]">Zenith Bank</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[#777779]">Beneficiary Name:</span>
                    <span className="text-sm text-[#303032]">BELYFTED LIMITED CHECKOUT</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[#777779]">Account Number:</span>
                    <div className="flex items-center gap-2">
                    <button
                        onClick={() => handleCopyToClipboard("123456789", "account")}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                        title="Copy account number"
                      >
                        {copiedField === "account" ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.16602" y="1.5" width="8.33333" height="11.6667" rx="2.5" stroke="#717171" stroke-width="1.25"/>
                            <path d="M11.5829 5.16797C12.3301 5.60023 12.8329 6.40816 12.8329 7.33351V14.0002C12.8329 15.3809 11.7136 16.5002 10.3329 16.5002H6.99953C6.07418 16.5002 5.26625 15.9974 4.83398 15.2502" stroke="#717171" stroke-width="1.25" stroke-linecap="round"/>
                            </svg>
                            
                        )}
                      </button>
                      <span className="text-sm text-[#303032]">123456789</span>
                     
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[#777779]">Amount:</span>
                    <div className="flex items-center gap-2">
                    <button
                        onClick={() => handleCopyToClipboard(paymentData.amount, "amount")}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                        title="Copy amount"
                      >
                        {copiedField === "amount" ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.16602" y="1.5" width="8.33333" height="11.6667" rx="2.5" stroke="#717171" stroke-width="1.25"/>
                            <path d="M11.5829 5.16797C12.3301 5.60023 12.8329 6.40816 12.8329 7.33351V14.0002C12.8329 15.3809 11.7136 16.5002 10.3329 16.5002H6.99953C6.07418 16.5002 5.26625 15.9974 4.83398 15.2502" stroke="#717171" stroke-width="1.25" stroke-linecap="round"/>
                            </svg>
                            
                        )}
                      </button>
                      <span className="text-sm  text-[#303032]">{paymentData.currency} {paymentData.amount}</span>
                     
                    </div>
                  </div>
                </div>

                {/* Expiration Warning */}
                <div className="bg-[#FFF6E6]   p-4">
                  <p className="text-[#9C6500] text-sm font-medium text-center">
                    This account expires after 30 minutes and valid for only this transaction
                  </p>
                </div>

                {/* Confirmation Button */}
                <button
                  onClick={() => {
                    if (onPaymentSubmit) {
                      onPaymentSubmit({ 
                        ...paymentData, 
                        paymentMethod: "transfer",
                        bankDetails: {
                          bankName: "Zenith Bank",
                          beneficiaryName: "BELYFTED LIMITED CHECKOUT",
                          accountNumber: "123456789"
                        }
                      });
                    } else {
                      alert(`Bank transfer of ${paymentData.currency} ${paymentData.amount} confirmed!`);
                    }
                  }}
                  className="w-full bg-[#042656] hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200"
                >
                  I have transferred {paymentData.currency} {paymentData.amount}
                </button>
              </div>
            )}

            {/* Security Footer */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-2 border border-[#C9C9C9] rounded-[8px]">
                <span className="text-xs font-semibold text-gray-600">Secured by</span>
                <svg
                  width="84"
                  height="20"
                  viewBox="0 0 84 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.0654297 3.45568V0H10.2333C13.1768 0.284854 17.7464 2.7315 13.6705 8.73551C9.56527 7.33233 1.66087 4.55768 0.0654297 3.45568ZM0.0654297 6.11068V7.21615C0.525429 7.60231 7.42591 8.69526 10.8791 9.20196C7.68867 8.34227 1.28489 6.62289 1.19317 6.62289C0.712568 6.48203 0.34399 6.30747 0.0654297 6.11068ZM0.0654297 7.53074V20H10.2333C16.7561 19.6642 17.1398 13.2374 15.1254 12.1343C14.6549 11.8838 14.2807 11.6506 13.9862 11.4327L9.15968 14.3601C8.19678 14.8645 6.35138 13.9207 5.54891 13.3858C6.87069 13.6592 11.3977 11.9544 13.5345 11.0522C13.5328 11.0505 13.5311 11.0489 13.5295 11.0472L7.61225 12.5834C4.72083 13.3966 2.85333 11.5686 2.2509 10.5096C2.7331 11.04 9.29071 10.7044 12.5984 10.4628L3.54298 9.71778C1.00123 9.71778 0.196058 8.41603 0.0654297 7.53074ZM2.22479 10.4628C2.23319 10.4783 2.2419 10.4939 2.2509 10.5096C2.2373 10.4947 2.22859 10.4792 2.22479 10.4628Z"
                    fill="#F39C12"
                  />
                  <path
                    d="M21.3301 13.9065V3.92452H26.4351C27.7471 3.92452 28.7262 4.16694 29.3727 4.65178C30.0191 5.12711 30.3424 5.75455 30.3424 6.5341C30.3424 7.04745 30.2045 7.49902 29.9288 7.88879C29.6626 8.26906 29.2824 8.57327 28.788 8.80142C28.3032 9.02008 27.7233 9.1294 27.0483 9.1294L27.3335 8.44493C28.037 8.44493 28.6502 8.55425 29.173 8.77291C29.6959 8.98205 30.0999 9.29102 30.3851 9.6998C30.6799 10.0991 30.8272 10.5887 30.8272 11.1686C30.8272 12.0337 30.4755 12.7087 29.772 13.1935C29.078 13.6688 28.0608 13.9065 26.7203 13.9065H21.3301ZM24.125 11.8673H26.4922C26.977 11.8673 27.343 11.7865 27.5902 11.6249C27.8469 11.4538 27.9752 11.1971 27.9752 10.8549C27.9752 10.5126 27.8469 10.2607 27.5902 10.0991C27.343 9.92796 26.977 9.8424 26.4922 9.8424H23.9254V7.88879H26.0644C26.5397 7.88879 26.8962 7.80798 27.1339 7.64637C27.3715 7.48476 27.4904 7.24234 27.4904 6.91911C27.4904 6.59589 27.3715 6.35822 27.1339 6.20612C26.8962 6.0445 26.5397 5.96369 26.0644 5.96369H24.125V11.8673ZM36.2111 14.0348C35.2984 14.0348 34.4999 13.8637 33.8154 13.5215C33.1405 13.1697 32.6129 12.6944 32.2326 12.0955C31.8618 11.4871 31.6765 10.7978 31.6765 10.0278C31.6765 9.25774 31.8571 8.57327 32.2183 7.97435C32.5891 7.36592 33.0977 6.89535 33.7441 6.56261C34.3906 6.22038 35.1179 6.04926 35.9259 6.04926C36.6864 6.04926 37.3804 6.20612 38.0078 6.51983C38.6353 6.82405 39.1344 7.27561 39.5051 7.87453C39.8759 8.47345 40.0613 9.2007 40.0613 10.0563C40.0613 10.1514 40.0565 10.2607 40.047 10.3843C40.0375 10.5079 40.028 10.6219 40.0185 10.7265H33.901V9.30052H38.5782L37.5515 9.6998C37.561 9.34806 37.4945 9.04385 37.3519 8.78717C37.2188 8.53049 37.0286 8.33085 36.7815 8.18825C36.5438 8.04565 36.2634 7.97435 35.9401 7.97435C35.6169 7.97435 35.3317 8.04565 35.0846 8.18825C34.8469 8.33085 34.6615 8.53524 34.5284 8.80142C34.3954 9.0581 34.3288 9.36232 34.3288 9.71406V10.1276C34.3288 10.5079 34.4049 10.8358 34.557 11.1115C34.7186 11.3872 34.9467 11.6011 35.2414 11.7532C35.5361 11.8958 35.8878 11.9671 36.2966 11.9671C36.6769 11.9671 37.0001 11.9148 37.2663 11.8103C37.542 11.6962 37.8129 11.5251 38.0791 11.2969L39.5051 12.7799C39.1344 13.1887 38.678 13.5025 38.1362 13.7211C37.5943 13.9303 36.9526 14.0348 36.2111 14.0348ZM41.3105 13.9065V3.32561H44.0199V13.9065H41.3105ZM47.1069 16.8013C46.6981 16.8013 46.2845 16.7347 45.8662 16.6016C45.4575 16.478 45.1247 16.3117 44.8681 16.1025L45.8092 14.2059C45.9708 14.3485 46.1562 14.4579 46.3653 14.5339C46.584 14.6195 46.7979 14.6623 47.007 14.6623C47.3018 14.6623 47.5347 14.5957 47.7058 14.4626C47.8769 14.3295 48.0243 14.1204 48.1478 13.8352L48.5043 12.9368L48.7182 12.6659L51.3421 6.17759H53.9231L50.5863 14.2202C50.3201 14.8857 50.0111 15.4038 49.6594 15.7745C49.3172 16.1548 48.9321 16.421 48.5043 16.5731C48.086 16.7252 47.6202 16.8013 47.1069 16.8013ZM48.1621 14.2345L44.754 6.17759H47.5347L50.0444 12.4235L48.1621 14.2345ZM54.9372 13.9065V6.26316C54.9372 5.33151 55.2129 4.58999 55.7643 4.0386C56.3252 3.47771 57.1237 3.19727 58.16 3.19727C58.4927 3.19727 58.8207 3.23054 59.1439 3.29709C59.4671 3.36363 59.7381 3.46345 59.9567 3.59654L59.2865 5.50738C59.1724 5.44083 59.0441 5.38854 58.9015 5.35052C58.7589 5.30298 58.6163 5.27922 58.4737 5.27922C58.1885 5.27922 57.9651 5.36478 57.8035 5.5359C57.6514 5.69751 57.5753 5.94944 57.5753 6.29167V6.84781L57.6466 7.97435V13.9065H54.9372ZM53.8107 8.48771V6.46279H59.4148V8.48771H53.8107ZM63.8675 14.0348C62.8788 14.0348 62.1088 13.7924 61.5574 13.3076C61.006 12.8132 60.7303 12.0717 60.7303 11.083V4.45214H63.4397V11.0545C63.4397 11.3302 63.5158 11.5488 63.6679 11.7105C63.82 11.8626 64.0149 11.9386 64.2525 11.9386C64.5757 11.9386 64.8514 11.8578 65.0796 11.6962L65.7498 13.5928C65.5217 13.7449 65.2412 13.8542 64.9085 13.9207C64.5757 13.9968 64.2288 14.0348 63.8675 14.0348ZM59.6038 8.48771V6.46279H65.2079V8.48771H59.6038ZM70.6217 14.0348C69.709 14.0348 68.9105 13.8637 68.226 13.5215C67.551 13.1697 67.0234 12.6944 66.643 12.0955C66.2724 11.4871 66.087 10.7978 66.087 10.0278C66.087 9.25774 66.2676 8.57327 66.6289 7.97435C66.9996 7.36592 67.5082 6.89535 68.1547 6.56261C68.8011 6.22038 69.5284 6.04926 70.3365 6.04926C71.097 6.04926 71.791 6.20612 72.4184 6.51983C73.0459 6.82405 73.545 7.27561 73.9157 7.87453C74.2865 8.47345 74.4719 9.2007 74.4719 10.0563C74.4719 10.1514 74.4671 10.2607 74.4576 10.3843C74.4481 10.5079 74.4386 10.6219 74.4291 10.7265H68.3116V9.30052H72.9888L71.9621 9.6998C71.9716 9.34806 71.9051 9.04385 71.7625 8.78717C71.6294 8.53049 71.4392 8.33085 71.1921 8.18825C70.9544 8.04565 70.674 7.97435 70.3507 7.97435C70.0275 7.97435 69.7423 8.04565 69.4951 8.18825C69.2575 8.33085 69.0721 8.53524 68.939 8.80142C68.8059 9.0581 68.7394 9.36232 68.7394 9.71406V10.1276C68.7394 10.5079 68.8154 10.8358 68.9675 11.1115C69.1291 11.3872 69.3573 11.6011 69.652 11.7532C69.9467 11.8958 70.2984 11.9671 70.7072 11.9671C71.0875 11.9671 71.4107 11.9148 71.6769 11.8103C71.9526 11.6962 72.2235 11.5251 72.4897 11.2969L73.9157 12.7799C73.545 13.1887 73.0886 13.5025 72.5468 13.7211C72.0049 13.9303 71.3632 14.0348 70.6217 14.0348ZM79.0863 14.0348C78.3828 14.0348 77.7411 13.8732 77.1612 13.55C76.5908 13.2173 76.1345 12.7562 75.7922 12.1668C75.45 11.5679 75.2789 10.8549 75.2789 10.0278C75.2789 9.21021 75.45 8.50672 75.7922 7.91731C76.1345 7.31839 76.5908 6.85732 77.1612 6.5341C77.7411 6.21087 78.3828 6.04926 79.0863 6.04926C79.7517 6.04926 80.3126 6.19186 80.769 6.47706C81.2348 6.76225 81.5865 7.19956 81.8242 7.78897C82.0619 8.37838 82.1807 9.12465 82.1807 10.0278C82.1807 10.9499 82.0666 11.7057 81.8385 12.2951C81.6103 12.8845 81.2681 13.3218 80.8117 13.607C80.3554 13.8922 79.7803 14.0348 79.0863 14.0348ZM79.6567 11.8816C79.9609 11.8816 80.2318 11.8103 80.4695 11.6677C80.7167 11.5251 80.9116 11.3159 81.0542 11.0402C81.1968 10.755 81.2681 10.4176 81.2681 10.0278C81.2681 9.63801 81.1968 9.31003 81.0542 9.04385C80.9116 8.76815 80.7167 8.55901 80.4695 8.41641C80.2318 8.27381 79.9609 8.20251 79.6567 8.20251C79.343 8.20251 79.0625 8.27381 78.8153 8.41641C78.5777 8.55901 78.3875 8.76815 78.2449 9.04385C78.1023 9.31003 78.031 9.63801 78.031 10.0278C78.031 10.4176 78.1023 10.755 78.2449 11.0402C78.3875 11.3159 78.5777 11.5251 78.8153 11.6677C79.0625 11.8103 79.343 11.8816 79.6567 11.8816ZM81.3536 13.9065V12.5803L81.3679 10.0278L81.2253 7.47525V3.32561H83.9347V13.9065H81.3536Z"
                    fill="#F39C12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

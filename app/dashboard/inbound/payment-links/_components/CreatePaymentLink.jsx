"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePaymentLink({ onBack, onCreate }) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    description: "",
    amount: "",
    currency: "NGN",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onCreate with mock data
    onCreate({
      ...form,
      dateCreated: new Date().toLocaleString(),
      status: "Active",
    });
  };

  const handlePreviewPayment = () => {
    // Generate a unique payment link ID (in real app, this would come from your backend)
    const paymentLinkId = Math.random().toString(36).substring(2, 15);
    const linkId = Math.random().toString(36).substring(2, 15);
    
    // Create URL with form data as query parameters
    const params = new URLSearchParams({
      name: form.name || "Donation",
      description: form.description || "Payment for free will donation",
      amount: form.amount || "200.00",
      currency: form.currency || "NGN"
    });
    
    // Navigate to payment page using the nested structure: [id]/payment/[linkId]
    router.push(`/dashboard/inbound/payment-links/${paymentLinkId}/payment/${linkId}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-2 px-2  w-full max-w-[1400px] mx-auto">
      {/* Back Button */}
      <div className="mb-2 mt-2">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border text-sm border-[#062755] text-gray-700 font-medium"
          onClick={() => router.push("/dashboard/inbound/history")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 14.6708V9.33081C18 6.01081 15.65 4.66081 12.78 6.31081L11.5 7.05081C11.19 7.23081 11 7.56081 11 7.92081V16.0808C11 16.4408 11.19 16.7708 11.5 16.9508L12.78 17.6908C15.65 19.3408 18 17.9908 18 14.6708Z"
              fill="#062755"
            />
            <path
              opacity="0.4"
              d="M10 15.2104V8.78043C10 8.39043 9.58 8.15043 9.25 8.35043L8.15 8.99043C5.28 10.6404 5.28 13.3604 8.15 15.0104L9.25 15.6504C9.58 15.8404 10 15.6004 10 15.2104Z"
              fill="#062755"
            />
          </svg>
          Back
        </button>
      </div>
      <h2 className="text-2xl font-semibold my-2">Create Payment Link</h2>
      <p className="mb-6 text-[#8E98A8] font-medium">
        Enter details to generate a shareable payment link.
      </p>
      {/* Responsive layout: stack on mobile/tablet, row on desktop */}
      <div className="flex flex-col lg:flex-row justify-between lg:gap-8 w-full">
        {/* Left: Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-4 sm:p-6 md:p-8 xl:w-[553px] w-full"
        >
          <h1 className="font-bold pt-2">Link Details</h1>
          <div className="mt-6">
            <label className="block text-sm font-medium mb-1">
              Payment link name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-xl px-3 py-[10px] placeholder:text-sm outline-none text-sm"
              placeholder="Name for your payments link"
              maxLength={30}
              required
            />
            <div className="text-xs text-[#777779]">
              Remaining {30 - form.name.length} characters
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm font-medium mb-1 flex items-center gap-1">
              Description
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.05967 5.50065C6.21641 5.0551 6.52578 4.67939 6.93298 4.44007C7.34018 4.20076 7.81894 4.11328 8.28446 4.19313C8.74998 4.27297 9.17222 4.515 9.47639 4.87634C9.78057 5.23767 9.94705 5.695 9.94634 6.16732C9.94634 7.50065 7.94634 8.16732 7.94634 8.16732M7.99967 10.834H8.00634M14.6663 7.50065C14.6663 11.1826 11.6816 14.1673 7.99967 14.1673C4.31778 14.1673 1.33301 11.1826 1.33301 7.50065C1.33301 3.81875 4.31778 0.833984 7.99967 0.833984C11.6816 0.833984 14.6663 3.81875 14.6663 7.50065Z"
                  stroke="#777779"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>
            <input
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border rounded-xl px-3 py-[10px] placeholder:text-sm outline-none text-sm"
              placeholder="Short instructions or specific instructions."
              maxLength={160}
            />
            <div className="text-xs text-[#777779]">
              Remaining {160 - form.description.length} characters
            </div>
          </div>

          <h1 className="font-bold mt-[42px]">Payment Details</h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-[42px] mt-6">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Amount</label>
              <input
                name="amount"
                value={form.amount}
                onChange={handleChange}
                className="w-full border rounded-xl px-3 py-[10px] placeholder:text-sm placeholder:text-[#C5C7CA] text-sm outline-none"
                placeholder="NGN 0.00"
              />
              <p className="text-xs text-[#8E98A8] font-semibold">
                Leave blank for donations
              </p>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Currency</label>
              <select
                name="currency"
                value={form.currency}
                onChange={handleChange}
                className="w-full border rounded-xl px-3 py-[10px] placeholder:text-sm  text-[#C5C7CA] outline-none  text-sm"
              >
                <option value="NGN">Nigerian naira</option>
                {/* Add more currencies as needed */}
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-[42px] mt-6">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Settlement Destination
              </label>
              <input
                name="amount"
                value={form.amount}
                onChange={handleChange}
                className="w-full border rounded-xl px-3 py-[10px] placeholder:text-sm  placeholder:text-[#C5C7CA] text-sm outline-none"
                placeholder="Balance"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Who bears the fee?
              </label>
              <select
                name="currency"
                value={form.currency}
                onChange={handleChange}
                className="w-full border rounded-xl px-3 py-[10px] placeholder:text-sm  text-[#C5C7CA] outline-none  text-sm"
              >
                <option value="NGN">My Business</option>
                {/* Add more currencies as needed */}
              </select>
            </div>
          </div>

          <h1 className="font-bold mt-[42px]">Advanced Options</h1>
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isRecurring"
                checked={form.isRecurring}
                onChange={handleChange}
                className="mr-3 rounded w-6 h-6"
              />
              <label className="text-sm font-medium text-[#303032]">
                Generate short link
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isRecurring"
                checked={form.isRecurring}
                onChange={handleChange}
                className="mr-3 w-6 rounded h-6"
              />
              <label className="text-sm font-medium text-[#303032]">
                Collect phone number on this page
              </label>
            </div>
          </div>

          <div>
            <div className="mt-6">
              <label className="text-sm font-medium mb-1 flex items-center gap-1">
                Success Message
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.05967 5.50065C6.21641 5.0551 6.52578 4.67939 6.93298 4.44007C7.34018 4.20076 7.81894 4.11328 8.28446 4.19313C8.74998 4.27297 9.17222 4.515 9.47639 4.87634C9.78057 5.23767 9.94705 5.695 9.94634 6.16732C9.94634 7.50065 7.94634 8.16732 7.94634 8.16732M7.99967 10.834H8.00634M14.6663 7.50065C14.6663 11.1826 11.6816 14.1673 7.99967 14.1673C4.31778 14.1673 1.33301 11.1826 1.33301 7.50065C1.33301 3.81875 4.31778 0.833984 7.99967 0.833984C11.6816 0.833984 14.6663 3.81875 14.6663 7.50065Z"
                    stroke="#777779"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </label>
              <input
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full border rounded-xl px-3 py-[10px] placeholder:text-sm placeholder:text-[#C5C7CA] outline-none text-sm"
                placeholder="Optional"
                maxLength={160}
              />
              <div className="text-xs text-gray-400">
                Remaining {160 - form.description.length} characters
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium mb-1 flex items-center gap-1">
                Use your custom link
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.05967 5.50065C6.21641 5.0551 6.52578 4.67939 6.93298 4.44007C7.34018 4.20076 7.81894 4.11328 8.28446 4.19313C8.74998 4.27297 9.17222 4.515 9.47639 4.87634C9.78057 5.23767 9.94705 5.695 9.94634 6.16732C9.94634 7.50065 7.94634 8.16732 7.94634 8.16732M7.99967 10.834H8.00634M14.6663 7.50065C14.6663 11.1826 11.6816 14.1673 7.99967 14.1673C4.31778 14.1673 1.33301 11.1826 1.33301 7.50065C1.33301 3.81875 4.31778 0.833984 7.99967 0.833984C11.6816 0.833984 14.6663 3.81875 14.6663 7.50065Z"
                    stroke="#777779"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </label>
              <input
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full border rounded-xl px-3 py-[10px] placeholder:text-xs placeholder:text-[#C5C7CA] outline-none text-sm"
                placeholder="Checkout.belfyted.com/payment-link"
                maxLength={160}
              />
              <div className="text-xs text-gray-400">
                Remaining {160 - form.description.length} characters
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium mb-1 flex items-center gap-1">
                Redirect after payment
              </label>
              <input
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full border rounded-xl px-3 py-[10px] placeholder:text-sm placeholder:text-[#C5C7CA] outline-none text-sm"
                placeholder="https://your-link.com"
                maxLength={160}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full mt-6">
            <button
              type="button"
              className="border border-[#C8C6C9] text-[#777779] rounded-lg py-4 px-6 w-full sm:w-auto"
            >
              Hide advanced option
            </button>
            <button
              type="submit"
              className="bg-[#112B55] text-white rounded-lg py-4 px-6 w-full sm:w-auto"
            >
              Create
            </button>
          </div>
        </form>
        {/* Right: Preview */}
        <div className="flex items-baseline justify-end mt-8 lg:mt-0">
          <div className="bg-white rounded-xl p-4 sm:p-8 flex-1 xl:w-[500px] ">
            <div className="text-center text-gray-400 text-xs py-2 mb-4">
              Here's a preview of your payment link
            </div>
            <div className="border bg-gray-50 rounded-[32px] p-6">
              <div className="text-center mt-6 font-bold mb-2">
                {form.name || "{Payment link name}"}
              </div>
              <div className="text-xs text-center font-semibold mt-[31px] text-gray-500">
                By Belyfted LIMITED
              </div>
              <hr className="my-[31px]" />
              <div className="mb-2 mt-6 w-full">
                <div className="text-sm w-full">
                  <label htmlFor="">Full Name</label>
                  <input
                    className="w-full border rounded-xl mt-2 px-3 py-[10px] placeholder:text-sm placeholder:text-[#C5C7CA] text-sm mb-2"
                    placeholder="eg. Adebola john"
                    disabled
                  />
                </div>
                <p className="mt-6 text-sm">Email</p>
                <input
                  className="w-full border rounded-xl mt-2 px-3 py-[10px] placeholder:text-sm placeholder:text-[#C5C7CA] text-sm mb-2"
                  placeholder="email@example.com"
                  disabled
                />
                <p className="mt-6 text-sm">Phone Number</p>
                <input
                  className="w-full border rounded-xl mt-2 px-3 py-[10px] placeholder:text-sm placeholder:text-[#C5C7CA] text-sm mb-2"
                  placeholder="Enter your phone number"
                  disabled
                />
                <p className="mt-6 text-sm">Amount ({form.currency})</p>
                <input
                  className="w-full border rounded-xl mt-2 px-3 py-[10px] placeholder:text-sm placeholder:text-[#C5C7CA] text-sm mb-2"
                  placeholder={form.amount || "200.00"}
                  disabled
                />
              </div>
              <button
                onClick={handlePreviewPayment}
                className="w-full bg-[#112B55] hover:bg-[#0F2550] text-white rounded-lg py-4 mt-4 transition-colors duration-200 cursor-pointer"
              >
                Pay {form.currency} {form.amount || "200.00"}
              </button>
              <div className="text-xs mt-[62px] flex items-center w-fit justify-center mx-auto py-2 px-3 rounded-lg gap-2 border">
                <span className="font-semibold">Secured by</span>
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

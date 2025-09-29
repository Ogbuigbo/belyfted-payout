import React from 'react'

function FundsFeaturesSection() {
  return (
    <div className='relative overflow-x-hidden z-30 w-full'>
    <div className='mt-[70px] flex flex-col w-full max-w-[1235px] mx-auto px-6'>
          <div className=" text-center lg:text-left">
          <div className="text-[#BD6B00] text-xl md:text-2xl font-semibold tracking-wide uppercase mb-[18px]">
            FEATURES
          </div>
          <h2 className="text-3xl lg:text-[48px] font-bold text-black leading-tight">
          Why Choose Money <br className="hidden lg:block" />
            Transfer
          </h2>
        </div>

        {/* Features Grid */}
      <div className="mt-[18px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6">
        {/* Expats & Immigrants */}
        <div className="px-[19px] py-[21px]  border border-gray-200 rounded-3xl bg-white">
          <div className="mb-5">
            {/* SVG Icon placeholder */}
            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M11.1666 8.94188L24.6966 4.42688C30.7716 2.40188 34.0716 5.71688 32.0616 11.7919L27.5466 25.3219C24.5166 34.4269 19.5366 34.4269 16.5066 25.3219L15.1716 21.3019L11.1516 19.9669C2.06156 16.9519 2.06156 11.9869 11.1666 8.94188Z" fill="#BD6B00"/>
<path d="M18.6797 17.4448L24.3947 11.7148L18.6797 17.4448Z" fill="#292D32"/>
<path d="M18.6798 18.57C18.3948 18.57 18.1098 18.465 17.8848 18.24C17.4498 17.805 17.4498 17.085 17.8848 16.65L23.5848 10.92C24.0198 10.485 24.7398 10.485 25.1748 10.92C25.6098 11.355 25.6098 12.075 25.1748 12.51L19.4748 18.24C19.2498 18.45 18.9648 18.57 18.6798 18.57Z" fill="#BD6B00"/>
</svg>

          </div>
          <h3 className="text-[24px] font-semibold text-[#303032] mb-[10px]">
          Instant Transfer
          </h3>
          <p className="">
          Move money in real-time, 24/7. No delays. No downtime.
          </p>
        </div>

        {/* Freelancers & Contractor */}
        <div className="px-[19px] py-[21px] border border-gray-200 rounded-3xl bg-white hover:shadow-md transition-shadow">
          <div className="mb-5">
            {/* SVG Icon placeholder */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12.8386 5.01172V26.5067C12.3286 26.5217 11.8186 26.6417 11.4436 26.8667L7.91859 28.8767C5.45859 30.2867 3.43359 29.1167 3.43359 26.2667V11.6717C3.43359 10.7267 4.10859 9.55672 4.94859 9.07672L11.4436 5.35672C11.8186 5.14672 12.3286 5.02672 12.8386 5.01172Z" fill="#042656"/>
<path d="M23.5948 9.49442V30.9894C23.0698 31.0044 22.5598 30.9144 22.1548 30.7194L14.2798 26.7744C13.8748 26.5794 13.3648 26.4894 12.8398 26.5044V5.00942C13.3648 4.99442 13.8748 5.08442 14.2798 5.27942L22.1548 9.22442C22.5598 9.41942 23.0698 9.50942 23.5948 9.49442Z" fill="#F39C12"/>
<path opacity="0.4" d="M32.9988 9.7351V24.3301C32.9988 25.2751 32.3238 26.4451 31.4838 26.9251L24.9888 30.6451C24.6138 30.8551 24.1037 30.9751 23.5938 30.9901V9.4951C24.1037 9.4801 24.6138 9.3601 24.9888 9.1351L28.5138 7.1251C30.9738 5.7151 32.9988 6.8851 32.9988 9.7351Z" fill="#042656"/>
</svg>

          </div>
          <h3 className="text-[24px] font-semibold text-[#303032] mb-[10px]">
          Global Reach
          </h3>
          <p className="">
          Send payouts locally or across borders with full compliance and transparency.
          </p>
        </div>

        {/* Flexible Payment Options */}
        <div className="px-[19px] py-[21px]   border border-gray-200 rounded-3xl bg-white hover:shadow-md transition-shadow">
          <div className="mb-5">
            {/* SVG Icon placeholder */}
            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.5 28.5V33H3.5V28.5C3.5 27.675 4.175 27 5 27H32C32.825 27 33.5 27.675 33.5 28.5Z" fill="#042656" stroke="#042656" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.6" d="M12.5 16.5H6.5V27H12.5V16.5Z" fill="#042656"/>
<path opacity="0.4" d="M18.5 16.5H12.5V27H18.5V16.5Z" fill="#042656"/>
<path opacity="0.6" d="M24.5 16.5H18.5V27H24.5V16.5Z" fill="#042656"/>
<path opacity="0.4" d="M30.5 16.5H24.5V27H30.5V16.5Z" fill="#042656"/>
<path d="M35 34.125H2C1.385 34.125 0.875 33.615 0.875 33C0.875 32.385 1.385 31.875 2 31.875H35C35.615 31.875 36.125 32.385 36.125 33C36.125 33.615 35.615 34.125 35 34.125Z" fill="#042656"/>
<path d="M32.555 8.62668L19.055 3.22672C18.755 3.10672 18.245 3.10672 17.945 3.22672L4.44501 8.62668C3.92001 8.83668 3.5 9.45167 3.5 10.0217V15.0017C3.5 15.8267 4.175 16.5017 5 16.5017H32C32.825 16.5017 33.5 15.8267 33.5 15.0017V10.0217C33.5 9.45167 33.08 8.83668 32.555 8.62668ZM18.5 12.7517C17.255 12.7517 16.25 11.7467 16.25 10.5017C16.25 9.25668 17.255 8.25168 18.5 8.25168C19.745 8.25168 20.75 9.25668 20.75 10.5017C20.75 11.7467 19.745 12.7517 18.5 12.7517Z" fill="#F39C12"/>
</svg>

          </div>
          <h3 className="text-[24px] font-semibold text-[#303032] mb-[10px]">
          Flexible Payment Options
          </h3>
          <p className="">
          Choose from bank transfers, mobile wallets, or direct account credits—whatever suits your recipients best.
          </p>
        </div>

          {/* Secure & Compliant */}
          <div className="px-[19px] lg:hidden py-[21px] border border-gray-200 rounded-3xl bg-white hover:shadow-md transition-shadow w-full max-w-[400px] lg:h-[200px] h-auto flex flex-col">
          <div className="mb-5">
            {/* SVG Icon placeholder */}
            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M27.9941 8.505L10.3842 26.115C9.72416 26.775 8.61414 26.685 8.07414 25.905C6.21414 23.19 5.11914 19.98 5.11914 16.68V10.095C5.11914 8.86499 6.04915 7.47 7.18915 7.005L15.5442 3.585C17.4342 2.805 19.5342 2.805 21.4242 3.585L27.4841 6.05999C28.4891 6.46499 28.7441 7.755 27.9941 8.505Z" fill="#042656"/>
<path d="M29.405 10.5585C30.38 9.73347 31.865 10.4385 31.865 11.7135V16.6785C31.865 24.0135 26.54 30.8835 19.265 32.8935C18.77 33.0285 18.23 33.0285 17.72 32.8935C15.59 32.2935 13.61 31.2885 11.915 29.9685C11.195 29.4135 11.12 28.3635 11.75 27.7185C15.02 24.3735 24.59 14.6235 29.405 10.5585Z" fill="#F39C12"/>
</svg>


          </div>
          <h3 className="text-[24px] font-semibold text-[#303032] mb-[10px]">
          Secure & Compliant
          </h3>
          <p className="flex-grow">
          We use end-to-end encryption and follow industry-leading compliance standards to keep your funds safe.
          </p>
        </div>

           {/* Real-Time Tracking */}
           <div className="px-[19px] lg:hidden  py-[21px] border border-gray-200 rounded-3xl bg-white hover:shadow-md transition-shadow w-full max-w-[400px] lg:h-[200px] h-auto flex flex-col">
          <div className="mb-5">
            {/* SVG Icon placeholder */}
            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M28.0252 29.52C27.2002 31.635 25.1902 33 22.9252 33H14.0752C11.7952 33 9.80021 31.635 8.97521 29.52C8.15021 27.39 8.72021 25.035 10.4002 23.505L16.4752 18H20.5402L26.6002 23.505C28.2802 25.035 28.8352 27.39 28.0252 29.52Z" fill="#292D32"/>
<path d="M15.7695 25.9219H21.2305C21.3787 25.9221 21.4997 26.0438 21.5 26.1914C21.5 26.332 21.3711 26.4616 21.2305 26.4619H15.7695C15.6211 26.4617 15.5 26.3392 15.5 26.1914C15.5003 26.0432 15.6219 25.9221 15.7695 25.9219Z" fill="#042656" stroke="#042656" stroke-width="1.5"/>
<path d="M28.026 6.48C27.201 4.365 25.191 3 22.926 3H14.076C11.811 3 9.80097 4.365 8.97597 6.48C8.16597 8.61 8.72097 10.965 10.416 12.495L16.476 18H20.541L26.601 12.495C28.281 10.965 28.836 8.61 28.026 6.48ZM21.231 10.845H15.771C15.201 10.845 14.751 10.38 14.751 9.825C14.751 9.27 15.216 8.805 15.771 8.805H21.231C21.801 8.805 22.251 9.27 22.251 9.825C22.251 10.38 21.786 10.845 21.231 10.845Z" fill="#042656"/>
</svg>


          </div>
          <h3 className="text-[24px] font-semibold text-[#303032] mb-[10px]">
          Real-Time Tracking
          </h3>
          <p className="flex-grow">
          Stay informed every step of the way with live transaction status updates.
          </p>
        </div>
      </div>

      {/* Centered Last Two Features */}
      <div className="mt-6 hidden lg:flex  lg:flex-row justify-center items-center gap-6 lg:max-w-5xl lg:mx-auto">
           {/* Secure & Compliant */}
           <div className="px-[19px] py-[21px] border border-gray-200 rounded-3xl bg-white hover:shadow-md transition-shadow w-full max-w-[400px] lg:h-[220px] h-auto flex flex-col">
          <div className="mb-5">
            {/* SVG Icon placeholder */}
            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M27.9941 8.505L10.3842 26.115C9.72416 26.775 8.61414 26.685 8.07414 25.905C6.21414 23.19 5.11914 19.98 5.11914 16.68V10.095C5.11914 8.86499 6.04915 7.47 7.18915 7.005L15.5442 3.585C17.4342 2.805 19.5342 2.805 21.4242 3.585L27.4841 6.05999C28.4891 6.46499 28.7441 7.755 27.9941 8.505Z" fill="#042656"/>
<path d="M29.405 10.5585C30.38 9.73347 31.865 10.4385 31.865 11.7135V16.6785C31.865 24.0135 26.54 30.8835 19.265 32.8935C18.77 33.0285 18.23 33.0285 17.72 32.8935C15.59 32.2935 13.61 31.2885 11.915 29.9685C11.195 29.4135 11.12 28.3635 11.75 27.7185C15.02 24.3735 24.59 14.6235 29.405 10.5585Z" fill="#F39C12"/>
</svg>


          </div>
          <h3 className="text-[24px] font-semibold text-[#303032] mb-[10px]">
          Secure & Compliant
          </h3>
          <p className="flex-grow">
          We use end-to-end encryption and follow industry-leading compliance standards to keep your funds safe.
          </p>
        </div>

           {/* Real-Time Tracking */}
           <div className="px-[19px] py-[21px] border border-gray-200 rounded-3xl bg-white hover:shadow-md transition-shadow w-full max-w-[400px] lg:h-[220px] h-auto flex flex-col">
          <div className="mb-5">
            {/* SVG Icon placeholder */}
            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M28.0252 29.52C27.2002 31.635 25.1902 33 22.9252 33H14.0752C11.7952 33 9.80021 31.635 8.97521 29.52C8.15021 27.39 8.72021 25.035 10.4002 23.505L16.4752 18H20.5402L26.6002 23.505C28.2802 25.035 28.8352 27.39 28.0252 29.52Z" fill="#292D32"/>
<path d="M15.7695 25.9219H21.2305C21.3787 25.9221 21.4997 26.0438 21.5 26.1914C21.5 26.332 21.3711 26.4616 21.2305 26.4619H15.7695C15.6211 26.4617 15.5 26.3392 15.5 26.1914C15.5003 26.0432 15.6219 25.9221 15.7695 25.9219Z" fill="#042656" stroke="#042656" stroke-width="1.5"/>
<path d="M28.026 6.48C27.201 4.365 25.191 3 22.926 3H14.076C11.811 3 9.80097 4.365 8.97597 6.48C8.16597 8.61 8.72097 10.965 10.416 12.495L16.476 18H20.541L26.601 12.495C28.281 10.965 28.836 8.61 28.026 6.48ZM21.231 10.845H15.771C15.201 10.845 14.751 10.38 14.751 9.825C14.751 9.27 15.216 8.805 15.771 8.805H21.231C21.801 8.805 22.251 9.27 22.251 9.825C22.251 10.38 21.786 10.845 21.231 10.845Z" fill="#042656"/>
</svg>


          </div>
          <h3 className="text-[24px] font-semibold text-[#303032] mb-[10px]">
          Real-Time Tracking
          </h3>
          <p className="flex-grow">
          Stay informed every step of the way with live transaction status updates.
          </p>
        </div>
      </div>

      <div
        className="absolute top-0 -right-[10%] w-[278px] h-[278px] z-30 rounded-full"
        style={{
          background: "#65A3FA",
          filter: "blur(200px)",
        }}
      />
    </div>
    </div>
  )
}

export default FundsFeaturesSection
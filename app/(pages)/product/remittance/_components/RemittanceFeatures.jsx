import React from 'react'
import Button from '../../../../_partials/_components/Button'
import Link from 'next/link'

function RemittanceFeatures() {
  return (
    <div className="relative overflow-x-hidden z-30 w-full">
    <div className="mt-[70px] px-6 max-w-[1200px] mx-auto ">
      <div className="mb-8 text-center lg:text-left">
            <span className="text-[#BD6B00] font-semibold text-2xl   mb-2 block">
              FEATURES
            </span>
            <h2 className="text-3xl lg:text-[40px] font-bold lead-relaxed ">
            Why Choose YodePay  for <br className='hidden lg:block' /> Your Remittance Needs?
            </h2>
          </div>
      {/* Features Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {/* Ultra-Low Fees */}
        <div className="px-[19px] py-[21px] hover:shadow-md pb-8  border border-gray-200 rounded-3xl bg-white">
          <div className="mb-[36px]">
            {/* SVG Icon placeholder */}
            <svg
              width="73"
              height="73"
              viewBox="0 0 73 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54 27.3125H49.1194C48.0675 27.3125 47.5414 27.3125 47.0455 27.1623C46.5495 27.0121 46.1119 26.7204 45.2365 26.1368C43.9237 25.2616 42.4259 24.263 41.6818 24.0378C40.9378 23.8125 40.1488 23.8125 38.5708 23.8125C36.4249 23.8125 35.0417 23.8125 34.077 24.2121C33.1122 24.6118 32.3535 25.3705 30.8361 26.8879L29.5007 28.2233C29.1587 28.5652 28.9877 28.7362 28.8822 28.905C28.4909 29.5308 28.5342 30.3348 28.9906 30.9149C29.1137 31.0714 29.3021 31.223 29.6788 31.5262C31.0714 32.6469 33.0791 32.5351 34.3402 31.2665L36.5 29.0938H38.25L48.75 39.6562C49.7165 40.6285 49.7165 42.2048 48.75 43.1771C47.7835 44.1494 46.2165 44.1494 45.25 43.1771L44.375 42.2968M44.375 42.2968L39.125 37.0157M44.375 42.2968C45.3415 43.2691 45.3415 44.8455 44.375 45.8176C43.4085 46.7899 41.8415 46.7899 40.875 45.8176L39.125 44.0573M39.125 44.0573C40.0915 45.0294 40.0915 46.6058 39.125 47.5781C38.1585 48.5503 36.5915 48.5503 35.625 47.5781L33 44.9374M39.125 44.0573L35.625 40.5573M33 44.9374L32.125 44.0573M33 44.9374C33.9665 45.9097 33.9665 47.4861 33 48.4584C32.0335 49.4305 30.4665 49.4305 29.5 48.4584L24.5586 43.414C23.5433 42.3775 23.0356 41.8593 22.3851 41.5858C21.7347 41.3124 21.0091 41.3124 19.5581 41.3124H19"
                stroke="#303032"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M54 41.3125H49.625"
                stroke="#303032"
                stroke-width="2.625"
                stroke-linecap="round"
              />
              <path
                d="M30.375 27.3125H19"
                stroke="#303032"
                stroke-width="2.625"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#303032] mb-3">
            Ultra-Low Fees
          </h3>
          <p className="text-sm text-[#474649] font-medium leading-relaxed">
            Keep more of your hard-earned money with industry-leading low transfer fees.
          </p>
        </div>

        {/* Express Delivery */}
        <div className="px-[19px] py-[21px] pb-8 border border-gray-200 rounded-3xl bg-white hover:shadow-md transition-shadow">
          <div className="mb-[36px]">
            {/* SVG Icon placeholder */}
            <svg
              width="74"
              height="73"
              viewBox="0 0 74 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="57.5" cy="36.5" r="16.5" fill="#FAD69E" />
              <path
                d="M19.6953 40C23.5446 40 26.665 43.1204 26.665 46.9697"
                stroke="#303032"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.665 22.5312C26.665 26.3805 23.5446 29.5009 19.6953 29.5009"
                stroke="#303032"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M47.666 22.5312C47.666 26.3468 50.7618 29.4463 54.565 29.5002"
                stroke="#303032"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M54.666 34.75V33C54.666 28.0502 54.666 25.5754 53.1283 24.0377C51.5906 22.5 49.1157 22.5 44.166 22.5H30.166C25.2163 22.5 22.7414 22.5 21.2037 24.0377C19.666 25.5754 19.666 28.0502 19.666 33V36.5C19.666 41.4497 19.666 43.9245 21.2037 45.4623C22.7414 47 25.2163 47 30.166 47H35.416"
                stroke="#303032"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M42.416 34.75C42.416 37.6496 40.0656 40 37.166 40C34.2664 40 31.916 37.6496 31.916 34.75C31.916 31.8505 34.2664 29.5 37.166 29.5C40.0656 29.5 42.416 31.8505 42.416 34.75Z"
                stroke="#303032"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M40.666 47C40.666 47 42.416 47 44.166 50.5C44.166 50.5 49.7249 41.75 54.666 40"
                stroke="#303032"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#303032] mb-3">
            Express Delivery
          </h3>
          <p className="text-sm text-[#474649] font-medium leading-relaxed">
            Most transfers arrive within minutes—no one wants their loved ones waiting.
          </p>
        </div>

        {/* Wide Coverage */}
        <div className="px-[19px] py-[21px] pb-8  border border-gray-200 rounded-3xl bg-white hover:shadow-md transition-shadow">
          <div className="mb-[36px]">
            {/* SVG Icon placeholder */}
            <svg
              width="74"
              height="73"
              viewBox="0 0 74 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="56.5" cy="37.5" r="16.5" fill="#FDDAFD" />
              <path
                d="M19.7807 42.8564C19.8401 42.2908 20.25 41.8349 21.0698 40.9233L22.8741 38.9061C23.3152 38.3476 23.6282 37.375 23.6282 36.4996C23.6282 35.625 23.3151 34.652 22.8741 34.0938L21.0698 32.0765C20.25 31.1649 19.8401 30.7091 19.7807 30.1434C19.7213 29.5778 20.0275 29.0465 20.6398 27.9838L21.5036 26.4847C22.1568 25.351 22.4835 24.7842 23.0392 24.5581C23.595 24.3321 24.2235 24.5105 25.4806 24.8672L27.616 25.4686C28.4186 25.6537 29.2606 25.5487 29.9934 25.1722L30.583 24.8321C31.2113 24.4296 31.6947 23.8362 31.9622 23.1386L32.5467 21.3932C32.9309 20.2382 33.123 19.6607 33.5804 19.3303C34.0378 19 34.6454 19 35.8605 19H37.8114C39.0266 19 39.6342 19 40.0914 19.3303C40.5489 19.6607 40.741 20.2382 41.1253 21.3932L41.7097 23.1386C41.9772 23.8362 42.4606 24.4296 43.089 24.8321L43.6786 25.1722C44.4113 25.5487 45.2534 25.6537 46.056 25.4686L48.1913 24.8672C49.4483 24.5105 50.0769 24.3321 50.6327 24.5581C51.1885 24.7842 51.5151 25.351 52.1684 26.4847L53.0322 27.9838C53.6445 29.0465 53.9506 29.5778 53.8912 30.1434C53.8317 30.7091 53.4219 31.1649 52.6022 32.0765L50.7978 34.0938C50.3569 34.652 50.0437 35.625 50.0437 36.4996C50.0437 37.375 50.3568 38.3476 50.7978 38.9061L52.6022 40.9233C53.4219 41.8349 53.8317 42.2908 53.8912 42.8564C53.9506 43.4221 53.6445 43.9534 53.0322 45.016L52.1684 46.5151C51.5151 47.6487 51.1885 48.2157 50.6327 48.4416C50.0769 48.6677 49.4483 48.4894 48.1913 48.1326L46.056 47.5311C45.2532 47.346 44.4111 47.4511 43.6782 47.8277L43.0888 48.168C42.4604 48.5705 41.9772 49.1637 41.7098 49.8613L41.1253 51.6069C40.741 52.7619 40.5489 53.3394 40.0914 53.6696C39.6342 54 39.0266 54 37.8114 54H35.8605C34.6454 54 34.0378 54 33.5804 53.6696C33.123 53.3394 32.9309 52.7619 32.5467 51.6069"
                stroke="#303032"
                stroke-width="2.625"
                stroke-linecap="round"
              />
              <path
                d="M20.6251 48.3593C22.5151 46.4693 28.9411 40.1063 29.5711 39.3713C30.2371 38.5943 29.6971 37.5443 30.0184 34.2893C30.1739 32.7143 30.5127 31.5343 31.4821 30.6563C32.6371 29.5643 33.5822 29.5643 36.8372 29.4908C39.6722 29.5643 40.0082 29.2493 40.3022 29.9843C40.5122 30.5093 39.8822 30.8243 39.1262 31.6643C37.4462 33.3443 36.4592 34.1843 36.3647 34.7093C35.6822 37.0193 38.3702 38.3843 39.8402 36.9143C40.396 36.3583 42.9692 33.7643 43.2212 33.5543C43.4102 33.3863 43.8626 33.3943 44.0822 33.6593C44.2712 33.845 44.2922 33.8693 44.2712 34.7093C44.2518 35.4868 44.2603 36.6031 44.2628 37.7543C44.2658 39.2458 44.1872 40.9043 43.5572 41.7443C42.2972 43.6343 40.1972 43.7393 38.3072 43.8233C36.5222 43.9283 35.0522 43.7393 34.5902 44.0753C34.2122 44.2643 32.2171 46.3643 29.8021 48.7793L25.4971 53.0843C21.9271 55.9193 18.0001 51.5093 20.6251 48.3593Z"
                stroke="#303032"
                stroke-width="2.625"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#303032] mb-3">
            Wide Coverage
          </h3>
          <p className="text-sm text-[#474649] font-medium leading-relaxed">
            Send funds to over 150 countries and hundreds of payout corridors worldwide.
          </p>
        </div>

        {/* Bank-Grade Security */}
        <div className="px-[19px] py-[21px] pb-8 border border-gray-200 rounded-3xl bg-white hover:shadow-md transition-shadow">
          <div className="mb-[36px]">
            {/* SVG Icon placeholder */}
            <svg
              width="73"
              height="73"
              viewBox="0 0 73 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="56.166" cy="37.5" r="16.5" fill="#96CB96" />
              <path
                d="M42.625 34.75C42.625 31.3673 39.8827 28.625 36.5 28.625C33.1173 28.625 30.375 31.3673 30.375 34.75C30.375 38.1327 33.1173 40.875 36.5 40.875C39.8827 40.875 42.625 38.1327 42.625 34.75Z"
                stroke="#042656"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M42.5957 35.3623C43.1592 35.5331 43.7568 35.625 44.376 35.625C47.7587 35.625 50.501 32.8827 50.501 29.5C50.501 26.1173 47.7587 23.375 44.376 23.375C41.1999 23.375 38.5884 25.7924 38.2812 28.8877"
                stroke="#042656"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M34.7197 28.8877C34.4126 25.7924 31.8011 23.375 28.625 23.375C25.2423 23.375 22.5 26.1173 22.5 29.5C22.5 32.8827 25.2423 35.625 28.625 35.625C29.2442 35.625 29.8419 35.5331 30.4052 35.3623"
                stroke="#042656"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M54 44.375C54 39.5426 49.6908 35.625 44.375 35.625"
                stroke="#042656"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M46.125 49.625C46.125 44.7926 41.8158 40.875 36.5 40.875C31.1843 40.875 26.875 44.7926 26.875 49.625"
                stroke="#042656"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28.625 35.625C23.3093 35.625 19 39.5426 19 44.375"
                stroke="#042656"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#303032] mb-3">
            Bank-Grade Security
          </h3>
          <p className="text-sm text-[#474649] font-medium leading-relaxed">
            Your transactions are protected with end-to-end encryption and strict compliance.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-12 flex justify-center items-center">
        <Link href="/register">
        <Button variant="primary">Open Your Account</Button>
        </Link>
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

export default RemittanceFeatures
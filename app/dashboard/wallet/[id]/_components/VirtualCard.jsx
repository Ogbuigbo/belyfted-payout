import React from 'react'

const VirtualCard = ({ accountData }) => {
  return (
    <div className="bg-white rounded-[15px] px-4 py-3 border border-[#D9D9D9]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-xs font-bold text-gray-900">Virtual Account Info.</h3>
        <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">i</span>
        </div>
      </div>

      {/* Account Information Grid */}
      <div className="grid grid-cols-1 gap-6">
        {/* First Row */}
        <div className="flex justify-between  gap-4">
          <div>
            <p className="text-xs text-gray-600 mb-1">Account number/IBAN</p>
            <p className="text-sm font-semibold text-[#042656]">{accountData?.accountNumber}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">Bank Name</p>
            <p className="text-sm font-semibold text-[#042656]">{accountData?.bankName}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">Bank Code</p>
            <p className="text-sm font-semibold text-[#042656]">{accountData?.bankCode}</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-600 mb-1">Account holder name</p>
            <p className="text-sm font-semibold text-[#042656]">{accountData?.accountHolder}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">Account Type</p>
            <p className="text-sm font-semibold text-[#042656]">{accountData?.accountType}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VirtualCard
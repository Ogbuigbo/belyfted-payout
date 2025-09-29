const SummaryCard = ({ title, amount, isTotal = false }) => {
    return (
      <div className="bg-white rounded-[15px] px-4 py-3 border border-[#D9D9D9]">
        <p className=" text-sm mb-2">{title}</p>
        <div className="flex items-baseline border-b border-[#D9D9D9] pb-2">
          <span className="text-sm text-[#042656] font-semibold">$</span>
          <span className={`text-[28px] font-semibold ${isTotal ? 'text-gray-900' : 'text-gray-900'}`}>
            {amount.toLocaleString()}
          </span>
          <span className="text-sm text-[#B0B0B0] font-semibold">.09</span>
        </div>
        <p className=" text-sm mb-2 mt-[10px]">Total Amount Paid Out</p>
        <div className="flex items-baseline mt-[10px]">
          <span className="text-sm text-gray-600">$</span>
          <span className={`text-[28px] font-semibold ${isTotal ? 'text-gray-900' : 'text-gray-900'}`}>
            {amount.toLocaleString()}
          </span>
          <span className="text-sm text-[#B0B0B0] font-semibold">.09</span>
        </div>
      </div>
    );
  };

export default SummaryCard;
export const TableHeader = ({
  columns,
  bgColor = "bg-[#F8F9FA]",
  textColor = "text-gray-900",
}) => {
  return (
    <thead className={bgColor}>
      <tr>
        {columns.map((column, index) => {
          const alignmentClass =
            index === 0
              ? "text-start-legacy"
              : index === columns.length - 1
                ? "text-end-legacy"
                : "text-center-legacy";
          return (
            <th
              className={`${alignmentClass} ${textColor} py-4 px-6 text-sm font-medium`}
              key={index}
            >
              {column.label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

import Skeleton from "../_skeleton/Skeleton";

export const TableBody = ({ loading, columns, data, skeletonHeight = 40 }) => {
  const paginateCount = 10;

  const loadingContent = (
    <tbody>
      <tr>
        <td colSpan={columns.length}>
          <Skeleton
            borderRadius={5}
            height={skeletonHeight}
            count={paginateCount}
          />
        </td>
      </tr>
    </tbody>
  );

  if (loading || !data) return loadingContent;
  //   if (data?.length === 0) return <EmptyResource columns={columns} />;

  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {columns.map((column, columnIndex) => (
            <td key={columnIndex}>
              {column.render ? column.render(item) : item[column.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

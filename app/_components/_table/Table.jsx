import Pagination from "../Pagination";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";

export const Table = ({
  columns,
  loading,
  showPagination = null,
  data,
  skeletonHeight = 40,
  headerBgColor,
  headerTextColor,
}) => {
  const paginateContent = <Pagination loading={loading} pagination={data} />;

  if (
    data &&
    data.hasOwnProperty("data") &&
    typeof showPagination !== "boolean"
  ) {
    showPagination = true;
  }

  return (
    <>
      <table className="table table--responsve--sm w-full ">
        <TableHeader
          columns={columns}
          bgColor={headerBgColor}
          textColor={headerTextColor}
        />
        <TableBody
          loading={loading}
          columns={columns}
          data={showPagination ? data?.data : data}
          skeletonHeight={skeletonHeight}
        />
      </table>
      {showPagination ? paginateContent : null}
    </>
  );
};

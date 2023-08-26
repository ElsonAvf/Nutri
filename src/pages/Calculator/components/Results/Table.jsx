const TableBase = ({ children, className }) => {
  return (
    <table className={`mb-5 mx-auto ${className}`}>
      {children}
    </table>
  );
};

const TableHeader = ({ header, className, colSpan }) => {
  return (
    <th className={`outline outline-1 outline-neutral-500 p-4 ${className}`} colSpan={colSpan}>
      {header}
    </th>
  );
};

const TableData = ({ data, className }) => {
  return (
    <td className={`outline outline-1 outline-neutral-500 p-4 bg-[honeydew] font-extrabold text-lg ${className}`}>{data}</td>
  );
};

export const Table = {
  Base: TableBase,
  Header: TableHeader,
  Data: TableData,
};
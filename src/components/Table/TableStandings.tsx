import React from "react";
import { TableContent, TableHeads } from "..";

interface Props {
  tableHtml: [];
}

export const TableStandings = ({ tableHtml }: Props) => {
  return (
    <table className="bg-[#18181B] rounded-xl">
      <TableHeads columns={tableHtml[0].columns} />
      <TableContent tableData={tableHtml.slice(1)} />
    </table>
  );
};

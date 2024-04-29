interface Props {
  columns: [];
}

export const TableHeads = ({ columns }: Props) => {
  return (
    <thead>
      <tr>
        {columns.map(
          (header, index) =>
            header !== "Próximo" && (
              <th className="text-gray-500 pl-10 font-bold pt-5" key={index}>
                {header}
              </th>
            )
        )}
      </tr>
    </thead>
  );
};

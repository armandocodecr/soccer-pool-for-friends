
import React from 'react'

interface Props {
    tableData: [];
}

export const TableContent = ({tableData}: Props) => {
  return (
    <tbody>
          {tableData.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="text-white py-8">{row.columns[0]}</td>
              {row.columns.slice(1).map((cell, cellIndex) => (
                <td 
                  className={`
                    text-white ${cellIndex === 1 ? "items-center gap-2 pl-5" : "pl-10"}
                  `} 
                  key={cellIndex}
                >
                  <div className="flex items-center gap-2">
                    {
                      cellIndex === 1 && (
                        <img src={row.iconUrl} alt="Team Icon" className="w-10" />
                      )
                    }
                    {tableData.length - 3 === cellIndex
                     ? (
                      <div className="flex gap-2">
                        {
                          cell.split("").map(letter => (
                            <span 
                              className={`
                                border px-2 rounded-full border-gray-500
                                ${ letter === "G" ? "text-green-700" : (letter === "P" ? "text-red-700" : "text-orange-500") }
                              `}
                            >
                              {letter}
                            </span>
                          ))
                        }
                      </div>
                     )
                     : (
                      <span>{cell}</span>
                     )
                    }
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
  )
}

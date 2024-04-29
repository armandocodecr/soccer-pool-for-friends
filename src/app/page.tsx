"use client";
import { TableStandings } from "@/components";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [tableHtml, setTableHtml] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/standings");
      const { tableData } = await res.json();
      setTableHtml(tableData);
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      {tableHtml ? (
        <>
          <section className="w-full flex justify-start gap-5 items-center">
            <Link 
              href={`/CrudComponent/fecha`}
              className="bg-[#18181B] px-4 py-3 rounded-xl text-gray-500"
            >
              Agregar fecha
            </Link>
            <Link 
              href="#"
              className="bg-[#18181B] px-4 py-3 rounded-xl text-gray-500"
            >
              Agregar usuario
            </Link>
            <Link 
              href="#"
              className="bg-[#18181B] px-4 py-3 rounded-xl text-gray-500"
            >
              Agregar equipo
            </Link>
          </section>
          <section className="w-full flex justify-start items-center">
            <TableStandings tableHtml={tableHtml} />
          </section>
        </>
      ) : (
        <p className="text-white font-bold text-3xl">Cargando...</p>
      )}
    </main>
  );
}

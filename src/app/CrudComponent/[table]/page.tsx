"use client"
import { fetchTeams } from "@/lib"
import { useEffect } from "react"


export default function Page ({
    params,
}: {
    params: { table: string }
}) {

    useEffect(() => {
      getTeam()
    }, [])
    
    
    const getTeam = async() => {
        const teams = await fetchTeams()
        console.log(teams)
    }

    return(
        <section className="w-full min-h-screen flex justify-center items-center">
            <div className="bg-[#18181B] w-auto h-auto p-5">

            </div>
        </section>
    )

}
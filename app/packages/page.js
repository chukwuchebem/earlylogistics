"use client"
import { useState,useEffect } from "react"
import { db } from "../lib/firebase.lib"
import { onSnapshot,collection,query,orderBy,limit } from "firebase/firestore";

export default function Packages () {
    const [packages,setPackages] =useState([]);

    useEffect(() => {},[])

    return (
        <section className="pt-[68px] grid grid-cols-3 gap-6 px-8">
            <article className="col-span-2 border border-gray-500 rounded-md p-6">
                <h2 className="text-3xl text-gray-800 mb-6">Recent Packages</h2>

                <div className="grid grid-cols-3 gap-6">
                    <p className="col-span-2">
                        <span className="text-md text-gray-800">Johnson Wale</span>
                        <span  className="text-md text-gray-600">Create</span>
                        <span className="text-md text-gray-800">  Used Dell Laptop with External Mouse</span>
                    </p>

                    <blockquote className="grid grid-cols-2 gap-4 border-gray-400 p-4 rounded-md">
                        <p className="flex flex-col gap-2 p-4 bg-gray-400 rounded-md">
                            <span className="text-gray-800 text-md">Origin</span>
                            <span className="text-gray-800 text-xl uppercase">ABUJA</span>
                        </p>
                        <p className="flex flex-col gap-2 p-4 bg-gray-400 rounded-md">
                            <span className="text-gray-800 text-md ">Destination</span>
                            <span className="text-gray-800 text-xl uppercase">ASABA</span>
                        </p>
                    </blockquote>
                </div>
            </article>

            <aside className="bg-gray-800 rounded-md">

            </aside>
        </section>
    )
}
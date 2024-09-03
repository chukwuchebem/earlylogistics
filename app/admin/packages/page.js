"use client"
import { useState,useEffect } from "react"
import { db } from "../lib/firebase.lib"
import { onSnapshot,collection,query,orderBy,limit } from "firebase/firestore";
import { AdminPackageCard } from "@/components/AdminPackageCard";

export default function Packages () {
    const [packages,setPackages] =useState([]);

    console.log("+++++++++",packages)

    useEffect(() => {
        onSnapshot(collection(db,"packages"),onSnap => {
            const retrievedDocs = [];

            onSnap.forEach(doc => {
                retrievedDocs.push({
                    id: doc.id,
                    data: doc.data()
                })
            })
        })
    },[])

    return (
        <section className="pt-[68px] grid grid-cols-3 gap-6 px-8">
            {packages}
            <aside className="bg-gray-800 rounded-md">

            </aside>
        </section>
    )
}
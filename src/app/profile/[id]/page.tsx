"use client";


export default function UserProfile({ params }: any) {

    return <h1 className="text-black bg-white px-2 text-2xl">{params.id}</h1>
}
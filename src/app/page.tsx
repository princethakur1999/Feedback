import Link from "next/link";

export default function Home() {

  return (

    <div className="flex flex-col items-center justify-center min-h-screen">

      <h1 className="text-3xl font-bold text-gray-800 mb-8">Syllabus Feedback</h1>

      <div className="flex flex-col items-center space-y-4">


        <Link href="/syllabus" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out">
          Give Feedback
        </Link>


        <Link href="/profile" className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out">
          Go to Profile
        </Link>



      </div>

    </div>
  );
}

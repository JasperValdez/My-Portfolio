import { useParams, Link } from "react-router-dom";

export default function ReviewDetails() {
  const { id } = useParams();
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const review = reviews.find((r) => r.id === Number(id));

  if (!review) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zinc-950">
        <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-3xl p-12 shadow-xl text-center max-w-md">
          <h2 className="text-2xl font-bold text-white mb-6">Review Not Found</h2>
          <Link
            to="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-2xl transition duration-200 shadow"
          >
            Back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center py-16 min-h-screen bg-zinc-950 px-4">
      <div className="w-full max-w-lg bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-3xl shadow-xl p-10 space-y-6">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Review Details</h2>


        <div className="bg-zinc-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <p className="text-zinc-300 text-lg">{review.comment}</p>
        </div>

        {/* Back button */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-2xl transition duration-200 shadow"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

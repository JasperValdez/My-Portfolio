import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ReviewDetails() {
  const { id } = useParams();
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const review = reviews.find((r) => r.id === Number(id));

  if (!review) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zinc-950 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-3xl p-12 shadow-xl text-center max-w-md"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Review Not Found</h2>
          <Link
            to="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-2xl transition duration-200 shadow"
          >
            Back
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex justify-center py-20 min-h-screen bg-zinc-950 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg relative bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl shadow-2xl p-8 sm:p-10 space-y-6"
      >
   
        <div className="absolute -inset-0.5 bg-indigo-500/10 blur-2xl rounded-3xl -z-10" />

        <h2 className="text-3xl font-bold text-white text-center mb-6">Review Details</h2>

        {/* Review card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-zinc-800/90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <p className="text-zinc-300 text-lg text-center break-words">{review.comment}</p>
        </motion.div>

        {/* Back button */}
        <div className="text-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-2xl transition duration-200 shadow"
            >
              Back
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

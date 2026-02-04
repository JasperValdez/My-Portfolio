import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Load reviews from LocalStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(saved);
  }, []);

  // Submit review
  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      comment: comment.trim(),
    };

    if (!newReview.comment) return;

    // Update state and localStorage
    setReviews((prev) => {
      const updated = [newReview, ...prev];
      localStorage.setItem("reviews", JSON.stringify(updated));
      return updated;
    });

    setComment("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <section className="relative flex justify-center px-4 py-24 bg-zinc-950 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-6xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-3xl shadow-2xl p-8 sm:p-12"
      >
 
        <div className="absolute -inset-0.5 bg-indigo-500/10 blur-2xl rounded-3xl -z-10" />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-14"
        >
          Contact & Reviews
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Reviews Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Leave a Comment
            </h3>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                className="w-full bg-zinc-800/80 border border-zinc-700 rounded-2xl p-4 h-32
                           text-white placeholder-zinc-500 focus:outline-none
                           focus:ring-2 focus:ring-indigo-600 transition"
                placeholder="Write your comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white
                           font-semibold py-3 rounded-2xl shadow-md transition"
              >
                Submit
              </motion.button>

              {/* Success feedback */}
              <AnimatePresence>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-emerald-400 text-center"
                  >
                    Comment submitted successfully!
                  </motion.p>
                )}
              </AnimatePresence>
            </form>

            {/* Review List */}
            <motion.div className="mt-10 space-y-3">
              <AnimatePresence>
                {reviews.length === 0 && (
                  <motion.p
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-zinc-400 text-sm text-center"
                  >
                    No comments yet. Be the first!
                  </motion.p>
                )}

                {reviews.map((r) => (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <Link
                      to={`/reviews/${r.id}`}
                      className="flex items-start gap-3 bg-zinc-800/80 border border-zinc-700
                                 rounded-2xl p-4 hover:bg-zinc-700/70 transition shadow-sm"
                    >
                      {/* Icon */}
                      <div className="text-indigo-500 mt-1">👤</div>
                      <p className="text-sm text-zinc-300 break-words">
                        {r.comment}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              My Details
            </h3>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-800/80 border border-zinc-700 rounded-2xl
                         p-6 space-y-4 text-zinc-300 shadow-md"
            >
              <p>
                <span className="font-semibold text-white">📞 Phone:</span>{" "}
                +63 991 393 8315
              </p>

              <p>
                <span className="font-semibold text-white">✉ Email:</span>{" "}
                jaspervaldez6@gmail.com
              </p>

              <p>
                <span className="font-semibold text-white">🌐 GitHub:</span>{" "}
                <a
                  href="https://github.com/JasperValdez"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 underline transition"
                >
                  github.com/JasperValdez
                </a>
              </p>
            </motion.div>

            <p className="text-sm text-zinc-400 mt-4">
              Feel free to reach out anytime — I’d love to connect!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

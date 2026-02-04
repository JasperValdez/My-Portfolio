import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

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
      comment,
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);

    localStorage.setItem("reviews", JSON.stringify(updated));
    setComment("");
  };

  return (
    <section className="flex justify-center py-16 px-4">
      <div className="w-full max-w-5xl bg-zinc-900/70 backdrop-blur border border-zinc-800 rounded-3xl shadow-xl p-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Contact & Reviews
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Reviews / Comments
            </h3>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 h-28 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-200"
                placeholder="Write your comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />

              <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg">
                Submit
              </button>
            </form>

            {/* Review List */}
            <div className="mt-8 space-y-3">
              {reviews.length === 0 && (
                <p className="text-zinc-400 text-sm text-center">
                  No comments yet. Be the first!
                </p>
              )}

              {reviews.map((r) => (
                <Link
                  key={r.id}
                  to={`/reviews/${r.id}`}
                  className="flex items-start gap-3 bg-zinc-800 border border-zinc-700 rounded-2xl p-4 hover:bg-zinc-700 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {/* Person Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-500 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
                    />
                  </svg>

                  <p className="text-sm text-zinc-300 break-words">{r.comment}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">My Details</h3>

            <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 space-y-4 text-zinc-300 shadow-sm">
              <p>
                <span className="font-bold text-white">📞 Phone:</span> +63 991
                393 8315
              </p>

              <p>
                <span className="font-bold text-white">✉ Email:</span>{" "}
                jaspervaldez6@gmail.com
              </p>

              <p>
                <span className="font-bold text-white">🌐 GitHub:</span>{" "}
                <a
                  href="https://github.com/JasperValdez"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-500 hover:text-indigo-400 underline transition-colors duration-200"
                >
                  github.com/JasperValdez
                </a>
              </p>
            </div>

            <p className="text-sm text-zinc-400 mt-4">
              Feel free to message me anytime!
            </p>
          </div>    
        </div>
      </div>
    </section>
  );
}

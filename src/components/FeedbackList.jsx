import { useState } from 'react';

const FeedbackList = ({ feedbacks, onEdit, onDelete }) => {
  const [filter, setFilter] = useState('all');
  const [deleteModal, setDeleteModal] = useState({ show: false, id: null });

  // Filter feedbacks based on rating
  const filteredFeedbacks = feedbacks.filter((feedback) => {
    if (filter === 'all') return true;
    return feedback.rating === parseInt(filter);
  });

  // Handle delete confirmation
  const handleDeleteClick = (id) => {
    setDeleteModal({ show: true, id });
  };

  const confirmDelete = () => {
    onDelete(deleteModal.id);
    setDeleteModal({ show: false, id: null });
  };

  const cancelDelete = () => {
    setDeleteModal({ show: false, id: null });
  };

  // Render star rating
  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5 md:gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-base md:text-xl">
            {star <= rating ? (
              <span className="text-yellow-400">⭐</span>
            ) : (
              <span className="text-gray-300">⭐</span>
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Section Title */}
      <div className="mb-4 md:mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
          📋 All Feedbacks
        </h2>
      </div>

      {/* Filter Badges */}
      <div className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-4 md:p-6 mb-4 md:mb-6 border border-purple-100">
        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">🔍 Filter by Rating</h3>
        <div className="flex flex-wrap gap-2 md:gap-3">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 md:px-6 py-1.5 md:py-2 text-xs md:text-base rounded-full font-semibold transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All ({feedbacks.length})
          </button>
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => setFilter(rating.toString())}
              className={`px-3 md:px-6 py-1.5 md:py-2 text-xs md:text-base rounded-full font-semibold transition-all flex items-center gap-1 md:gap-2 ${
                filter === rating.toString()
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <span>{rating} ⭐</span>
              <span className="text-xs md:text-sm">
                ({feedbacks.filter((f) => f.rating === rating).length})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Feedback Cards */}
      <div className="space-y-3 md:space-y-4">
        {filteredFeedbacks.length === 0 ? (
          <div className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-8 md:p-12 text-center border border-purple-100">
            <div className="text-4xl md:text-6xl mb-3 md:mb-4">📭</div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-1 md:mb-2">
              No Feedbacks Yet
            </h3>
            <p className="text-sm md:text-base text-gray-500">
              {filter === 'all'
                ? 'Be the first to submit your feedback!'
                : `No ${filter}-star feedbacks found.`}
            </p>
          </div>
        ) : (
          filteredFeedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-lg md:hover:shadow-xl transition-shadow p-4 md:p-6 border border-gray-200"
            >
              <div className="flex flex-col gap-3 md:gap-4">
                {/* Header Section - Student Info */}
                <div className="flex items-start justify-between gap-3">
                  {/* Left - Student Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base md:text-lg font-bold text-gray-800 truncate">
                      {feedback.name}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 truncate">{feedback.course}</p>
                  </div>

                  {/* Right - Action Buttons (Desktop) */}
                  <div className="hidden sm:flex gap-2">
                    <button
                      onClick={() => onEdit(feedback)}
                      className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-1"
                    >
                      ✏️ <span className="hidden md:inline">Edit</span>
                    </button>
                    <button
                      onClick={() => handleDeleteClick(feedback.id)}
                      className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all flex items-center justify-center gap-1"
                    >
                      🗑️ <span className="hidden md:inline">Delete</span>
                    </button>
                  </div>
                </div>

                {/* Rating */}
                <div>{renderStars(feedback.rating)}</div>

                {/* Response */}
                {feedback.response && (
                  <p className="text-sm md:text-base text-gray-700 italic bg-gray-50 p-2.5 md:p-3 rounded-lg break-words">
                    "{feedback.response}"
                  </p>
                )}

                {/* Action Buttons (Mobile) */}
                <div className="flex sm:hidden gap-2">
                  <button
                    onClick={() => onEdit(feedback)}
                    className="flex-1 px-4 py-2 text-sm bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-1"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(feedback.id)}
                    className="flex-1 px-4 py-2 text-sm bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all flex items-center justify-center gap-1"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModal.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full animate-scale-in">
            <div className="text-center mb-4 md:mb-6">
              <div className="text-5xl md:text-6xl mb-3 md:mb-4">⚠️</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 md:mb-2">
                Are you sure?
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                This action cannot be undone. The feedback will be permanently deleted.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button
                onClick={confirmDelete}
                className="flex-1 bg-red-500 text-white py-2.5 md:py-3 rounded-lg font-semibold hover:bg-red-600 transition-all text-sm md:text-base"
              >
                Yes, Delete
              </button>
              <button
                onClick={cancelDelete}
                className="flex-1 bg-gray-200 text-gray-700 py-2.5 md:py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all text-sm md:text-base"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackList;

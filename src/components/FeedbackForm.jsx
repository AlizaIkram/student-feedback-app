import { useState, useEffect } from 'react';

const FeedbackForm = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    course: '',
    studentId: '',
    semester: '',
    rating: 0,
    response: '',
  });

  // Populate form if editing
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingClick = (rating) => {
    setFormData({
      ...formData,
      rating,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.course || !formData.rating) {
      alert('Please fill in all required fields and provide a rating');
      return;
    }

    onSubmit(formData);

    // Reset form if adding new feedback
    if (!initialData) {
      setFormData({
        name: '',
        email: '',
        department: '',
        course: '',
        studentId: '',
        semester: '',
        rating: 0,
        response: '',
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto mb-6 md:mb-8 lg:mb-10">
      <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 sm:p-6 md:p-8 border border-purple-100">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
          {initialData ? '✏️ Edit Feedback' : '📝 Submit Your Feedback'}
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Two Column Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            {/* Name */}
            <div>
              <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                Department
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                placeholder="e.g., Computer Science"
              />
            </div>

            {/* Course */}
            <div>
              <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                Course <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                placeholder="e.g., React.js Development"
                required
              />
            </div>

            {/* Student ID */}
            <div>
              <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                Student ID
              </label>
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                placeholder="e.g., 2024-CS-001"
              />
            </div>

            {/* Semester */}
            <div>
              <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                Semester
              </label>
              <input
                type="text"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                placeholder="e.g., Spring 2024"
              />
            </div>
          </div>

          {/* Rating Section */}
          <div className="mb-4 md:mb-6">
            <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">
              Overall Rating <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap items-center gap-1 md:gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  className="text-3xl md:text-4xl focus:outline-none"
                >
                  {star <= formData.rating ? (
                    <span className="text-yellow-400">⭐</span>
                  ) : (
                    <span className="text-gray-300">⭐</span>
                  )}
                </button>
              ))}
              <span className="ml-2 md:ml-3 text-base md:text-lg font-semibold text-gray-700 self-center">
                {formData.rating > 0 ? `${formData.rating}/5` : 'Select rating'}
              </span>
            </div>
          </div>

          {/* Response/Comment */}
          <div className="mb-4 md:mb-6">
            <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
              Your Feedback
            </label>
            <textarea
              name="response"
              value={formData.response}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none"
              placeholder="Share your detailed feedback here..."
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2.5 md:py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              {initialData ? '💾 Update Feedback' : '📤 Submit Feedback'}
            </button>
            {initialData && (
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 sm:flex-none sm:px-8 bg-gray-200 text-gray-700 py-2.5 md:py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all text-sm md:text-base"
              >
                ❌ Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;

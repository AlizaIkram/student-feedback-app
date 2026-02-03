import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editingFeedback, setEditingFeedback] = useState(null);

  // Add new feedback
  const addFeedback = (feedback) => {
    const newFeedback = {
      ...feedback,
      id: Date.now(),
    };
    setFeedbacks([...feedbacks, newFeedback]);
  };

  // Update existing feedback
  const updateFeedback = (updatedFeedback) => {
    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === updatedFeedback.id ? updatedFeedback : feedback
      )
    );
    setEditingFeedback(null);
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
  };

  // Handle edit button click
  const handleEdit = (feedback) => {
    setEditingFeedback(feedback);
  };

  // Handle cancel from form
  const handleCancel = () => {
    setEditingFeedback(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-4 py-6 md:py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
            Student Feedback System
          </h1>
          <p className="text-sm md:text-base text-gray-600">Share your valuable feedback with us</p>
        </div>

        {/* Feedback Form */}
        <FeedbackForm
          onSubmit={editingFeedback ? updateFeedback : addFeedback}
          onCancel={handleCancel}
          initialData={editingFeedback}
        />

        {/* Feedback List */}
        <div id="feedback-list">
          <FeedbackList
            feedbacks={feedbacks}
            onEdit={handleEdit}
            onDelete={deleteFeedback}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

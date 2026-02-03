# 🚀 Quick Setup Guide - Vite Edition

## Step 1: Navigate to Project
```bash
cd student-feedback-app
```

## Step 2: Install Dependencies
```bash
npm install
```
This will install:
- React & React-DOM
- Vite (super fast dev server ⚡)
- Tailwind CSS
- PostCSS & Autoprefixer
- Vite React Plugin

## Step 3: Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (Vite's default port)

---

## 🎯 Vite Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

---

## ⚡ Why Vite?

- **Lightning Fast** - Instant server start
- **Hot Module Replacement (HMR)** - Updates without full page reload
- **Optimized Build** - Better performance than CRA
- **Modern** - Uses ES modules natively
- **Smaller Bundle Size** - Tree-shaking out of the box

---

## 📋 Assignment Checklist

✅ **Form Features:**
- [x] Two-column layout
- [x] Student fields: name, email, department, course, student ID, semester
- [x] Star rating system (1-5 stars)
- [x] Response/feedback text area
- [x] Form validation

✅ **List Features:**
- [x] Display all feedbacks in cards
- [x] Compact view: name, course, rating, response
- [x] Edit button (pre-fills form)
- [x] Delete button (opens modal)
- [x] Filter badges (All, 5★, 4★, 3★, 2★, 1★)

✅ **UI/UX:**
- [x] Modern purple/blue gradient theme
- [x] Tailwind CSS styling
- [x] Responsive design
- [x] Smooth animations
- [x] Delete confirmation modal (center popup)

✅ **Technical:**
- [x] useState for state management
- [x] Single page application
- [x] In-memory data storage
- [x] Proper component structure
- [x] Built with Vite ⚡

---

## 🎯 How It Works

### State Management (App.jsx)
- `feedbacks` - Array of all feedback objects
- `editingFeedback` - Currently editing feedback (null if adding new)
- `showForm` - Toggle between form and list view

### Data Flow
1. **Add:** Form → App (addFeedback) → feedbacks array → List
2. **Edit:** List (Edit button) → App (handleEdit) → Form (pre-filled)
3. **Update:** Form → App (updateFeedback) → feedbacks array → List
4. **Delete:** List (Delete button) → Modal → App (deleteFeedback) → feedbacks array
5. **Filter:** List (Filter badges) → Filtered display

---

## 📱 Testing Scenarios

1. **Add new feedback** - Fill form and submit
2. **View all feedbacks** - Check list display
3. **Filter by rating** - Click 5★, 4★, etc.
4. **Edit feedback** - Click edit, modify, update
5. **Delete feedback** - Click delete, confirm modal
6. **Form validation** - Try submitting without required fields
7. **Responsive design** - Resize browser window

---

## 💡 Code Highlights for Your Assignment

### Form Handling Concepts:
```javascript
// Controlled components
const [formData, setFormData] = useState({...});

// Handle input change
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

// Form submission
const handleSubmit = (e) => {
  e.preventDefault();
  // validation & submission logic
};
```

### Array Operations:
```javascript
// Add: [...array, newItem]
// Update: array.map(item => item.id === id ? updated : item)
// Delete: array.filter(item => item.id !== id)
// Filter: array.filter(item => item.rating === selectedRating)
```

---

## 🎓 What You'll Learn

1. **Form Handling:** Controlled components, validation
2. **State Management:** useState, lifting state up
3. **Props:** Passing data between components
4. **Events:** onClick, onChange, onSubmit
5. **Conditional Rendering:** Show/hide components
6. **Array Methods:** map, filter
7. **Tailwind CSS:** Utility-first styling
8. **Component Architecture:** Separation of concerns
9. **Vite:** Modern build tool and dev experience

---

## 📂 Project Structure (Vite)

```
student-feedback-app/
├── index.html              # HTML entry (in root for Vite!)
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.jsx            # Entry point (Vite uses .jsx)
│   ├── App.jsx
│   ├── index.css
│   └── components/
│       ├── FeedbackForm.jsx
│       └── FeedbackList.jsx
├── package.json
└── tailwind.config.js
```

---

**Good luck with your assignment! 🌟⚡**

# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my skills, projects, and professional experience.

![Portfolio Screenshot](./public/portfolio-screenshot.png)

## 🚀 Features

- **Responsive Design**: Looks great on all devices
- **Modern UI/UX**: Clean and professional interface
- **Interactive Elements**: Smooth animations and transitions
- **Contact Form**: Integrated with EmailJS for direct communication
- **Project Showcase**: Detailed project portfolio with filtering options
- **Testimonials**: Client feedback section with auto-sliding carousel

## 🛠️ Technologies Used

- ⚛️ React 19
- 🚀 Vite
- 🎨 CSS3 (with CSS Modules)
- ✨ React Icons
- 📧 EmailJS (for contact form)
- 🔄 Swiper.js (for testimonials carousel)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_USER_ID=your_user_id
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 📂 Project Structure

```
src/
├── components/        # Reusable components
├── assets/           # Images, icons, and other static files
├── App.jsx           # Main application component
└── main.jsx          # Application entry point
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Icons](https://react-icons.github.io/react-icons/)
- [EmailJS](https://www.emailjs.com/)
- [Swiper](https://swiperjs.com/)
- [Vite](https://vitejs.dev/)

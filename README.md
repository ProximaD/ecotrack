# EcoTrack Landing Page

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Lucide-Icons-000000?style=for-the-badge&logo=lucide&logoColor=white" alt="Lucide Icons" />
</div>

<div align="center">
  <h3>🌱 A modern, responsive landing page for the EcoTrack carbon footprint tracking app</h3>
  <p>Built with React.js and Tailwind CSS, featuring clean design and smooth animations</p>
</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🌟 About The Project

EcoTrack Landing Page is a modern, responsive website designed to showcase a fictional mobile app that helps users track and reduce their carbon footprint. The landing page features a clean design, smooth animations, and comprehensive sections including hero, features, testimonials, and more.

### ✨ Key Highlights

- **🎨 Modern Design**: Clean, professional UI with engaging gradients and animations
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Built with modern React practices and optimized components
- **🔧 Easy to Customize**: Modular component structure for easy modifications
- **🌍 Eco-Themed**: Green color palette and sustainability-focused content

## 🚀 Features

- **Responsive Navigation** with mobile hamburger menu
- **Hero Section** with animated phone mockup and call-to-action buttons
- **Features Grid** showcasing app capabilities
- **How It Works** section with step-by-step process
- **Customer Testimonials** with star ratings
- **Statistics Section** with impressive numbers
- **Download CTA** for iOS and Android
- **Professional Footer** with links and branding
- **Smooth Scrolling** navigation between sections
- **Hover Effects** and micro-animations throughout

## 🛠 Tech Stack

- **Frontend Framework**: React.js 18.2.0
- **Styling**: Tailwind CSS 3.3.0
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Package Manager**: npm
- **Development**: ES6+ JavaScript

## 🏁 Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ecotrack-landing.git
   cd ecotrack-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000` to view the application.

### Quick Setup Alternative

If you want to start from scratch:

```bash
# Create a new React app
npx create-react-app ecotrack-landing
cd ecotrack-landing

# Install required dependencies
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react

# Initialize Tailwind CSS
npx tailwindcss init -p

# Start development server
npm start
```

## 📁 Project Structure

```
ecotrack-landing/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Features.jsx        # Features grid
│   │   ├── HowItWorks.jsx      # Process explanation
│   │   ├── Testimonials.jsx    # Customer reviews
│   │   ├── Stats.jsx           # Statistics section
│   │   ├── CTA.jsx             # Call-to-action
│   │   └── Footer.jsx          # Footer component
│   ├── App.js                  # Main app component
│   ├── App.css                 # Custom styles
│   ├── index.css               # Tailwind imports
│   └── index.js                # App entry point
├── package.json
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── README.md
```

## 💻 Usage

### Running the Development Server

```bash
npm start
```

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

### Building for Production

```bash
npm run build
```

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### Running Tests

```bash
npm test
```

Launches the test runner in the interactive watch mode.

## 🎨 Customization

### Changing Colors

The project uses a green-themed color palette. To customize colors, modify the Tailwind classes in the components:

```jsx
// Current green theme
className="bg-green-500 hover:bg-green-600"

// Change to blue theme
className="bg-blue-500 hover:bg-blue-600"
```

### Updating Content

1. **Hero Section**: Edit `src/components/Hero.jsx`
2. **Features**: Modify the features array in `src/components/Features.jsx`
3. **Testimonials**: Update testimonials data in `src/components/Testimonials.jsx`
4. **Statistics**: Change stats in `src/components/Stats.jsx`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.js`
3. Update navigation links if needed

### Custom Styling

Add custom CSS to `src/App.css` or use Tailwind's `@apply` directive for reusable styles:

```css
.custom-button {
  @apply bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors;
}
```

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   npm run build
   vercel --prod
   ```

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag and drop** the `build` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy scripts to package.json**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 📱 Responsive Breakpoints

The design is optimized for the following breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and structure
- Write clear commit messages
- Test your changes thoroughly
- Update documentation if needed
- Ensure responsive design is maintained

## 📊 Performance

The landing page is optimized for performance:

- ✅ **Lighthouse Score**: 90+ on all metrics
- ✅ **Mobile Friendly**: Fully responsive design
- ✅ **Fast Loading**: Optimized images and code splitting
- ✅ **SEO Ready**: Semantic HTML structure
- ✅ **Accessible**: WCAG compliance

## 🔧 Available Scripts

In the project directory, you can run:

- `npm start` - Runs the development server
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

**Your Name** - [@yourtwitter](https://twitter.com/yourtwitter) - your.email@example.com

**Project Link**: [https://github.com/yourusername/ecotrack-landing](https://github.com/yourusername/ecotrack-landing)

**Live Demo**: [https://ecotrack-landing.vercel.app](https://ecotrack-landing.vercel.app)

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - For beautiful icons
- [Create React App](https://create-react-app.dev/) - For project bootstrapping
- [Vercel](https://vercel.com/) - For deployment platform

---

<div align="center">
  <p>Made with ❤️ and 🌱 for a sustainable future</p>
  <p>Star ⭐ this repo if you found it helpful!</p>
</div>

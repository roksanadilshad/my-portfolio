# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- 🏠 **Home Page**: Hero banner with introduction and CTA buttons
- 👤 **About Page**: Personal bio and profile information
- 💼 **Skills Page**: Interactive skill bars showcasing technical abilities
- 🚀 **Projects Page**: Responsive grid of project cards with live demos and GitHub links
- 📧 **Contact Page**: Contact form with validation and EmailJS integration
- 📱 **Fully Responsive**: Works seamlessly on all devices
- 🎨 **Modern UI**: Clean design with Tailwind CSS utilities

## Tech Stack

- React 18
- React Router DOM
- Tailwind CSS
- React Hook Form
- EmailJS
- Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Configuration

### EmailJS Setup

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and User ID
5. Update `src/pages/Contact.jsx` with your credentials:

```javascript
const serviceId = 'YOUR_SERVICE_ID'
const templateId = 'YOUR_TEMPLATE_ID'
const userId = 'YOUR_USER_ID'
```

### Adding Projects

Edit `src/data/projects.js` to add your projects:

```javascript
export const projectsData = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    image: '/projects/image.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/username/repo',
  },
]
```

### Customization

- Update personal information in `src/pages/Home.jsx`
- Modify bio and stats in `src/pages/About.jsx`
- Adjust skills in `src/pages/Skills.jsx`
- Update contact information in `src/pages/Contact.jsx`
- Add your CV file to `public/cv.pdf`

## Building for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

## Deployment to Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com)

3. Click "New Project"

4. Import your GitHub repository

5. Configure project:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

6. Click "Deploy"

### Method 3: Using Git Integration

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Connect your GitHub repository to Vercel

3. Vercel will automatically deploy on every push to main branch

## Project Structure

```
portfolio-website/
├── public/
│   └── cv.pdf              # Your CV file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar
│   │   └── Footer.jsx      # Footer component
│   ├── pages/
│   │   ├── Home.jsx        # Home page
│   │   ├── About.jsx       # About page
│   │   ├── Skills.jsx      # Skills page
│   │   ├── Projects.jsx    # Projects page
│   │   └── Contact.jsx     # Contact page
│   ├── data/
│   │   └── projects.js     # Projects data
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## License

MIT License - feel free to use this template for your own portfolio!

## Support

For issues or questions, please open an issue on GitHub.

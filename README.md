<<<<<<< HEAD
# J. M. Jamal - Portfolio Website

A modern, responsive portfolio website showcasing both backend development and UI/UX design skills.

## 🌟 Features

- **Dual-skill showcase**: Both Node.js development and UI/UX design
- **Dark/Light theme toggle** with system preference detection
- **Smooth animations** and scroll reveals
- **Glassmorphism design** with modern aesthetics
- **Fully responsive** (mobile, tablet, desktop)
- **Project filtering** (All, Backend, UI/UX)
- **Contact form** with validation
- **Typing effect** animation
- **Smooth scrolling** navigation
- **Performance optimized**
- **Easter egg** (try the Konami code!)

## 🚀 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks, pure JS
- **Font Awesome** - Icons
- **Google Fonts** - Inter typography

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styles and themes
├── script.js           # JavaScript functionality
├── assets/             # Images, resume, documents
│   └── JM_Jamal_Resume.pdf
└── README.md           # This file
```

## 🛠️ Setup Instructions

1. **Clone or download** the portfolio files
2. **Add your content**:
   - Replace placeholder photo in About section
   - Update project images and links
   - Add your actual resume PDF to `/assets/`
   - Update contact information
3. **Open `index.html`** in a web browser
4. **Optional**: Deploy to GitHub Pages, Netlify, or Vercel

## ✏️ Customization Guide

### 1. Personal Information

**Update these sections in `index.html`:**

- **Contact Info** (line ~350):
  ```html
  <div class="contact-method">
      <i class="fas fa-envelope"></i>
      <span>your-email@example.com</span>
  </div>
  ```

- **Social Links** (line ~360):
  ```html
  <a href="https://github.com/YourUsername" target="_blank">
  <a href="https://linkedin.com/in/your-profile" target="_blank">
  ```

### 2. Projects Section

**Add your real projects** (line ~150):

```html
<!-- Backend Project Example -->
<div class="project-card" data-category="backend">
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Your project description...</p>
        <div class="project-links">
            <a href="https://github.com/YourUsername/project-repo" target="_blank">
                <i class="fab fa-github"></i> Code
            </a>
        </div>
    </div>
</div>
```

**For UI/UX projects**, change `data-category="uiux"` and use:
```html
<a href="https://www.figma.com/your-design-link" target="_blank">
    <i class="fas fa-paint-brush"></i> Figma
</a>
```

### 3. Skills & Experience

**Update skill percentages** in the `data-width` attributes:
```html
<div class="skill-progress" data-width="95%"></div>
```

**Update timeline** in Resume section with your experience.

### 4. Images

- **Profile photo**: Replace `.photo-placeholder` with an `<img>` tag
- **Project images**: Replace `.image-placeholder` divs with actual project screenshots
- **Resume PDF**: Add your resume file to `/assets/JM_Jamal_Resume.pdf`

### 5. Colors & Theme

**Customize colors in `styles.css` (line 7-32):**

```css
:root {
  --accent-primary: #666ee8;    /* Your brand color */
  --accent-secondary: #8f00ff;  /* Secondary accent */
  --accent-tertiary: #00ffe0;   /* Highlight color */
}
```

### 6. Fonts

Current font: **Inter**. To change, update the Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap">
```

And update CSS:
```css
font-family: 'YourFont', sans-serif;
```

## 🌐 Deployment

### GitHub Pages
1. Create a new repository named `portfolio` or `your-username.github.io`
2. Push the files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://your-username.github.io/portfolio/`

### Netlify
1. Drag and drop the portfolio folder to [Netlify](https://netlify.com)
2. Your site will be deployed instantly

### Vercel
1. Import the project to [Vercel](https://vercel.com)
2. Deploy with one click

## 📧 Contact Form Setup

The contact form currently shows a demo. To make it functional:

1. **Use a form service** like:
   - [Formspree](https://formspree.io/)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - [EmailJS](https://www.emailjs.com/)

2. **Update the form action** in `index.html`:
   ```html
   <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
   ```

## 🎨 Additional Customizations

### Add More Sections
- **Testimonials**
- **Blog posts**
- **Certifications**
- **Awards**

### Animations
- Modify scroll reveal animations in `script.js`
- Add more particle effects
- Customize typing speed

### SEO Optimization
- Add meta descriptions
- Include Open Graph tags
- Add structured data

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- **768px** - Tablet
- **480px** - Mobile

All layouts automatically adjust for optimal viewing on any device.

## 🐛 Troubleshooting

**Common issues:**

1. **Animations not working**: Check if JavaScript is enabled
2. **Icons not showing**: Verify Font Awesome CDN link
3. **Fonts not loading**: Check Google Fonts connection
4. **Theme toggle not working**: Clear browser cache

## 📄 License

This portfolio template is free to use for personal and commercial projects. Attribution appreciated but not required.

## 👨‍💻 Developer

**J. M. Jamal**
- Node.js Developer & UI/UX Designer
- GitHub: [@Jamaludheen2426](https://github.com/Jamaludheen2426)

---

**Made with ❤️ using HTML, CSS, and Vanilla JavaScript**

*Last updated: January 2024*
=======
# PortFolio
>>>>>>> 10d7f15a67065d4b0b60c911e571e97a2feca247

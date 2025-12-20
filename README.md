# Portfolio Website - PhucReigns

Một portfolio website hiện đại và responsive được thiết kế để showcase các dự án và kỹ năng của tôi.

## ✨ Tính năng

- **Responsive Design**: Tối ưu cho mọi thiết bị (Desktop, Tablet, Mobile)
- **Modern UI/UX**: Thiết kế hiện đại với gradient backgrounds và smooth animations
- **Smooth Scrolling**: Navigation mượt mà giữa các sections
- **Interactive Elements**: 
  - Animated skill progress bars
  - Hover effects trên project cards
  - Scroll progress indicator
  - Parallax effects
- **Performance Optimized**: 
  - Lazy loading images
  - Optimized animations
  - Efficient CSS

## 🛠️ Công nghệ sử dụng

- **HTML5**: Semantic markup
- **CSS3**: 
  - CSS Variables
  - Flexbox & Grid
  - Animations & Transitions
  - Backdrop filters
- **JavaScript (Vanilla)**: 
  - Intersection Observer API
  - Smooth scrolling
  - Dynamic animations

## 📁 Cấu trúc dự án

```
dev.github.io-main/
├── index.html          # Trang chính
├── styles.css          # Styles chính
├── script.js           # JavaScript functionality
├── image/              # Thư mục chứa images
│   ├── avatar.png
│   ├── ecom.png
│   └── hr.png
└── Portfolio/          # Portfolio version 2 (alternative)
    ├── index.html
    ├── script.js
    └── assets/
        └── style.css
```

## 🚀 Cách sử dụng

1. Clone repository hoặc download files
2. Mở `index.html` trong browser
3. Hoặc sử dụng local server:
   ```bash
   # Sử dụng Python
   python -m http.server 8000
   
   # Sử dụng Node.js (http-server)
   npx http-server
   ```
4. Truy cập `http://localhost:8000`

## 📱 Sections

1. **Hero Section**: Giới thiệu với avatar và social links
2. **About Section**: Thông tin về bản thân
3. **Skills Section**: Kỹ năng với progress bars
4. **Projects Section**: Showcase các dự án
5. **Contact Section**: Thông tin liên hệ

## 🎨 Customization

### Thay đổi màu sắc

Chỉnh sửa CSS variables trong `styles.css`:

```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #60a5fa;
    --text-primary: #e0f2fe;
    /* ... */
}
```

### Thêm projects

Thêm project cards trong section `#projects`:

```html
<div class="project-card">
    <div class="project-image">
        <img src="path/to/image.png" alt="Project Name">
        <div class="project-overlay">
            <a href="project-url" class="project-link">View Project</a>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Description...</p>
        <div class="project-tags">
            <span class="tag">Tech</span>
        </div>
    </div>
</div>
```

## 📝 License

Personal portfolio project - Feel free to use as inspiration for your own portfolio!

## 👤 Author

**PhucReigns**
- GitHub: [@phucreigns](https://github.com/phucreigns)
- LinkedIn: [Nguyen Xuan Phuc](https://www.linkedin.com/in/nguyenxuanphuc07/)

---

Built with ❤️ using modern web technologies

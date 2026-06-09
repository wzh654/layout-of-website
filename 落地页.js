// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 表单提交处理
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('表单提交成功！我们会尽快与您联系。');
    this.reset();
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});
document.querySelectorAll('.app-slider').forEach(slider => {
    const track = slider.querySelector('.app-slider-track');
    const slides = slider.querySelectorAll('.app-img');
    const prevBtn = slider.querySelector('.app-prev');
    const nextBtn = slider.querySelector('.app-next');
    const dots = slider.querySelectorAll('.app-slide-dots span');

    let index = 0;

    function updateSlider() {
        track.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    if (slides.length <= 1) return;

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            updateSlider();
        });
    });
});
const mobileProductMenu = document.querySelector('.mobile-product-menu');
const mobileProductBtn = document.querySelector('.mobile-product-btn');

if (mobileProductMenu && mobileProductBtn) {
    mobileProductBtn.addEventListener('click', function () {
        mobileProductMenu.classList.toggle('active');
    });
}
// 图片点击放大
const lightbox = document.createElement('div');
lightbox.className = 'image-lightbox';
lightbox.innerHTML = `
    <span class="image-lightbox-close">×</span>
    <img src="" alt="">
`;

document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.image-lightbox-close');

document.querySelectorAll('.app-img').forEach(img => {
    img.addEventListener('click', function () {
        lightboxImg.src = this.src;
        lightbox.classList.add('active');
    });
});

closeBtn.addEventListener('click', function () {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
});

lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
    }
});

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    const clickBtn = document.getElementById('clickBtn');
    let clickCount = 0;
    
    // 按钮点击事件
    clickBtn.addEventListener('click', function() {
        clickCount++;
        
        // 创建消息元素
        const message = document.createElement('div');
        message.className = 'message';
        message.textContent = `你点击了按钮 ${clickCount} 次！`;
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        
        // 添加动画样式
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(message);
        
        // 3秒后移除消息
        setTimeout(() => {
            message.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 300);
        }, 3000);
        
        // 改变按钮颜色
        const colors = ['#ff6b6b', '#4CAF50', '#2196F3', '#FF9800', '#9C27B0'];
        clickBtn.style.background = colors[clickCount % colors.length];
        
        // 添加按钮动画
        clickBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            clickBtn.style.transform = 'scale(1)';
        }, 100);
    });
    
    // 添加页面加载动画
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200 + 500);
    });
    
    // 添加滚动效果
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('body');
        parallax.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    });
    
    // 控制台欢迎消息
    console.log('%c欢迎来到我的网站！', 'color: #4CAF50; font-size: 20px; font-weight: bold;');
    console.log('%c这个网站是通过Python脚本自动部署到GitHub Pages的。', 'color: #2196F3; font-size: 14px;');
});
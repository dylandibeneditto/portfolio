export default function triggerAnimateEffect() {
    const content = document.querySelectorAll('.animate-on-load');

    content.forEach(parent => {
      const children = parent.children;
      Array.from(children).forEach((child, index) => {
        if (child instanceof HTMLElement) {
          const delay = index * 0.2; // Adjust the multiplier to control the delay
          child.style.animationDelay = `${delay}s !important`;
          setTimeout(() => {
            child.classList.remove('hidden');
            child.classList.add('animate');
          }, delay * 1000);
        }
      });
    });
}
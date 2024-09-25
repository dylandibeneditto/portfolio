export default function triggerAnimateEffect() {
    const content = document.querySelectorAll('.animate-on-load');

    content.forEach(parent => {
      const children = parent.children;
      Array.from(children).forEach((child, index) => {
        if (child instanceof HTMLElement) {  // Type guard to narrow type
          const delay = index * 0.1; // Adjust the multiplier to control the delay
          child.style.animationDelay = `${delay}s !important`;
          setTimeout(() => {
            child.classList.remove('hidden');
            child.classList.add('animate');
          }, delay * 1000); // Apply delay before removing 'hidden'
        }
      });
    });
}
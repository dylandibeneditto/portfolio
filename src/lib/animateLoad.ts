export function triggerAnimateEffect() {
    const content = document.querySelectorAll('.animate-on-load');

    content.forEach(parent => {
      const children = parent.children;
      Array.from(children).forEach((child, index) => {
        if (child instanceof HTMLElement) {
          const delay = index * 0.2;
          child.style.animationDelay = `${delay}s !important`;
          setTimeout(() => {
		console.log(child);
            child.classList.remove('hidden');
            child.classList.add('animate');
          }, delay * 1000);
        }
      });
    });
}

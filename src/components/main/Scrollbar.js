const scrollContent = document.getElementById('scroll-content');
const thumb = document.getElementById('thumb');

scrollContent.addEventListener('scroll', () => {
  const ratio = scrollContent.scrollTop / (scrollContent.scrollHeight - scrollContent.clientHeight);
  const thumbHeight = thumb.offsetHeight;
  const maxThumbTop = scrollContent.clientHeight - thumbHeight;
  thumb.style.top = `${ratio * maxThumbTop}px`;
});

let isDragging = false;
let startY, startTop;

// Mouse
thumb.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.clientY;
  startTop = parseInt(thumb.style.top) || 0;
  e.preventDefault();
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const dy = e.clientY - startY;
  const newTop = Math.min(Math.max(startTop + dy, 0), scrollContent.clientHeight - thumb.offsetHeight);
  thumb.style.top = `${newTop}px`;
  const ratio = newTop / (scrollContent.clientHeight - thumb.offsetHeight);
  scrollContent.scrollTop = ratio * (scrollContent.scrollHeight - scrollContent.clientHeight);
});

window.addEventListener('mouseup', () => {
  isDragging = false;
});

// Touch
thumb.addEventListener('touchstart', (e) => {
  isDragging = true;
  startY = e.touches[0].clientY;
  startTop = parseInt(thumb.style.top) || 0;
  e.preventDefault();
}, { passive: false });

window.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const dy = e.touches[0].clientY - startY;
  const newTop = Math.min(Math.max(startTop + dy, 0), scrollContent.clientHeight - thumb.offsetHeight);
  thumb.style.top = `${newTop}px`;
  const ratio = newTop / (scrollContent.clientHeight - thumb.offsetHeight);
  scrollContent.scrollTop = ratio * (scrollContent.scrollHeight - scrollContent.clientHeight);
}, { passive: false });

window.addEventListener('touchend', () => {
  isDragging = false;
});
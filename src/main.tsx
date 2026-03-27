export const APP_VERSION = '1.0.15';

const CACHE_KEY = 'v_cache_drelf';

if (localStorage.getItem(CACHE_KEY) !== APP_VERSION) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(regs => regs.forEach(r => r.unregister()));
  }
  if ('caches' in window) {
    caches.keys().then(names => names.forEach(n => caches.delete(n)));
  }
  localStorage.setItem(CACHE_KEY, APP_VERSION);
  setTimeout(() => window.location.reload(), 500);
}

// @ts-expect-error - Adding to window for global access
window.APP_VERSION = APP_VERSION;

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(error => {
      console.error('Service Worker registration failed:', error);
    });
  });
}

createRoot(document.getElementById("root")!).render(<App />);

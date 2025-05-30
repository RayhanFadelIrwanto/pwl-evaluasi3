// lib/webVitals.js
import { onCLS, onFID, onLCP, onFCP, onTTFB } from "web-vitals";

export function reportWebVitals(metric) {
  console.log(metric); // Kirim ke analytics jika perlu
}

export function initWebVitals() {
  onLCP(reportWebVitals);
  onFCP(reportWebVitals);
  onTTFB(reportWebVitals);
}

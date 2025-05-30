## Portal Berita Modern - Evaluasi 2 Pemrograman Web Lanjut

## 1. Laporan ini menganalisis implementasi SEO pada aplikasi portal berita berbasis Next.js,
mencakup penjelasan konsep SEO, implementasi teknis, hasil pengukuran menggunakan Lighthouse, serta rekomendasi untuk peningkatan lebih lanjut

## 2. Penjelasan SEO
Search Engine Optimization (SEO) merupakan serangkaian teknik untuk meningkatkan visibilitas website di mesin pencari. Terdiri dari tiga aspek utama:
•	On-Page SEO: Optimasi konten dan struktur HTML
•	Off-Page SEO: Pembangunan reputasi melalui backlink
•	Technical SEO: Aspek teknis seperti kecepatan dan mobile-friendliness

## 3.Implementasi SEO
Aplikasi ini telah mengimplementasikan:
•	Struktur heading yang jelas (H1, H2, H3)
•	Meta tags dasar melalui Next.js Metadata API
•	URL yang terorganisir (/berita)
•	Filter gambar untuk memastikan kualitas visual
•	Layout responsif dengan skor accessibility sempurna

## 4. Analisis Performa
Sebelum Optimasi:
```bash
•	Performance: 88
•	Accessibility: 100
•	Best Practices: 100
•	SEO: 100

```
Setelah Optimasi: 
```bash
•	Performance: 71 (-17)
•	Accessibility: 100
•	Best Practices: 96 (-4)
•	SEO: 91 (-9)
```
Matrik Perbandingan
```bash
Metric                  	Sebelum          	Sesudah	       Perubahan
First Contentful Paint	   0.2s	              0.2s	          -
Speed Index	               1.3s	              0.4s	         -0.9s
Largest Contentful Paint	 2.2s	              0.3s	         -0.9s
Total Blocking Time	       0ms              	1120ms	       +1120ms

```
## 4. Struktur Proyek
```bash
EVALUASI-PWL2/
│
├── .next/
│
├── app/ 
│   ├── berita/ 
│   │   └── page.js 
│   ├── componen/ 
│   │   └── newscard.js 
│   ├── layout.js 
├── lib/ 
│   └── webVitals.js 
├── public/ 
│   └── favicon.ico 
├── styling/ 
│   └── globals.css 


```

## 5. Kesimpulan
 Website portal berita ini menunjukkan hasil SEO dan performa yang sangat baik, terutama dari sisi struktur konten dan aksesibilitas. Beberapa catatan: 
•	Optimasi Total Blocking Time diperlukan untuk hasil pengujian ke-2. 
•	Largest Contentful Paint perlu konsisten di bawah 1.5s agar tetap berada pada zona hijau. 
•	Penambahan lazy loading pada gambar dan pemanfaatan caching bisa membantu meningkatkan performa lebih lanjut. 
 





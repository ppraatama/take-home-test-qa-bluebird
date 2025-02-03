# Documentation take home test qa bluebird

# Setup and run jest
Hal yang perlu di persiapkan pertama kali untuk menjalankan jest adalah sbb : 

 1. Install nodeJS terlebih dahulu bisa langsung ke klik link [ini](https://nodejs.org/en/download) 
 2. Pastikan nodeJS terinstal dengan cara ketik perintah `node -v` dan cek npm dengan ketikan perintah `npm -v`
 3. Buat folder untuk proyek jest
 4. Di dalam proyek buka terminal pada VSCode lalu pastikan berada di file proyek jest yang akan anda jalankan lalu ketikan perintah `npm init -y` untuk membuat file package.json
 5. Selanjutnya ketik perintah pada terminal `npm install --save-dev jest` untuk menginstall jest pada proyek anda.
 6. Buka file package.json lalu tambahkan script berikut `"scripts": { "test": "jest" }`
 7. Ketikan perintah `npx jest --init` untuk membuat file jest.config.js
 8. Buat file dengan extensi .js untuk membuat script jest
 9. Jalankan perintah `npm test` untuk menjalankan jest anda

 # Jika Clone dari git
 Jika clone dari repositori yang ada di git, berikut langkah yang harus dilakukan : 

 1. Buka VSCode anda
 2. Buka terminal dan jalankan perinta `https://github.com/ppraatama/take-home-test-bluebird.git`  untuk clone dari repositori yang ada di github.
 3. Setelah berhasil clone, jalankan perintah `npm install` untuk menginstall package node modules
 4. Selanjutnya jalankan perintah `npm install --save-dev jest` untuk menginstall jest
 5. Ketikan perintah `npm install supertest --save-dev` untuk menginstall super test
 6. Ketikan perintah `npm install jest-html-reporters --save-dev` untuk reports jest yang bisa di lihat lewat html
 7. Ketikan perintah `npm test` untuk menjalankan jest

 Dalam membuat test automation API saya belum menggunakan template jest yang dipisah-pisah per directory dikarenakan ada kendala yang saya alami. Jadi saya memutuskan semua test saya buat, saya satukan di dalam folder api-tests/products/ . 

Dalam pembuatan take home test ini saya integrasi dengan github sebagai tempat untuk menyimpan folder karena gratis dan mudah di implementasi. 

Lalu untuk implementasi CI/CD saya menggunakan jenkins di local saya karena open source dan juga tutorialnya banyak sehingga saya bisa implementasi di proyek saya.

Proyek saya masih banyak yang perlu di improve mungkin bisa menggunakan framework yang lebih proper agar secara foldering bisa lebih rapih.
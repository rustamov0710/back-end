const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware'larni ulash
app.use(cors());
app.use(express.json()); // JSON ma'lumotlarni tahlil qilish uchun

// Mahsulotlar ro'yxati
const products = [
    { id: 1, name: "Olma", price: 5000, amount: "2", category: "meva_sabzavotlar" },
    { id: 2, name: "Mol go'shti", price: 70000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 3, name: "Sharbat", price: 12000, amount: "2", category: "ichimliklar" },
    { id: 4, name: "Sut", price: 6000, amount: "1", category: "sutli mahsulotlar" },
    { id: 5, name: "Anor", price: 12000, amount: "3", category: "meva_sabzavotlar" },
    { id: 6, name: "Tovuq go'shti", price: 25000, amount: "2", category: "gosht_mahsulotlari" },
    { id: 7, name: "Cola", price: 10000, amount: "1", category: "ichimliklar" },
    { id: 8, name: "Qatiq", price: 5000, amount: "1", category: "sutli mahsulotlar" },
    { id: 9, name: "Pomidor", price: 4000, amount: "4", category: "meva_sabzavotlar" },
    { id: 10, name: "Qiyma", price: 75000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 11, name: "Gazli suv", price: 5000, amount: "3", category: "ichimliklar" },
    { id: 12, name: "Smetana", price: 7000, amount: "1", category: "sutli mahsulotlar" },
    { id: 13, name: "Banan", price: 18000, amount: "1", category: "meva_sabzavotlar" },
    { id: 14, name: "Qo'y go'shti", price: 80000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 15, name: "Fanta", price: 9000, amount: "1", category: "ichimliklar" },
    { id: 16, name: "Pishloq", price: 12000, amount: "1", category: "sutli mahsulotlar" },
    { id: 17, name: "Kartoshka", price: 2500, amount: "10", category: "meva_sabzavotlar" },
    { id: 18, name: "Shashlik", price: 12000, amount: "3", category: "gosht_mahsulotlari" },
    { id: 19, name: "Suv", price: 2000, amount: "6", category: "ichimliklar" },
    { id: 20, name: "Qaymoq", price: 8000, amount: "1", category: "sutli mahsulotlar" },
    { id: 21, name: "Uzum", price: 15000, amount: "1", category: "meva_sabzavotlar" },
    { id: 22, name: "Kolbasa", price: 20000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 23, name: "Sharbat (apelsin)", price: 14000, amount: "2", category: "ichimliklar" },
    { id: 24, name: "Qatiqli ichimlik", price: 7000, amount: "1", category: "sutli mahsulotlar" },
    { id: 25, name: "Sabzi", price: 3000, amount: "5", category: "meva_sabzavotlar" },
    { id: 26, name: "Tovuq kotleti", price: 27000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 27, name: "Pepsi", price: 10000, amount: "1", category: "ichimliklar" },
    { id: 28, name: "Sut kokteyli", price: 15000, amount: "1", category: "sutli mahsulotlar" },
    { id: 29, name: "Nok", price: 6000, amount: "3", category: "meva_sabzavotlar" },
    { id: 30, name: "Dimlama go'shti", price: 85000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 31, name: "Mineral suv", price: 8000, amount: "1", category: "ichimliklar" },
    { id: 32, name: "Yogurt", price: 5000, amount: "2", category: "sutli mahsulotlar" },
    { id: 33, name: "Piyoz", price: 2000, amount: "4", category: "meva_sabzavotlar" },
    { id: 34, name: "Go'shtli somsa", price: 12000, amount: "2", category: "gosht_mahsulotlari" },
    { id: 35, name: "Suv (gazsiz)", price: 2500, amount: "6", category: "ichimliklar" },
    { id: 36, name: "Sutli qahva", price: 18000, amount: "1", category: "sutli mahsulotlar" },
    { id: 37, name: "Bodring", price: 3500, amount: "6", category: "meva_sabzavotlar" },
    { id: 38, name: "Kolbasa", price: 30000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 39, name: "Limon choyi", price: 10000, amount: "1", category: "ichimliklar" },
    { id: 40, name: "Sut qatiq", price: 10000, amount: "1", category: "sutli mahsulotlar" },
    { id: 41, name: "Qovun", price: 8000, amount: "1", category: "meva_sabzavotlar" },
    { id: 42, name: "Ragu", price: 50000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 43, name: "Kompot", price: 7000, amount: "2", category: "ichimliklar" },
    { id: 44, name: "Qovoq", price: 5000, amount: "2", category: "meva_sabzavotlar" },
    { id: 45, name: "Mol go'shti bifshteks", price: 40000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 46, name: "Energiya ichimligi", price: 20000, amount: "1", category: "ichimliklar" },
    { id: 47, name: "Tvorog", price: 8000, amount: "1", category: "sutli mahsulotlar" },
    { id: 48, name: "Gilos", price: 15000, amount: "1", category: "meva_sabzavotlar" },
    { id: 49, name: "Sosiskalar", price: 22000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 50, name: "Sutli shokolad", price: 12000, amount: "1", category: "sutli mahsulotlar" },
    { id: 51, name: "Tarvuz", price: 7000, amount: "1", category: "meva_sabzavotlar" },
    { id: 52, name: "Ovqatlik go'sht", price: 70000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 53, name: "Sharbat (olma)", price: 10000, amount: "2", category: "ichimliklar" },
    { id: 54, name: "O'rik", price: 10000, amount: "2", category: "meva_sabzavotlar" },
    { id: 55, name: "Marinadlangan go'sht", price: 78000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 56, name: "Limon", price: 2000, amount: "2", category: "meva_sabzavotlar" },
    { id: 57, name: "Shirin ichimlik", price: 9000, amount: "1", category: "ichimliklar" },
    { id: 58, name: "Sarimsoq", price: 10000, amount: "1", category: "meva_sabzavotlar" },
    { id: 59, name: "Gulyash", price: 77000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 60, name: "Sutli pirojnoe", price: 15000, amount: "1", category: "sutli mahsulotlar" },
    { id: 61, name: "Baqlajon", price: 4000, amount: "3", category: "meva_sabzavotlar" },
    { id: 62, name: "Qo'y yog'li go'shti", price: 80000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 63, name: "Ichimlik suv", price: 3000, amount: "6", category: "ichimliklar" },
    { id: 64, name: "Qo'ziqorin", price: 9000, amount: "1", category: "meva_sabzavotlar" },
    { id: 65, name: "Tvorog shirin", price: 10000, amount: "1", category: "sutli mahsulotlar" },
    { id: 66, name: "Olcha", price: 12000, amount: "2", category: "meva_sabzavotlar" },
    { id: 67, name: "Go'shtli qo'ziqorin", price: 60000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 68, name: "Suv kokteyli", price: 12000, amount: "1", category: "ichimliklar" },
    { id: 69, name: "Sholg'om", price: 3000, amount: "5", category: "meva_sabzavotlar" },
    { id: 70, name: "Bifshteks mol go'shti", price: 40000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 71, name: "Gazlangan sharbat", price: 15000, amount: "1", category: "ichimliklar" },
    { id: 72, name: "Tvorojnik", price: 8000, amount: "1", category: "sutli mahsulotlar" },
    { id: 73, name: "Shaftoli", price: 20000, amount: "1", category: "meva_sabzavotlar" },
    { id: 74, name: "Tovuq qanotlari", price: 28000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 75, name: "Shirin qahva", price: 10000, amount: "1", category: "ichimliklar" },
    { id: 76, name: "Tomat", price: 6000, amount: "2", category: "meva_sabzavotlar" },
    { id: 77, name: "Dimlama", price: 70000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 78, name: "Sharbat mix", price: 15000, amount: "1", category: "ichimliklar" },
    { id: 79, name: "Kefir", price: 8000, amount: "1", category: "sutli mahsulotlar" },
    { id: 80, name: "Sarimsoqli non", price: 5000, amount: "1", category: "sutli mahsulotlar" },
    { id: 81, name: "Choy ichimlik", price: 3000, amount: "2", category: "ichimliklar" },
    { id: 82, name: "Baqlajon", price: 8000, amount: "1", category: "meva_sabzavotlar" },
    { id: 83, name: "Tovuq kotlet", price: 27000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 84, name: "Ichimliklar gazli", price: 10000, amount: "2", category: "ichimliklar" },
    { id: 85, name: "Qovoq", price: 5000, amount: "1", category: "meva_sabzavotlar" },
    { id: 86, name: "Olmali pirog", price: 35000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 87, name: "Suv gazsiz", price: 2500, amount: "5", category: "ichimliklar" },
    { id: 88, name: "Shakarli tvorog", price: 10000, amount: "1", category: "sutli mahsulotlar" },
    { id: 89, name: "Pomidorli ovqat", price: 6000, amount: "2", category: "meva_sabzavotlar" },
    { id: 90, name: "Qovurilgan baliq", price: 45000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 91, name: "Sharbat olma", price: 9000, amount: "2", category: "ichimliklar" },
    { id: 92, name: "Bananli yogurt", price: 12000, amount: "1", category: "sutli mahsulotlar" },
    { id: 93, name: "Qovurilgan piyoz", price: 4000, amount: "3", category: "meva_sabzavotlar" },
    { id: 94, name: "Mol go'shti yog'li", price: 85000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 95, name: "Sharbat apelsin", price: 12000, amount: "2", category: "ichimliklar" },
    { id: 96, name: "Tvorog shirinlik", price: 15000, amount: "1", category: "sutli mahsulotlar" },
    { id: 97, name: "Pomidor pastasi", price: 8000, amount: "1", category: "meva_sabzavotlar" },
    { id: 98, name: "Jig'ildon go'shti", price: 55000, amount: "1", category: "gosht_mahsulotlari" },
    { id: 99, name: "Suv shirin", price: 2000, amount: "6", category: "ichimliklar" },
    { id: 100, name: "Shirin tvorog", price: 10000, amount: "1", category: "sutli mahsulotlar" },
  ];

// API yo'llari
// Barcha mahsulotlarni qaytarish
app.get('/products', (req, res) => {
    res.status(200).json(products);
});

// Ma'lum mahsulotni ID bo'yicha qaytarish
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ error: "Mahsulot topilmadi" });
    }
});

// Xatoliklar uchun global middleware (foydalanuvchiga qulayroq xabar ko'rsatish uchun)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Serverda xatolik yuz berdi" });
});

// Serverni ishga tushirish
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

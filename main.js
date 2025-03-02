import { db, auth, storage } from './firebase.js';

window.uploadVideo = async function() {
    const fileInput = document.getElementById("videoUpload");
    if (fileInput.files.length === 0) return alert("يرجى اختيار ملف فيديو");
    alert("تم رفع الفيديو بنجاح (محاكاة)")
};

window.searchVideos = function() {
    const searchQuery = document.getElementById("searchInput").value;
    alert("بحث عن: " + searchQuery);
};

window.switchTab = function(tabName) {
    alert("تبديل إلى تبويب: " + tabName);
};

window.showPage = function(pageId) {
    document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
};
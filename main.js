let biodata = {
  nama: "Mahesa Radithya Priady",
  kelas: "XI PPLG 4",
  tanggalLahir: " 17 - Februari - 2008 ",
  alamat: "Tasikmalaya",
  profil:
    "https://i.pinimg.com/280x280_RS/2d/94/d7/2d94d7a0cf6b575fa792673bb889c702.jpg",
  bio: "Web Developer",
};

const nama = document.querySelector(".nama");
const namaHeader = document.querySelector(".namaHeader");
const bio = document.querySelector(".bio");
const kelas = document.querySelector(".kelas");
const tanggalLahir = document.querySelector(".tanggalLahir");
const alamat = document.querySelector(".alamat");
const profil = document.getElementById("profil");
const profilElement = document.createElement("img");
nama.innerHTML = "Nama : " + biodata.nama;
namaHeader.innerHTML = biodata.nama;
bio.innerHTML = biodata.bio;
kelas.innerHTML = "Kelas : " + biodata.kelas;
tanggalLahir.innerHTML = "Tanggal Lahir : " + biodata.tanggalLahir;
alamat.innerHTML = "Alamat : " + biodata.alamat;
profilElement.setAttribute(
  "class",
  "rounded-full w-1/2 mx-auto border-slate-500 outline outline-slate-800"
);
profilElement.setAttribute("src", `${biodata.profil}`);
profil.after(profilElement);

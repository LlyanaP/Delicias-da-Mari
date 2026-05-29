import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBa6pHVlGgu9SD0dh5oI4Hp2krFAl65efI",
    authDomain: "delicias-mari-e8ea7.firebaseapp.com",
    projectId: "delicias-mari-e8ea7",
    storageBucket: "delicias-mari-e8ea7.firebasestorage.app",
    messagingSenderId: "971726636929",
    appId: "1:971726636929:web:14a7565247f880a5828a80",
    measurementId: "G-LDW1F38VPX"
};

const link = document.createElement("a");

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("FIREBASE CONECTADO");

//     /*RENDERIZAÇÃO DA LISTA DE DADOS*/
const container = document.querySelector('.container');



function renderCard(doc) {

    const dados = doc.data();

    const link = document.createElement("a");
    
    link.classList.add("card");

    const imagem = document.createElement("img");
    const nome = document.createElement("h3");
    const descricao = document.createElement("p");

    imagem.src = dados.imagem;
    nome.textContent = dados.nome;
    descricao.textContent = dados.descricao;

    link.appendChild(imagem);
    link.appendChild(nome);
    link.appendChild(descricao);

    container.appendChild(link);
}


/* LISTA DE DADOS */
getDocs(collection(db, "cardapio"))

    .then((snapshot) => {

        snapshot.docs.forEach((doc) => {

            console.log(doc.data());

            renderCard(doc);

        });

    });
var listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c0/Dune_2020.jpeg/250px-Dune_2020.jpeg",
    "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png",
    "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/6/62/Arrival_%28filme%29.jpg",

    "https://img.olhardigital.com.br/wp-content/uploads/2021/11/MATRIX-RESURRECTIONS-691x1024.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/0/0e/Matrix_reloaded_.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/9/94/Matrix_revolutions.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
}
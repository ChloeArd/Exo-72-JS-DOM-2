let premierDiv = document.getElementsByClassName('name-tag');

for (let i = 0; i < premierDiv.length; i++) {
    let monParagraphe = document.createElement('p');
    premierDiv.item(i).appendChild(monParagraphe);
    monParagraphe.innerHTML = "HELLO WORLD";
}













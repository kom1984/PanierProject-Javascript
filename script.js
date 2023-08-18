const products = [
    {
      id: 1,
      name: "Apple iPhone 13",
      price: 1099,
      description:
        "Le dernier smartphone haut de gamme d'Apple avec une caméra améliorée, un écran OLED et une autonomie améliorée.",
      image:
        "https://cdn.pixabay.com/photo/2021/09/15/14/57/iphone-13-6626577_960_720.jpg",
      quantity: 10,
    },
    {
      id: 2,
      name: "Samsung Galaxy Z Flip 3",
      price: 1499,
      description:
        "Un smartphone pliable compact et élégant de Samsung avec une caméra de haute qualité et un écran flexible.",
      image:
        "https://cdn.pixabay.com/photo/2021/08/23/13/28/samsung-6561467_960_720.jpg",
      quantity: 8,
    },
    {
      id: 3,
      name: "DJI Mavic 2 Pro",
      price: 1899,
      description:
        "Un drone de qualité professionnelle avec une caméra Hasselblad 20 mégapixels et une portée de vol de 8 km.",
      image:
        "https://cdn.pixabay.com/photo/2020/07/17/06/43/dji-5412124_960_720.jpg",
      quantity: 4,
    },
    {
      id: 4,
      name: "Apple MacBook Pro M1",
      price: 1499,
      description:
        "Un ordinateur portable haut de gamme d'Apple avec la nouvelle puce M1, une autonomie de 20 heures et un écran Retina.",
      image:
        "https://cdn.pixabay.com/photo/2021/01/30/17/47/macbook-5973059_960_720.jpg",
      quantity: 6,
    },
    {
      id: 5,
      name: "LG UltraGear 27GN950-B",
      price: 1299,
      description:
        "Un écran PC gaming 4K avec une fréquence de rafraîchissement de 144 Hz et une luminosité de 600 nits.",
      image:
        "https://cdn.pixabay.com/photo/2021/01/31/16/52/lg-ultragear-5977457_960_720.jpg",
      quantity: 3,
    },
    {
      id: 6,
      name: "Sony WH-1000XM4",
      price: 349,
      description:
        "Un casque audio sans fil haut de gamme avec une réduction de bruit active et une autonomie de 30 heures.",
      image:
        "https://cdn.pixabay.com/photo/2020/09/29/20/48/headphones-5612729_960_720.jpg",
      quantity: 12,
    },
    {
      id: 7,
      name: "Logitech G Pro X Keyboard",
      price: 149,
      description:
        "Un clavier de jeu mécanique avec des switches GX Blue, des touches programmables et un éclairage RGB personnalisable.",
      image:
        "https://cdn.pixabay.com/photo/2021/02/06/11/05/logitech-5987156_960_720.jpg",
      quantity: 7,
    },
    {
      id: 8,
      name: "ASUS ROG Strix G15",
      price: 1799,
      description:
        "Un ordinateur portable de jeu puissant avec un processeur Intel Core i7, une carte graphique NVIDIA RTX 3070 et un écran 240 Hz.",
      image:
        "https://cdn.pixabay.com/photo/2021/03/08/08/49/asus-6088583_960_720.jpg",
      quantity: 5,
    },
    {
      id: 9,
      name: "Google Nest Hub (2ème génération)",
      price: 99,
      description:
        "Un assistant vocal avec un écran tactile de 7 pouces pour contrôler votre maison intelligente et écouter de la musique.",
      image:
        "https://cdn.pixabay.com/photo/2021/03/23/20/28/google-6112669_960_720.jpg",
      quantity: 15,
    },
    {
      id: 10,
      name: "Bose QuietComfort Earbuds",
      price: 279,
      description:
        "Des écouteurs sans fil avec une réduction de bruit active, un son exceptionnel et une autonomie de 6 heures.",
      image:
        "https://cdn.pixabay.com/photo/2020/12/07/13/47/bose-5806972_960_720.jpg",
      quantity: 9,
    },
    {
      id: 11,
      name: "Sony PlayStation 5",
      price: 499,
      description:
        "La dernière console de jeu de Sony avec une puissante carte graphique et un stockage SSD ultra-rapide.",
      image:
        "https://cdn.pixabay.com/photo/2020/10/22/15/53/playstation-5-5678256_960_720.jpg",
      quantity: 2,
    },
    {
      id: 12,
      name: "Xbox Series X",
      price: 499,
      description:
        "La dernière console de jeu de Microsoft avec une carte graphique puissante et un stockage SSD ultra-rapide.",
      image:
        "https://cdn.pixabay.com/photo/2021/01/04/21/36/xbox-5897876_960_720.jpg",
      quantity: 3,
    },
    {
      id: 13,
      name: "GoPro Hero 10 Black",
      price: 499,
      description:
        "Une caméra d'action haut de gamme avec une stabilisation d'image améliorée, un mode HyperSmooth 4.0 et une résolution 5,3K.",
      image:
        "https://cdn.pixabay.com/photo/2021/09/04/19/06/gopro-hero-10-black-6601367_960_720.jpg",
      quantity: 6,
    },
    {
      id: 14,
      name: "Amazon Echo Show 10",
      price: 249,
      description:
        "Un assistant vocal avec un écran HD de 10,1 pouces qui suit vos mouvements et vous permet de passer des appels vidéo.",
      image:
        "https://cdn.pixabay.com/photo/2021/01/13/21/12/amazon-5918015_960_720.jpg",
      quantity: 11,
    },
    {
      id: 15,
      name: "Razer Blade 15",
      price: 1999,
      description:
        "Un ordinateur portable de jeu élégant avec un processeur Intel Core i7, une carte graphique",
      image:
        "https://cdn.pixabay.com/photo/2021/01/13/21/12/amazon-5918015_960_720.jpg",
      quantity: 11,
    },
    {
      id: 16,
      name: "Apple iPad Pro (5ème génération)",
      price: 1099,
      description:
        "La dernière tablette d'Apple avec un processeur M1, un écran Liquid Retina XDR et une caméra ultra grand angle.",
      image:
        "https://cdn.pixabay.com/photo/2021/04/19/14/59/ipad-pro-6194555_960_720.jpg",
      quantity: 8,
    },
    {
      id: 17,
      name: "Microsoft Surface Laptop 4",
      price: 1299,
      description:
        "Un ordinateur portable haut de gamme avec un processeur Intel Core i7, une carte graphique AMD Radeon et un écran tactile PixelSense.",
      image:
        "https://cdn.pixabay.com/photo/2021/03/02/20/47/microsoft-6063534_960_720.jpg",
      quantity: 7,
    },
    {
      id: 18,
      name: "Samsung Odyssey G9",
      price: 1699,
      description:
        "Un écran PC gaming ultralarge de 49 pouces avec une courbure immersive, une résolution de 5120x1440 et une fréquence de rafraîchissement de 240 Hz.",
      image:
        "https://cdn.pixabay.com/photo/2021/01/31/17/09/samsung-odyssey-g9-5977487_960_720.jpg",
      quantity: 2,
    },
    {
      id: 19,
      name: "Logitech G Pro X Wireless",
      price: 199,
      description:
        "Un casque audio sans fil pour les joueurs professionnels avec un son DTS Headphone:X 2.0 et une autonomie de 20 heures.",
      image:
        "https://cdn.pixabay.com/photo/2021/02/07/13/12/logitech-5989473_960_720.jpg",
      quantity: 5,
    },
    {
      id: 20,
      name: "Lenovo Legion 5 Pro",
      price: 1499,
      description:
        "Un ordinateur portable de jeu avec un processeur AMD Ryzen 7, une carte graphique NVIDIA RTX 3070 et un écran 165 Hz.",
      image:
        "https://cdn.pixabay.com/photo/2021/06/24/12/07/lenovo-legion-5-pro-6361011_960_720.jpg",
      quantity: 3,
    },
    {
      id: 21,
      name: "Sony Bravia XR A90J",
      price: 2799,
      description:
        "Un téléviseur 4K OLED avec un processeur Cognitive XR, un son Spatial Sound et un design ultrafin.",
      image:
        "https://cdn.pixabay.com/photo/2021/03/28/07/12/sony-bravia-6121693_960_720.jpg",
      quantity: 1,
    },
  ];
/*
  for(var i=0;i<products.length;i++)
  {
    document.querySelector('#product').innerHTML+=
   products[i].name+'<br>'+products[i].price+'€'+'<br>'+products[i].description+'<br>'+
   '<button onclick="ajouterPanier(' + i + ')">Ajouter au panier</button><br>'
  };*/
  let numero = 0;


   for(var i=0;i<products.length;i++)
  {
    /*
    document.querySelector('#product').innerHTML+=
   products[i].name+'<br>'+products[i].price+'€'+'<br>'+products[i].description+'<br>'+
   '<button onclick="ajouterPanier(' + i + ')">Ajouter au panier</button>'+' <button onclick=" '+moins+' ">-</button>'+
   '<button onclick=" '+plus+'" >'+'+</button><br>'
*/
   
   document.querySelector('#product').innerHTML += `
   <div >
  <p><img src="${products[i].image}" alt="phoneImage"></p>
    <p>${products[i].name}</p> 
    <br>
    <p>${products[i].price}</p>
    <br>
    <p>${products[i].description}</p>
    <br>
    <div data-id=${products[i].id}>
    <button onclick="ajouterPanier(${i})">Ajouter au panier</button>
    <button onclick="moins(${i})">-</button>
    <button onclick="plus(${i})" >+</button>
    </div>
    </div>
    <br>
    <br>
   `
  }; 


  /* const plus=document.querySelector(".plus"),
  num=document.querySelector(".num"),
  moins=document.querySelector(".moins");
 let numero=0;
 plus.addEventListener("click",()=>{
  numero++;
  
  num.innerText=numero;
 });
 moins.addEventListener("click",()=>{
  numero--;
  
  num.innerText=numero;
 }); 
  */
function plus(i) {
  if (numero < 10) {
    numero = numero + 1;
  }
  console.log(numero);
  ajouterPanier(i)
  
  //document.querySelector('.listePanier').innerHTML = numero;
  //var qty=numero;
}

function moins(i) {
  if (numero >= 1) {
    numero = numero - 1;
  }
  console.log(numero);
  enleverPanier(i);

  //document.querySelector('.listePanier').innerHTML = numero;
  //var qty=numero;
}  
var prixTotal = 0;

function ajouterPanier(i) {

  prixTotal = prixTotal + products[i].price;
  document.querySelector('.prixTotal').innerHTML = prixTotal;
  document.querySelector('.listePanier').innerHTML += '<div class=element-'+ i+' >' + products[i].name +
      ' : ' + products[i].price + '€</div>';
      //'+'Quantity:'+qty+'
} 

function enleverPanier(i) {

  prixTotal = prixTotal - products[i].price;
  document.querySelector('.prixTotal').innerHTML = prixTotal;
  let elementToRemove = document.querySelector('.element-' + i);
  console.log(elementToRemove);
  elementToRemove.remove()
      //'+'Quantity:'+qty+'
} 






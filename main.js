//on crée une fonction pour changer d'image au passage de la souris (onmouseover dans le html)
//  en lui mettant dans les () un paramètre
// le paramètre devient un argument que l'on concatènne avec l'url et la fin d'extension des images

function changePics(image) {
   document.getElementById(image).src = "./images/" + image + "_2.jpg"
}

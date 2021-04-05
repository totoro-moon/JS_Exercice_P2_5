//on crée une fonction pour changer d'image au passage de la souris (onmouseover dans le html)
//  en lui mettant dans les () un paramètre
function changePic(image){
   // le paramètre devient un argument que l'on concatènne avec l'url et la fin d'extension des images
   document.getElementById(image).src = "/Users/flavie/Desktop/formation/js/JS_Exercice_P2_5 /images/" + image + "_2.jpg"
   
}




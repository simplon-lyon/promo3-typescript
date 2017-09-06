# promo3-typescript
A Node.js project for learning typescript with Simplon Lyon promo3


TP Typescript Todo API :
Faire une API avec express et typescript pour gérer une todo list


I. Faire la classe Todo qui gérera la todolist
1) Faire un fichier todo.ts dans lequel vous définirez une classe Todo
2) Cette classe aura une propriété liste de type tableau de string (string[])
3) Définir des méthode pour influer sur la liste : ajouter / lister / supprimer

II. Faire l'API REST avec Express
1) Faire un fichier main.ts dans lequel vous allez créer un serveur Express 
2) Installer le body-parser et son typage (npm install body-parser --save     npm install @types/body-parser --save-dev)
3) Dire à express d'utiliser le body-parser
4) Dire à express d'écouter sur le port 3000 ou peu importe
5) Définir les routes accessible sur l'API, une en get pour lister, une en post pour ajouter et une en delete pour supprimer
6) Utiliser les méthodes de la classe Todo à l'intérieur des routes
/!\ NE PAS OUBLIER DE COMPILER LE TYPESCRIPT S'IL N'EST PAS EN WATCH
/!\ LANCER BIEN dist/main.js ET PAS main.ts AVEC NODE ---- NODE NE COMPREND PAS LE TYPESCRIPT


TP Typescript Utilisateur
Rajouter un nouveau routeur dans notre application express qui permettra de stocker des utilisateurs
1) Faire une classe Utilisateur qui aura au minimum un nom d'utilisateur et un mot de passe
2) Faire une classe GestionUtilisateur qui fera comme la classe Todo mais pour les Utilisateurs :
a. Ajouter un nouvel utilisateur à un tableau (si celui ci n'existe pas déjà)
b. Authentitication qui attend un nom d'utilisateur et un mot de passe et qui renvoie un objet utilisateur ou null
c. Supprimer qui supprime un utilisateur
3) Faire un fichier pour le routeur-utilisateur qui définira un nouveau routeur express, ce routeur devra définir une route par méthode de la classe GestionUtilisateur (à priori 2 POST et un DELETE)
4) Rajouter le routeur à l'application express
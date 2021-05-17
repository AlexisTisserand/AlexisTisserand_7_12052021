# 🏢 Groupomania

Septième et dernier projet du parcours "Développeur Web" proposé par OpenClassrooms. <br>
L'objectif de ce projet était de **construire un réseau social interne pour les employés de Groupomania**. Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a laissé libre cours à son imagination pour les fonctionnalités du réseau et a imaginé plusieurs briques pour favoriser les échanges entre collègues. 

Vous trouverez le [brief complet ici](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P7/Groupomania_Specs_FR_DWJ_VF.pdf) 👀

## 🔧 TECHNOLOGIES UTILISÉES

#### 💡 Backend : 
- Framework : Express
- Serveur : NodeJS
- Base de données : MySQL
- ORM : Sequelize

#### 💡 Frontend : 
- Framework : React.js ⚛️
- Librairies : antD, material-ui

## 🎓 OBJECTIFS & COMPÉTENCES ÉVALUÉES

***L'objectif de ce projet était de créer le backend et le frontend de l'application. Autrement dit, ce réseau social est mon premier projet full-stack***

Ce repository contient les deux dossiers `frontend` et `backend`

#### Compétences évaluées 
- Gérer un stockage de données à l'aide de SQL
- Personnaliser le contenu envoyé à un client web
- Implémenter un stockage de données sécurisé en utilisant SQL
- Authentifier un utilisateur et maintenir sa session

#### Réalisation de l'API
L’entreprise ayant subi quelques attaques sur son site web ces dernières semaines, pour ce projet les données des utilisateurs doivent être parfaitement protégées. Plusieurs exigeances : 
- API doit respecter le RGPD et les standards OWASP ✅ 
- le mot de passe utilisateur doit être chiffré ✅
- l'authentification est renforcée sur les routes requises ✅ 
- les adresses mails de la base de données sont uniques ✅

## 🔨 INSTALLATION

* Cloner ce repository depuis Github

 #### 💡 Frontend
 - Ouvrir le terminal dans le dossier frontend et exécuter `npm install`
 - Installer sass : `npm install node-sass`
 - Accéder au serveur de développement avec `ng serve` ou `npm start`
 - Rendez-vous à l'adresse suivante : [http://localhost:4200](http://localhost:4200)

#### 💡 Backend
- Avant toute chose, vous devez créer un fichier `.env` dans le backend du projet et y renseigner dans une constante `DB_URI` votre adresse SRV MongoDB de la forme suivante : `DB_URI="mongodb+srv://<USERNAME>:<PASSWORD>@clusteroc.ldrlw.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority"`
- Ensuite dans le même dossier `.env` , créer une constante `JWT_TOKEN` où vous inscrirez une chaîne de caractère complexe. Exemple : `JWT_TOKEN="&àçZSKLMDJGPZôlpsqkafapPKAPEFGOJPGd9876549"`
- Ouvrir le terminal dans le dossier backend et installer le package nodemon : `npm install --save nodemon`
- Enfin, lancez le serveur avec `nodemon server`

#### 👤 Connexion
- Ouvrir [localhost:4200](http://localhost:4200/) dans votre navigateur.
- Pour s'inscrire, l'utilisateur doit fournir un email ainsi qu'un mot de passe qui doit contenir 8 caractères minimum (dont 1 majucules, 1 chiffre, sans espaces) 

## 🔧 TECHNOLOGIES UTILISÉES
- Framework : Express
- Serveur : NodeJS
- Base de données : MongoDB
- Toutes les opérations de la base de données doivent utiliser le pack Mongoose avec des schémas de données strictes

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
- Librairies : ant-design, material-ui

## 🎓 OBJECTIFS & COMPÉTENCES ÉVALUÉES

***L'objectif de ce projet était de créer le backend et le frontend de l'application. Autrement dit, ce réseau social est mon premier projet full-stack***

Ce repository contient les deux dossiers `frontend` et `backend`

#### Compétences évaluées 
- Gérer un stockage de données à l'aide de SQL 
- Personnaliser le contenu envoyé à un client web
- Implémenter un stockage de données sécurisé en utilisant SQL
- Authentifier un utilisateur et maintenir sa session

## 🔨 INSTALLATION

* Cloner ce repository depuis Github

### 💡 Backend

#### Installation
- Dans le terminal de VSCODE, situez-vous dans le dossier /backend.
- Démarrer `npm install` pouur installer toutes les dependencies du backend.
- Ensuite, vous devez créer un fichier `.env` dans le dossier backend du projet et y renseigner les champs suivants :
  - **DATABASE** = le nom de la base de données souhaitées (*ex : groupomania_db*)
  - **DATABASE_HOST** = le host souhaité (*ex : localhost*)
  - **DATABASE_PASSWORD** = le mot de passe utilisateur de votre admin MySQL (*ex : passwordMYSQL*)
  - **DATABASE_USER** = le nom de votre utilisateur (*ex : root*)
  - **TOKEN_SECRET** = votre token souhaité, veuillez à ce qu'il soit assez long et complexe. Pour créer un Token avec node, utilisez votre terminal, écrivez `node`, validez, puis rentrez la commande suivante : `require('crypto').randomBytes(64).toString('hex')`.
- Écrivez dans le terminal `node config_db.js`
- Enfin, lancez le serveur avec `nodemon server`

 ### 💡 Frontend
 - Ouvrir le terminal dans le dossier frontend et exécuter `npm install` pour installer les dépendances.
 - Accéder au serveur de développement `npm start`
 - Rendez-vous à l'adresse suivante : [http://localhost:3000](http://localhost:3000)


### 👤 Connexion et droits admin
- Ouvrir [localhost:3000](http://localhost:3000/) dans votre navigateur.
- Pour s'inscrire, l'utilisateur doit fournir un prénom, un nom, un email ainsi qu'un mot de passe qui doit contenir 8 caractères minimum (dont 1 majucules, 1 chiffre, sans espaces) 
- Pour les droits d'administrateur, allez dans la table `user_roles`, modifiez le champ `roleId` et mettez le sur **3** sur l'utilisateur voulu (via Workbench par exemple)


const mysql = require('mysql')
require('dotenv').config()

const connectParams = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD
})

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
})

// DataBase
//====================================================================

const schema = `CREATE DATABASE ${process.env.DATABASE}`

// Table user
//====================================================================

const userTable =
  'CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL,`lastName` varchar(255) NOT NULL,`email` varchar(255) NOT NULL,`password` varchar(255) NOT NULL, `description` varchar(255) DEFAULT NULL, `image` varchar(255) DEFAULT NULL, `createdAt` datetime NOT NULL, `updatedAt` datetime NOT NULL,PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;'

// Tables user_roles
//====================================================================

const userRoles =
  'CREATE TABLE `user_roles` (`createdAt` datetime NOT NULL,`updatedAt` datetime NOT NULL,    `roleId` int NOT NULL, `userId` int NOT NULL, PRIMARY KEY (`roleId`,`userId`),KEY `userId` (`userId`), CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;'

const insertRoles =
  "INSERT INTO `roles` VALUES (1,'user','2021-05-17 12:24:27','2021-05-17 12:24:27'),(2,'moderator','2021-05-17 12:24:27','2021-05-17 12:24:27'),(3,'admin','2021-05-17 12:24:27','2021-05-17 12:24:27');"

// uploads table
//====================================================================

const uploadsTable =
  'CREATE TABLE `uploads` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL,  `image` varchar(255) DEFAULT NULL, `description` varchar(255) DEFAULT NULL, `userId` int NOT NULL, `likes` json DEFAULT NULL, `createdAt` datetime NOT NULL,  `updatedAt` datetime NOT NULL, PRIMARY KEY (`id`), KEY `userId` (`userId`), CONSTRAINT `uploads_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;'

// comments table
//====================================================================

const commentsTable =
  'CREATE TABLE `comments` (`id` int NOT NULL AUTO_INCREMENT,`commentBody` varchar(255) NOT NULL, `userId` int NOT NULL, `uploadId` int NOT NULL,`createdAt` datetime NOT NULL, `updatedAt` datetime NOT NULL, PRIMARY KEY (`id`), KEY `userId` (`userId`), KEY `uploadId` (`uploadId`), CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`uploadId`) REFERENCES `uploads` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;'

// Likes table
//====================================================================

const likesTable =
  'CREATE TABLE `likes` (`id` int NOT NULL AUTO_INCREMENT, `userId` int NOT NULL, `uploadId` int NOT NULL, `createdAt` datetime NOT NULL, `updatedAt` datetime NOT NULL, PRIMARY KEY (`id`),   KEY `userId` (`userId`),  KEY `uploadId` (`uploadId`),  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,    CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`uploadId`) REFERENCES `uploads` (`id`) ON DELETE CASCADE ON UPDATE CASCADE  ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;'

const globalSelect =
  "SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));"

const runQuery = query => {
  return new Promise((resolve, reject) => {
    try {
      db.query(query, function (err, result) {
        if (err) throw err
        resolve(true)
      })
    } catch (err) {
      reject(err)
    }
  })
}

const runInstall = () => {
  const cycle = async () => {
    const createDB = () => {
      return new Promise((resolve, reject) => {
        try {
          connectParams.connect(function (err) {
            if (err) throw err
            console.log(
              '--- Bienvenue au configurateur de la base de données pour Groupomania ---'
            )
            console.log('Veuillez patienter quelques seconds...')
            console.log('Connecté au serveur MySQL')
            connectParams.query(schema, function (err, result) {
              if (err) throw err
              console.log(`Schema ${process.env.DATABASE} créé correctement`)
              resolve(true)
            })
          })
        } catch (err) {
          reject(err)
        }
      })
    }
    await createDB()
    db.connect(async function (err) {
      if (err) throw err
      try {
        const users = await runQuery(userTable)
        console.log('Tableau users créé correctement')
        const categories = await runQuery(uploadsTable)
        console.log('Tableau uploads créé correctement')
        const insert_roles = await runQuery(insertRoles);
        console.log("categories créées correctement");
        const roles = await runQuery(userRoles)
        const comments = await runQuery(commentsTable)
        console.log('Tableau comments créé correctement')
        const likes = await runQuery(likesTable)
        console.log('Tableaux reactions créé correctement')
        const selectInfo = await runQuery(globalSelect)
        console.log('option global select activée')
        console.log('Votre base de données a été bien configurée')
        console.log('--- Fin du programme ---')
        process.exit()
      } catch (err) {
        console.log('ERROR =>', err)
      }
    })
  }
  cycle()
}

runInstall()

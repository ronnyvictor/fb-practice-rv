// Import restaurants (reads JSON file)
const restaurants = require('./restaurants.json')

// Import a set of tools to talk to firebase and firestore
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app')
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore')

// Import our creds
const credentials = require('./credentials.json')
const { array } = require('yargs')

// connect to firebase services (ignored by github)
initializeApp({
    credential: cert(credentials)
})

//connect to firestore
const db = getFirestore()

// Create a Collection called 'restaurants'
const restRef = db.collection('restaurants')


// Add each restaurant
// restRef.add(restaurants[1])
// .then(doc => {
//     console.log('Added restaurant', doc.id)
// })
// .catch(err => {
//     console.error(err)
// })

// Read one document
// restRef.doc('Vfg6xzNrHyK5AGDufxNV').get()
// .then(doc => {
//     console.log(doc.id, '=>', doc.data())
// })
// .catch(err => {
//     console.error(err)
// })

// Get all documents
// restRef.get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         console.log (doc.id, '=>', doc.data())
//     })
// })
// .catch(console.error)

// find document(s)
restRef.where('name', '==', 'Bolay').get()
.then((snapshot) => {
    snapshot.forEach(doc => {
        console.log(doc.data())
    })
})
.catch(console.error)
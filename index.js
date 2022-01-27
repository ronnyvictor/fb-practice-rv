// Import restaurants
const restaurants = require('./restaurants.json')

// Import a set of tools to talk to firebase and firestore
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app')
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore')

// Import our creds
const credentials = require('./credentials.json')

// connect to firebase services
initializeApp({
    credential: cert(credentials)
})

//connect to firestore
const db = getFirestore()

// Create a Collection called 'restaurants'


// Add each restaurant
db.collection('restaurants').add(restaurants[1])
.then(doc => {
    console.log('Added restaurant', doc.id)
})
.catch(err => {
    console.error(err)
})
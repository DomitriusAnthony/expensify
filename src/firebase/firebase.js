import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCgiPDuC5nmiwZAIugybY6KxXYanwxipPI",
    authDomain: "expensify-a38c2.firebaseapp.com",
    databaseURL: "https://expensify-a38c2.firebaseio.com",
    projectId: "expensify-a38c2",
    storageBucket: "expensify-a38c2.appspot.com",
    messagingSenderId: "991645717593"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
})

setTimeout(() => {
    database.ref('name').set('Dom');
}, 3500);

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// setTimeout(() => {
//     database.ref('age').set(4444444444)
// }, 3005);


// database.ref().once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
// }).catch((e) => {
//     console.log('Error fetching data', e);
// })

// database.ref().set({
//     name: 'Domitrius Clark',
//     age: 24,
//     stressLevel: 6,
//     job: {
//         title: 'Software Dev',
//         company: "Google"
//     },
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('this failed', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle').remove()

// .then(() => {
//     console.log('The value was removed');
// }).catch((e) => {
//     console.log('Nope', e);
// });

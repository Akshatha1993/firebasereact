import Firebase from 'firebase';
let config = {
    apiKey:'AIzaSyC6VCJ5vEEAsyJxSGq029T4bk6sgJMCPIM',
    authDomain:'fir-demo-d7d2d.firebaseapp.com',
    projectId:'fir-demo-d7d2d',
    messagingSenderId:'326876144085',
    databaseURL:'https://fir-demo-d7d2d.firebaseio.com',
    storageBucket: "fir-demo-d7d2d.appspot.com",
}
let app = Firebase.initializeApp(config)
export default db = app.database();
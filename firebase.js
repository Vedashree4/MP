
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCjxxP7BOI16DA8dxLU32JYLsQX_uTBxjQ",
    authDomain: "health-and-fitness-track-c0cb8.firebaseapp.com",
    projectId: "health-and-fitness-track-c0cb8",
    storageBucket: "health-and-fitness-track-c0cb8.appspot.com",
    messagingSenderId: "229887182904",
    appId: "1:229887182904:web:04f7cdf423b48be368becd",
    measurementId: "G-TBM1H6KEE9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
module.exports={
  app
}

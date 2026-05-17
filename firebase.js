import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

import { getStorage }
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-storage.js";

const firebaseConfig = {
      apiKey: "AIzaSyAGNPNq_hkyUL4CRrUCNpMMQA9CmLGZy5o",
      authDomain: "ynjfabrickor.firebaseapp.com",
      projectId: "ynjfabrickor",
      storageBucket: "ynjfabrickor.firebasestorage.app",
      messagingSenderId: "807605740695",
      appId: "1:807605740695:web:4aaa88cf3387266bb635d2"
    };

export const app =
  initializeApp(firebaseConfig);

export const db =
  getFirestore(app);

export const storage =
  getStorage(app);
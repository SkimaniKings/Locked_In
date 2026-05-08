import { toggleDarkMode } from "./store/theme";
import { db } from "./lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function App() {

  // ✅ WRITE TEST
  const testFirestore = async () => {
    console.log("🔥 Test Firestore clicked");

    try {
      const docRef = await addDoc(collection(db, "test"), {
        message: "Firestore is working 🚀",
        createdAt: new Date().toISOString(), // cleaner than Date object
      });

      console.log("✅ Document written with ID:", docRef.id);
    } catch (e) {
      console.error("❌ Firestore write error:", e);
    }
  };

  // ✅ READ TEST
  const readFirestore = async () => {
    console.log("📖 Reading Firestore...");

    try {
      const querySnapshot = await getDocs(collection(db, "test"));

      querySnapshot.forEach((doc) => {
        console.log("📄 Doc:", doc.id, doc.data());
      });
    } catch (e) {
      console.error("❌ Firestore read error:", e);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] flex flex-col items-center justify-center gap-4">

      <h1 className="text-2xl font-semibold">
        Locked In
      </h1>

      <p className="text-[var(--color-text-muted)]">
        Your productivity system
      </p>

      <button
        onClick={toggleDarkMode}
        className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-[var(--radius-sm)]"
      >
        Toggle Theme
      </button>

      <button
        onClick={testFirestore}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Write to Firestore
      </button>

      <button
        onClick={readFirestore}
        className="bg-purple-500 text-white px-4 py-2 rounded"
      >
        Read Firestore
      </button>

    </div>
  );
}

export default App;
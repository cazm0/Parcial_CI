import bunnyBody from './assets/bunny_body.png';
import { useState } from "react";
import { categories } from './data/clothingCategory';
export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("outfit");
  
  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [selectedHat, setSelectedHat] = useState(null);
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const selectedCategoryData = categories.find(cat => cat.key === selectedCategory);
  
  // Si existe, asignamos sus opciones
  const options = selectedCategoryData ? selectedCategoryData.options : [];
  return (
    <div className="app-container" style={styles.appContainer}>

      <header style={styles.header}>
        <div style={styles.headerBox}>
          <img
            src="/bunny_icon.png"
            alt="Bunny Icon"
            style={{ width: 40, height: 40, objectFit: 'contain' }}
          />
          <h1 style={styles.title}>Build and Dress</h1>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.bunnyPlaceholder}>
          <img src={bunnyBody} alt="Bunny Body" style={styles.bunnyImage} />
          {selectedOutfit && (
            <img src={selectedOutfit.image} alt={selectedOutfit.id} style={styles.bunnyImage} />
          )}
          {selectedHat && (
            <img src={selectedHat.image} alt={selectedHat.id} style={styles.bunnyImage} />
          )}
          {selectedAccessory && (
            <img src={selectedAccessory.image} alt={selectedAccessory.id} style={styles.bunnyImage} />
          )}
        </div>
        <div style={styles.clothesPlaceholder}>
          <div style={styles.buttonsContainer}>
            {categories.map(({ key, emoji }) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                style={{
                  ...styles.button,
                  ...(selectedCategory === key ? styles.activeButton : {}),
                }}
                aria-label={key}
              >
                {emoji}
              </button>
            ))}
          </div>
          <div style={styles.contentDisplay}>
            {options.length > 0 &&
              options.map((option, index) => (
                <button
                  key={index}
                  style={styles.optionButton}
                  onClick={() => {
                    if (selectedCategory === "outfit") setSelectedOutfit(option);
                    if (selectedCategory === "hats") setSelectedHat(option);
                    if (selectedCategory === "accessories") setSelectedAccessory(option);
                  }}
                >
                  <img
                    src={option.image}
                    alt={option.id}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </button>
              ))}
          </div>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>Build and Dress © 2025 - UTN FRRe</p>
      </footer>

    </div>
  );
}

const styles = {
  appContainer: {
    minHeight: '100vh',
    backgroundColor: '#d9f0d9',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '1rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '2rem',
  },
  headerBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: '#a3d9a5',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
  },
  main: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
    bunnyPlaceholder: {
    flexGrow: 1,
    position: 'relative',
    width: '300px',        // tamaño fijo o relativo
    height: '300px',
    border: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '1rem',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
  },
  bunnyImage: {
    position: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  clothesPlaceholder: {
    flexGrow: 1,
    minWidth: '200px',
    maxWidth: '400px',
    height: '200px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    padding: '1rem',
    textAlign: 'center',
    flexDirection: "column",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "15px",
  },
  button: {
    fontSize: "1.5rem",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
  },
  activeButton: {
    fontWeight: "bold",
    color: "blue",
  },
  contentDisplay: {
    fontSize: "1.2rem",
    color: "black",
    textAlign: "center",
    width: "100%",
    height: "150px",
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
  },
  optionButton: {
  width: '80px',
  height: '80px',
  padding: '0',
  border: '1px solid #ccc',
  borderRadius: '8px',
  margin: '5px',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
},
  footer: {
    textAlign: 'center',
    fontSize: '0.8rem',
    color: '#444',
    marginTop: '1rem',
  },
};

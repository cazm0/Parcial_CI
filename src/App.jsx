import bunnyBody from './assets/bunny_body.png';

export default function App() {
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
          <img src={bunnyBody} alt="Bunny Body" style={styles.bunnyImage}/>
        </div>
        <div style={styles.clothesPlaceholder}>
          <p>Opciones de ropa aquí</p>
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
    backgroundColor: '#d9f0d9', // verde pastel
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
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',   // mantiene proporción y adapta
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
  },
  footer: {
    textAlign: 'center',
    fontSize: '0.8rem',
    color: '#444',
    marginTop: '1rem',
  },
};

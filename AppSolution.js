```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add a catch-all route to handle unmatched paths, preventing unexpected behavior. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { 
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function About() { 
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

function Contact() { 
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
    </div>
  );
}
export default App;
```
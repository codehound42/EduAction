import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ParallaxProvider } from 'react-scroll-parallax';

const rootElement = document.getElementById( 'root' );
const root = createRoot( rootElement );

root.render(
    <StrictMode>
        <ParallaxProvider>
            <App />
        </ParallaxProvider>
    </StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
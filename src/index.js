import React from "react"
import { createRoot } from 'react-dom/client';
import Game from "./Game"
import "./Game.css"

const container = document.getElementById('game');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Game tab="home" />);

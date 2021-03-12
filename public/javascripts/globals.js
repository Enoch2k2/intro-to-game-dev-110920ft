const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); // used for drawing
const animate = window.requestAnimationFrame; // used for animating

// game window details
const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

const UP_KEY = 87;
const DOWN_KEY = 83;
const LEFT_KEY = 65;
const RIGHT_KEY = 68;
const SPACE_BAR = 32;

let player;
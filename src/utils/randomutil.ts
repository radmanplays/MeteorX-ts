export const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
selectRandom = (items) => items[rand(0, items.length - 1)];
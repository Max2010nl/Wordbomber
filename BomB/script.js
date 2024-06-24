document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const submitWordButton = document.getElementById('submit-word');
    const viewWordListButton = document.getElementById('view-word-list');
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    const backToGameButton = document.getElementById('back-to-game');
    const wordInput = document.getElementById('word-input');
    const letterDisplay = document.getElementById('letter-display');
    const wordListElement = document.getElementById('word-list');
    
    const homeScreen = document.getElementById('home-screen');
    const gameScreen = document.getElementById('game-screen');
    const wordListScreen = document.getElementById('word-list-screen');
    
    let usedWords = [];
    let currentLetter = 'A';
    
    const aiWords = {
        'A': ['Apple', 'Ant', 'Axe', 'Air', 'Animal', 'Anchor', 'April', 'Arrow', 'Astronaut', 'Artist'],
        'B': ['Banana', 'Bee', 'Box', 'Ball', 'Bat', 'Bread', 'Book', 'Butterfly', 'Bridge', 'Button'],
        'C': ['Cat', 'Car', 'Cup', 'Cake', 'Card', 'Candle', 'Castle', 'Cloud', 'Clown', 'Coin'],
        'D': ['Dog', 'Duck', 'Door', 'Doll', 'Drum', 'Desk', 'Daisy', 'Dance', 'Dragon', 'Donut'],
        'E': ['Elephant', 'Eagle', 'Egg', 'Engine', 'Earth', 'Eel', 'Echo', 'Elbow', 'Eraser', 'Elf'],
        'F': ['Fish', 'Fox', 'Frog', 'Fan', 'Fire', 'Flower', 'Feather', 'Flag', 'Fence', 'Forest'],
        'G': ['Goat', 'Goose', 'Grapes', 'Guitar', 'Garden', 'Ghost', 'Gift', 'Gate', 'Glove', 'Gold'],
        'H': ['Hat', 'Horse', 'House', 'Harp', 'Heart', 'Hill', 'Honey', 'Hammer', 'Helicopter', 'Hedgehog'],
        'I': ['Ice', 'Iron', 'Ivy', 'Igloo', 'Island', 'Idea', 'Insect', 'Ink', 'Internet', 'Image'],
        'J': ['Jam', 'Jar', 'Jelly', 'Jet', 'Jewel', 'Joke', 'Journey', 'Judge', 'Jacket', 'Jaguar'],
        'K': ['Kite', 'Key', 'Kangaroo', 'King', 'Kitten', 'Kiwi', 'Knife', 'Kitchen', 'Kettle', 'Knight'],
        'L': ['Lion', 'Lamp', 'Leaf', 'Lake', 'Lemon', 'Ladder', 'Laptop', 'Lighthouse', 'Lock', 'Lamb'],
        'M': ['Mouse', 'Monkey', 'Moon', 'Mountain', 'Milk', 'Map', 'Mango', 'Mirror', 'Mushroom', 'Music'],
        'N': ['Nest', 'Nail', 'Nut', 'Notebook', 'Needle', 'Night', 'Nose', 'Net', 'Necklace', 'Ninja'],
        'O': ['Owl', 'Orange', 'Octopus', 'Ocean', 'Oven', 'Oyster', 'Olive', 'Onion', 'Oxygen', 'Orchid'],
        'P': ['Pig', 'Parrot', 'Piano', 'Pizza', 'Pencil', 'Peach', 'Pumpkin', 'Plane', 'Panda', 'Pear'],
        'Q': ['Queen', 'Quilt', 'Quill', 'Quest', 'Quick', 'Quack', 'Quiet', 'Quilt', 'Quartz', 'Quarter'],
        'R': ['Rabbit', 'Robot', 'Rainbow', 'River', 'Ring', 'Rose', 'Rocket', 'Road', 'Rat', 'Rice'],
        'S': ['Snake', 'Sun', 'Star', 'Ship', 'Shell', 'Shark', 'Sword', 'Snow', 'Stone', 'Sand'],
        'T': ['Tiger', 'Turtle', 'Tree', 'Train', 'Table', 'Tomato', 'Tooth', 'Tower', 'Towel', 'Truck'],
        'U': ['Umbrella', 'Unicorn', 'Uniform', 'Universe', 'Urchin', 'Urn', 'UFO', 'Ukulele', 'Utensil', 'Umpire'],
        'V': ['Van', 'Vase', 'Vine', 'Violin', 'Volcano', 'Vulture', 'Velvet', 'Vest', 'Voice', 'Valve'],
        'W': ['Whale', 'Wolf', 'Wind', 'Window', 'Water', 'Wing', 'Wizard', 'Wheel', 'Watch', 'Wall'],
        'X': ['Xylophone', 'Xenon', 'X-ray', 'Xylem', 'Xenon', 'Xerox', 'Xebec', 'Xenolith', 'Xenophobe', 'Xenogenesis'],
        'Y': ['Yak', 'Yarn', 'Yogurt', 'Yacht', 'Yellow', 'Yawn', 'Yeti', 'Year', 'Yolk',

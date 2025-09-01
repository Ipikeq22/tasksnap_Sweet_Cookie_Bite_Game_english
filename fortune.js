// Fortune Cookie Content
const fortuneData = {
    // Jokes
    jokes: [
        "Why is a penguin’s belly white? Because its arms are too short to wash it!",
        "Which animal is most often stuck on the wall? A seal (poster)!",
        "Why does an ant die when it falls from a tall building? Because it’s too light and starves to death!",
        "Which fish is the smartest? The whale, because it knows how to spout (count)!",
        "Why do pandas wear sunglasses? Because they already have dark circles!",
        "Why don’t mosquitoes get crushed by raindrops? Because they’re too light; raindrops feel like feathers to them!",
        "What gets dirtier the more you wash it? Water!",
        "Why do doctors wear masks? Because they don’t want to be recognized!",
        "Which animal always asks 'why'? The pig!",
        "Why don’t fish drown? Because they can swim!",
        "Which fruit is the busiest? Mango (sounds like 'busy fruit')!",
        "Why don’t spiders need the internet? Because they already have webs!",
        "Which animal makes the most phone calls? The bear (sounds like 'can')!",
        "Why don’t birds use GPS? Because they have built-in navigation!",
        "Which vegetable is the most polite? Chives (sounds like 'long time polite')!",
        "Why don’t cats play poker? Because they’re afraid of dogs!",
        "Which animal loves watching TV the most? The TV itself!",
        "Why don’t snails get lost? Because they carry their houses!",
        "Which fruit comforts people the most? Orange (sounds like 'have Ding' in Chinese, meaning support)!",
        "Why don’t crabs like to share? Because they’re too selfish (crab-ish)!",
        "Which animal saves money best? The piggy bank pig!",
        "Why don’t earthworms wear shoes? Because they don’t have feet!",
        "Which vegetable dances best? Cabbage (sounds like 'dance move')!",
        "Why aren’t mice afraid of cats? Because they live in computers!",
        "Which animal sings the best? The whale!",
        "Why are bees always busy? Because they’re making honey!",
        "Which fruit talks the most? The orange!",
        "Why do turtles run slow? Because they’re never in a hurry!",
        "Which animal calculates best? The abacus!",
        "Why don’t fish walk? Because they have fins!",
        "Which vegetable swims best? Seaweed!",
        "Why are butterflies so beautiful? Because they wear makeup!",
        "Which animal drives best? The horse (horse road)!",
        "Why do mosquitoes bite people? Because they’re hungry!",
        "Which fruit runs the fastest? Grapes (sounds like 'run fruit')!",
        "Why don’t owls sleep at night? Because they work the night shift!",
        "Which animal writes best? The pen!",
        "Why do dogs wag their tails? Because they’re happy!",
        "Which vegetable sings best? Cabbage (sounds like 'high song')!",
        "Why do spiders weave webs? Because they’re natural programmers!",
        "Which animal takes the best photos? The elephant (sounds like 'camera')!",
        "Why do fish swim? Because they can’t walk!",
        "Which fruit tells the best jokes? The orange!",
        "Why do snails walk slowly? Because they’re taking a stroll!",
        "Which animal types fastest? The keyboard!",
        "Why do earthworms dig? Because they’re treasure hunting!",
        "Which vegetable jumps highest? Bean sprouts!",
        "Why do bees fly? Because they have wings!",
        "Which animal paints best? The brush!",
        "Why do crabs walk sideways? Because they’re unique!",
        "Which fruit dances best? The peach (sounds like 'dance')!",
        "Why do butterflies fly? Because they’re light!",
        "Which animal repairs best? The repairman!",
        "Why don’t fish talk? Because they’re underwater!",
        "Which vegetable performs magic? The magician!",
        "Why are mosquitoes so small? Because they save space!"
    ],
    
    // Famous Quotes
    quotes: [
        "Success is not final, failure is not fatal: it is the courage to continue that counts.\n\n- Winston Churchill",
        "Life is like riding a bicycle. To keep your balance, you must keep moving.\n\n- Albert Einstein",
        "The you of today is the result of your past habits.\n\n- Buddha",
        "Do not wait for opportunities, create them.\n\n- George Bernard Shaw",
        "The only constant is change itself.\n\n- Heraclitus",
        "Imagination is more important than knowledge.\n\n- Albert Einstein",
        "Do the thing you fear, and the death of fear is certain.\n\n- Franklin D. Roosevelt",
        "The secret of success is consistency of purpose.\n\n- Benjamin Disraeli",
        "The greatest glory in living lies not in never falling, but in rising every time we fall.\n\n- Nelson Mandela",
        "Your time is limited, don’t waste it living someone else’s life.\n\n- Steve Jobs",
        "Darkness cannot drive out darkness; only light can do that.\n\n- Martin Luther King Jr.",
        "Education is the most powerful weapon which you can use to change the world.\n\n- Nelson Mandela",
        "Ask not what your country can do for you—ask what you can do for your country.\n\n- John F. Kennedy",
        "I have a dream.\n\n- Martin Luther King Jr.",
        "Genius is 1% inspiration and 99% perspiration.\n\n- Thomas Edison",
        "The people who are crazy enough to think they can change the world are the ones who do.\n\n- Steve Jobs",
        "Success is going from failure to failure without losing enthusiasm.\n\n- Winston Churchill",
        "Be the star of your own life, not a supporting role in someone else’s story.\n\n- Lin Yutang",
        "Life is not a rehearsal; every day is live.\n\n- Oprah Winfrey",
        "The best time is now.\n\n- Laozi",
        "Knowledge is power.\n\n- Francis Bacon",
        "I think, therefore I am.\n\n- René Descartes",
        "All men are created equal.\n\n- Thomas Jefferson",
        "Give me a place to stand, and I will move the earth.\n\n- Archimedes",
        "Isn’t it a joy to study and practice what you have learned?\n\n- Confucius",
        "When three walk together, one can be my teacher.\n\n- Confucius",
        "To know what you know and to know what you don’t know, that is true knowledge.\n\n- Confucius",
        "Do not impose on others what you do not desire yourself.\n\n- Confucius",
        "Reviewing the old and learning the new makes you a teacher.\n\n- Confucius",
        "Learning without thought is labor lost; thought without learning is perilous.\n\n- Confucius",
        "Where there is a will, there is a way.\n\n- Emperor Guangwu of Han",
        "A horse’s strength is known by distance, a man’s heart by time.\n\n- Yuan Dynasty proverb",
        "At the end of difficulties, there is always a bright path.\n\n- Lu You",
        "The sea admits hundreds of rivers; tolerance is greatness.\n\n- Lin Zexu",
        "As heaven keeps moving forward, so should a gentleman strive unceasingly.\n\n- I Ching",
        "As the earth is vast, a gentleman should hold virtue and capacity.\n\n- I Ching",
        "Wealth cannot corrupt, poverty cannot move, power cannot bend.\n\n- Mencius",
        "Born in hardship, die in comfort.\n\n- Mencius",
        "The people are most important, then the state, and the ruler is least.\n\n- Mencius",
        "Respect the old as you would your own elders, care for the young as your own children.\n\n- Mencius",
        "Water can carry a boat, but it can also overturn it.\n\n- Xunzi",
        "Indigo blue comes from the indigo plant, yet is bluer than the plant itself.\n\n- Xunzi",
        "A journey of a thousand miles begins with a single step.\n\n- Laozi",
        "He who knows others is wise; he who knows himself is enlightened.\n\n- Laozi",
        "Great truths are simple.\n\n- Laozi",
        "The highest good is like water.\n\n- Laozi",
        "Rule by non-action.\n\n- Laozi",
        "The Tao that can be spoken is not the eternal Tao.\n\n- Laozi",
        "Difficult tasks must be done when they are easy.\n\n- Laozi",
        "A tree as big as a man’s embrace grows from a tiny seedling.\n\n- Laozi",
        "A nine-story tower starts with a pile of earth.\n\n- Laozi",
        "A dike of a thousand miles can collapse from an ant hole.\n\n- Han Feizi",
        "A blessing in disguise.\n\n- Huainanzi",
        "One who stays near vermilion becomes red, near ink becomes black.\n\n- Fu Xuan"
    ],
    
    // Daily Fortune
    fortune: [
        "Today’s Fortune: ★★★★☆ Suitable to try new things, you’ll gain unexpected rewards!",
        "Today’s Fortune: ★★★☆☆ Stay calm and steady; progress comes step by step.",
        "Today’s Fortune: ★★★★★ Great luck! Today is your lucky day!",
        "Today’s Fortune: ★★☆☆☆ Be cautious, avoid impulsive decisions.",
        "Today’s Fortune: ★★★★☆ Good relationships today, perfect for hanging out with friends.",
        "Today’s Fortune: ★★★☆☆ Average wealth luck, be careful with money matters.",
        "Today’s Fortune: ★★★★★ Excellent love luck, singles may find someone!",
        "Today’s Fortune: ★★★☆☆ Work is stable, suitable for routine tasks.",
        "Today’s Fortune: ★★★★☆ Good study luck, a great time to learn.",
        "Today’s Fortune: ★★☆☆☆ Watch your health, get more rest.",
        "Today’s Fortune: ★★★★★ Helpful people will appear; expect strong support.",
        "Today’s Fortune: ★★★☆☆ Emotions may fluctuate; stay calm.",
        "Today’s Fortune: ★★★★☆ Creative inspiration flows, perfect for art.",
        "Today’s Fortune: ★★☆☆☆ Poor traffic luck; be careful when going out.",
        "Today’s Fortune: ★★★★★ Excellent investment luck; consider financial planning.",
        "Today’s Fortune: ★★★☆☆ Family harmony; good time to gather with loved ones.",
        "Today’s Fortune: ★★★★☆ Active social luck; you may meet new friends.",
        "Today’s Fortune: ★★☆☆☆ Stress levels high, remember to relax.",
        "Today’s Fortune: ★★★★★ Career luck is smooth, promotion is possible.",
        "Today’s Fortune: ★★★☆☆ Romance luck is average, be patient in love.",
        "Today’s Fortune: ★★★★☆ Extra money luck; small surprises await.",
        "Today’s Fortune: ★★☆☆☆ Communication misunderstandings may happen, choose words carefully.",
        "Today’s Fortune: ★★★★★ A burst of inspiration; creativity unlimited.",
        "Today’s Fortune: ★★★☆☆ Good day for tidying up your environment.",
        "Today’s Fortune: ★★★★☆ Great sports luck; outdoor activities go well.",
        "Today’s Fortune: ★★☆☆☆ Electronics may break down; back up data.",
        "Today’s Fortune: ★★★★★ Perfect day to learn new skills.",
        "Today’s Fortune: ★★★☆☆ Watch your diet, avoid overeating.",
        "Today’s Fortune: ★★★★☆ Shopping luck; you might find what you love.",
        "Today’s Fortune: ★★☆☆☆ Poor sleep quality; rest earlier.",
        "Today’s Fortune: ★★★★★ People are drawn to you; charm shines today.",
        "Today’s Fortune: ★★★☆☆ Good for reading and studying.",
        "Today’s Fortune: ★★★★☆ Travel luck; short trips are favorable.",
        "Today’s Fortune: ★★☆☆☆ Easy to lose things; stay alert.",
        "Today’s Fortune: ★★★★★ Strong intuition; trust your gut feeling.",
        "Today’s Fortune: ★★★☆☆ Good for paperwork and documents.",
        "Today’s Fortune: ★★★★☆ Food luck; enjoy something delicious.",
        "Today’s Fortune: ★★☆☆☆ Internet may be unstable; avoid important online tasks.",
        "Today’s Fortune: ★★★★★ Lucky color is red; wear it for good luck.",
        "Today’s Fortune: ★★★☆☆ Chatting with elders brings wisdom.",
        "Today’s Fortune: ★★★★☆ Music lifts your mood today.",
        "Today’s Fortune: ★★☆☆☆ Fatigue may hit; take vitamins.",
        "Today’s Fortune: ★★★★★ Your lucky day; seize opportunities.",
        "Today’s Fortune: ★★★☆☆ Time to organize your thoughts, make plans.",
        "Today’s Fortune: ★★★★☆ Pet luck; good interactions with furry friends.",
        "Today’s Fortune: ★★☆☆☆ Avoid major decisions today; observe more.",
        "Today’s Fortune: ★★★★★ Excellent day for starting a new project.",
        "Today’s Fortune: ★★★☆☆ Great for crafts and creativity.",
        "Today’s Fortune: ★★★★☆ Good dating luck; romance improves.",
        "Today’s Fortune: ★★☆☆☆ Disputes may arise; stay calm.",
        "Today’s Fortune: ★★★★★ Excellent exam luck; preparation pays off.",
        "Today’s Fortune: ★★★☆☆ Cleaning and organizing brings peace of mind.",
        "Today’s Fortune: ★★★★☆ Good time to buy electronics.",
        "Today’s Fortune: ★★☆☆☆ Mood may dip; surround yourself with positivity.",
        "Today’s Fortune: ★★★★★ You’re especially attractive today; confidence is high.",
        "Today’s Fortune: ★★★☆☆ Great time to learn a new language."
    ],
    
    // Fun Knowledge
    knowledge: [
        "Fun Fact: Honey is the only food that never spoils. Archaeologists found 3,000-year-old honey still edible!",
        "Fun Fact: Octopuses have three hearts and blue blood!",
        "Fun Fact: Bananas are berries, but strawberries are not!",
        "Fun Fact: Sharks are older than trees, existing for over 400 million years!",
        "Fun Fact: The human brain uses about the same energy as a 20-watt light bulb!",
        "Fun Fact: Snails can sleep for 3 years straight!",
        "Fun Fact: Polar bears’ skin is actually black!",
        "Fun Fact: Earthworms have 5 hearts!",
        "Fun Fact: Butterflies taste with their feet!",
        "Fun Fact: Cats cannot taste sweetness!",
        "Fun Fact: Penguins propose with pebbles!",
        "Fun Fact: Dolphins name themselves!",
        "Fun Fact: Elephants are the only mammals that can’t jump!",
        "Fun Fact: A bee’s wings beat 230 times per second!",
        "Fun Fact: Giraffes’ tongues can be 50 cm long!",
        "Fun Fact: Sloths only poop once a week!",
        "Fun Fact: Ants don’t get hurt falling from high places!",
        "Fun Fact: Platypuses are one of the few mammals that lay eggs!",
        "Fun Fact: Bats are the only flying mammals!",
        "Fun Fact: Hippos secrete pink-colored sweat!",
        "Fun Fact: Kangaroos can’t walk backwards!",
        "Fun Fact: Spiders have blue blood!",
        "Fun Fact: A whale’s heart is the size of a small car!",
        "Fun Fact: Cockroaches can live a week without a head!",
        "Fun Fact: Chameleons’ tongues are longer than their bodies!",
        "Fun Fact: Starfish don’t have brains!",
        "Fun Fact: Jellyfish are 95% water!",
        "Fun Fact: Mosquitoes prefer type O blood!",
        "Fun Fact: Owls can’t move their eyes!",
        "Fun Fact: Hummingbirds are the only birds that can fly backwards!",
        "Fun Fact: There are over 1 million types of insects on Earth!",
        "Fun Fact: A blue whale’s heartbeat can be heard 3 km away!",
        "Fun Fact: Snails have over 25,000 teeth!",
        "Fun Fact: Fireflies produce the most efficient light in the world!",
        "Fun Fact: Grasshoppers have ears on their legs!",
        "Fun Fact: Sharks existed before dinosaurs!",
        "Fun Fact: Bees dance to tell each other where flowers are!",
        "Fun Fact: Dolphins sleep with half their brain at a time!",
        "Fun Fact: Snails are hermaphrodites!",
        "Fun Fact: Ants can lift 50 times their own weight!",
        "Fun Fact: Bats use echolocation to navigate!",
        "Fun Fact: Penguins can jump 1.5 meters high!",
        "Fun Fact: Spider silk is stronger than steel!",
        "Fun Fact: Earthworms can sense light without eyes!",
        "Fun Fact: Butterflies usually only live 2–4 weeks!",
        "Fun Fact: Crabs breathe with gills but can survive on land!",
        "Fun Fact: A bee produces only one teaspoon of honey in its life!",
        "Fun Fact: Sea turtles can live over 100 years!",
        "Fun Fact: Snails leave slime trails when moving!",
        "Fun Fact: Ants always walk on the right side!",
        "Fun Fact: Bats hang upside down to take off quickly!",
        "Fun Fact: Spiders eat as much insect mass as all humans weigh each year!",
        "Fun Fact: Only female mosquitoes bite!",
        "Fun Fact: Butterflies can’t see their own wings!",
        "Fun Fact: Crabs’ walking style is determined by their genes!",
        "Fun Fact: Bees can see ultraviolet light!",
        "Fun Fact: Dolphins have their own language system!"
    ]
};

// Category Display Names
const categoryNames = {
    jokes: '😄 Jokes',
    quotes: '💭 Quotes', 
    fortune: '🌟 Daily Fortune',
    knowledge: '🧠 Knowledge'
};

// Game State
let isFirstFortune = true;
let previousFortune = null;

// Get Today’s Fortune
function getTodayFortune() {
    const randomIndex = Math.floor(Math.random() * fortuneData.fortune.length);
    return {
        category: categoryNames.fortune,
        content: fortuneData.fortune[randomIndex]
    };
}

// Get Random Fortune (excluding Today’s Fortune after first draw)
function getRandomFortune() {
    if (isFirstFortune) {
        isFirstFortune = false;
        const todayFortune = getTodayFortune();
        previousFortune = todayFortune;
        return todayFortune;
    }
    
    const categories = ['jokes', 'quotes', 'knowledge'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const categoryData = fortuneData[randomCategory];
    const randomIndex = Math.floor(Math.random() * categoryData.length);
    
    return {
        category: categoryNames[randomCategory],
        content: categoryData[randomIndex]
    };
}

// Reset Game State
function resetGameState() {
    isFirstFortune = true;
    previousFortune = null;
}

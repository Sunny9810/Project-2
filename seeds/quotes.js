const { Quotes } = require('../models/quotes.js');

const quotes = (req, res) => {
    Quotes.bulkCreate([
            {
                quote: "It's your workout, your body, your journey. OWN IT!",
            },
            {
                quote: "When you feel like quitting, think about why you started.",
            },
            {
                quote: "Mindset separates the best from the rest.",
            },
            {
                quote: "Love yourself by loving your body",
            },
            {
                quote: "Hard work + dedication = SUCCESS!",
            },
            {
                quote: "All things are difficult before they are easy.",
            },
            {
                quote: "It is about the journey not the destination.",
            },
            {
                quote: "If you are going to quit anything, quit making excuses.",
            },
            {
                quote: "Soreness is weakness leaving your body!",
            },
            {
                quote: "Best views always come after the hardest climbs.",
            },
    ])
    .then(() => {
        req.status(200).json({message: "quotes added successfully"});
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({message: "error seeding quotes"});
    });
};

module.exports = {
    quotes,
};
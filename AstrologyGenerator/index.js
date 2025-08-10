// Program to generate a random zodiac sign and
//  associated personality traits

//Arrays for zodiac signs and traits
const astrologySigns = [
   "Aries", "Taurus", "Gemini", "Cancer",
   "Leo", "Virgo", "Libra", "Scorpio",
    "Sagittarius", "Capricorn", "Aquarius", "Pisces"
] 
const personalityTraits = [
    "Adventurous", "Reliable", "Communicative", "Emotional",
    "Generous", "Analytical", "Diplomatic", "Intense",
    "Optimistic", "Disciplined", "Innovative", "Compassionate"
]
//Storage for the selected zodiac sign and traits
const zodiacSign = "";
const zodiacTraits = [];

// Get today's date in YYYY-MM-DD format
const getDate = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
}
// Function to generate a random zodiac sign and traits
const getZodiacSign = () => {
    //Get random zodiac sign from astrologySigns array
    const randomIndex = Math.floor(Math.random() * astrologySigns.length);
    const sign = astrologySigns[randomIndex];

    return sign;
}
    //Fuction to generate personality traits and return as an array
const getPersonalityTraits = () => {
    //Get 3 random traits from personalityTraits array
    const traits = [];
    while (traits.length < 3) {
        const traitIndex = Math.floor(Math.random() * personalityTraits.length);
        const trait = personalityTraits[traitIndex];

        if (!traits.includes(trait)) {
            traits.push(trait);
        }
    }
    return traits;
}
    //Function to display random daily horoscope
const getDailyHoroscope = () => {
    const horoscopes = [
        "Today is a great day to start something new.",
        "You may face some challenges, but you will overcome them.",
        "Expect good news from a friend or family member.",
        "Take time to relax and recharge your energy.",
        "Your creativity will shine today, use it wisely."
    ];
    const randomIndex = Math.floor(Math.random() * horoscopes.length);
    return horoscopes[randomIndex];
}

// Main function to generate and display zodiac sign and traits
const generateZodiac = () => {
    const sign = getZodiacSign();
    const traits = getPersonalityTraits();

    // Display the result
    console.log(`Today's date: ${getDate()}`);
    console.log(`Your zodiac sign is: ${sign}`);
    console.log(`Your personality traits are: ${traits.join(', ')}`);
   console.log(`Daily Horoscope: ${getDailyHoroscope()}`);
}

generateZodiac();

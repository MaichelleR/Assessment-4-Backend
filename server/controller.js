module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },





    getFortune: (req, res) => {
        const fortunes = ["A pleasant surprise is waiting for you", "Adventure can be real happiness", "Allow compassion to guide your decisions","Believe it can be done","Congratulations! You are on your way."]
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];
      
        res.status(200).send(randomFortunes);
    },

    getPopUp: (req, res) => {
        let url = "https://www.hdwallpaper.nu/wp-content/uploads/2015/02/maxresdefault.jpg"

        res.status(200).send(url)
    },

    putAttempt: (req, res) => {
        const str = "Everyone can use buttons"
        res.status(200).send(str)
    },

    postBtnExample: (req, res) => {
        const str = "Trying to Post"
        res.status(200).send(str)
    },

    postNumBtn: (req, res) => {
        let { num } = req.body
        const str = `${num}`
        res.status(200).send(str)
    }
}






















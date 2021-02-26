


//message object
const message = {
    words: ['abudant','strong','loved','smart','wise','amazing','genuine','successful','brave'],
    day: ['Today','Tomorrow','Now'],
    repeat: [1,2,3,4,5,6,7,8,9,10],
    
    //method to create mixed message string
    msgMaker(){
        const cWord = this.words[Math.floor(Math.random * this.words.length)];
        const cDay = this.day[Math.floor(Math.random * this.day.length)];
        const cRep = this.repeat[Math.floor(Math.random * this.repeat.length)];

        console.log(`I am ${cWord} now and will experience this x${cRep} ${cDay} too.`);
    }
    
}



    const data = [
                {
        "quote": "As the Father has loved Me, so have I loved you",
    "verse": "John 15:9-17 (NIV)",
    "desc": "As the Father has loved me, so have I loved you. Now remain in my love. If you keep my commands, you will remain in my love, just as I have kept my Father’s commands and remain in his love. I have told you this so that my joy may be in you and that your joy may be complete. My command is this: Love each other as I have loved you. Greater love has no one than this: to lay down one’s life for one’s friends. 14 You are my friends if you do what I command. I no longer call you servants, because a servant does not know his master’s business. Instead, I have called you friends, for everything that I learned from my Father I have made known to you. You did not choose me, but I chose you and appointed you so that you might go and bear fruit—fruit that will last—and so that whatever you ask in my name the Father will give you. This is my command: Love each other.",
    "link": "https://www.desiringgod.org/messages/as-i-have-loved-you-love-one-another"
},
                {
        "quote": "Do not let your hearts be troubled. You believe in God; believe also in me.",
    "verse": "John 14:1-4 (NIV)",
    "desc": "Do not let your hearts be troubled. You believe in God; believe also in me. My Father’s house has many rooms; if that were not so, would I have told you that I am going there to prepare a place for you? And if I go and prepare a place for you, I will come back and take you to be with me that you also may be where I am. You know the way to the place where I am going.",
    "link": "https://www.desiringgod.org/articles/let-not-your-hearts-be-troubled"
},
                {
        "quote": "Then you will know the truth, And the truth will set you free.",
    "verse": "John 8:29-38 (NIV)",
    "desc": "The one who sent me is with me; he has not left me alone, for I always do what pleases him.” Even as he spoke, many believed in him. To the Jews who had believed him, Jesus said, “If you hold to my teaching, you are really my disciples. Then you will know the truth, and the truth will set you free. They answered him, “We are Abraham’s descendants and have never been slaves of anyone.How can you say that we shall be set free?” Jesus replied, “Very truly I tell you, everyone who sins is a slave to sin. Now a slave has no permanent place in the family, but a son belongs to it forever. So if the Son sets you free, you will be free indeed. I know that you are Abraham’s descendants.Yet you are looking for a way to kill me, because you have no room for my word. I am telling you what I have seen in the Father’s presence, and you are doing what you have heard from your father.",
    "link": "https://www.desiringgod.org/messages/you-will-know-the-truth-and-the-truth-will-set-you-free"
},
                {
        "quote": "For those who exalt themselves will be humbled, and those who humble themselves will be exalted.",
    "verse": "Matthew 23:1-11 (NIV)",
    "desc": "Then Jesus said to the crowds and to his disciples: “The teachers of the law and the Pharisees sit in Moses’ seat. So you must be careful to do everything they tell you. But do not do what they do, for they do not practice what they preach. They tie up heavy, cumbersome loads and put them on other people’s shoulders, but they themselves are not willing to lift a finger to move them. “Everything they do is done for people to see: They make their phylacteries wide and the tassels on their garments long; they love the place of honor at banquets and the most important seats in the synagogues; they love to be greeted with respect in the marketplaces and to be called ‘Rabbi’ by others. “But you are not to be called ‘Rabbi, ’ for you have one Teacher, and you are all brothers. And do not call anyone on earth ‘father, ’ for you have one Father, and he is in heaven. Nor are you to be called instructors, for you have one Instructor, the Messiah. The greatest among you will be your servant. For those who exalt themselves will be humbled, and those who humble themselves will be exalted.",
    "link": "https://www.desiringgod.org/articles/what-is-humility"
},
                {
        "quote": "I am the way and the truth and the life. No one comes to the Father except through me.",
    "verse": "John 14:1-6 (NIV)",
    "desc": "“Do not let your hearts be troubled. You believe in God; believe also in me. My Father’s house has many rooms; if that were not so, would I have told you that I am going there to prepare a place for you? And if I go and prepare a place for you, I will come back and take you to be with me that you also may be where I am. You know the way to the place where I am going.” Thomas said to him, “Lord, we don’t know where you are going, so how can we know the way?” Jesus answered, “I am the way and the truth and the life. No one comes to the Father except through me. If you really know me, you will know my Father as well. From now on, you do know him and have seen him.”",
    "link": "https://www.desiringgod.org/messages/i-am-the-way-the-truth-and-the-life"
}
]
let currentnumber=5
const quotes=document.querySelectorAll(".js-quote-section")
const details=document.querySelectorAll(".js-details-section")
const share=document.querySelectorAll(".js-share-section")
const sharetext=document.querySelector(".js-share-text")
        function refreshQuote(){
            const a = Math.floor(Math.random()*4)
            if(currentnumber === a){
        refreshQuote()
    }
    else {
        quotes[0].innerText = data[a].quote
        sharetext.innerText = `${data[a].quote} ${data[a].verse}`
                details[0].innerHTML = `<div>${data[a].verse}</div> <div>${data[a].desc}</div> <a target="_blank" href="${data[a].link}">More info</a>`
    currentnumber = a
    }
}
refreshQuote()

        function toggleDetails(){
        //console.log(details[1])
        quotes[0].classList.toggle("dis-n")
        quotes[1].classList.toggle("dis-n")
        details[0].classList.toggle("dis-n")
        details[1].classList.toggle("dis-n")

}

function toggleShare(){
    share[0].classList.toggle("dis-n")
    share[1].classList.toggle("dis-n")
    quotes[0].classList.toggle("dis-n")
    quotes[1].classList.toggle("dis-n")
}
function copyShareText() {
    sharetext.select()
    document.execCommand("copy")
}
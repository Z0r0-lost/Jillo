document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "I know I am late, a lot. should have done this in the morning itself but my whole today's morning was in rush because I was late for classes.",
        "I am not that guy who will follow the stereotypical days of relationship - valentines, girlfriends day, this day and that day.",
        "I don't need any specific days for me to show my love.",
        "I know we are parted by distance and I can't do a lot of stuff to show what you mean to me, what position you have in my life.",
        "It's unexplainable because you just being with me has done a lot of good changes in me, me for me to be more fit for you, to be a better man.",
        "Yeah, I know I am an idiot and a big weirdo who yaps a lot with his favorite person. And you keep on listening to those yaps.",
        "You being with me when I am at my lowest, you being with me when I can't feel anything, when I don't feel like studying, when I don't feel like living.",
        "Just because of you I started living life again. I know I shouldn't say this but thanks, thanks, and a big thanks.",
        "Thank youuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
        "Thanks for being with this dumb nerd who doesn't have anything much interesting in his life.",
        "I have a lot of things under preparation for you which is a way of showing my love, and in the upcoming meets, you will see it.",
        "Thanks a lot for the 28th of April and all the other days before that you have been with me.",
        "Because of that, it made it easier for me to convey my feelings for you.",
        "I promise to you that I won't be leaving you, a very special person you are to me.",
        "You make every other girl less attractive.",
        "The more I talk about your beauty the less it is. I have said it 100 times and I will say it again,",
        "Daaaaaaammmm those lips, those eyes (magical), that hair, your smell and the most important thing, the warmth you give out.",
        "I love being with you, texting, calling and everything. I hope that you continue to stay with this idiot.",
        "And if this idiot has done anything wrong till now, please forgive him.",
        "After all, he is your and yours exclusively bbg, your princess and your man as well.",
        "Please, just a few more months until I get home permanently and then I can be with you even more.",
        "I LOVE YOU, I LOVE YOU AND I JUST LOVE YOUUUU MY JILLOOO, MY HOT HOT HOT ICECREAMMMMMMMMMMMM."
    ];

    const messageContainer = document.getElementById("message-container");
    const audio = document.getElementById("background-music");

    // Set initial volume
    audio.volume = 0.5; // Volume range from 0.0 to 1.0

    let delay = 1000; // Delay for each message

    messages.forEach((text, index) => {
        const messageElement = document.createElement("p");
        messageElement.className = "message";
        messageElement.innerText = text;
        messageContainer.appendChild(messageElement);

        // Show each message with delay
        setTimeout(() => {
            messageElement.style.opacity = "1";
            messageElement.style.transform = "translateY(0)";
        }, delay);

        delay += 3000; // Increase delay for next message
    });
});

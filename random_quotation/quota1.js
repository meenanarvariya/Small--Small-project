let quotaNo = 0;
let bgColor = undefined;
const quotas = [
    {id:0, quota: "The battles that count aren't the ones for gold medals. The struggles within yourself—the invisible, inevitable battles inside all of us—that's where it's at.",author:"Jesse Owens"},
    {id:1, quota: "You can get everything in life you want if you will just help enough other people get what they want.",author:"Zig Ziglar"},
    {id:2, quota: "Inspiration does exist, but it must find you working.",author:"Pablo Picasso"},
    {id:3, quota: "Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had.",author:"Angela Bassett"},
    {id:4, quota: "Show up, show up, show up, and after a while the muse shows up, too.",author:"Isabel Allende"},
    {id:5, quota: "Don't bunt. Aim out of the ballpark. Aim for the company of immortals.",author:"David Ogilvy"},
    {id:6, quota: "I have stood on a mountain of no’s for one yes.",author:"Barbara Elaine Smith"},
    {id:7, quota: "If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.",author:"Tobias Lütke"},
    {id:8, quota: "First forget inspiration. Habit is more dependable. Habit will sustain you whether you're inspired or not. Habit will help you finish and polish your stories. Inspiration won't. Habit is persistence in practice.",author:"Octavia Butler"},
    {id:9, quota: "The best way out is always through.",author:"Robert Frost"}
];

const btn = document.querySelector("#newQuota");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
btn.addEventListener("click",()=>{
    quotaNo = Math.floor(Math.random()*10);
    bgColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    quotaRow = quotas[quotaNo];
    console.log(bgColor);
    h1.textContent = quotaRow.quota;
    p.textContent = quotaRow.author;
    document.body.style.backgroundColor = bgColor;
})
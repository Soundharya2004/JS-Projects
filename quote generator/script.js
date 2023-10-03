function myClickFunction(){
    let a = [
        "You will meet someone special",
        "Good day to You",
        "A pleasant walk with your loved one",
        "Hey Gorgeous",
        "You will meet someone special",
        "Good day to You",
        "A pleasant walk with your loved one",
        "Hey Gorgeous", 
         "You will meet someone special",
        "Good day to You",
        "A pleasant walk with your loved one",
        "Hey Gorgeous"
    ]
    let b = (Math.ceil(Math.random()*10));  
    const c = document.getElementById("quote");
    c.innerHTML=a[b];
 
}





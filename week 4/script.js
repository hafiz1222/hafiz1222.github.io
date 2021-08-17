var names = new Array();
names[0] = "Imran";
names[1] = "Joni";
names[2] = "Jen";
names[3] = "junaid";
names[4] = "fareed";
names[5] = "farooq";
names[6] = "nabeel";
names[7] = "nazakat";
names[8] = "sadaqat";
names[9] = "jadi";


for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === 'J' || names[i].charAt(0) === 'j') {
        console.log("Goodbye " + names[i])
    } else {
        console.log("Hello " + names[i])
    }
}
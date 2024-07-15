name="apple is red in colour";
words=name.split(" ")
max=0;
word="";
for(i=0;i<words.length;i++){
    m=words[i].length;
    if(m>max){
        max=m;
        word=words[i];
    }
}
console.log(word);

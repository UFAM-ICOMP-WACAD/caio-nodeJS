const loremDatabase =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi velit, semper ut porttitor ac, molestie nec elit."  + 
" Aenean in lectus at augue sodales congue. Sed leo lorem, egestas et imperdiet quis, scelerisque in erat."  + 
" Nunc euismod varius nunc. Mauris lobortis tellus a sapien rhoncus, in convallis velit rhoncus."  + 
" In hendrerit diam consequat purus rutrum condimentum. Ut dictum ex mi. Integer eu gravida est."  + 
" Ut iaculis tortor orci, at congue leo suscipit a. Nunc non rhoncus diam. Aliquam malesuada nisi vel vehicula egestas." + 
" Maecenas quis vulputate ante, a mollis nibh. Duis non felis elit. Aliquam id lorem luctus turpis luctus venenatis vel in sapien." + 
" Donec et rutrum dolor, ac cursus enim. Maecenas eu aliquet tellus. Aliquam suscipit ante vel nunc aliquam, quis pulvinar purus consectetur." + 
" Sed ullamcorper urna sodales mauris rutrum pretium. In eu pulvinar ante. Proin bibendum nibh at pellentesque accumsan." + 
" Aliquam elementum diam eu erat sodales faucibus. Pellentesque sed tellus venenatis, facilisis arcu sed, faucibus ligula." + 
" Maecenas accumsan vel odio et bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."

function generateLorem() {
    const input = document.querySelector("input");
    const parag = input.value;
    let lorGen = "";
    for (let i = 0; i < parag; i++) {
        lorGen += "<p>" + loremDatabase + "</p>";  
    }

    const result = document.getElementById("result");
    const loremP = document.createElement("div");
    loremP.innerHTML = lorGen;

    result.appendChild(loremP)
}

let lis = document.getElementsByTagName('li');

for (let li of lis) {
    let childsCount = li.getElementsByTagName('li').length;
    if (!childsCount) continue;

    li.firstChild.data += ' [' + childsCount + ']';
}

    function addMe() {
        var stuff = document.getElementsByTagName('li');
        if (stuff.length > 6) {
            alert("LIST IS FULL");
        }
        else {
            var newList = document.createElement('li');
            var u = document.getElementById('user').value;
            var newText = document.createTextNode(u);
            newList.appendChild(newText);
            var position = document.getElementsByTagName('ol')[0];
            position.appendChild(newList);
            document.getElementById('user').value = " ";
        } 
    }
    
    function removeMe() {
        var personNum = document.getElementById("remNum").value;
        var x = parseInt(personNum);
        var getChild = document.getElementsByTagName('li')[x - 1];
        var getParent = getChild.parentNode;
        getParent.removeChild(getChild);
        }
    
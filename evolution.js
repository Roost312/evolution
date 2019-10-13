window.onload = applyClicks();

var auto;

function applyClicks() {
    var cellCollection = document.getElementsByTagName('td');
    for (x = 0; x < cellCollection.length; x++) {
        cellCollection[x].addEventListener("click", function () {
            clickEffect(this);
        });
    }
}

function clickEffect(elem) {
  console.log(elem);
    if (elem.style.backgroundColor == "aqua") {
        elem.style.backgroundColor = "grey";
    } else {
        elem.style.backgroundColor = "aqua";
    }
}

function evolveGame() {
    var count = 0;
    var myRows = document.getElementById("gridTable").rows;
    var myCells = myRows[0].cells.length;
    for (var r = 0; r < myRows.length; r++) {
        for (var c = 0; c < myCells; c++) {
            //console.log(r);
            count = 0;
            //if its an edge cell
            if ((r - 1) < 0 || (r + 1) > 19 || (c - 1) < 0 || (c + 1) > 19) {
                //top left corner cell
                if ((r - 1) < 0 && (c - 1) < 0) {
                    //friend on right
                    if (myRows[r].cells[c + 1].style.backgroundColor == "aqua") {
                        //console.log("Top left corner has a right friend");
                        count++;
                    }
                    //friend on bottom
                    if (myRows[r + 1].cells[c].style.backgroundColor == "aqua") {
                        //console.log("Top left corner has a bottom friend");
                        count++;
                    }
                    //friend diagonal
                    if (myRows[r + 1].cells[c + 1].style.backgroundColor == "aqua") {
                        //console.log("Top left corner has a right diagonal friend");
                        count++;
                    }
                } else if ((r - 1) < 0 && (c + 1) > 19) {
                    //top right corner cell
                    //friend on left
                    if (myRows[r].cells[c - 1].style.backgroundColor == "aqua") {
                        //console.log("Top right corner has a left friend");
                        count++;
                    }
                    //friend on bottom
                    if (myRows[r + 1].cells[c].style.backgroundColor == "aqua") {
                        //console.log("Top right corner has a bottom friend");
                        count++;
                    }
                    //friend diagonal
                    if (myRows[r + 1].cells[c - 1].style.backgroundColor == "aqua") {
                        //console.log("Top right corner has a left diagonal friend");
                        count++;
                    }
                } else if ((r + 1) > 19 && (c - 1) < 0) {
                    //bottom left corner cell
                    //friend on right
                    if (myRows[r].cells[c + 1].style.backgroundColor == "aqua") {
                        //console.log("bottom left corner has a right friend");
                        count++;
                    }
                    //friend on top
                    if (myRows[r - 1].cells[c].style.backgroundColor == "aqua") {
                        //console.log("bottom left corner has a top friend");
                        count++;
                    }
                    //friend diagonal
                    if (myRows[r - 1].cells[c + 1].style.backgroundColor == "aqua") {
                        console.log("bottom left corner has a right diagonal friend");
                        count++;
                    }
                } else if ((r + 1) > 19 && (c + 1) > 19) {
                    //bottom right corner cell
                    if (myRows[r].cells[c].style.backgroundColor == "aqua") {
                        //console.log("bottom right corner cell row " + r + " " + "col " + c);
                    }
                    //friend on left
                    if (myRows[r].cells[c - 1].style.backgroundColor == "aqua") {
                        //console.log("bottom right corner has a left friend");
                        count++;
                    }
                    //friend on top
                    if (myRows[r - 1].cells[c].style.backgroundColor == "aqua") {
                        //console.log("bottom right corner has a top friend");
                        count++;
                    }
                    //friend diagonal
                    if (myRows[r - 1].cells[c - 1].style.backgroundColor == "aqua") {
                        //console.log("bottom right corner has a left diagonal friend");
                        count++;
                    }
                } else if ((r - 1) < 0 && (c - 1) >= 0 || (r - 1) < 0 && (c + 1) <= 19) {
                    //top edge cell
                    //friend on left
                    if (myRows[r].cells[c - 1].style.backgroundColor == "aqua") {
                        //console.log("Top edge cell has a left friend");
                        count++;
                    }
                    //friend on right
                    if (myRows[r].cells[c + 1].style.backgroundColor == "aqua") {
                        //console.log("Top edge cell has a right friend");
                        count++;
                    }
                    //friend on bottom
                    if (myRows[r + 1].cells[c].style.backgroundColor == "aqua") {
                        //console.log("Top edge cell has a bottom friend");
                        count++;
                    }
                    //friend diagonal
                    if (myRows[r + 1].cells[c - 1].style.backgroundColor == "aqua") {
                        //console.log("Top edge cell has a left diagonal friend");
                        count++;
                    }
                    //friend diagonal
                    if (myRows[r + 1].cells[c + 1].style.backgroundColor == "aqua") {
                        //console.log("Top edge cell has a right diagonal friend");
                        count++;
                    }
                } else if ((r + 1) > 19 && (c - 1) >= 0 || (r + 1) > 19 && (c + 1) <= 1) {
                    //bottom edge cell
                    //friend on left
                    if (myRows[r].cells[c - 1].style.backgroundColor == "aqua") {
                        //console.log("bottom edge cell has a left friend");
                        count++;
                    }
                    //friend on right
                    if (myRows[r].cells[c + 1].style.backgroundColor == "aqua") {
                        //console.log("bottom edge cell has a right friend");
                        count++;
                    }
                    //friend on top
                    if (myRows[r - 1].cells[c].style.backgroundColor == "aqua") {
                        //console.log("bottom edge cell has a top friend");
                        count++;
                    }
                    //friend diagonal
                    if (myRows[r - 1].cells[c - 1].style.backgroundColor == "aqua") {
                        //console.log("bottom edge cell has a left diagonal friend");
                        count++;
                    }
                    //friend diagonal
                    if (myRows[r - 1].cells[c + 1].style.backgroundColor == "aqua") {
                        //console.log("bottom edge cell has a right diagonal friend");
                        count++;
                    }
                } else if ((c - 1) < 0 && (r - 1) >= 0 || (c - 1) < 0 && (r + 1) <= 19) {
                    //left edge cell
                    //friend on right
                    if (myRows[r].cells[c + 1].style.backgroundColor == "aqua") {
                        //console.log("left edge cell has a right friend");
                        count++;
                    }
                    //friend on top
                    if (myRows[r - 1].cells[c].style.backgroundColor == "aqua") {
                        //console.log("left edge cell has a top friend");
                        count++;
                    }
                    //friend on bottom
                    if (myRows[r + 1].cells[c].style.backgroundColor == "aqua") {
                        //console.log("left edge cell has a bottom friend");
                        count++;
                    }
                    //friend diagonal
                    if (myRows[r - 1].cells[c + 1].style.backgroundColor == "aqua") {
                        //console.log("left edge cell has a left diagonal friend");
                        count++;
                    }
                    //friend diagonal
                    if (myRows[r + 1].cells[c + 1].style.backgroundColor == "aqua") {
                        //console.log("left edge cell has a right diagonal friend");
                        count++;
                    }
                } else if ((c + 1) > 19 && (r - 1) >= 0 || (c + 1) > 19 && (r + 1) <= 19) {
                    //right edge cell
                    //friend on left
                    if (myRows[r].cells[c - 1].style.backgroundColor == "aqua") {
                        // console.log("right edge cell has a left friend");
                        count++;
                    }
                    //friend on top
                    if (myRows[r - 1].cells[c].style.backgroundColor == "aqua") {
                        //console.log("right edge cell has a top friend");
                        count++;
                    }
                    //friend on bottom
                    if (myRows[r + 1].cells[c].style.backgroundColor == "aqua") {
                        //console.log("right edge cell has a bottom friend");
                        count++;
                    }
                    //friend diagonal
                    if (myRows[r - 1].cells[c - 1].style.backgroundColor == "aqua") {
                        //console.log("left edge cell has a left diagonal friend");
                        count++;
                    }
                    //friend diagonal
                    if (myRows[r + 1].cells[c - 1].style.backgroundColor == "aqua") {
                        //console.log("left edge cell has a right diagonal friend");
                        count++;
                    }
                }
            } else if ((r - 1) >= 0 && (r + 1) <= 19) {
                if ((c - 1) >= 0 && (c + 1) <= 19) {
                    //cells not restricted by edge rules
                    //top
                    if (myRows[r - 1].cells[c].style.backgroundColor == "aqua") {
                        //console.log("row " + r + " " + "column" + c + "has top friend");
                        count++;
                    }
                    //bottom
                    if (myRows[r + 1].cells[c].style.backgroundColor == "aqua") {
                        //console.log("row " + r + " " + "column" + c + "has bottom friend");
                        count++;
                    }
                    //left
                    if (myRows[r].cells[c - 1].style.backgroundColor == "aqua") {
                        //console.log("row " + r + " " + "column" + c + "has left friend");
                        count++;
                    }
                    //right
                    if (myRows[r].cells[c + 1].style.backgroundColor == "aqua") {
                        //console.log("row " + r + " " + "column" + c + "has right friend");
                        count++;
                    }
                    //Top left diagonal 
                    if (myRows[r - 1].cells[c - 1].style.backgroundColor == "aqua") {
                        //console.log("row " + r + " " + "column" + c + "has top diagonal left friend");
                        count++;
                    }
                    //Top right diagonal 
                    if (myRows[r - 1].cells[c + 1].style.backgroundColor == "aqua") {
                        //console.log("row " + r + " " + "column" + c + "has top diagonal right friend");
                        count++;
                    }
                    //Bottom left diagonal 
                    if (myRows[r + 1].cells[c - 1].style.backgroundColor == "aqua") {
                        //console.log("row " + r + " " + "column" + c + "has bottom diagonal left friend");
                        count++;
                    }
                    //Bottom right diagonal 
                    if (myRows[r + 1].cells[c + 1].style.backgroundColor == "aqua") {
                        //console.log("row " + r + " " + "column" + c + "has bottom diagonal left friend");
                        count++;
                    }
                }
            }
            //console.log(count);
            if (myRows[r].cells[c].style.backgroundColor == "aqua" && count < 2) {
                //die
                //console.log("This cell dies");
                myRows[r].cells[c].value = "D";
            } else if (myRows[r].cells[c].style.backgroundColor == "aqua" && count == 2 || myRows[r].cells[c].style.backgroundColor == "aqua" && count == 3) {
                //live
                //console.log("this cell lives");
                myRows[r].cells[c].value = "L";
            } else if (myRows[r].cells[c].style.backgroundColor == "aqua" && count > 3) {
                //dead
                //console.log("this cell dies");
                myRows[r].cells[c].value = "D";
            } else if (myRows[r].cells[c].style.backgroundColor != "aqua" && count == 3) {
                //console.log("this cell comes to life");
                //comes to life
                myRows[r].cells[c].value = "L";
            }
        }
    }
    //new for loop to go through the cells, read the added value and change the color of the background accordingly
    for (var r1 = 0; r1 < myRows.length; r1++) {
        for (var c1 = 0; c1 < myCells; c1++) {
            if (myRows[r1].cells[c1].value == "D") {
                myRows[r1].cells[c1].style.backgroundColor = "grey";
            } else if (myRows[r1].cells[c1].value == "L") {
                myRows[r1].cells[c1].style.backgroundColor = "aqua";
            }
        }
    }
}

function testGame() {
    var myRows = document.getElementById("gridTable").rows;
    myRows[0].cells[0].style.backgroundColor = "aqua";
    myRows[0].cells[2].style.backgroundColor = "aqua";
    myRows[1].cells[1].style.backgroundColor = "aqua";
    myRows[1].cells[2].style.backgroundColor = "aqua";
    myRows[2].cells[1].style.backgroundColor = "aqua";
    myRows[11].cells[13].style.backgroundColor = "aqua";
    myRows[11].cells[14].style.backgroundColor = "aqua";
    myRows[12].cells[13].style.backgroundColor = "aqua";
    myRows[12].cells[14].style.backgroundColor = "aqua";
    myRows[13].cells[15].style.backgroundColor = "aqua";
    myRows[13].cells[16].style.backgroundColor = "aqua";
    myRows[14].cells[15].style.backgroundColor = "aqua";
    myRows[14].cells[16].style.backgroundColor = "aqua";
    myRows[13].cells[3].style.backgroundColor = "aqua";
    myRows[13].cells[4].style.backgroundColor = "aqua";
    myRows[13].cells[5].style.backgroundColor = "aqua";
}

function myPattern() {
    var myRows = document.getElementById("gridTable").rows;
    myRows[1].cells[2].style.backgroundColor = "aqua";
    myRows[2].cells[1].style.backgroundColor = "aqua";
    myRows[2].cells[2].style.backgroundColor = "aqua";
    myRows[1].cells[9].style.backgroundColor = "aqua";
    myRows[1].cells[10].style.backgroundColor = "aqua";
    myRows[1].cells[17].style.backgroundColor = "aqua";
    myRows[2].cells[17].style.backgroundColor = "aqua";
    myRows[2].cells[18].style.backgroundColor = "aqua";
    myRows[2].cells[7].style.backgroundColor = "aqua";
    myRows[2].cells[9].style.backgroundColor = "aqua";
    myRows[2].cells[10].style.backgroundColor = "aqua";
    myRows[2].cells[12].style.backgroundColor = "aqua";
    myRows[1].cells[8].style.backgroundColor = "aqua";
    myRows[1].cells[11].style.backgroundColor = "aqua";
    myRows[3].cells[6].style.backgroundColor = "aqua";
    myRows[3].cells[8].style.backgroundColor = "aqua";
    myRows[3].cells[11].style.backgroundColor = "aqua";
    myRows[3].cells[13].style.backgroundColor = "aqua";
    myRows[4].cells[5].style.backgroundColor = "aqua";
    myRows[4].cells[8].style.backgroundColor = "aqua";
    myRows[4].cells[9].style.backgroundColor = "aqua";
    myRows[4].cells[10].style.backgroundColor = "aqua";
    myRows[4].cells[11].style.backgroundColor = "aqua";
    myRows[4].cells[14].style.backgroundColor = "aqua";
    myRows[5].cells[7].style.backgroundColor = "aqua";
    myRows[5].cells[12].style.backgroundColor = "aqua";
    myRows[6].cells[3].style.backgroundColor = "aqua";
    myRows[6].cells[4].style.backgroundColor = "aqua";
    myRows[6].cells[7].style.backgroundColor = "aqua";
    myRows[6].cells[9].style.backgroundColor = "aqua";
    myRows[6].cells[10].style.backgroundColor = "aqua";
    myRows[6].cells[12].style.backgroundColor = "aqua";
    myRows[6].cells[15].style.backgroundColor = "aqua";
    myRows[6].cells[16].style.backgroundColor = "aqua";
    myRows[7].cells[3].style.backgroundColor = "aqua";
    myRows[7].cells[5].style.backgroundColor = "aqua";
    myRows[7].cells[8].style.backgroundColor = "aqua";
    myRows[7].cells[11].style.backgroundColor = "aqua";
    myRows[7].cells[14].style.backgroundColor = "aqua";
    myRows[7].cells[16].style.backgroundColor = "aqua";
    myRows[8].cells[3].style.backgroundColor = "aqua";
    myRows[8].cells[7].style.backgroundColor = "aqua";
    myRows[8].cells[12].style.backgroundColor = "aqua";
    myRows[8].cells[16].style.backgroundColor = "aqua";
    myRows[9].cells[3].style.backgroundColor = "aqua";
    myRows[9].cells[6].style.backgroundColor = "aqua";
    myRows[9].cells[13].style.backgroundColor = "aqua";
    myRows[9].cells[16].style.backgroundColor = "aqua";
    myRows[10].cells[6].style.backgroundColor = "aqua";
    myRows[10].cells[9].style.backgroundColor = "aqua";
    myRows[10].cells[10].style.backgroundColor = "aqua";
    myRows[10].cells[13].style.backgroundColor = "aqua";
    myRows[11].cells[3].style.backgroundColor = "aqua";
    myRows[11].cells[4].style.backgroundColor = "aqua";
    myRows[11].cells[8].style.backgroundColor = "aqua";
    myRows[11].cells[9].style.backgroundColor = "aqua";
    myRows[11].cells[10].style.backgroundColor = "aqua";
    myRows[11].cells[11].style.backgroundColor = "aqua";
    myRows[11].cells[15].style.backgroundColor = "aqua";
    myRows[11].cells[16].style.backgroundColor = "aqua";
    myRows[12].cells[2].style.backgroundColor = "aqua";
    myRows[12].cells[3].style.backgroundColor = "aqua";
    myRows[12].cells[4].style.backgroundColor = "aqua";
    myRows[12].cells[5].style.backgroundColor = "aqua";
    myRows[12].cells[6].style.backgroundColor = "aqua";
    myRows[12].cells[9].style.backgroundColor = "aqua";
    myRows[12].cells[10].style.backgroundColor = "aqua";
    myRows[12].cells[13].style.backgroundColor = "aqua";
    myRows[12].cells[14].style.backgroundColor = "aqua";
    myRows[12].cells[15].style.backgroundColor = "aqua";
    myRows[12].cells[16].style.backgroundColor = "aqua";
    myRows[12].cells[17].style.backgroundColor = "aqua";
    myRows[13].cells[3].style.backgroundColor = "aqua";
    myRows[13].cells[4].style.backgroundColor = "aqua";
    myRows[13].cells[5].style.backgroundColor = "aqua";
    myRows[13].cells[6].style.backgroundColor = "aqua";
    myRows[13].cells[9].style.backgroundColor = "aqua";
    myRows[13].cells[10].style.backgroundColor = "aqua";
    myRows[13].cells[13].style.backgroundColor = "aqua";
    myRows[13].cells[14].style.backgroundColor = "aqua";
    myRows[13].cells[15].style.backgroundColor = "aqua";
    myRows[13].cells[16].style.backgroundColor = "aqua";
    myRows[14].cells[7].style.backgroundColor = "aqua";
    myRows[14].cells[12].style.backgroundColor = "aqua";
    myRows[15].cells[3].style.backgroundColor = "aqua";
    myRows[15].cells[8].style.backgroundColor = "aqua";
    myRows[15].cells[11].style.backgroundColor = "aqua";
    myRows[15].cells[16].style.backgroundColor = "aqua";
    myRows[16].cells[3].style.backgroundColor = "aqua";
    myRows[16].cells[5].style.backgroundColor = "aqua";
    myRows[16].cells[6].style.backgroundColor = "aqua";
    myRows[16].cells[7].style.backgroundColor = "aqua";
    myRows[16].cells[12].style.backgroundColor = "aqua";
    myRows[16].cells[13].style.backgroundColor = "aqua";
    myRows[16].cells[14].style.backgroundColor = "aqua";
    myRows[16].cells[16].style.backgroundColor = "aqua";
    myRows[17].cells[3].style.backgroundColor = "aqua";
    myRows[17].cells[6].style.backgroundColor = "aqua";
    myRows[17].cells[7].style.backgroundColor = "aqua";
    myRows[17].cells[8].style.backgroundColor = "aqua";
    myRows[17].cells[11].style.backgroundColor = "aqua";
    myRows[17].cells[12].style.backgroundColor = "aqua";
    myRows[17].cells[13].style.backgroundColor = "aqua";
    myRows[17].cells[16].style.backgroundColor = "aqua";
    myRows[18].cells[3].style.backgroundColor = "aqua";
    myRows[18].cells[4].style.backgroundColor = "aqua";
    myRows[18].cells[15].style.backgroundColor = "aqua";
    myRows[18].cells[16].style.backgroundColor = "aqua";
    myRows[19].cells[8].style.backgroundColor = "aqua";
    myRows[19].cells[9].style.backgroundColor = "aqua";
    myRows[19].cells[10].style.backgroundColor = "aqua";
    myRows[19].cells[11].style.backgroundColor = "aqua";
}

function wipeGame() {
    clearInterval(auto);
    var myRows = document.getElementById("gridTable").rows;
    var myCells = myRows[0].cells.length;
    for (var r = 0; r < myRows.length; r++) {
        for (var c = 0; c < myCells; c++) {
            myRows[r].cells[c].style.backgroundColor = "grey";
            myRows[r].cells[c].value = "D";
        }
    }
}

function autoGame() {
    auto = setInterval(evolveGame, 500);
}

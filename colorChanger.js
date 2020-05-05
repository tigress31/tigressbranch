function colorchanger(y) {
    if(y>=0 && y<50)
        return "#009844"
    else if(y>=50 && y<100)
        return "#FFF000"
    else if(y>=100 && y<150)
        return "#E95513"
    else if(y>=150 && y<200)
        return "#E73828"
    else if(y>=200 && y<500)
        return "#5F1985"
    else
        return "black"
}

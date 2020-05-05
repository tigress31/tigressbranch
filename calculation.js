function iAQIcalculation_so2(x) {

        if(x>=0 && x<150)
            return ((50-0)/(150-0))*(x-0)+0;
        else if(x>=150 && x<500)
            return ((100-50)/(500-150))*(x-150)+50;
        else if(x>=500 && x<650)
            return ((150-100)/(650-500))*(x-500)+100;
        else if(x>=650 && x<800)
            return ((200-150)/(800-650))*(x-650)+150;
        else if(x>=800 && x<1600)
            return ((300-200)/(1600-800))*(x-800)+200;
        else if(x>=1600 && x<2100)
            return ((400-300)/(2100-1600))*(x-1600)+300;
        else if(x>=2100 && x<=2620)
            return ((500-400)/(2620-2100))*(x-2100)+400;
        else return "Error"

}

function iAQIcalculation_no2(x) {

        if(x>=0 && x<100)
            return ((50-0)/(100-0))*(x-0)+0;
        else if(x>=100 && x<200)
            return ((100-50)/(200-100))*(x-100)+50;
        else if(x>=200 && x<700)
            return ((150-100)/(700-200))*(x-200)+100;
        else if(x>=700 && x<1200)
            return ((200-150)/(1200-700))*(x-700)+150;
        else if(x>=1200 && x<2340)
            return ((300-200)/(2340-1200))*(x-1200)+200;
        else if(x>=2340 && x<3090)
            return ((400-300)/(3090-2340))*(x-2340)+300;
        else if(x>=3090 && x<3840)
            return ((500-400)/(3840-3090))*(x-3090)+400;
        else return "Error"

}


function iAQIcalculation_pm10(x) {

        if(x>=0 && x<50)
            return ((50-0)/(50-0))*(x-0)+0;
        else if(x>50 && x<150)
            return ((100-50)/(150-50))*(x-50)+50;
        else if(x>150 && x<250)
            return ((150-100)/(250-150))*(x-150)+100;
        else if(x>250 && x<350)
            return ((200-150)/(350-250))*(x-250)+150;
        else if(x>350 && x<420)
            return ((300-200)/(420-350))*(x-350)+200;
        else if(x>420 && x<500)
            return ((400-300)/(500-420))*(x-420)+300;
        else if(x>500 && x<600)
            return ((500-400)/(600-500))*(x-500)+400;
        else return "Error"

}


function iAQIcalculation_co(x) {

        if(x>=0 && x<5)
            return ((50-0)/(5-0))*(x-0)+0;
        else if(x>=5 && x<10)
            return ((100-50)/(10-5))*(x-5)+50;
        else if(x>=10 && x<35)
            return ((150-100)/(35-10))*(x-10)+100;
        else if(x>=35 && x<60)
            return ((200-150)/(60-35))*(x-35)+150;
        else if(x>=60 && x<90)
            return ((300-200)/(90-60))*(x-60)+200;
        else if(x>=90 && x<120)
            return ((400-300)/(120-90))*(x-90)+300;
        else if(x>=120 && x<150)
            return ((500-400)/(150-120))*(x-120)+400;
        else return "Error"

}


function iAQIcalculation_o3(x) {

        if(x>=0 && x<160)
            return ((50-0)/(150-0))*(x-0)+0;
        else if(x>=160 && x<200)
            return ((100-50)/(500-150))*(x-150)+50;
        else if(x>=200 && x<300)
            return ((150-100)/(650-500))*(x-500)+100;
        else if(x>=650 && x<800)
            return ((200-150)/(800-650))*(x-650)+150;
        else if(x>=800 && x<1600)
            return ((300-200)/(1600-800))*(x-800)+200;
        else if(x>=1600 && x<2100)
            return ((400-300)/(2100-1600))*(x-1600)+300;
        else if(x>=2100 && x<2620)
            return ((500-400)/(2620-2100))*(x-2100)+400;
        else return "Error"

}


function iAQIcalculation_pm25(x) {

        if(x>=0 && x<35)
            return ((50-0)/(35-0))*(x-0)+0;
        else if(x>=35 && x<75)
            return ((100-50)/(75-35))*(x-35)+50;
        else if(x>=75 && x<115)
            return ((150-100)/(115-75))*(x-75)+100;
        else if(x>=115 && x<150)
            return ((200-150)/(150-115))*(x-115)+150;
        else if(x>=150 && x<250)
            return ((300-200)/(250-150))*(x-150)+200;
        else if(x>=250 && x<350)
            return ((400-300)/(350-250))*(x-250)+300;
        else if(x>=350 && x<=500)
            return ((500-400)/(500-350))*(x-350)+400;
        else return "Error"

}



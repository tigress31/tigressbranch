import QtQuick 2.9
import QtQuick.Window 2.2
import "qrc:/js/calculation.js" as Calculation
import "qrc:/js/colorChanger.js" as Colorchanger

import QtQuick 2.0
import QtCharts 2.0
import QtQuick.XmlListModel 2.0

Window {
    visible: true
    width: 640
    height: 480
    title: qsTr("Hello World")

    property int rand: Math.random()
    property int iaqi
    property int currentIndex: -1
    property int i: -1

    Timer {
        id: timer
        interval: 1500
        repeat: true
        running: true
        onTriggered: {
            rand = Math.random()*1000
            console.log(rand)
            potency.text = rand
            iaqi = Calculation.iAQIcalculation_so2(rand)
            iAQI.text = iaqi
            backRec.color = Colorchanger.colorchanger(iAQI.text)

            i++
            line.append(i,rand)
            console.log(i,rand)
            if(rand>0) {
                if(i>9){
                    axisX.max = i + 1;
                    axisX.min = axisX.max - 10;
                }
            }
            else {
                timer.stop()
            }
            //            currentIndex++;
            //            if (iaqi > 0) {
            //                chartView.axisY().min = 0;
            //                chartView.axisY().max= 500;
            //                chartView.axisY().tickCount = 5;
            //                chartView.axisY().titleText = "μg/m3";
            //                chartView.axisX().titleText = "Time";
            //                chartView.axisX().labelFormat = "%.0f";
            //                chartView.series(currentIndex,iaqi);

            //                if (currentIndex > 3) {
            //                    chartView.axisX().max = currentIndex + 1;
            //                    chartView.axisX().min = chartView.axisX().mas - 5;
            //                } else {
            //                    chartView.axisX().max = 5;
            //                    chartView.axisX().min = 0;
            //                }
            //                chartView.axisX().tickCount = chartView.axisX().max - chartView.axisX().min + 1;
            //            }
            //            else {
            //                timer.stop();
            //                chartView.animationOptions = ChartView.AllAnimations;
            //                chartView.axisX().min = 0;
            //                chartView.axisX().max = currentIndex;
            //            }
        }
    }

    Rectangle {
        id:backRec
        width:640
        height:480
        //color: Colorchanger.colorchanger(name.text)
        anchors.fill: parent

        Rectangle {
            id: view1
            width:200
            height:50
            Text {
                id: iAQI_viewer
                text:"iAQI："
                font.pixelSize: 50
            }
        }
        Rectangle{
            id:view2
            width:200
            height:50
            anchors.left: view1.right
            Text {
                id: iAQI
                //text: Calculation.iAQIcalculation_so2(80)
                //text: Demo.func(1)
                font.pixelSize: 50
            }
        }
        Rectangle {
            id: view3
            width:200
            height:50
            anchors.top:view1.bottom
            Text {
                id: potency_viewer
                text: "浓度："
                //                anchors.top: iAQI_viewer.bottom
            }
        }
        Rectangle {
            id: view4
            width:200
            height:50
            anchors.top:view2.bottom
            anchors.left: view3.right
            Text {
                id: potency
            }
        }
        Rectangle {
            id: chartView1
            width: 400
            height: 350
            anchors.top:view3.bottom

            ChartView {
                id: chartView
                anchors.fill: parent
                theme: ChartView.ChartThemeDark
                antialiasing: true
                animationOptions: ChartView.SeriesAnimations
                ValueAxis {
                    id: axisX
                    min: 0
                    max: 10
                    tickCount: 11
                    labelsVisible: false
                }
                ValueAxis {
                    id: axisY
                    min: 0
                    max: 1000
                    tickCount: 5
                    labelsVisible: false
                }

                LineSeries {
                    id:line
                    axisX: axisX
                    axisY: axisY
                }
            }
        }
    }
}

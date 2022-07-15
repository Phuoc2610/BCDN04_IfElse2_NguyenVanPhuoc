/**
 * Khối 1: input
 * day 
 * month
 * year
 * nextDay
 * lastDay
 * nextMonth
 * lastMonth
 * nextYear
 * lastYear
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: lập ra các TH có thể xảy ra
 * B3: hiển thị lên UI
 * 
 * Khối 3: output
 * ngày tiếp theo
 * ngày trước đó
 */
document.getElementById("btnDay").onclick = function () {
    var day = parseInt(document.getElementById("inputDay").value);
    var month = parseInt(document.getElementById("inputMonth").value);
    var year = parseInt(document.getElementById("inputYear").value);
    var nextDay = 0;
    var lastDay = 0;
    var nextMonth = 0;
    var lastMonth = 0;
    var nextYear = 0;
    var lastYear = 0;

    // console.log(day, month, year);
    // if(year%4===0 && year%100!==0 && year%400!==0){
    //     console.log("năm nhuận");
    // }else{
    //     console.log("năm thường");
    // }
    nextMonth = month;
    lastMonth = month;
    lastYear = year;
    nextYear = year;
    nextDay = day + 1;
    lastDay = day - 1;
    switch (day) {
        case 1:
            if (month == 1) {
                nextDay = day + 1;
                lastDay = 31;
                lastMonth = 12;
                lastYear = year - 1;
            }
            if (month == 3 && year % 4 !== 0) {
                nextDay = day + 1;
                lastDay = 28;
                lastMonth = month - 1;
            }
            if (month == 3 && year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
                nextDay = day + 1;
                lastDay = 29;
                lastMonth = month - 1;
            }
            if (month == 4 || month == 6 || month == 9 || month == 11) {
                nextDay = day + 1;
                lastDay = 31;
                lastMonth = month - 1;
            }
            if (month == 5 || month == 7 || month == 8 || month == 10) {
                nextDay = day + 1;
                lastDay = 30;
                lastMonth = month - 1;
            }
            break;
        case 28:
            if (month == 2 && year % 4 !== 0) {
                nextDay = 1;
                lastDay = 27;
                nextMonth = 3;
                // console.log("28");
            }
            break;
        case 29:
            if (month == 2 && year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
                nextDay = 1;
                lastDay = 28;
                nextMonth = 3;
            }
            // console.log("29");
            break;
        case 30:
            if (month == 4 || month == 6 || month == 9 || month == 11) {
                nextDay = 1;
                nextMonth = month + 1;
                lastDay = day - 1;
            }
        case 31:
            if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) {
                nextDay = 1;
                lastDay = day - 1;
                nextMonth = month + 1;
            }
            if (month == 12) {
                nextDay = 1;
                lastDay = day - 1;
                nextMonth = 1;
                nextYear = year + 1;
            }
            break;
        default:
    }

    document.getElementById("txtDay").innerHTML = "Ngày tiếp theo: " + nextDay + "/" + nextMonth + "/" + nextYear + "<br>Ngày trước đó: " + lastDay + "/" + lastMonth + "/" + lastYear;
}
/**
 * Khối 1: input
 * month
 * year
 *
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: nếu tháng 2 năm nhuận (year%4===0 && year%100!==0 && year%400!==0)
 * => days = 29;
 * B3: nếu tháng 2 năm thường
 * => days = 28;
 * B4: nếu tháng 4,6,9,11
 * => days= 30;
 * B5: nếu tháng 1,3,5,7,8,10,12
 * => days = 31;
 * B6: hiển thị lên UI
 * 
 * Khối 3: output
 * days : số ngày của tháng đó
 */
document.getElementById("btnDays").onclick = function () {
    var month = parseInt(document.getElementById("inputMonths").value);
    var year = parseInt(document.getElementById("inputYears").value);

    days = 0;

    // console.log(month, year);
    switch (month) {
        case 2:
            if (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
                days = 29;
            }
            if (month == 2 && year % 4 !== 0) {
                days = 28;
            }
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            days = 31;
            break;
        default:
            days = "không hợp lệ"
    }
    document.getElementById("txtDays").innerHTML = "tháng " + month + " có:" + days + " ngày";
}

/**
 * Khối 1: input
 * num
 * unit
 * hundred
 * ten
 * ketQua
 *
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: lấy số hàng trăm
 * hundred = Math.floor(num / 100);
 * B3: lấy số hàng chục
 * ten = Math.floor(num % 100 / 10);
 * B4: lấy số hàng đơn vị
 * unit = num % 100 % 10;
 * B5: với từng số ứng với 1 tên gọi
 * B6: hiển thị lên UI
 * 
 * Khối 3: output
 * ketQua
 */
document.getElementById("btnNum3").onclick = function () {
    var num = parseInt(document.getElementById("inputNum").value);
    var unit = 0;
    var hundred = 0;
    var ten = 0;
    var ketQua = 0;
    console.log(num);

    hundred = Math.floor(num / 100);
    ten = Math.floor(num % 100 / 10);
    unit = num % 100 % 10;
    switch (hundred) {
        case 1:
            hundred = "một trăm "
            break;
        case 2:
            hundred = "hai trăm "
            break;
        case 3:
            hundred = "ba trăm "
            break;
        case 4:
            hundred = "bốn trăm "
            break;
        case 5:
            hundred = "năm trăm "
            break;
        case 6:
            hundred = "sáu trăm "
            break;
        case 7:
            hundred = "bảy trăm "
            break;
        case 8:
            hundred = "tám trăm "
            break;
        case 9:
            hundred = "chín trăm "
            break;
        default:
    }
    
    switch (ten) {
        case 0 :
            if(unit==0){
                ten = ""
            }else{
                ten = "lẻ "
            }
            break;
        case 1:
            ten = "mười "
            break;
        case 2:
            ten = "hai mươi "
            break;
        case 3:
            ten = "ba mươi "
            break;
        case 4:
            ten = "bốn mươi "
            break;
        case 5:
            ten = "năm mươi "
            break;
        case 6:
            ten = "sáu mươi "
            break;
        case 7:
            ten = "bảy mươi "
            break;
        case 8:
            ten = "tám mươi "
            break;
        case 9:
            ten = "chín mươi "
            break;
        default:
    }

    switch (unit) {
        case 0:
            unit = ""
            break;
        case 1:
            if(ten==1){
                unit = "một"
            }
            else{
                unit = "mốt"
            }
            break;
        case 2:
            unit = "hai"
            break;
        case 3:
            unit = "ba"
            break;
        case 4:
            unit = "bốn"
            break;
        case 5:
            unit = "năm"
            break;
        case 6:
            unit = "sáu"
            break;
        case 7:
            unit = "bảy"
            break;
        case 8:
            unit = "tám"
            break;
        case 9:
            unit = "chín"
            break;
        default:
    }

    ketQua = hundred + ten + unit;
    document.getElementById("txtNum3").innerHTML = ketQua;
}

/**
 * Khối 1: input
 * name1 : tên sv1
 * x1 : tọa độ x1 của sv1
 * y1 : tọa độ y1 của sv2
 * d1 : độ dài từ trường đến sv1
 * name2 : tên sv2
 * x2 : tọa độ x2 của sv2
 * y2 : tọa độ y2 của sv2
 * d2 : độ dài từ trường đến sv2
 * name3 : tên sv3
 * x3 : tọa độ x3 của sv3
 * y3 : tọa độ y3 của sv3
 * d3 : độ dài từ trường đến sv3
 * x4 : tọa độ x4 của trường
 * y4 : tọa độ y4 của trường
 * ketQua
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: lập ra các TH có thể xảy ra
 * B3: hiển thị lên UI
 * 
 * Khối 3: output
 * ketQua
 */
document.getElementById("btnToaDo").onclick = function(){
    // student 1
    var name1 = document.getElementById("inputName1").value;
    var x1 = parseInt(document.getElementById("inputX1").value);
    var y1 = parseInt(document.getElementById("inputY1").value);
    // student 2
    var name2 = document.getElementById("inputName2").value;
    var x2 = parseInt(document.getElementById("inputX2").value);
    var y2 = parseInt(document.getElementById("inputY2").value);
    // student 3
    var name3 = document.getElementById("inputName3").value;
    var x3 = parseInt(document.getElementById("inputX3").value);
    var y3 = parseInt(document.getElementById("inputY3").value);
    // School
    var x4 = parseInt(document.getElementById("inputX4").value);
    var y4 = parseInt(document.getElementById("inputY4").value);
    // Độ dài tọa dộ
    var d1= Math.sqrt(Math.pow((x1-x4),2) + Math.pow((y1-y4),2));
    var d2= Math.sqrt(Math.pow((x2-x4),2) + Math.pow((y2-y4),2));
    var d3= Math.sqrt(Math.pow((x3-x4),2) + Math.pow((y3-y4),2));
    console.log(d1);
    console.log(d2);
    console.log(d3);
    var ketQua = 0;
    if(d1>d2 && d1>d3){
        ketQua = name1;
    } else if(d2>d1 && d2>d3){
        ketQua = name2;
    }else{
        ketQua = name3;
    }
    document.getElementById("txtToaDo").innerHTML = "Sinh viên xa trường nhất: " + ketQua;
}


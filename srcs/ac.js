var ShowF = "CAINIT123";
var count_tuoi = 1;
var count_chieucao = 0;
var last_tuoi = 0;
var last_chieucao = 0;
var check_tuoi = false;
var check_chieucao = false;
var ngungu69 = 0;

function check_int(input){
    if(parseInt(input) != NaN && !isNaN(input)){
        return true;
    }
    else return false;
}

function check_space(input){
    const isWhitespaceString = str => !/\S/.test(str)
    if(isWhitespaceString(input) || input == ""){
        return true;
    }
    else return false;
}

function hide_ans(type){
    if(type == "chieucao") document.getElementById("show_ans_chieucao").style.display = "none";
    else document.getElementById("show_ans_tuoi").style.display = "none";
}

function clicksss(type){
    if(type == 'tuoi'){
        var get = document.getElementById("tuoi");
        var get2 = document.getElementById("chieucao");
        document.getElementById("btnchieucao").className = "btn btn-secondary";
        document.getElementById("btntuoi").className = "btn btn-primary";
        get2.style.display = "none";
        get.style.display = "block";
        ShowF = "TUOI";
    }
    else{
        var get = document.getElementById("chieucao");
        var get2 = document.getElementById("tuoi");
        document.getElementById("btntuoi").className = "btn btn-secondary";
        document.getElementById("btnchieucao").className = "btn btn-primary";
        get2.style.display = "none";
        get.style.display = "block";
        ShowF = "CHIEUCAO";
    }
}

function calc(type){
    if(type == "chieucao"){
        var chieucao_tmp = document.getElementById("chieucao_input").value;
        if(check_space(chieucao_tmp)){
            hide_ans("chieucao")
            return
        }
        if(check_int(chieucao_tmp)){
            if(!check_chieucao){ 
                document.getElementById("ans_chieucao").textContent = "Chieu cao cua ban la: " + chieucao_tmp + " cm";
                last_chieucao = chieucao_tmp;
                check_chieucao = true;
            }
            else{
                if(chieucao_tmp == last_chieucao){
                    count_chieucao = count_chieucao + 1;
                    document.getElementById("ans_chieucao").textContent = "Ban da an " + count_chieucao +" lan, chieu cao cua ban van la: " + chieucao_tmp + " cm";
                }
                else{
                    check_chieucao = false;
                    count_chieucao = 0;
                    document.getElementById("ans_chieucao").textContent = "Chieu cao cua ban la: " + chieucao_tmp + " cm";
                }
            }
            document.getElementById("show_ans_chieucao").style.display = "block";
        }
        else{
            if(ngungu69 < 5) document.getElementById("ans_chieucao").textContent = "May bi ngu a lam j co thang nao co chieu cao la " + chieucao_tmp + " cm????";
            if(ngungu69 == 5) document.getElementById("ans_chieucao").textContent = "dung spam nua 😡";
            if(ngungu69 == 6) document.getElementById("ans_chieucao").textContent = "may vao day chi de spam thoi dung khong";
            if(ngungu69 == 7) document.getElementById("ans_chieucao").textContent = "may ngon may bam nua xem 😏"
            if(ngungu69 >= 8) {
                document.getElementById("ans_chieucao").textContent = "may gioi";
                window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            }
            ngungu69 += 1
            document.getElementById("show_ans_chieucao").style.display = "block";
        }
    }
    else if(type == "tuoi"){
        var tuoi_tmp = document.getElementById("tuoi_input").value;
        if(check_space(tuoi_tmp)){
            hide_ans("tuoi")
            return
        }
        if(check_int(tuoi_tmp)){
            if(!check_tuoi){
                document.getElementById("ans_tuoi").textContent = "Tuoi cua ban la: " + tuoi_tmp;
                last_tuoi = tuoi_tmp;
                check_tuoi = true;
            }
            else{
                if(tuoi_tmp == last_tuoi){
                    document.getElementById("ans_tuoi").textContent = "Ban da an " + count_tuoi +" lan, tuoi cua ban van la: " + tuoi_tmp;
                }
                else{
                    check_tuoi = false;
                    count_tuoi = 1;
                    document.getElementById("ans_tuoi").textContent = "Tuoi cua ban la: " + tuoi_tmp;
                }
                if(count_tuoi == 5) document.getElementById("ans_tuoi").textContent = "dung spam nua 😡";
                if(count_tuoi == 6) document.getElementById("ans_tuoi").textContent = "may vao day chi de spam thoi dung khong";
                if(count_tuoi == 7) document.getElementById("ans_tuoi").textContent = "may ngon may bam nua xem 😏";
                if(count_tuoi >= 8){
                    document.getElementById("ans_tuoi").textContent = "may gioi";
                    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                }
                count_tuoi = count_tuoi + 1;
            }
            document.getElementById("show_ans_tuoi").style.display = "block";
        }
        else{
            document.getElementById("ans_tuoi").textContent = "May bi ngu a lam j co thang nao co so tuoi la " + tuoi_tmp + " ????";
            document.getElementById("show_ans_tuoi").style.display = "block";
        }
    }
}

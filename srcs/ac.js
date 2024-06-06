var ShowF = "CAINIT";
var count_tuoi = 0;
var count_chieucao = 0;
var last_tuoi = 0;
var last_chieucao = 0;
var check_tuoi = false;
var check_chieucao = false;

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
    else if(type == "tuoi")document.getElementById("show_ans_tuoi").style.display = "none";
    else document.getElementById("show_ans_tinh").style.display = "none";
}

function clicksss(type){
    if(type == 'tuoi'){
        var get = document.getElementById("tuoi");
        var get2 = document.getElementById("chieucao");
        document.getElementById("btnchieucao").className = "btn btn-secondary";
        document.getElementById("btntinh").className = "btn btn-secondary";
        document.getElementById("btntuoi").className = "btn btn-primary";
        get2.style.display = "none";
        var get3 = document.getElementById("tinh");
        get3.style.display = "none";
        get.style.display = "block";
        ShowF = "TUOI";
    }
    else if(type == 'chieucao'){
        var get = document.getElementById("chieucao");
        var get2 = document.getElementById("tuoi");
        document.getElementById("btntuoi").className = "btn btn-secondary";
        document.getElementById("btntinh").className = "btn btn-secondary";
        document.getElementById("btnchieucao").className = "btn btn-primary";
        get2.style.display = "none";
        var get3 = document.getElementById("tinh");
        get3.style.display = "none";
        get.style.display = "block";
        ShowF = "CHIEUCAO";
    }
    else{
        var get = document.getElementById("tinh");
        var get2 = document.getElementById("tuoi");
        document.getElementById("btnchieucao").className = "btn btn-secondary";
        document.getElementById("btntuoi").className = "btn btn-secondary";
        document.getElementById("btntinh").className = "btn btn-primary";
        get2.style.display = "none";
        var get3 = document.getElementById("chieucao");
        get3.style.display = "none";
        get.style.display = "block";
        ShowF = "TINH";
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
            document.getElementById("ans_chieucao").textContent = "May bi ngu a lam j co thang nao co chieu cao la " + chieucao_tmp + " cm????";
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
                    count_tuoi = count_tuoi + 1;
                    document.getElementById("ans_tuoi").textContent = "Ban da an " + count_tuoi +" lan, tuoi cua ban van la: " + tuoi_tmp;
                }
                else{
                    check_tuoi = false;
                    count_tuoi = 0;
                    document.getElementById("ans_tuoi").textContent = "Tuoi cua ban la: " + tuoi_tmp;
                }
            }
            document.getElementById("show_ans_tuoi").style.display = "block";
        }
        else{
            document.getElementById("ans_tuoi").textContent = "May bi ngu a lam j co thang nao co so tuoi la " + tuoi_tmp + " ????";
            document.getElementById("show_ans_tuoi").style.display = "block";
        }
    }
    else{
        var a = document.getElementById("a_input").value;
        var b = document.getElementById("b_input").value;
        if(check_space(a) || check_space(b)){
            hide_ans("tinh")
            return
        }
        // var ans = "Hello World!"
        var ans = a + b;
        document.getElementById("ans_tinh").textContent = "Ket qua la: " + ans;
        document.getElementById("show_ans_tinh").style.display = "block";
    }
}

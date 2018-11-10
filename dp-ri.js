function calculate_rt(){
    a1 = $("#a1-val").val()
    a2 = $("#a2-val").val()
    a3 = $("#a3-val").val()
    a4 = $("#a4-val").val()
    a5 = $("#a5-val").val()
    a6 = $("#a6-val").val()
    a7 = $("#a7-val").val()

    w1 = $("#a1-w").val() / 100
    w2 = $("#a2-w").val() / 100
    w3 = $("#a3-w").val() / 100
    w4 = $("#a4-w").val() / 100
    w5 = $("#a5-w").val() / 100
    w6 = $("#a6-w").val() / 100
    w7 = $("#a7-w").val() / 100

    k = $("input[name=dp-class]:checked").val()
    if (!k)
        k=1

    return dp_ri(a1, w1, a2, w2, a3, w3, a4, w4, a5, w5, a6, w6, a7, w7, k)
}

function simulate_dp_ri(){
    a1 = $("#sim-val-a1").val()
    a2 = $("#sim-val-a2").val()
    a3 = $("#sim-val-a3").val()
    a4 = $("#sim-val-a4").val()
    a5 = $("#sim-val-a5").val()
    a6 = $("#sim-val-a6").val()
    a7 = $("#sim-val-a7").val()

    w1 = $("#a1-w").val() / 100
    w2 = $("#a2-w").val() / 100
    w3 = $("#a3-w").val() / 100
    w4 = $("#a4-w").val() / 100
    w5 = $("#a5-w").val() / 100
    w6 = $("#a6-w").val() / 100
    w7 = $("#a7-w").val() / 100

    k = $("input[name=sim-dp-class]:checked").val()

    if (!k)
        k=1
    console.log(a1, w1, a2, w2, a3, w3, a4, w4, a5, w5, a6, w6, a7, w7, k)
    return dp_ri(a1, w1, a2, w2, a3, w3, a4, w4, a5, w5, a6, w6, a7, w7, k)
}

function dp_ri(a1, w1, a2, w2, a3, w3, a4, w4, a5, w5, a6, w6, a7, w7, k){
     return (w1*a1 + w2*a2 + w3*a3 + w4*a4 + w5*a5 + w6*a6 + w7*a7) * k
}

function get_predicted(a1, w1, a2, w2, a3, w3, a4, w4, a5, w5, a6, w6, a7, w7, k){

}
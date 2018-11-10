function calculate_rt(){
    a1 = $("#a1-val").val()
    a2 = $("#a2-val").val()
    a3 = $("#a3-val").val()
    a4 = $("#a4-val").val()
    a5 = $("#a5-val").val()
    a6 = $("#a6-val").val()
    a7 = $("#a7-val").val()

    w1 = $("#a1-w").val()
    w2 = $("#a2-w").val()
    w3 = $("#a3-w").val()
    w4 = $("#a4-w").val()
    w5 = $("#a5-w").val()
    w6 = $("#a6-w").val()
    w7 = $("#a7-w").val()

    k = $("input[name=dp-class]:checked").val()
    console.log(dp_ri(a1, w1, a2, w2, a3, w3, a4, w4, a5, w5, a6, w6, a7, w7, k))
    return dp_ri(a1, w1, a2, w2, a3, w3, a4, w4, a5, w5, a6, w6, a7, w7, k)
}

function simulate_dp_ri(){
    return 0
}

function dp_ri(a1, w1, a2, w2, a3, w3, a4, w4, a5, w5, a6, w6, a7, w7, k){
     return ((w1*a1 + w2*a2 + w3*a3 + w4*a4 + w5*a5 + w6*a6 + w7*a7) * k/100)
}

function get_predicted(a1, w1, a2, w2, a3, w3, a4, w4, a5, w5, a6, w6, a7, w7, k){

}
function get_rt_values(){
    k = 1

    a1 = parseFloat($("#a1-val").val())
    a2 = parseFloat($("#a2-val").val())
    a3 = parseFloat($("#a3-val").val())
    a4 = parseFloat($("#a4-val").val())
    a5 = parseFloat($("#a5-val").val())
    a6 = parseFloat($("#a6-val").val())
    a7 = parseFloat($("#a7-val").val())

    w1 = parseFloat($("#a1-w").val() / 100)
    w2 = parseFloat($("#a2-w").val() / 100)
    w3 = parseFloat($("#a3-w").val() / 100)
    w4 = parseFloat($("#a4-w").val() / 100)
    w5 = parseFloat($("#a5-w").val() / 100)
    w6 = parseFloat($("#a6-w").val() / 100)
    w7 = parseFloat($("#a7-w").val() / 100)


    selected_k = parseFloat($("input[name=dp-class]:checked").val())
    if (Math.min(a1, a2, a3, a4, a5, a6, a7) < 1)
        k=selected_k

    return [a1, w1, a2, w2, a3, w3, a4, w4, a5, w5, a6, w6, a7, w7, k]
}

function calculate_rt(){
    var [a1, w1, a2, w2, a3, w3, a4, w4, a5, w5, a6, w6, a7, w7, k] = get_rt_values()
    return dp_ri(a1, w1, a2, w2, a3, w3, a4, w4, a5, w5, a6, w6, a7, w7, k)
}

function simulate_dp_ri(){
    k=1

    a1 = parseFloat($("#sim-val-a1").val())
    a2 = parseFloat($("#sim-val-a2").val())
    a3 = parseFloat($("#sim-val-a3").val())
    a4 = parseFloat($("#sim-val-a4").val())
    a5 = parseFloat($("#sim-val-a5").val())
    a6 = parseFloat($("#sim-val-a6").val())
    a7 = parseFloat($("#sim-val-a7").val())

    w1 = parseFloat($("#a1-w").val()) / 100
    w2 = parseFloat($("#a2-w").val()) / 100
    w3 = parseFloat($("#a3-w").val()) / 100
    w4 = parseFloat($("#a4-w").val()) / 100
    w5 = parseFloat($("#a5-w").val()) / 100
    w6 = parseFloat($("#a6-w").val()) / 100
    w7 = parseFloat($("#a7-w").val()) / 100

    selected_k = $("input[name=sim-dp-class]:checked").val()
    if (Math.min(a1, a2, a3, a4, a5, a6, a7) < 1)
        k=selected_k
    console.log([a1, w1, a2, w2, a3, w3, a4, w4, a5, w5, a6, w6, a7, w7, k])
    return dp_ri(a1, w1, a2, w2, a3, w3, a4, w4, a5, w5, a6, w6, a7, w7, k)
}

function dp_ri(a1, w1, a2, w2, a3, w3, a4, w4, a5, w5, a6, w6, a7, w7, k){
     return (w1*a1 + w2*a2 + w3*a3 + w4*a4 + w5*a5 + w6*a6 + w7*a7) * k
}
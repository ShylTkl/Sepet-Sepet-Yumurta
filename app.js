let inpu1 = document.querySelector('#input1');
let inpu2 = document.querySelector('#input2');
let inpu3 = document.querySelector('#input3');
let aratop = document.querySelector('#aratop');
let kdv = document.querySelector('#kdv');
let indirim = document.querySelector('#indirim');
let tota = document.querySelector('#total');
let s1 = document.querySelector('#sil1');
let s2 = document.querySelector('#sil2');
let s3 = document.querySelector('#sil3');
let div1 = document.querySelector('#sepe1');
let div2 = document.querySelector('#sepe2');
let div3 = document.querySelector('#sepe3');

const tikla = document.querySelector(".container");

tikla.addEventListener("click", (e) => {
    if (e.target.classList.contains("azalt")) {
        if (e.target.nextElementSibling.value > 1) {
        e.target.nextElementSibling.value--;
        let sum = Number(inpu1.value)*25.99 + Number(inpu2.value)*48.99 + Number(inpu3.value)*39.99;
        sum =sum.toFixed(2)
        aratop.value=sum
        kdv.value=(sum*0.18).toFixed(2)
        indirim.value=((Number(sum)+Number(kdv.value))*0.20).toFixed(2)
        tota.value=(Number(sum)+Number(kdv.value)-Number(indirim.value)).toFixed(2)
    } else {
        alert("Ürün Başarıyla Kaldırıldı");
        e.target.closest(".sepet").remove();
    }
    } else if (e.target.classList.contains("arttir")) {
    e.target.previousElementSibling.value++;
    let sum = Number(inpu1.value)*25.99 + Number(inpu2.value)*48.99 + Number(inpu3.value)*39.99;
    sum =sum.toFixed(2)
    aratop.value=sum
    kdv.value=(sum*0.18).toFixed(2)
    indirim.value=((Number(sum)+Number(kdv.value))*0.20).toFixed(2)
    tota.value=(Number(sum)+Number(kdv.value)-Number(indirim.value)).toFixed(2)
    } else{
        console.log("sa");
    }
});
s1?.addEventListener("click", sill)
function sill(){
    div1?.remove()
    inpu1.value=0
    let sum = Number(inpu1.value)*25.99 + Number(inpu2.value)*48.99 + Number(inpu3.value)*39.99;
    sum =sum.toFixed(2)
console.log(sum);
aratop.value=sum
kdv.value=(sum/100*18).toFixed(2)
indirim.value=((Number(sum)+Number(kdv.value))/100*20).toFixed(2)
tota.value=(Number(sum)+Number(kdv.value)-Number(indirim.value)).toFixed(2)
}
s2?.addEventListener("click", sill2)
function sill2(){
    div2?.remove()
    inpu2.value=0
    let sum = Number(inpu1.value)*25.99 + Number(inpu2.value)*48.99 + Number(inpu3.value)*39.99;
    sum =sum.toFixed(2)
console.log(sum);
aratop.value=sum
kdv.value=(sum/100*18).toFixed(2)
indirim.value=((Number(sum)+Number(kdv.value))/100*20).toFixed(2)
tota.value=(Number(sum)+Number(kdv.value)-Number(indirim.value)).toFixed(2)
}
s3?.addEventListener("click", sill3)
function sill3(){
    div3?.remove()
    inpu3.value=0
    let sum = Number(inpu1.value)*25.99 + Number(inpu2.value)*48.99 + Number(inpu3.value)*39.99;
    sum =sum.toFixed(2)
console.log(sum);
aratop.value=sum
kdv.value=(sum/100*18).toFixed(2)
indirim.value=((Number(sum)+Number(kdv.value))/100*20).toFixed(2)
tota.value=(Number(sum)+Number(kdv.value)-Number(indirim.value)).toFixed(2)
}
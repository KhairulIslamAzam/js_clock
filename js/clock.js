var dAte ,hOur, mInute, sEcond,clock,beg_color;

function clocky(){
	dAte = new Date();
	hOur = dAte.getHours();
	mInute= dAte.getMinutes();
	sEcond= dAte.getSeconds();

if (hOur <= 9){
	hOur = '0' + hOur;
}

if (mInute <= 9){
	mInute = '0' + mInute;
}

if (sEcond <= 9){
	sEcond = '0' + sEcond;
}

clock = hOur +":"+mInute+":"+sEcond;
beg_color = "#" + hOur + mInute + sEcond;

document.getElementById("clock").innerHTML = clock;
document.body.style.background = beg_color;

setTimeout(clocky,1000);
}

clocky();
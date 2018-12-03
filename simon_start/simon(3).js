class Image {
	constructor (src,alt,id,text ){
		this.src= src;
		this.alt= alt;
		this.id = id;
		this.text= text;
	}
}

class Slider{
	constructor(){
		this.images=[
		new Image("loutre.jpg","loutre","loutre"),
		new Image("herisson.jpg","herisson","herisson"),
		new Image("pool.jpg","tigre","tigre")
		]
		this.i = 0;
	}
	
	changerD (){
		let imgElmt = document.getElementById("image");
		imgElmt.src = this.images[this.i].src;
		
		if(this.i<this.images.length-1){		
		this.i++;
		}else{
		this.i=0;
		}		
}
	changerG (){
		this.i--;		
		if(this.i<0){
			this.i=this.images.length-1;
		} 
		let imgElmt = document.getElementById("image");
		imgElmt.src = this.images[this.i].src;
	}
}

let s = new Slider();
document.addEventListener("keypress", (e)=> {
	if(e.keyCode === 39){
	s.changerD()} ;
	if(e.keyCode === 37){
	s.changerG()}});
document.getElementById("flecheG").addEventListener("click", (e) => {
    s.changerG()});
document.getElementById("flecheD").addEventListener("click", (e) => {
    s.changerD()});  



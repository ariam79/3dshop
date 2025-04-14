
class Cube{
    constructor(size){
        this.elem = document.createElement("div")
        this.elem.style.transformOrigin = `${size/2}px ${size/2}px -${size/2}px`
        this.elem.className = "cube"

        let s1 = document.createElement("div")
        s1.className = "side"
        s1.style.width = `${size}px`
        s1.style.height = `${size}px`
        s1.style.transform = ``

        let s2 = document.createElement("div")
        s2.className = "side"
        s2.style.width = `${size}px`
        s2.style.height = `${size}px`
        s2.style.transform = `rotateY(90deg) translateZ(${size/2}px) translateX(${size/2}px)`
        
        let s3 = document.createElement("div")
        s3.className = "side"
        s3.style.width = `${size}px`
        s3.style.height = `${size}px`
        s3.style.transform = `rotateY(90deg) translateZ(-${size/2}px) translateX(${size/2}px)`

        let s4 = document.createElement("div")
        s4.className = "side"
        s4.style.width = `${size}px`
        s4.style.height = `${size}px`
        s4.style.transform = `translateZ(-${size}px)`

        let s5 = document.createElement("div")
        s5.className = "side"
        s5.style.width = `${size}px`
        s5.style.height = `${size}px`
        s5.style.transform = `rotateX(90deg) translateZ(${size/2}px) translateY(-${size/2}px)`

        let s6 = document.createElement("div")
        s6.className = "side"
        s6.style.width = `${size}px`
        s6.style.height = `${size}px`
        s6.style.transform = `rotateX(90deg) translateZ(-${size/2}px) translateY(-${size/2}px)`

        this.elem.appendChild(s1);
        this.elem.appendChild(s2);
        this.elem.appendChild(s3);
        this.elem.appendChild(s4);
        this.elem.appendChild(s5);
        this.elem.appendChild(s6);
    }
    Translate(x,y,z){
        this.elem.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`
    }
    Rotate(x,y,z){
        this.elem.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
    }
    ForAll(s){
        this.elem.querySelectorAll(".side").forEach((v)=>{
            s(v)
        })
    }
}
class GTransform{
    constructor(e){
        this.elem = e
    }
    Translate(x,y,z){
        this.elem.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`
    }
    Rotate(x,y,z){
        this.elem.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
    }
}
let ext = new GTransform(document.querySelector(".ext"))
ext.Rotate(140,-140,0)
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        let cb = new Cube(100)
        cb.elem.onmouseover = ()=>{
            cb.ForAll(x=>{
                x.style.backgroundColor = "cyan"
                cb.Translate(i*100,100,j*100)
            })
        }
        cb.elem.onmouseleave = ()=>{
            cb.ForAll(x=>{
                x.style.backgroundColor = "red"
                cb.Translate(i*100,0,j*100)
            })
        }
        cb.Translate(i*100,0,j*100);
        ext.elem.appendChild(cb.elem)
    }
}
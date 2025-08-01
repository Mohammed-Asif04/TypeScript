abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia(): void;
    
    getReelTime():number{
        //some complex calculation
        return 8;
    }
}


class Instagrams extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter);
    }
    getSepia(): void{
        console.log("Instagram Sepia");
    }
    
}
const hc = new Instagrams("HDR", "HDR",10);
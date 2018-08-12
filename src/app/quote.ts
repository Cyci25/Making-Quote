// export class Quote {
//     constructor (public author:string, public quote:string, public submiter:string, public timeDate:Date){}
// }
export class Quote {
    public showDescription:boolean
    constructor(public id:number, public name:string,public description:string,public completeDate:Date){
        this.showDescription=true

    }
}
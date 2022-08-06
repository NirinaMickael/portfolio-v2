export interface ITEmoji  {
    id : number;
    emoji : string;
}
export interface ITUserRemark {
    id : number ;
    name : string;
    email : string;
    remark : string;
}

export interface ITLink {
    id : number ;
    label : string;
    isActive : boolean;
}

export interface ITSroll {
    id : number; 
    label : string;
}

export interface ITHeight {
    height : number;
}

export interface ITCurrentRoute {
    editRoute ? : any;
}

export interface ITLoading {
    isVisited : boolean;
    setVisit ?: any;
} 

export interface ITCard {
    id : number;
    image : string;
    actions : ITAction[];
    tecno  : ITTecno[];
    description : string;
}
export interface ITTecno {
    id : number ; 
    label : string;
    image : string; 
}
export interface ITAction{
    id : number;
    label : string;
    url : string;
}

export interface IMessage {
    id : number ;
    isOther : boolean;
    message : string;
}

export interface IRemark {
    id : number;
    username : string;
    status : string ;
    remark: string;
}
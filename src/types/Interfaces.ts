interface IOrigin {
    name:string,
    link:string
}

export interface ICharacter {
    id: number,
    name: string;
    status: string,
    species: string;
    gender: string;
    image: string;
    origin: IOrigin,
}

interface IInfo {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
  }
  
 export interface IResponce {
    results?: ICharacter[];
    info?: IInfo
    error?: string
    status:string
  }
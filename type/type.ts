export interface ITeam{
  id: number;
  name: string;
  fifaCode: string;
  iso2: string;
  flag: string;
  emoji:string
  emojiString:string
}

export interface IStadium {
  id: number;
  name:string
  city:string
  lat: number;
  lng: number;
  image: string;
}

export interface ITvChannel {
  id: number;
  name: string;
  icon:string
  country:string
  ico2:string
  lang:string[]
}

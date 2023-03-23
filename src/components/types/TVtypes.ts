import ICast from "./Actors";
import Seasons from "./Seasons";


let TVtypes: Array<Itv>;
export default interface Itv{
    id: string,
    Actors: ICast[],
    AgeRating: string,
    DirecredBy: string,
    EpisodeDuration: string,
    Image: string,
    Language: string,
    Network: string,
    NrOfSeasons: string,
    Plot: string,
    ProducedBy: string,
    ReleaseDate: any,
    Season1 : Seasons[],
    Season2 : Seasons[],
    Season3 : Seasons[],
    Season4 : Seasons[],
    Season5 : Seasons[],
    Season6 : Seasons[],
    Season7 : Seasons[],
    ShowName: string



     
};
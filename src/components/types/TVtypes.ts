let TVtypes: Array<Itv>;

// these are the data types of the database, each of the is used to retreive the correcct information and then used through the map function
// to display the information inside the app

export default interface Itv{
    id: string,
    Actors: string,
    AgeRating: string,
    DirectedBy: string,
    EpisodeDuration: string,
    Image: string,
    Language: string,
    Network: string,
    NrOfSeasons: string,
    Plot: string,
    ProducedBy: string,
    ReleaseDate: any,
    Season1 : string,
    Season10 : string,
    Season11 : string,
    Season2 : string,
    Season3 : string,
    Season4 : string,
    Season5 : string,
    Season6 : string,
    Season7 : string,
    Season8 : string,
    Season9 : string,
    ShowName: string
};
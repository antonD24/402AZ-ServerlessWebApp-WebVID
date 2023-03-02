import http from "../http-common";
import Itv from "../components/types/TVtypes"; 
import {Auth} from "aws-amplify";

const getAll = async () => {
    // returns array of all TV Shows
    const user = await Auth.currentSession();
    return http.get<Array<Itv>>("/TVShows", {
        headers:{
            Authorization: user.getIdToken().getJwtToken().toString()
        }
    });
};

//returning just one show

    const get = async(ShowID: string)=>{
    const user = await Auth.currentSession();
    return http.get<Itv>(`/TVShows/${ShowID}`, {
        headers:{
            Authorization: user.getIdToken().getJwtToken().toString()
        }
    });
};

//deleting show
const remove = async(ShowID: string) => {
    const user = await Auth.currentSession();
    return http.delete<any>(`/TVShows/${ShowID}`,{
        headers:{
            Authorization: user.getIdToken().getJwtToken().toString()
        }
    });
};

const put = async (data : Itv)=> {
    const user = await Auth.currentSession();
    return http.put<any>("/TVtypes,", data, {
        headers:{
            Authorization: user.getIdToken().getJwtToken().toString()
        }
    });
};

const ShowsServices = {
    getAll,
    get,
    remove,
    put
}

export default ShowsServices;
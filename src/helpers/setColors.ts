import { Vehicle } from "../types/vehicle";
import { colorsCl } from "../database/colors";

export const setColors = (vehicles: Vehicle[]) => {
    // let vehiclesFormated: Vehicle[] = []

    for (let i in vehicles){
        let color = vehicles[i].color

        for(let j in colorsCl){
            if(colorsCl[j].color === color){
                vehicles[i].colorBox = colorsCl[j].colorBox
                vehicles[i].colorText = colorsCl[j].colorText
            }
        }
    }
    return vehicles
}
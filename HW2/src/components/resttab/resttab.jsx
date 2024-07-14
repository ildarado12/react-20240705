import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../restaurant/restaurant";

export const Resttab = ({name}) => {
    if (!name) {
        return null;
    }

    const [nameRest, setRest] = useState(restaurants[0].name);

    const select = () => {
        const rest = restaurants.find((restaurant) => restaurant.name == name);
        (<Restaurant name={rest.name} menu={rest.menu} reviews={rest.reviews}/>);
        setRest(name);
    }

    return <button onClick={select}>
            <h2>{name}</h2>
        </button>
};
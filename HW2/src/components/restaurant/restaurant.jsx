import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";

export const Restaurant = ({name, menu, reviews}) => {
    if (!name) {
        return null;
    }

    return <div>
        <h2>
            "{name}"
        </h2>
        <ul style = {{fontWeight: 800}}>Menu:</ul>
        {menu.map(({name, price, ingredients}) => (
            <Menu name={name} price={price} ingredients={ingredients}/>
            ))}
        <ul style = {{fontWeight: 800}}>Reviews:</ul>
        {reviews.map(({user, text, rating}) => (
            <Reviews user={user} text={text} rating={rating}/>
            ))}
    </div>
};
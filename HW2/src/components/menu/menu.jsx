import { Counter } from "../counter/counter";
import { Ingredients } from "../ingredients/ingredients";

export const Menu = ({name, price, ingredients}) => {
    if (!name) {
        return null;
    }

    return <li>
        "{name}" - {price}$
        <p style = {{fontWeight: 400}}>Ingredients:</p>
        <p style = {{fontWeight: 400}}>{ingredients.map((ingredient) => (<Ingredients ingredient={ingredient}/>))}</p>
        <Counter />
    </li>
};
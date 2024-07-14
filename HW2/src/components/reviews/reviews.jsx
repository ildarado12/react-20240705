export const Reviews = ({user, text, rating}) => {
    if (!user) {
        return null;
    }

    return <li style = {{fontWeight: 800}}>
        {user}:         
        {text?.length ? (<span style = {{fontWeight: 400}}> "{text}"</span>) : null}
        <p style = {{fontWeight: 400}}>Rating: {rating}</p>
    </li>;
};
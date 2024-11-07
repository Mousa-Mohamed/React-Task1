const person = {
    name: "Gregorio Y. Zara",
    imageUrl: "https://i.imgur.com/",
    imageId: "7vQD0fP",
    imageSize: "s",
    theme: {
        backgroundColor: "black",
        color: "pink",
    },
};

export default function TodoList3() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src={`${person.imageUrl}${person.imageId}${person.imageSize}.jpg`}
                alt={person.name}
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}

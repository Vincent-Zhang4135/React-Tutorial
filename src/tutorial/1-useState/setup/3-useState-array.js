import React from "react";
import { data } from "../../../data.js";

const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);
    function removeById(id) {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }
    return (
        <React.Fragment>
            {people.map(({ id, name }) => {
                return (
                    <div key={id} className="item">
                        <h4>{name}</h4>
                        <button className="btn" onClick={() => removeById(id)}>
                            clear name
                        </button>
                    </div>
                );
            })}
            <button className="btn" onClick={() => setPeople([])}>
                Clear all
            </button>
        </React.Fragment>
    );
};

export default UseStateArray;

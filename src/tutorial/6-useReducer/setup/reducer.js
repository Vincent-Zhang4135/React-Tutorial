export const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const newItems = [...state.people, action.payload];
        return {
            ...state,
            people: newItems,
            isModalOpen: true,
            modalContent: "item added",
        };
    } else if (action.type === "NO_ITEM") {
        return {
            ...state,
            isModalOpen: true,
            modalContent: "please enter something",
        };
    } else if (action.type === "CLOSE_MODAL") {
        return {
            ...state,
            isModalOpen: false,
            modalContent: "",
        };
    } else if (action.type === "REMOVE_ITEM") {
        const newPeople = state.people.filter(
            (person) => person.id !== action.payload
        );
        return {
            ...state,
            people: newPeople,
        };
    }
    throw new Error("no matching action type");
};

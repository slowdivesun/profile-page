import { createContext, useEffect, useReducer } from "react"
import Reducer from "./Reducer";

const INITIAL_STATE = {
    school: [
        {
            "key": 1,
            "major": "Computer Science and Engineering",
            "Name": "Indian Institute of Technology, Jodhpur",
            "From": "2019",
            "To": "2023"
        },
        {
            "key": 2,
            "major": "Maths",
            "Name": "CHBS",
            "From": "2015",
            "To": "2019"
        }
    ],
    company: {
        "position": "Systems Engineer",
        "Name": "Company.In",
        "From": "2019",
        "To": "Present"
    },
    certificates: [
        "Certificate 1",
        "Certificate 2"
    ]
}

export const Context = createContext(INITIAL_STATE);


export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    return (
        <Context.Provider value={{
            school: state.school,
            company: state.company,
            certificate: state.certificate,
            dispatch,
        }}>
            {children}
        </Context.Provider>
    )
}
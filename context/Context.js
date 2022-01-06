import { createContext, useEffect, useReducer } from "react"
import Reducer from "./Reducer";

const INITIAL_STATE = {
    info: {
        name: "Shivam Kumar",
        email: "shivam.gup82@gmail.com",
        mobile: "+91 9999999999"
    },
    school: [
        {
            key: 1,
            major: "Computer Science and Engineering",
            name: "Indian Institute of Technology, Jodhpur",
            from: "2019",
            to: "2023"
        },
        {
            key: 2,
            major: "Maths",
            name: "CHBS",
            from: "2015",
            to: "2019"
        }
    ],
    company: [
        {
            position: "Systems Engineer",
            name: "Company.In",
            from: "2019",
            to: "Present"
        },
    ],
    certificates: [
        "Certificate 1",
        "Certificate 2"
    ],
    skills: [
        "HTML", "CSS", "Node JS", "React JS"
    ],
    interests: [
        "Web", "Networking", "ML", "DL"
    ]
}

export const Context = createContext(INITIAL_STATE);


export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    return (
        <Context.Provider value={{
            school: state.school,
            company: state.company,
            certificates: state.certificates,
            skills: state.skills,
            interests: state.interests,
            info: state.info,
            dispatch,
        }}>
            {children}
        </Context.Provider>
    )
}
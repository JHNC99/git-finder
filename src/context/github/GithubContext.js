import { createContext, useReducer } from 'react';
import GithubReducer from "../github/GithubReducer"
const GitHubContext = createContext();
/* ===================== TOKEN AND URL =================*/
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

/* =======================  PROVIDER FUNCTION ========================= */
export const GithubProvider = ({ children }) => {

    let initialState = {
        users: [],
        loading: false//el loading inicializa en true(es visible)
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    /* the state save users fetch */
    // const [users, setUsers] = useState([]);
    //const [loading, setLoading] = useState(true);

    /* Get initial users (testing porpuses)*/
    const searchUser = async (text) => {
        setLoading()//mantiene el Loading(true)
        const params = new URLSearchParams({
            q: text
        })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });
        const { items } = await response.json();
        //setUsers(request);
        //setLoading(false);

        dispatch({
            type: 'GET_USERS',
            payload: items// se realiza la peticion y se pasa datos al payload y loading=False
        })
    };

    const getUser = async (login) => {
        setLoading()//mantiene el Loading(true)

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });
        //Validation response (404)
        if (response.status === 404) {
            window.location.assign('/notfound')
        }
        else {
            const data = await response.json();
            dispatch({
                type: 'GET_USER',
                payload: data// se realiza la peticion y se pasa datos al payload y loading=False
            })
        }
    };

    //Clear user from state

    const clearUsers = () => dispatch({
        type: "CLEAR_USERS"
    })

    //Set loading
    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING',
        })

    }

    /* ============ RETURN THE CONTEXT ============= */
    /* 
        state.loading=> Toma el estado de false
    */
    return <GitHubContext.Provider value={{
        users: state.users, loading: state.loading, user: state.user, searchUser, clearUsers, getUser
    }}>
        {children}
    </GitHubContext.Provider>

}
export default GitHubContext;
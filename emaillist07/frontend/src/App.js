import React, {useState, useEffect} from 'react'
import './assets/scss/App.scss';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

const App = () => {
    const [emails, setEmails] = useState([]);

    useEffect(async () => {
        try {
            const response = await fetch('/api', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: null
            });

            if(!response.ok) {
                console.log("error:", response.status, response.statusText);
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                console.log("error:", json.message);
                throw new Error(`${json.result} ${json.message}`);
            }
            
            setEmails(json.data);
        } catch(err) {
            console.log(err);
        }
    }, []);


    const notifyKeywordChange = async function(keyword) {
        console.log("/api?kw=" + keyword);

        try {
            const response = await fetch(`/api?kw=${keyword}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: null
            });

            if(!response.ok) {
                console.log("error:", response.status, response.statusText);
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                console.log("error:", json.message);
                throw new Error(`${json.result} ${json.message}`);
            }
            
            setEmails(json.data);
        } catch(err) {
            console.log(err);
        }
    }

    const notifyEmailAdd = async function(email) {
        try {
            const response = await fetch(`/api?kw=${keyword}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(email)
            });

            // o={n:10}
            //JSON.stringify(o) -> {n:10}

            if(!response.ok) {
                console.log("error:", response.status, response.statusText);
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                console.log("error:", json.message);
                throw new Error(`${json.result} ${json.message}`);
            }
            
            setEmails([json.data, ...emails]);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className={'App'}>
            <RegisterForm callback={notifyEmailAdd}/>
            <SearchBar callback={notifyKeywordChange}/>
            <Emaillist emails={emails} />
        </div>
    )
}

export default App
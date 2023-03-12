import {useEffect, useState} from "react";
import {Service} from "./Service";
import {Dictionary} from "./Dictionary";

interface LogInterfaces {
    timestamp: string
    level : number
    log : string
    from :string
}

export function testLogger(){
    fetch("http://127.0.0.1:5000/api/test")
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
    });
}

export function Logger(level:number,log: string,from:string) {
    fetch('http://127.0.0.1:5000/api/logs', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            console :{
                'timestamp': (new Date()).toLocaleString(),
                level : level,
                log : log,
                from :from
            }
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
    console.log(myJson);
    });
}

// export function asyncLogger(level:number,log: string,from:string){
//     const loggerlist = 
//     const logger = {
//         level : level,
//         log : log,
//         from : from
//     }
//     setLoggerList(...loggerList,logger)

// }
//global state

export function useLogService()  {
    const [result, setResult] = useState<Service<Dictionary<string>[]>>({
        status: 'loading'
    });

    useEffect(() => {
        fetch(process.env.REACT_APP_RETRIEVE_LOGS_ENDPOINT)
            .then(response => response.json())
            .then(response => setResult({ status: 'loaded', payload: response }))
            .catch(error => setResult({ status: 'error', error }));
    }, []);

    return result;
}

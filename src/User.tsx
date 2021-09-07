import React, { useEffect, useState } from "react";

interface UserReponse {
    name: string
}

export const User: React.FC = () => {
    const [userName, setUserName] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then((json: UserReponse) => setUserName(json.name))
    }, [])

    return <div data-testid="username">{userName}</div>;
};

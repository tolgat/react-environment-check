import React, {useState} from 'react';

export default function Hello() {
    const [friend, setFriend] = useState("there");

    return (
        <div>
            Hello {friend}!
            <p>
                <div>What is your name?</div>
                <div>
                    <input type="text" onChange={(event) => setFriend(event.target.value)}/>
                </div>
            </p>
        </div>
    );
}

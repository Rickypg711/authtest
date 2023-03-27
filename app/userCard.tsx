import { DefaultSession, User } from "next-auth";

export function UserCard( {user} : {user:DefaultSession['user']}) {

    return (
        <div>
            <div>
                <p>{user?.name}</p>
            </div>
        </div>
    )
}
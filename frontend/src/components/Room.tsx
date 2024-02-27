import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Room = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');

    useEffect(() => {
        // Logic to init user in the room
    }, [name]);
    return (
        <div>
            Hi {name}
        </div>
    )
}
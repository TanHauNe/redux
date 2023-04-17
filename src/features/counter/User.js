import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getDetailUsers } from "./userSlice";
import { useForm } from "react-hook-form";
import Detail from "./Detail";

export function User() {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    const [idNum, setIdNum] = useState("");

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await dispatch(getAllUsers(idNum));
            setUsers(response);
            console.log(response);
        }
        fetchData();
    }, [idNum]);

    const handeClick = (id) => {
        setIdNum(id);
        console.log(id);
        console.log(idNum);
    };

    return (
        <div>
            {/* {console.log(users)}
            {console.log(list)} */}
            {/* {users.map((user) => (
                <form key={user.id} onSubmit={handleSubmit(onSubmit)}>
                    <input {...register(user.name)} />
                    <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                    <input type="number" {...register("age", { min: 18, max: 99 })} />
                    <input type="submit" />
                </form>
            ))} */}

            {idNum === "" ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name}
                            <button onClick={() => handeClick(user.id)}>Click</button>
                        </li>
                    ))}
                </ul>
            ) : (
                users.name
            )}

            {/* <Detail users={users} /> */}
        </div>
    );
}

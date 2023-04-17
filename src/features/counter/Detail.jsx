function Detail(props) {
    const { users } = props;
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name}
                    <button>Click</button>
                </li>
            ))}
        </ul>
    );
}

export default Detail;

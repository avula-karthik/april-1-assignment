import axios from 'axios';
import { useEffect, useState } from 'react';
const Members = () => {
    let [data, setData] = useState([]);
    let storedToken = localStorage.getItem('token');
    storedToken = storedToken.replace('"', '');
    console.log(storedToken);
    storedToken = storedToken.replace('"', '');
    useEffect(() => {
        axios
            .get('/users/', {
                headers: {
                    token: storedToken,
                },
            })
            .then((res) => setData(res.data))
            .catch((e) => console.log(e));
    }, []);

    return (
        <div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Date of birth</th>
                </tr>
                {data.map((val, index) => {
                    return (
                        <tr key={val + index}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.age}</td>
                            <td>{val.dob}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};
export default Members;

const axios = require('axios');

jest.mock('axios');

test('should fetch users', async() => {

    const users = [
        {
            "id": "6231e96eded2143e3e6473ea",
            "username": "user",
            "name": "user",
            "age": 28,
            "gender": "female",
            "email": "user@user.com",
            "password": "$2a$10$Kvwopc49wLg9D4zfo0k/O.lsBAsj7WreN86VAfIAZI914onHxgZ3u",
            "phone": 777777777,
            "role": "USER"
        },
        {
            "id": "6239d010eb9ad93ff2a357cb",
            "username": "afsal",
            "name": "Afsal",
            "age": 23,
            "gender": "male",
            "email": "afsal@gmail.com",
            "password": "$2a$10$S5zmpblzQEeDbZMIXWuZSOeNHNIsfpAspwKy/xYaRcovm8hmFiDLq",
            "phone": 9888987878,
            "role": "USER"
        }
    ];

    const resp = { data : users };

    axios.get.mockImplementation(() => Promise.resolve(resp));

    await axios.get("http://localhost:5005/user/getall").then(resp => expect(resp.data).toEqual(users));
});
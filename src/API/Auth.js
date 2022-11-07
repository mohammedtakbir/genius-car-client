import toast from "react-hot-toast";

export const setAuthToken = (res) => {
    const currentUser = {
        email: res.user?.email
    };
    //* get jwt token
    fetch('https://genius-car-server-ruby-eta.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            toast.success('successfully SignIn!')
            //* local storage is the easiest but not the best place to store jwt token
            localStorage.setItem('genius-token', data.token);
        })
}
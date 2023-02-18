import React from 'react'

function Logout() {
    const logOut = () =>{
        localStorage.removeItem("authenticated")
    }
    return (
        <div>
            <li>
                <button
                    className="btn btn-danger me-2 mt-5 ms-4"
                    onClick={logOut}
                >
                    Logout
                </button>
            </li>
        </div>
    )
}

export default Logout
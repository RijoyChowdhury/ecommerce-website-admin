const ProfileCircle = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <g fill="none">
                <circle cx="12" cy="10" r="3" fill="currentColor"></circle>
                <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.2"
                ></circle>
                <path
                    fill="currentColor"
                    fillOpacity=".25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.2"
                    d="M17.872 18.808a.23.23 0 0 0 .073-.257c-.376-1-1.132-1.88-2.164-2.518C14.697 15.363 13.367 15 12 15s-2.697.363-3.781 1.033c-1.032.638-1.788 1.519-2.164 2.518a.23.23 0 0 0 .073.257a9.41 9.41 0 0 0 11.744 0Z"
                ></path>
            </g>
        </svg>
    )
}

export default ProfileCircle


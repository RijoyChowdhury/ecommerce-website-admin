const GraphUp = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            >
                <path d="M20 20H4V4"></path>
                <path d="M4 16.5L12 9l3 3l4.5-4.5"></path>
            </g>
        </svg>
    )
}

export default GraphUp

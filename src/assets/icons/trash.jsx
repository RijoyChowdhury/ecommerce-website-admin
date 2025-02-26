const TrashDuotoneLine = (props) => {
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
                strokeWidth="1.2"
            >
                <path d="M10 15v-3m4 3v-3"></path>
                <path
                    fill="currentColor"
                    fillOpacity=".25"
                    d="M3 7h18c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C18 8.602 18 9.068 18 10v6c0 1.886 0 2.828-.586 3.414S15.886 20 14 20h-4c-1.886 0-2.828 0-3.414-.586S6 17.886 6 16v-6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C4.398 7 3.932 7 3 7Z"
                ></path>
                <path d="M10.068 3.37c.114-.106.365-.2.715-.267A6.7 6.7 0 0 1 12 3c.44 0 .868.036 1.217.103s.6.161.715.268"></path>
            </g>
        </svg>
    )
}

export default TrashDuotoneLine

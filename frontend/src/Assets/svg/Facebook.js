import React from 'react'

export const Facebook = ({ fill = '#FFFFFF', width = '24', height = '24' }) => {
    return (
        <a
            href="https://m.facebook.com/SairamEnggCSE/?ref=bookmarks"
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg
                width={width}
                height={height}
                viewBox="0 0 73 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.20833 0.125C3.75619 0.125 0.125 3.75619 0.125 8.20833V64.7917C0.125 69.2438 3.75619 72.875 8.20833 72.875H64.7917C69.2438 72.875 72.875 69.2438 72.875 64.7917V8.20833C72.875 3.75619 69.2438 0.125 64.7917 0.125H8.20833ZM8.20833 8.20833H64.7917V64.7917H46.2568V48.7671H55.8084L57.2293 37.7472H46.32V30.7375C46.32 27.5483 47.2041 25.4012 51.7668 25.4012H57.5451V15.5654C54.7349 15.2812 51.9088 15.1392 49.0828 15.1549C40.7153 15.1549 34.9686 20.2702 34.9686 29.6639V37.763H25.4959V48.7829H34.9686V64.7917H8.20833V8.20833Z"
                    fill={fill}
                />
            </svg>
        </a>
    )
}

import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { sizeMaxW, sizeMaxH, sizeMinH, sizeMinW } from '../utils/MediaQueires'

const FadeIn = (x, y) => keyframes`
    0%{
        opacity: 0;
        transform: translate(${x},${y});
    } 100% {
        opacity: 1;
        transform: translate(0,0);
    }
`

const PageNotFoundWrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 3rem;

    > svg {
        width: 50%;
        height: 80%;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
    }
    @media ${sizeMaxW.tablet} {
        > svg {
            width: 70%;
        }
    }
`

const ContentWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: grid;
    gap: 0rem;
    justify-items: center;
    align-self: center;
    @media ${sizeMaxW.tablet} {
        align-self: flex-end;
        margin-bottom: 5rem;
    }
`
const Label = styled.h2`
    font-size: ${({ size }) => size};
    line-height: ${({ lineHeight }) => lineHeight || `auto`};
    color: ${({ color }) => color};
    font-weight: ${({ bold }) => (bold ? `600` : `400`)};
    text-decoration: ${({ underline }) => (underline ? `underline` : `none`)};
    height: fit-content;
    @media ${sizeMaxW.tablet} {
        font-size: ${({ size }) => `calc(${size} / 2)`};
        line-height: ${({ lineHeight }) => `calc(${lineHeight}/1.5)` || `auto`};
    }
    @media ${sizeMaxH.tablet} {
        font-size: ${({ size }) => `calc(${size} / 2)`};
        line-height: ${({ lineHeight }) => `calc(${lineHeight}/1.5)` || `auto`};
    }
`

const RobotWrapper = styled.div`
    width: 50rem;
    height: 50rem;
    position: absolute;
    bottom: 10%;
    right: 0;
    > svg {
        width: 100%;
        height: 100%;
        float: right;
        bottom: 0;
    }

    #Head {
        opacity: 0;
        animation: ${FadeIn(0, `-50px`)} 0.7s ease-in;
        animation-fill-mode: forwards;
        animation-delay: 0.3s;
    }
    #Leg {
        opacity: 0;
        animation: ${FadeIn(0, `50px`)} 0.7s ease-in;
        animation-fill-mode: forwards;
        animation-delay: 0.3s;
    }
    #LeftHand {
        opacity: 0;
        animation: ${FadeIn(`-50px`, `0`)} 0.7s ease-in;
        animation-fill-mode: forwards;
        animation-delay: 0.3s;
    }
    #RightHand {
        opacity: 0;
        animation: ${FadeIn(`50px`, `0`)} 0.7s ease-in;
        animation-fill-mode: forwards;
        animation-delay: 0.3s;
    }

    @media ${sizeMaxW.tablet} {
        bottom: unset;
        top: 0;
        height: 20rem;
    }
    @media ${sizeMinH.mobileL} {
        height: 40rem;
    }
    @media screen and ${sizeMinH.mobileL} and ${sizeMinW.tablet} {
        width: 70rem;
        height: 70rem;
    }
`

export const PageNotFound = () => {
    return (
        <PageNotFoundWrapper>
            <svg
                preserveAspectRatio="none"
                viewBox="0 0 1031 765"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M835.001 648.068C929.645 727.894 1004.71 723.251 1030.42 710.952V-264H35.9144C-1.58409 -114.847 5.80997 -61.8379 174.289 84.197C342.768 230.232 282.031 521.782 508.078 498.915C734.125 476.049 716.696 548.286 835.001 648.068Z"
                    fill="#3B93F7"
                />
                <path
                    d="M1032 90.4333C1013.88 66.6722 932.993 24.2114 754.36 44.4576C531.07 69.7654 483.923 30.1165 489.162 -6.15793C494.4 -42.4324 538.927 -57.1952 445.289 -72.8017C351.651 -88.4081 285.515 -139.445 302.541 -180.36C317.333 -215.909 330.643 -254.007 295.22 -259.235H275.693C283.42 -260.065 289.875 -260.024 295.22 -259.235H1032V90.4333Z"
                    fill="url(#paint0_linear)"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1029.89 704.718C1004.18 717.015 929.116 721.651 834.478 641.832C804.727 616.738 783.559 593.387 764.945 572.852C709.541 511.731 676.755 475.563 507.555 492.679C374.937 506.094 341.029 411.288 301.633 301.137C273.879 223.536 243.401 138.319 173.766 77.9604C25.5143 -50.5418 1.9902 -107.014 24.0276 -220.345H18.7989C-19.3249 -70.6683 -11.8076 -17.473 159.481 129.075C230.278 189.646 261.264 275.162 289.482 353.036C329.534 463.574 364.008 558.713 498.838 545.251C670.86 528.074 704.193 564.37 760.521 625.706C779.445 646.313 800.966 669.746 831.214 694.928C927.436 775.034 1003.76 770.375 1029.89 758.032V704.718Z"
                    fill="#DCF8FB"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear"
                        x1="464.934"
                        y1="-85.0336"
                        x2="1146.03"
                        y2="-180.517"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#3B93F7" />
                        <stop offset="1" stop-color="#3563C1" />
                    </linearGradient>
                </defs>
            </svg>
            <RobotWrapper>
                <svg
                    viewBox="0 0 1014 753"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="Robot">
                        <path
                            id="Vector"
                            opacity="0.5"
                            d="M512.256 749.435C653.641 749.435 768.256 730.183 768.256 706.435C768.256 682.686 653.641 663.435 512.256 663.435C370.871 663.435 256.256 682.686 256.256 706.435C256.256 730.183 370.871 749.435 512.256 749.435Z"
                            fill="#DEE3F3"
                        />
                        <g id="Group" opacity="0.45">
                            <path
                                id="Vector_2"
                                opacity="0.1"
                                d="M241.593 169.806L352.97 169.806C357.851 169.806 361.809 165.849 361.809 160.967V127.273C361.809 122.392 357.851 118.435 352.97 118.435L241.593 118.435C236.712 118.435 232.754 122.392 232.754 127.273V160.967C232.754 165.849 236.712 169.806 241.593 169.806Z"
                                fill="black"
                            />
                            <path
                                id="Vector_3"
                                opacity="0.1"
                                d="M627.503 169.806L738.88 169.806C743.762 169.806 747.719 165.849 747.719 160.967V127.273C747.719 122.392 743.762 118.435 738.88 118.435L627.503 118.435C622.622 118.435 618.665 122.392 618.665 127.273V160.967C618.665 165.849 622.622 169.806 627.503 169.806Z"
                                fill="black"
                            />
                            <path
                                id="Vector_4"
                                opacity="0.1"
                                d="M799.157 219.924L910.534 219.924C915.416 219.924 919.373 215.967 919.373 211.085V177.391C919.373 172.51 915.416 168.553 910.534 168.553H799.157C794.276 168.553 790.319 172.51 790.319 177.391V211.085C790.319 215.967 794.276 219.924 799.157 219.924Z"
                                fill="black"
                            />
                            <path
                                id="Vector_5"
                                opacity="0.1"
                                d="M588.661 270.042H700.038C704.92 270.042 708.877 266.085 708.877 261.203V227.51C708.877 222.628 704.92 218.671 700.038 218.671H588.661C583.78 218.671 579.823 222.628 579.823 227.51V261.203C579.823 266.085 583.78 270.042 588.661 270.042Z"
                                fill="black"
                            />
                            <path
                                id="Vector_6"
                                opacity="0.1"
                                d="M799.157 321.413H910.534C915.416 321.413 919.373 317.456 919.373 312.575V278.881C919.373 273.999 915.416 270.042 910.534 270.042H799.157C794.276 270.042 790.319 273.999 790.319 278.881V312.575C790.319 317.456 794.276 321.413 799.157 321.413Z"
                                fill="black"
                            />
                            <path
                                id="Vector_7"
                                opacity="0.1"
                                d="M799.157 421.649H910.534C915.416 421.649 919.373 417.692 919.373 412.811V379.117C919.373 374.236 915.416 370.278 910.534 370.278H799.157C794.276 370.278 790.319 374.236 790.319 379.117V412.811C790.319 417.692 794.276 421.649 799.157 421.649Z"
                                fill="black"
                            />
                            <path
                                id="Vector_8"
                                opacity="0.1"
                                d="M653.815 521.886H765.192C770.073 521.886 774.03 517.929 774.03 513.047V479.353C774.03 474.472 770.073 470.515 765.192 470.515H653.815C648.933 470.515 644.976 474.472 644.976 479.353V513.047C644.976 517.929 648.933 521.886 653.815 521.886Z"
                                fill="black"
                            />
                            <path
                                id="Vector_9"
                                opacity="0.1"
                                d="M206.511 371.531H317.888C322.769 371.531 326.727 367.574 326.727 362.693V328.999C326.727 324.117 322.769 320.16 317.888 320.16H206.511C201.63 320.16 197.672 324.117 197.672 328.999V362.693C197.672 367.574 201.63 371.531 206.511 371.531Z"
                                fill="black"
                            />
                            <path
                                id="Vector_10"
                                opacity="0.1"
                                d="M225.305 471.768H336.682C341.563 471.768 345.521 467.81 345.521 462.929V429.235C345.521 424.354 341.563 420.396 336.682 420.396H225.305C220.424 420.396 216.466 424.354 216.466 429.235V462.929C216.466 467.81 220.424 471.768 225.305 471.768Z"
                                fill="black"
                            />
                        </g>
                        <path
                            id="body"
                            d="M577.971 389.152H409.849V523.651H577.971V389.152Z"
                            fill="#6C63FF"
                        />
                        <g id="Leg">
                            <path
                                id="Vector_11"
                                d="M581.334 550.55H406.486V567.363H581.334V550.55Z"
                                fill="#6C63FF"
                            />
                            <path
                                id="Vector_12"
                                d="M435.067 607.712V627.887V658.149V674.961V685.048H465.329V674.961V658.149V627.887V607.712V584.175H435.067V607.712Z"
                                fill="#6C63FF"
                            />
                            <path
                                id="Vector_13"
                                d="M525.854 584.175V607.712V627.887V658.149V674.961V685.048H556.115V674.961V658.149V627.887V607.712V584.175H525.854Z"
                                fill="#6C63FF"
                            />
                            <path
                                id="Vector_14"
                                opacity="0.3"
                                d="M465.328 584.175H435.066V607.712H465.328V584.175Z"
                                fill="black"
                            />
                            <path
                                id="Vector_15"
                                opacity="0.3"
                                d="M465.328 627.887H435.066V658.149H465.328V627.887Z"
                                fill="black"
                            />
                            <path
                                id="Vector_16"
                                opacity="0.3"
                                d="M465.328 674.961H435.066V685.049H465.328V674.961Z"
                                fill="black"
                            />
                            <path
                                id="Vector_17"
                                opacity="0.3"
                                d="M556.116 584.175H525.854V607.712H556.116V584.175Z"
                                fill="black"
                            />
                            <path
                                id="Vector_18"
                                opacity="0.3"
                                d="M556.116 627.887H525.854V658.149H556.116V627.887Z"
                                fill="black"
                            />
                            <path
                                id="Vector_19"
                                opacity="0.3"
                                d="M556.116 674.961H525.854V685.049H556.116V674.961Z"
                                fill="black"
                            />
                        </g>
                        <g id="LeftHand">
                            <path
                                id="Vector_20"
                                d="M386.949 419.415V450.515C378.643 451.966 370.903 455.697 364.594 461.291C358.744 466.709 354.195 473.38 351.287 480.805C347.396 490.23 345.505 500.697 344.733 510.593C343.782 523.94 344.406 537.353 346.594 550.554H312.97C311.542 531.967 311.997 516.019 313.85 502.326C315.926 486.887 319.77 474.321 324.641 464.101C334.382 443.669 348.238 432.584 360.411 426.563C374.868 419.415 386.949 419.415 386.949 419.415Z"
                                fill="#6C63FF"
                            />
                            <path
                                id="Vector_21"
                                opacity="0.3"
                                d="M386.949 419.415V450.515C378.643 451.966 370.904 455.697 364.595 461.291L360.411 426.563C374.869 419.415 386.949 419.415 386.949 419.415Z"
                                fill="black"
                            />
                            <path
                                id="Vector_22"
                                opacity="0.3"
                                d="M351.287 480.805C347.397 490.23 345.505 500.697 344.733 510.593L313.85 502.326C315.926 486.888 319.77 474.321 324.641 464.101L351.287 480.805Z"
                                fill="black"
                            />
                        </g>
                        <g id="RightHand">
                            <path
                                id="Vector_23"
                                d="M600.871 419.415V450.515C609.177 451.966 616.917 455.697 623.225 461.291C629.076 466.709 633.625 473.38 636.533 480.805C640.423 490.23 642.315 500.697 643.086 510.593C644.038 523.94 643.414 537.353 641.226 550.554H674.85C676.278 531.967 675.823 516.019 673.97 502.326C671.894 486.887 668.05 474.321 663.179 464.101C653.438 443.669 639.582 432.584 627.409 426.563C612.951 419.415 600.871 419.415 600.871 419.415Z"
                                fill="#6C63FF"
                            />
                            <path
                                id="Vector_24"
                                opacity="0.3"
                                d="M600.871 419.415V450.515C609.177 451.966 616.917 455.697 623.225 461.291L627.409 426.563C612.951 419.415 600.871 419.415 600.871 419.415Z"
                                fill="black"
                            />
                            <path
                                id="Vector_25"
                                opacity="0.3"
                                d="M636.533 480.805C640.424 490.23 642.315 500.697 643.087 510.593L673.97 502.326C671.894 486.888 668.05 474.321 663.179 464.101L636.533 480.805Z"
                                fill="black"
                            />
                        </g>
                        <g id="Head">
                            <path
                                id="Vector_26"
                                d="M596.945 264.742H390.875C383.712 264.742 377.905 270.548 377.905 277.711V359.37C377.905 366.533 383.712 372.34 390.875 372.34H596.945C604.108 372.34 609.915 366.533 609.915 359.37V277.711C609.915 270.548 604.108 264.742 596.945 264.742Z"
                                fill="#6C63FF"
                            />
                            <path
                                id="Vector_27"
                                opacity="0.3"
                                d="M591.421 281.554H396.398V355.528H591.421V281.554Z"
                                fill="black"
                            />
                            <path
                                id="Vector_28"
                                opacity="0.1"
                                d="M441.792 346.984C456.648 346.984 468.692 334.941 468.692 320.085C468.692 305.228 456.648 293.185 441.792 293.185C426.936 293.185 414.893 305.228 414.893 320.085C414.893 334.941 426.936 346.984 441.792 346.984Z"
                                fill="black"
                            />
                            <path
                                id="Vector_29"
                                opacity="0.1"
                                d="M546.028 346.984C560.884 346.984 572.927 334.941 572.927 320.085C572.927 305.228 560.884 293.185 546.028 293.185C531.171 293.185 519.128 305.228 519.128 320.085C519.128 334.941 531.171 346.984 546.028 346.984Z"
                                fill="black"
                            />
                            <path
                                id="Vector_30"
                                d="M514.081 372.337H473.733V395.88H514.081V372.337Z"
                                fill="#6C63FF"
                            />
                            <g id="leftAntenna">
                                <path
                                    id="Vector_31"
                                    d="M434.722 165.166H423.144V264.742H434.722V165.166Z"
                                    fill="#6C63FF"
                                />
                                <path
                                    id="Vector_35"
                                    opacity="0.1"
                                    d="M428.546 179.06C435.793 179.06 441.669 173.185 441.669 165.938C441.669 158.691 435.793 152.816 428.546 152.816C421.299 152.816 415.424 158.691 415.424 165.938C415.424 173.185 421.299 179.06 428.546 179.06Z"
                                    fill="black"
                                />
                            </g>
                            <g id="rightAntenna">
                                <path
                                    id="Vector_32"
                                    d="M567.489 165.166H555.91V264.742H567.489V165.166Z"
                                    fill="#6C63FF"
                                />
                                <path
                                    id="Vector_36"
                                    opacity="0.1"
                                    d="M562.086 179.06C569.333 179.06 575.209 173.185 575.209 165.938C575.209 158.691 569.333 152.816 562.086 152.816C554.839 152.816 548.964 158.691 548.964 165.938C548.964 173.185 554.839 179.06 562.086 179.06Z"
                                    fill="black"
                                />
                            </g>
                            <path
                                id="Vector_33"
                                d="M428.546 178.288C435.793 178.288 441.669 172.413 441.669 165.166C441.669 157.919 435.793 152.044 428.546 152.044C421.299 152.044 415.424 157.919 415.424 165.166C415.424 172.413 421.299 178.288 428.546 178.288Z"
                                fill="#6C63FF"
                            />
                            <path
                                id="Vector_34"
                                d="M562.086 178.288C569.333 178.288 575.209 172.413 575.209 165.166C575.209 157.919 569.333 152.044 562.086 152.044C554.839 152.044 548.964 157.919 548.964 165.166C548.964 172.413 554.839 178.288 562.086 178.288Z"
                                fill="#6C63FF"
                            />
                        </g>
                    </g>
                </svg>
            </RobotWrapper>
            <ContentWrapper>
                <Label lineHeight="11rem" color="#333333" size="28rem" bold>
                    404
                </Label>
                <Label
                    style={{ letterSpacing: '1rem' }}
                    color="#333333"
                    size="14.25rem"
                    bold
                >
                    ERROR
                </Label>
                <Label color="#333333" size="4.25rem">
                    Page Not Found
                </Label>
                <Link to="/">
                    <Label bold underline color="#3B93F7" size="4.25rem">
                        Return to HomePage
                    </Label>
                </Link>
            </ContentWrapper>
        </PageNotFoundWrapper>
    )
}

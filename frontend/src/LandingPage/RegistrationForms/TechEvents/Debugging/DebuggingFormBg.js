import React from 'react'
import styled from 'styled-components'
import { sizeMaxW, sizeMaxH } from '../../../../utils/MediaQueires'

const BgSVG = styled.svg`
    width: auto;
    height: 90%;
    position: absolute;
    bottom: 0px;
    right: 0px;
    z-index: -1;
    overflow: hidden;

    @media ${sizeMaxW.laptop} {
        height: 80%;
    }

    @media ${sizeMaxW.tablet} {
        height: 55%;
    }

    @media ${sizeMaxW.mobileL} {
        height: 40%;
    }

    @media ${sizeMaxH.mobileL} {
        height: 80%;
    }
`

export default function DebuggingFormBg() {
    return (
        <BgSVG
            width="904"
            height="918"
            viewBox="0 0 904 918"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M117.302 1081.82C41.0474 1171.88 45.9459 1242.92 57.9268 1267.18L995.91 1261.48L990.189 319.999C846.476 285.372 795.519 292.682 655.991 453.033C516.463 613.383 235.618 557.589 258.918 771.451C282.218 985.314 212.619 969.236 117.302 1081.82Z"
                fill="#3B93F7"
            />
            <path
                d="M654.925 1265.05C677.681 1247.76 718.066 1170.94 697.56 1001.95C671.927 790.708 709.802 745.844 744.731 750.591C779.66 755.338 794.119 797.405 808.595 708.668C823.071 619.93 871.793 557.022 911.253 572.9C945.54 586.697 982.27 599.074 987.096 565.509L986.984 547.023C987.826 554.333 987.824 560.444 987.096 565.509L991.335 1263.01L654.925 1265.05Z"
                fill="url(#paint0_linear)"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M63.921 1266.65C51.9419 1242.38 47.0496 1171.34 123.298 1081.29C147.269 1052.97 169.613 1032.8 189.263 1015.06C247.747 962.249 282.355 930.999 264.915 770.92C251.245 645.45 342.261 612.796 448.009 574.856C522.508 548.128 604.318 518.777 661.988 452.501C784.764 311.402 838.96 288.802 948.121 309.002L948.091 304.052C803.87 268.835 752.735 276.263 612.729 439.277C554.863 506.653 472.767 536.488 398.009 563.656C291.892 602.22 200.559 635.411 214.287 762.975C231.801 925.726 197.073 957.493 138.388 1011.18C118.671 1029.21 96.2497 1049.72 72.1969 1078.51C-4.31792 1170.07 0.603405 1242.29 12.6284 1266.96L63.921 1266.65Z"
                fill="#DCF8FB"
            />
            <g clipPath="url(#clip0)">
                <path
                    opacity="0.1"
                    d="M717.451 238.807C716.818 240.17 716.187 241.514 715.558 242.84C714.576 244.9 713.607 246.92 712.651 248.9C712.225 249.777 711.8 250.638 711.385 251.499C706.694 261.074 702.314 269.543 698.594 276.508C695.218 282.818 690.206 288.106 684.083 291.816C677.959 295.527 670.95 297.523 663.788 297.598L581.069 298.497H580.196L573.105 298.573L567.04 298.638L548.439 298.84H547.687L538.217 298.944H537.928L479.564 299.576L427.467 300.121L421.407 300.186L383.77 300.595H383.726L359.317 300.856H359.055L281.872 301.69L258.783 301.941C253.856 301.996 248.949 301.294 244.235 299.859C236.033 297.384 228.661 292.72 222.913 286.371C212.997 275.456 205.769 262.72 200.915 248.9C200.213 246.905 199.559 244.885 198.951 242.84C182.146 186.083 202.633 112.856 239.506 63.8536C241.052 61.8046 242.623 59.8064 244.219 57.8591L244.257 57.8155C255.597 43.9081 268.312 32.2896 281.856 24.028C305.856 9.36315 332.447 5.23236 358.602 17.543C380.732 27.9626 401.394 32.8618 421.423 34.1915C423.447 34.3223 425.471 34.4204 427.483 34.4803C473.427 35.9244 516.486 19.3849 567.051 8.7092C569.063 8.28413 571.081 7.86451 573.116 7.46669C609.187 0.295028 649.202 -3.48699 696.789 4.46397C701.732 5.27087 706.611 6.43653 711.385 7.9517C713.483 8.62745 715.505 9.35406 717.451 10.1315C740.164 19.3631 752.551 36.4204 757.815 57.7937C758.313 59.7773 758.744 61.7955 759.108 63.8482C768.44 115.26 741.107 188.186 717.451 238.807Z"
                    fill="#6C63FF"
                />
                <g opacity="0.1">
                    <path
                        opacity="0.1"
                        d="M281.856 24.0273V301.749L258.766 302C253.839 302.056 248.932 301.354 244.219 299.918V57.8148H244.257C255.597 43.8911 268.312 32.2726 281.856 24.0273Z"
                        fill="#6C63FF"
                    />
                    <path
                        opacity="0.1"
                        d="M759.134 63.8531H239.506C241.051 61.804 242.622 59.8058 244.219 57.8585V57.8149H757.842C758.34 59.7877 758.771 61.8004 759.134 63.8531Z"
                        fill="#6C63FF"
                    />
                    <path
                        opacity="0.1"
                        d="M717.45 10.1364V242.834H715.558C714.576 244.894 713.607 246.914 712.65 248.894C712.225 249.771 711.799 250.632 711.385 251.493V7.93481C713.483 8.61056 715.505 9.34444 717.45 10.1364Z"
                        fill="#6C63FF"
                    />
                    <path
                        opacity="0.1"
                        d="M573.116 7.44971V298.594L567.05 298.66V8.69221C569.063 8.26715 571.081 7.84753 573.116 7.44971Z"
                        fill="#6C63FF"
                    />
                    <path
                        opacity="0.1"
                        d="M427.483 34.4634V300.175L421.423 300.24V34.1746C423.447 34.3054 425.47 34.3816 427.483 34.4634Z"
                        fill="#6C63FF"
                    />
                    <path
                        opacity="0.1"
                        d="M715.557 242.839C714.576 244.899 713.607 246.919 712.65 248.899H200.915C200.213 246.905 199.558 244.885 198.951 242.839H715.557Z"
                        fill="#6C63FF"
                    />
                </g>
                <path
                    d="M318.783 144.866H308.42V176.289H318.783V144.866Z"
                    fill="#3F3D56"
                />
                <path
                    d="M597.694 143.231H587.331V176.474H597.694V143.231Z"
                    fill="#3F3D56"
                />
                <path
                    d="M663.788 290.817V297.902L580.921 298.665L580.038 298.681L548.543 298.97L547.79 298.981L538.217 299.063H537.934L479.58 299.602L383.792 300.49H383.71L359.355 300.719L359.093 300.725L250.874 301.717V293.542L276.319 278.283L327.375 277.858L328.465 277.853L328.825 277.847L329.916 277.831L354.429 277.629L355.526 277.624L355.875 277.619L356.966 277.613L364.826 277.548L365.033 277.542L384.424 277.379H384.583L535.894 276.104L539.597 276.076H539.968L542.794 276.049L563.33 275.88L564.421 275.864L565.43 275.853H565.954L572.341 275.804L573.607 275.788L575.303 275.777L580.621 275.728L589.06 275.657L590.151 275.646L592.049 275.635H592.403L633.155 275.286L663.788 290.817Z"
                    fill="#65617D"
                />
                <path
                    opacity="0.2"
                    d="M663.788 290.817V297.902L580.921 298.665L580.038 298.681L548.543 298.97L547.79 298.981L538.217 299.063H537.934L479.58 299.602L383.792 300.49H383.71L359.355 300.719L359.093 300.725L250.874 301.717V293.542L276.319 278.283L327.375 277.858L328.465 277.853L328.825 277.847L329.916 277.831L354.429 277.629L355.526 277.624L355.875 277.619L356.966 277.613L364.826 277.548L365.033 277.542L384.424 277.379H384.583L535.894 276.104L539.597 276.076H539.968L542.794 276.049L563.33 275.88L564.421 275.864L565.43 275.853H565.954L572.341 275.804L573.607 275.788L575.303 275.777L580.621 275.728L589.06 275.657L590.151 275.646L592.049 275.635H592.403L633.155 275.286L663.788 290.817Z"
                    fill="black"
                />
                <path
                    d="M354.511 263.575V276.921C354.511 277.553 354.332 278.172 353.994 278.707C353.656 279.241 353.174 279.669 352.602 279.94C352.176 280.146 351.711 280.258 351.238 280.267L332.202 280.67C331.693 280.683 331.189 280.576 330.729 280.36C330.147 280.093 329.655 279.666 329.309 279.128C328.964 278.589 328.781 277.963 328.782 277.324V263.575H354.511Z"
                    fill="#3F3D56"
                />
                <path
                    opacity="0.1"
                    d="M354.511 263.575V276.921C354.511 277.553 354.332 278.172 353.994 278.707C353.656 279.241 353.174 279.669 352.602 279.94C352.176 280.146 351.711 280.258 351.238 280.267L332.202 280.67C331.693 280.683 331.189 280.576 330.729 280.36C330.147 280.093 329.655 279.666 329.309 279.128C328.964 278.589 328.781 277.963 328.782 277.324V263.575H354.511Z"
                    fill="black"
                />
                <path
                    d="M355.602 263.575V276.921C355.602 277.553 355.423 278.172 355.085 278.707C354.747 279.241 354.264 279.669 353.693 279.94C353.267 280.146 352.802 280.258 352.329 280.267L333.293 280.67C332.784 280.683 332.28 280.576 331.82 280.36C331.238 280.093 330.746 279.666 330.4 279.128C330.055 278.589 329.872 277.963 329.873 277.324V263.575H355.602Z"
                    fill="#3F3D56"
                />
                <path
                    d="M590.151 263.575H564.421V280.741H590.151V263.575Z"
                    fill="#3F3D56"
                />
                <path
                    opacity="0.1"
                    d="M590.151 263.575H564.421V280.741H590.151V263.575Z"
                    fill="black"
                />
                <path
                    d="M589.06 263.575H563.33V280.741H589.06V263.575Z"
                    fill="#3F3D56"
                />
                <path
                    opacity="0.1"
                    d="M318.783 144.861V147.984L308.42 147.717V144.861H318.783Z"
                    fill="black"
                />
                <path
                    d="M386.999 56.8939L374.546 146.267C374.467 146.838 374.18 147.36 373.741 147.733C373.301 148.106 372.739 148.304 372.162 148.289L272.452 145.706L270.559 145.657C270.23 145.649 269.905 145.572 269.608 145.43C269.31 145.289 269.045 145.087 268.831 144.836C268.617 144.586 268.458 144.293 268.365 143.977C268.272 143.661 268.246 143.329 268.29 143.003L282.27 49.4443C282.36 48.8647 282.665 48.34 283.123 47.9738C283.582 47.6075 284.161 47.4264 284.747 47.4661L384.817 54.2345C385.14 54.2531 385.455 54.3385 385.744 54.4851C386.032 54.6318 386.286 54.8365 386.491 55.0864C386.696 55.3363 386.847 55.6259 386.935 55.937C387.022 56.2481 387.044 56.5739 386.999 56.8939Z"
                    fill="#65617D"
                />
                <path
                    d="M288.963 54.0381L278.419 136.507L370.057 139.411L381.326 59.8473L288.963 54.0381Z"
                    fill="#6C63FF"
                />
                <path
                    d="M511.517 52.7629H405.692C404.086 52.7629 402.784 54.0634 402.784 55.6676V144.316C402.784 145.92 404.086 147.221 405.692 147.221H511.517C513.122 147.221 514.424 145.92 514.424 144.316V55.6676C514.424 54.0634 513.122 52.7629 511.517 52.7629Z"
                    fill="#65617D"
                />
                <path
                    d="M509.51 59.1226H408.054V137.777H509.51V59.1226Z"
                    fill="#6C63FF"
                />
                <path
                    opacity="0.1"
                    d="M597.694 143.226V145.291L587.331 145.504V143.226H597.694Z"
                    fill="black"
                />
                <path
                    d="M644.457 141.482C644.471 141.708 644.44 141.935 644.365 142.148C644.29 142.362 644.173 142.558 644.02 142.725C643.867 142.892 643.682 143.026 643.476 143.12C643.27 143.213 643.047 143.264 642.82 143.27L540.71 145.379C540.286 145.388 539.874 145.236 539.557 144.954C539.241 144.672 539.042 144.28 539.003 143.858L530.226 52.6975C530.204 52.4714 530.229 52.2432 530.298 52.0268C530.367 51.8103 530.48 51.6102 530.629 51.4385C530.778 51.2668 530.96 51.1271 531.165 51.0278C531.369 50.9285 531.592 50.8718 531.819 50.861L633.155 45.8256L634.246 45.7711C634.679 45.7483 635.105 45.8947 635.433 46.1794C635.76 46.464 635.964 46.8648 636.002 47.297L644.457 141.482Z"
                    fill="#65617D"
                />
                <path
                    d="M536.057 56.2181L628.606 51.6731L636.422 134.507L544.605 136.687L536.057 56.2181Z"
                    fill="#6C63FF"
                />
                <path
                    opacity="0.1"
                    d="M644.457 141.482C644.472 141.708 644.44 141.935 644.365 142.148C644.29 142.362 644.173 142.558 644.02 142.725C643.867 142.892 643.682 143.026 643.476 143.12C643.27 143.213 643.047 143.264 642.82 143.27L633.155 45.8256L634.246 45.7711C634.679 45.7483 635.105 45.8947 635.433 46.1794C635.76 46.464 635.964 46.8648 636.002 47.297L644.457 141.482Z"
                    fill="black"
                />
                <path
                    opacity="0.1"
                    d="M284.763 47.4606L272.452 145.706L270.559 145.657C270.23 145.649 269.905 145.572 269.608 145.43C269.31 145.289 269.045 145.087 268.831 144.836C268.617 144.586 268.458 144.293 268.365 143.977C268.272 143.661 268.246 143.329 268.29 143.003L282.27 49.4442C282.359 48.8607 282.666 48.3322 283.128 47.9645C283.59 47.5967 284.174 47.4168 284.763 47.4606Z"
                    fill="black"
                />
                <path
                    opacity="0.1"
                    d="M318.783 166.981H308.42V176.289H318.783V166.981Z"
                    fill="black"
                />
                <path
                    opacity="0.1"
                    d="M355.602 263.57V266.278L329.873 266.965V263.57H355.602Z"
                    fill="black"
                />
                <path
                    d="M401.012 170.223V261.885C401.005 262.445 400.783 262.981 400.392 263.381C400.002 263.782 399.471 264.017 398.912 264.038L294.374 266.817H294.347C293.777 266.81 293.234 266.581 292.831 266.179C292.428 265.777 292.199 265.234 292.192 264.665V170.223C292.199 169.655 292.428 169.111 292.831 168.709C293.234 168.307 293.777 168.078 294.347 168.071H398.857C399.426 168.078 399.97 168.307 400.373 168.709C400.775 169.111 401.005 169.655 401.012 170.223Z"
                    fill="#65617D"
                />
                <path
                    opacity="0.1"
                    d="M294.374 168.071V266.817H294.347C293.777 266.81 293.234 266.581 292.831 266.179C292.428 265.777 292.199 265.234 292.192 264.665V170.223C292.199 169.655 292.428 169.111 292.831 168.709C293.234 168.307 293.777 168.078 294.347 168.071H294.374Z"
                    fill="black"
                />
                <path
                    d="M299.147 173.924H395.966V254.714L299.147 256.894V173.924Z"
                    fill="#D4DFEC"
                />
                <path
                    opacity="0.1"
                    d="M597.694 166.981H587.331V176.474H597.694V166.981Z"
                    fill="black"
                />
                <path
                    opacity="0.1"
                    d="M589.06 263.57V267.063L563.33 266.376V263.57H589.06Z"
                    fill="black"
                />
                <path
                    d="M623.014 170.223V264.665C623.007 265.238 622.774 265.786 622.366 266.189C621.957 266.592 621.407 266.817 620.833 266.817L516.273 264.038C515.713 264.017 515.183 263.782 514.792 263.381C514.401 262.981 514.18 262.445 514.173 261.885V170.223C514.18 169.655 514.409 169.111 514.812 168.709C515.215 168.307 515.758 168.078 516.328 168.071H620.838C621.411 168.072 621.961 168.299 622.368 168.702C622.775 169.104 623.007 169.651 623.014 170.223Z"
                    fill="#65617D"
                />
                <path
                    opacity="0.1"
                    d="M623.015 170.223V264.665C623.007 265.238 622.774 265.786 622.366 266.189C621.958 266.592 621.407 266.817 620.833 266.817V168.071C621.407 168.071 621.958 168.297 622.366 168.7C622.774 169.103 623.007 169.65 623.015 170.223Z"
                    fill="black"
                />
                <path
                    d="M616.06 173.924H519.24V254.714L616.06 256.894V173.924Z"
                    fill="#D4DFEC"
                />
                <path
                    d="M511.468 170.223V261.885C511.461 262.445 511.239 262.981 510.849 263.381C510.458 263.782 509.927 264.017 509.368 264.038L404.83 266.817C404.256 266.817 403.705 266.592 403.297 266.189C402.888 265.786 402.655 265.238 402.648 264.665V170.223C402.655 169.655 402.885 169.111 403.287 168.709C403.69 168.307 404.234 168.078 404.803 168.071H509.313C509.882 168.078 510.426 168.307 510.829 168.709C511.231 169.111 511.461 169.655 511.468 170.223Z"
                    fill="#65617D"
                />
                <path
                    d="M409.603 173.924H506.422V254.714L409.603 256.894V173.924Z"
                    fill="#D4DFEC"
                />
                <path
                    opacity="0.1"
                    d="M663.788 290.817V297.902L580.921 298.665L580.038 298.681L548.543 298.97L547.79 298.981L538.217 299.063H537.934L479.58 299.602L383.792 300.49H383.71L359.355 300.719L359.093 300.725L250.874 301.717V293.542L361.335 292.817H361.597L383.955 292.665H384.059L538.468 291.646H538.626L538.719 291.64H538.975L541.588 291.624H542.385L583.016 291.351L585.416 291.341L585.951 291.335L663.788 290.817Z"
                    fill="black"
                />
                <path
                    d="M458.782 176.289C474.245 176.289 486.78 163.765 486.78 148.316C486.78 132.867 474.245 120.343 458.782 120.343C443.319 120.343 430.783 132.867 430.783 148.316C430.783 163.765 443.319 176.289 458.782 176.289Z"
                    fill="#FBBEBE"
                />
                <path
                    d="M486.786 205.537C486.786 205.537 432.512 212.076 437.694 205.537C439.57 203.172 440.089 196.163 439.985 188.18C439.952 185.755 439.865 183.242 439.739 180.741C439.139 168.752 437.694 157.035 437.694 157.035C437.694 157.035 485.149 134.692 479.695 152.403C477.513 159.559 478.227 169.608 479.885 179.041C480.371 181.793 480.933 184.49 481.522 187.052C482.96 193.299 484.716 199.469 486.786 205.537Z"
                    fill="#FBBEBE"
                />
                <path
                    opacity="0.1"
                    d="M486.786 205.537C486.786 205.537 432.512 212.076 437.694 205.537C439.57 203.172 440.089 196.163 439.985 188.18C448.26 184.648 458.787 187.281 458.787 187.281C469.871 185.073 476.978 185.504 481.522 187.052C482.96 193.299 484.716 199.469 486.786 205.537Z"
                    fill="black"
                />
                <path
                    d="M383.77 301.106V300.649L479.564 299.608L537.928 299.063H538.092L538.032 299.869L538.113 299.063H538.217V298.97L538.964 291.64L539.248 288.867L539.335 288L539.412 287.275L542.783 276.044L546.154 264.828L548.99 255.384L553.321 240.954C553.321 240.954 550.866 235.232 549.503 233.597C548.139 231.962 546.775 220.79 546.775 220.79C546.775 220.79 535.135 209.711 530.046 208.436C527.913 207.891 523.702 207.166 519.23 206.256C517.555 205.918 515.837 205.559 514.184 205.166C513.251 204.954 512.335 204.73 511.457 204.507C509.747 204.08 508.063 203.56 506.411 202.948C505.545 202.634 504.721 202.215 503.957 201.7C499.947 198.763 489.9 198.431 489.513 198.431C489.512 198.418 489.512 198.405 489.513 198.392V198.343C489.527 198.115 489.527 197.885 489.513 197.657C489.513 197.439 489.513 197.183 489.464 196.894C489.464 196.807 489.464 196.714 489.426 196.621C489.398 196.425 489.366 196.218 489.316 196C489.3 195.903 489.278 195.806 489.251 195.711C489.093 195.055 488.864 194.417 488.569 193.809C488.531 193.722 488.482 193.629 488.438 193.542C488.171 193.039 487.861 192.559 487.511 192.109C487.44 192.016 487.364 191.918 487.282 191.826C486.835 191.299 486.338 190.817 485.798 190.387C485.651 190.273 485.498 190.153 485.34 190.044C485.252 189.972 485.159 189.907 485.062 189.847L484.576 189.531L484.124 189.27C483.725 189.052 483.305 188.839 482.847 188.638C482.705 188.572 482.553 188.512 482.4 188.452C482.247 188.392 482.007 188.3 481.805 188.223H481.773L481.364 188.06C481.053 187.956 480.736 187.864 480.404 187.771L479.896 187.64L479.351 187.515L478.805 187.401C478.26 187.292 477.676 187.194 477.065 187.117L476.444 187.041L475.805 186.976L475.145 186.921L474.207 186.867L473.116 186.828C468.305 186.828 463.507 187.338 458.803 188.349C455.536 187.622 452.189 187.315 448.843 187.433H448.369L447.823 187.466H447.474L446.77 187.531C446.536 187.531 446.296 187.58 446.061 187.613C445.827 187.646 445.581 187.673 445.347 187.711L444.987 187.771C444.632 187.831 444.272 187.897 443.896 187.973C443.776 187.995 443.656 188.022 443.536 188.055C443.061 188.158 442.587 188.283 442.118 188.425C441.883 188.49 441.649 188.567 441.414 188.649C441.294 188.681 441.179 188.725 441.065 188.768L440.716 188.894L440.372 189.03L439.963 189.194C439.756 189.281 439.554 189.373 439.352 189.471C439.238 189.52 439.123 189.575 439.014 189.635C438.905 189.695 438.79 189.744 438.687 189.804C437.453 190.441 436.314 191.244 435.299 192.191L435.021 192.458L434.748 192.736C434.656 192.828 434.568 192.926 434.481 193.025C434.126 193.413 433.794 193.822 433.488 194.251C433.401 194.365 433.319 194.48 433.238 194.599C432.891 195.11 432.578 195.641 432.299 196.191C432.228 196.322 432.163 196.458 432.097 196.589C431.652 197.509 431.287 198.466 431.007 199.45C430.905 199.813 430.812 200.176 430.728 200.54C430.728 200.54 419.181 205.629 409.603 209.313C407.055 210.294 404.655 211.183 402.648 211.853C402.064 212.049 401.519 212.229 401.012 212.398C399.911 212.795 398.766 213.059 397.603 213.183C397.054 213.192 396.507 213.243 395.966 213.335C391.564 214.049 384.021 217.15 383.197 220.262C383.13 220.51 383.111 220.769 383.142 221.025C383.142 221.025 383.142 221.063 383.142 221.084C383.688 224.899 379.87 224.354 379.87 224.354C379.87 224.354 378.506 234.436 376.597 237.161C375.217 239.123 374.273 243.499 374.153 246.801C374.085 247.83 374.165 248.863 374.393 249.869C374.393 249.896 374.393 249.924 374.393 249.946C374.611 250.676 374.088 252.67 373.199 255.226C372.233 258.033 370.826 261.52 369.473 264.812C367.433 269.782 365.513 274.294 365.393 275.286C365.344 275.728 365.202 276.518 365.006 277.537C364.209 281.689 362.442 289.597 361.569 292.796C360.92 295.183 359.977 298.452 359.327 300.698C359.327 300.763 359.289 300.828 359.273 300.888L383.726 300.649V301.106H383.802H383.77Z"
                    fill="#6C63FF"
                />
                <path
                    opacity="0.1"
                    d="M392.693 236.872C392.693 236.872 423.785 252.948 434.967 251.041L392.693 236.872Z"
                    fill="black"
                />
                <path
                    opacity="0.1"
                    d="M455.967 230.333C455.967 230.333 486.24 240.142 496.331 241.504C506.422 242.867 455.967 230.333 455.967 230.333Z"
                    fill="black"
                />
                <path
                    opacity="0.1"
                    d="M489.546 198.768C473.727 201.678 443.945 201.052 431.072 200.61C435.791 183.717 458.798 189.46 458.798 189.46C487.277 183.782 489.458 195.564 489.546 198.768Z"
                    fill="black"
                />
                <path
                    d="M489.546 197.678C473.727 200.589 443.945 199.962 431.072 199.52C435.791 182.627 458.798 188.371 458.798 188.371C487.277 182.692 489.458 194.474 489.546 197.678Z"
                    fill="#6C63FF"
                />
                <path
                    d="M573.514 272.158C573.514 272.158 592.147 269.297 592.512 277.472C592.878 285.646 583.01 291.357 583.01 291.357L573.514 272.158Z"
                    fill="#FBBEBE"
                />
                <path
                    opacity="0.1"
                    d="M479.886 179.041C479.084 179.399 478.265 179.715 477.431 179.989C471.551 182.016 465.622 184.06 459.431 184.801C453.24 185.542 446.743 184.888 441.343 181.804C440.776 181.484 440.23 181.129 439.707 180.741C439.107 168.752 437.661 157.035 437.661 157.035C437.661 157.035 485.116 134.692 479.662 152.403C477.491 159.559 478.227 169.608 479.886 179.041Z"
                    fill="black"
                />
                <path
                    d="M451.102 104.594C450.323 104.799 449.507 104.82 448.719 104.655C447.931 104.489 447.193 104.142 446.563 103.64L447.698 105.215C447.029 105.292 446.352 105.223 445.713 105.011C445.074 104.799 444.489 104.45 444 103.989C443.897 105.399 443.955 106.816 444.174 108.213C442.297 108.303 440.449 107.724 438.96 106.578C438.93 107.069 439.053 107.558 439.31 107.978C439.568 108.398 439.948 108.729 440.4 108.926C438.514 108.701 436.61 109.17 435.045 110.243C433.479 111.317 432.358 112.924 431.89 114.763L434.738 115.025C432.5 115.502 430.492 116.726 429.043 118.496C428.17 119.586 427.505 120.981 427.887 122.311C428.269 123.64 430.112 124.49 431.116 123.542C429.688 125.245 428.651 127.239 428.076 129.384C427.501 131.529 427.403 133.775 427.789 135.962C428.047 136.894 428.132 137.866 428.039 138.828C427.859 139.728 427.292 140.507 427.009 141.384C426.463 142.976 426.981 144.703 427.467 146.289L430.025 154.692C430.952 157.728 431.874 160.768 433.085 163.706C433.942 165.563 434.671 167.477 435.267 169.433C435.954 172.071 435.981 174.959 437.449 177.264C438.454 178.715 439.798 179.899 441.365 180.714C446.76 183.798 453.278 184.452 459.453 183.711C465.627 182.97 471.551 180.926 477.426 178.899C478.731 178.506 479.983 177.958 481.156 177.264C485.22 174.605 486.126 169.166 486.884 164.376C487.729 159.035 488.858 153.706 490.86 148.681C492.049 145.689 493.588 142.654 493.326 139.45C492.993 135.193 489.622 131.744 488.787 127.559C488.508 126.16 488.521 124.718 488.826 123.324C489.084 122.494 489.229 121.632 489.257 120.763C489.164 119.008 487.724 117.657 486.371 116.529C483.436 114.08 480.407 111.766 477.284 109.586C477.126 108.496 478.609 108.027 479.28 107.166C480.229 105.951 479.247 104.022 477.807 103.455C476.367 102.888 474.753 103.259 473.253 103.635C473.35 102.868 473.198 102.09 472.817 101.416C472.437 100.743 471.849 100.21 471.141 99.8972C470.433 99.5844 469.643 99.5081 468.889 99.6798C468.134 99.8515 467.455 100.262 466.953 100.85C466.554 99.9376 465.918 99.1486 465.11 98.5658C464.302 97.9829 463.352 97.6276 462.36 97.5368C458.743 97.2534 458.673 100.016 456.36 101.537C454.047 103.057 452.138 101.052 450.36 99.5913C450.033 100.417 449.93 101.314 450.06 102.192C450.19 103.07 450.549 103.899 451.102 104.594Z"
                    fill="#3F3D56"
                />
                <path
                    d="M587.33 288.507C587.33 288.507 586.845 289.662 585.95 291.335C584.597 293.909 582.95 296.318 581.041 298.512L580.894 298.67H580.01L548.515 298.959H547.763L547.67 298.85L541.561 291.608L539.259 288.877L539.166 288.763L538.97 288.534L538.861 288.403L538.719 288.234L534.241 282.926L535.877 276.115L538.664 264.638L538.735 264.36L539.281 262.18L539.668 260.545L540.966 255.215L545.417 236.877L553.326 240.965L561.666 255.679L566.145 263.58H568.599C569.063 263.58 570.127 264.474 571.196 265.504C571.578 265.869 571.959 266.256 572.287 266.594C573.258 267.597 574.027 268.458 574.027 268.458C574.027 268.458 578.003 268.545 579.072 271.673C579.127 271.824 579.173 271.979 579.209 272.136C579.563 273.366 580.025 274.562 580.589 275.711C581.292 277.243 582.176 278.981 583.07 280.719C584.734 283.907 586.425 286.943 587.047 288.044L587.123 288.18L587.33 288.507Z"
                    fill="#6C63FF"
                />
                <path
                    opacity="0.1"
                    d="M540.475 263.902L540.421 264.681V264.736L540.328 265.989L539.603 276.076L538.724 288.229L538.474 291.651L537.928 298.975V299.068L479.564 299.613L383.786 300.648V301.106H383.71V300.648V300.496L383.955 292.67L384.424 277.379L384.828 264.414L384.866 263.123C384.89 262.343 385.073 261.576 385.403 260.87C385.733 260.163 386.204 259.531 386.787 259.013C387.37 258.494 388.053 258.099 388.794 257.853C389.534 257.607 390.317 257.514 391.095 257.58C393.67 257.798 397.014 258.065 401.012 258.349L402.648 258.469C425.738 260.071 468.409 262.142 511.468 259.559C512.373 259.509 513.284 259.455 514.195 259.39C520.871 258.97 527.542 258.43 534.148 257.755C534.983 257.667 535.827 257.764 536.621 258.038C537.414 258.311 538.138 258.756 538.742 259.339C539.345 259.922 539.813 260.631 540.112 261.415C540.412 262.198 540.536 263.038 540.475 263.875V263.902Z"
                    fill="black"
                />
                <path
                    d="M383.77 301.106V300.649L479.564 299.608L537.928 299.063H538.092V298.97L538.637 291.646L538.872 288.376L539.766 276.055L540.47 266.3V266.06C540.502 265.611 540.482 265.159 540.41 264.714C540.413 264.696 540.413 264.678 540.41 264.66C540.26 263.74 539.885 262.871 539.319 262.131C538.718 261.361 537.931 260.758 537.032 260.376C536.133 259.995 535.152 259.848 534.181 259.951C527.575 260.627 520.904 261.166 514.228 261.586C513.317 261.651 512.406 261.706 511.5 261.755C468.442 264.311 425.77 262.24 402.681 260.665L401.045 260.545C397.046 260.262 393.703 260 391.128 259.777C389.712 259.657 388.301 260.066 387.169 260.925C386.037 261.783 385.263 263.03 384.997 264.425C384.942 264.72 384.909 265.019 384.899 265.319L384.528 277.395L384.021 292.692L383.781 300.518V300.67V301.128L383.77 301.106Z"
                    fill="#3F3D56"
                />
                <path
                    opacity="0.1"
                    d="M540.639 267.722L539.968 276.076L538.97 288.529L538.719 291.646L538.174 298.627L538.141 298.976V299.068L538.059 299.875L538.119 299.068H537.961L479.596 299.613L383.786 300.649V300.496L384.053 292.67L384.599 277.379L384.948 267.215C384.965 266.637 385.127 266.073 385.418 265.573C385.71 265.073 386.122 264.654 386.617 264.354C387.235 263.976 387.957 263.804 388.679 263.864C389.824 263.956 391.232 264.065 392.874 264.185C395.541 264.382 398.83 264.61 402.659 264.85C409.75 265.297 418.647 265.777 428.841 266.169C457.205 267.259 495.497 267.624 531.868 264.441C533.504 264.3 535.195 264.142 536.848 263.984C537.502 263.919 538.161 264.043 538.746 264.343C538.912 264.426 539.069 264.524 539.215 264.638C539.69 264.981 540.066 265.444 540.306 265.978C540.362 266.085 540.408 266.196 540.443 266.311C540.607 266.762 540.673 267.243 540.639 267.722Z"
                    fill="black"
                />
                <path
                    opacity="0.1"
                    d="M355.602 275.183V276.921C355.602 277.553 355.423 278.172 355.085 278.707C354.747 279.241 354.264 279.669 353.693 279.94L331.82 280.36C331.238 280.093 330.746 279.666 330.4 279.128C330.055 278.589 329.872 277.963 329.873 277.324V275.689L355.602 275.183Z"
                    fill="black"
                />
                <path
                    d="M355.875 280.965L327.375 281.509V276.785L355.875 276.24V280.965Z"
                    fill="#3F3D56"
                />
                <path
                    opacity="0.1"
                    d="M355.875 280.965L327.375 281.509V276.785L355.875 276.24V280.965Z"
                    fill="black"
                />
                <path
                    d="M356.966 280.965L328.465 281.509V276.785L356.966 276.24V280.965Z"
                    fill="#3F3D56"
                />
                <g opacity="0.1">
                    <path
                        opacity="0.1"
                        d="M451.325 102.807C450.792 102.115 450.438 101.302 450.294 100.441C450.163 101.283 450.242 102.144 450.523 102.948C450.794 102.923 451.062 102.876 451.325 102.807Z"
                        fill="black"
                    />
                    <path
                        opacity="0.1"
                        d="M444.398 106.425C444.295 105.757 444.228 105.084 444.196 104.409C444.196 105.079 444.196 105.755 444.196 106.43L444.398 106.425Z"
                        fill="black"
                    />
                    <path
                        opacity="0.1"
                        d="M488.853 124.61C488.883 124.125 488.949 123.642 489.049 123.166C489.307 122.337 489.454 121.478 489.486 120.61C489.473 120.416 489.444 120.222 489.398 120.033C489.306 120.534 489.158 121.035 489.049 121.531C488.831 122.542 488.765 123.58 488.853 124.61Z"
                        fill="black"
                    />
                    <path
                        opacity="0.1"
                        d="M477.507 107.771L478.102 108.202C478.603 107.84 479.072 107.435 479.504 106.992C479.709 106.708 479.836 106.376 479.873 106.028C479.909 105.68 479.853 105.328 479.711 105.008C479.657 105.133 479.587 105.25 479.504 105.357C478.833 106.218 477.349 106.692 477.507 107.771Z"
                        fill="black"
                    />
                    <path
                        opacity="0.1"
                        d="M432.687 113.014C432.488 113.411 432.329 113.827 432.212 114.256C433.066 113.78 433.985 113.433 434.94 113.226L432.687 113.014Z"
                        fill="black"
                    />
                    <path
                        opacity="0.1"
                        d="M440.209 107.084C439.851 106.887 439.508 106.663 439.183 106.414C439.17 106.63 439.186 106.846 439.232 107.057C439.558 107.042 439.885 107.051 440.209 107.084Z"
                        fill="black"
                    />
                    <path
                        opacity="0.1"
                        d="M493.539 139.194C493.315 141.837 492.082 144.382 491.084 146.888C489.082 151.913 487.953 157.243 487.108 162.589C486.349 167.379 485.471 172.818 481.38 175.472C480.211 176.169 478.96 176.718 477.655 177.106C471.775 179.139 465.845 181.177 459.654 181.918C453.463 182.66 446.967 182.011 441.567 178.927C440.001 178.11 438.657 176.927 437.651 175.477C436.194 173.172 436.167 170.284 435.469 167.646C434.873 165.687 434.144 163.772 433.287 161.913C432.081 158.981 431.154 155.918 430.232 152.905C429.378 150.104 428.525 147.301 427.674 144.496C427.394 143.652 427.186 142.786 427.052 141.908C426.839 143.303 427.254 144.763 427.674 146.131C428.525 148.939 429.378 151.742 430.232 154.54C431.154 157.575 432.081 160.616 433.287 163.548C434.144 165.407 434.873 167.322 435.469 169.281C436.156 171.918 436.183 174.807 437.651 177.112C438.657 178.561 440.001 179.745 441.567 180.561C446.967 183.646 453.48 184.294 459.654 183.553C465.829 182.812 471.753 180.774 477.655 178.741C478.96 178.353 480.211 177.804 481.38 177.106C485.444 174.452 486.349 169.014 487.108 164.224C487.953 158.878 489.082 153.548 491.084 148.523C492.273 145.537 493.811 142.502 493.549 139.292C493.549 139.259 493.539 139.226 493.539 139.194Z"
                        fill="black"
                    />
                    <path
                        opacity="0.1"
                        d="M428.252 137.084C428.252 137.084 428.252 137.046 428.252 137.025C428.351 136.064 428.266 135.093 428.001 134.164C427.893 133.565 427.822 132.961 427.789 132.354C427.726 133.507 427.797 134.662 428.001 135.798C428.089 136.223 428.187 136.654 428.252 137.084Z"
                        fill="black"
                    />
                    <path
                        opacity="0.1"
                        d="M429.916 123.755C430.335 123.051 430.812 122.382 431.34 121.755C430.341 122.708 428.498 121.858 428.11 120.534C427.968 121.07 427.968 121.633 428.11 122.169C428.245 122.569 428.483 122.926 428.8 123.204C429.117 123.483 429.502 123.673 429.916 123.755Z"
                        fill="black"
                    />
                </g>
                <path
                    opacity="0.1"
                    d="M566.15 263.575C566.15 263.575 567.879 269.842 566.15 275.292C564.421 280.741 566.15 263.575 566.15 263.575Z"
                    fill="black"
                />
                <path
                    opacity="0.1"
                    d="M573.514 269.967C573.514 269.967 574.239 277.924 572.603 279.335C570.967 280.747 573.514 269.967 573.514 269.967Z"
                    fill="black"
                />
                <path
                    d="M301.542 186.845L356.966 186.3"
                    stroke="#6C63FF"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                />
                <path
                    d="M301.542 193.64L356.966 193.101"
                    stroke="#6C63FF"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                />
                <path
                    d="M301.542 200.441L356.966 199.896"
                    stroke="#6C63FF"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear"
                    x1="820.476"
                    y1="727.193"
                    x2="913.398"
                    y2="1371.83"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3B93F7" />
                    <stop offset="1" stopColor="#3563C1" />
                </linearGradient>
                <clipPath id="clip0">
                    <rect
                        width="568"
                        height="302"
                        fill="white"
                        transform="translate(193)"
                    />
                </clipPath>
            </defs>
        </BgSVG>
    )
}
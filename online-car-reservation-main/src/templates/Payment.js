import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useCookies } from 'react-cookie';
import HeadBlock from './headBlock';
import "animate.css";
import Navibar from './Navibar';
import './Payment.css';
import './Booking.css';
function Payment() {
    const [cookies, setCookie,removeCookie] = useCookies();
    return (
        <div className="booking-contain contain-payment ">
            <HeadBlock/>                
            <Navibar />
            <div className="car-svg ">
              {/* <svg width="451" height="353" viewBox="0 0 451 353" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="451" height="353" fill="none"/>
                <g id="undraw_off_road_9oae 1" clip-path="url(#clip0)">
                <rect width="451" height="353" fill="none"/>
                <g id="cloud " className='animate__animated animate__fadeIn'>
                <path id="Vector" opacity="0.1" d="M20.9202 140.015C27.8009 159.57 42.3636 176.498 65.3811 184.703C113.215 201.745 221.091 192.956 301.599 182.867C343.247 177.649 379.846 163.252 406.437 142.977L20.9202 140.015Z" fill="#6C63FF"/>
                <path id="Vector_2" opacity="0.1" d="M443.118 47.8876H398.963C396.866 47.8876 395.145 46.745 395.145 45.3485C395.145 43.952 396.866 42.8094 398.963 42.8094H406.6C404.499 42.8094 402.782 41.6668 402.782 40.2703C402.782 38.8738 404.499 37.7312 406.6 37.7312H401.146C399.045 37.7312 397.328 36.5886 397.328 35.1921C397.328 33.7956 399.045 32.653 401.146 32.653H424.197C419.082 31.066 413.117 29.9404 406.208 29.3521C343.329 23.9692 320.88 27.5367 312.96 31.1803C302.686 35.9087 291.809 39.084 280.662 40.6089C241.855 45.9325 169.316 52.3438 103.566 38.5395C70.8882 31.6881 46.5992 43.2665 32.0405 62.6187H450.791C450.244 56.9904 448.608 51.7979 445.603 47.2529C444.839 47.6768 443.984 47.895 443.118 47.8876Z" fill="#6C63FF"/>
                <path id="Vector_3" opacity="0.1" d="M17.1712 99.1608C15.4748 110.544 16.0579 122.167 18.8842 133.308L406.735 142.749C417.471 134.522 426.568 125.331 433.682 115.398L17.1712 99.1608ZM170.571 123.519H162.95C165.047 123.519 166.765 124.666 166.765 126.058C166.765 127.451 165.047 128.598 162.95 128.598H118.796C116.694 128.598 114.977 127.455 114.977 126.058C114.977 124.662 116.694 123.519 118.796 123.519H126.429C124.331 123.519 122.61 122.377 122.61 120.98C122.61 119.584 124.331 118.441 126.429 118.441H120.942C118.845 118.441 117.124 117.294 117.124 115.902C117.124 114.51 118.845 113.363 120.942 113.363H165.117C167.218 113.363 168.935 114.505 168.935 115.902C168.935 117.298 167.218 118.441 165.117 118.441H170.571C172.672 118.441 174.389 119.584 174.389 120.98C174.389 122.377 172.672 123.519 170.571 123.519Z" fill="#6C63FF"/>
                <path id="Vector_4" opacity="0.1" d="M450.808 62.8092L27.3675 69.6648C22.2032 78.598 18.76 88.4824 17.2284 98.7714H443.388C446.114 92.8518 448.172 86.6266 449.52 80.219C450.808 74.1505 451.315 68.2767 450.808 62.8092ZM103.203 85.2718H95.5656C97.667 85.2718 99.3841 86.4187 99.3841 87.8109C99.3841 89.2032 97.667 90.3501 95.5656 90.3501H51.4112C49.3098 90.3501 47.5927 89.2075 47.5927 87.8109C47.5927 86.4144 49.3098 85.2718 51.4112 85.2718H59.0483C56.9469 85.2718 55.2298 84.1292 55.2298 82.7327C55.2298 81.3362 56.9469 80.1936 59.0483 80.1936H53.574C51.4726 80.1936 49.7554 79.0468 49.7554 77.6545C49.7554 76.2622 51.4726 75.1154 53.574 75.1154H97.7283C99.8257 75.1154 101.543 76.258 101.543 77.6545C101.543 79.051 99.8257 80.1936 97.7283 80.1936H103.182C105.28 80.1936 106.997 81.3362 106.997 82.7327C106.997 84.1292 105.304 85.2718 103.203 85.2718Z" fill="#6C63FF"/>
                </g>
                <g id="pill-2" className="animate__animated animate__bounceInDown ">
                <path id="Vector_5" d="M239.701 111.581H237.424V241.52H239.701V111.581Z" fill="#535F89"/>
                <path id="Vector_6" d="M241.856 265.824C240.813 266.662 239.531 267.117 238.211 267.117C236.891 267.117 235.608 266.662 234.566 265.824C233.548 258.871 236.132 245.206 236.741 242.125L236.868 241.508H239.811C240.007 241.709 240.162 241.949 240.265 242.214C242.264 246.67 241.856 265.824 241.856 265.824Z" fill="#535F89"/>
                <path id="Vector_7" opacity="0.1" d="M239.194 238.706V241.512H237.967V238.706C238.165 238.672 238.364 238.655 238.564 238.655C238.775 238.655 238.986 238.672 239.194 238.706Z" fill="black"/>
                <path id="Vector_8" opacity="0.1" d="M240.245 242.227C239.727 242.513 239.147 242.659 238.56 242.65C237.923 242.667 237.294 242.493 236.749 242.151L236.876 241.533H239.811C239.998 241.733 240.146 241.968 240.245 242.227Z" fill="black"/>
                <path id="Vector_9" d="M238.56 242.159C239.917 242.159 241.017 241.483 241.017 240.649C241.017 239.814 239.917 239.138 238.56 239.138C237.203 239.138 236.103 239.814 236.103 240.649C236.103 241.483 237.203 242.159 238.56 242.159Z" fill="#DCE2ED"/>
                <path id="Vector_10" d="M227.763 90.6505L236.414 86.3637L249.17 89.5206L239.272 81.7763L227.763 90.6505Z" fill="#6C63FF"/>
                <path id="Vector_11" d="M230.294 92.0216L227.763 90.6505L236.414 86.3636L249.17 89.5206L246.925 90.6505L236.414 88.2087L230.294 92.0216Z" fill="#6C63FF"/>
                <path id="Vector_12" opacity="0.1" d="M230.294 92.0216L227.763 90.6505L236.414 86.3636L249.17 89.5206L246.925 90.6505L236.414 88.2087L230.294 92.0216Z" fill="black"/>
                <path id="Vector_13" opacity="0.2" d="M229.95 91.0102L236.913 111.205H240.363L246.811 89.7576L236.414 87.2566L229.95 91.0102Z" fill="#6C63FF"/>
                <path id="Vector_14" d="M242.072 105.521L240.699 110.1L240.363 111.205H236.913L236.655 110.456L235.028 105.737L237.64 104.112L242.072 105.521Z" fill="#6C63FF"/>
                <path id="Vector_15" opacity="0.2" d="M236.414 88.2087L238.062 111.205H236.913L230.294 92.0216L236.414 88.2087Z" fill="#6C63FF"/>
                <path id="Vector_16" opacity="0.1" d="M239.272 81.7763L236.414 86.3637L227.763 90.6505L239.272 81.7763Z" fill="black"/>
                <path id="Vector_17" opacity="0.1" d="M240.699 110.1L240.367 111.205H236.913L236.655 110.456C236.946 110.161 237.294 109.933 237.676 109.787C238.058 109.642 238.465 109.581 238.871 109.609C239.513 109.586 240.148 109.757 240.699 110.1Z" fill="black"/>
                <path id="Vector_18" opacity="0.1" d="M239.194 111.581V113.549C239.088 113.549 238.981 113.549 238.871 113.549C238.565 113.551 238.261 113.514 237.963 113.439V111.581H239.194Z" fill="black"/>
                <path id="Vector_19" d="M238.867 113.092C240.224 113.092 241.324 112.416 241.324 111.581C241.324 110.747 240.224 110.07 238.867 110.07C237.51 110.07 236.41 110.747 236.41 111.581C236.41 112.416 237.51 113.092 238.867 113.092Z" fill="#DCE2ED"/>
                </g>
                <g id="pill-3 " className="animate__animated animate__bounceInDown animate__delay-1s">
                <path id="Vector_20" d="M328.198 174.78H326.693V260.686H328.198V174.78Z" fill="#535F89"/>
                <path id="Vector_21" d="M329.629 276.755C328.94 277.309 328.093 277.609 327.221 277.609C326.349 277.609 325.501 277.309 324.813 276.755C324.138 272.159 325.847 263.12 326.248 261.097C326.301 260.83 326.333 260.674 326.333 260.674H328.259C328.389 260.806 328.492 260.965 328.562 261.139C329.894 264.097 329.629 276.755 329.629 276.755Z" fill="#535F89"/>
                <path id="Vector_22" opacity="0.1" d="M327.862 258.829V260.686H327.045V258.829C327.18 258.803 327.317 258.792 327.454 258.795C327.591 258.795 327.727 258.807 327.862 258.829Z" fill="black"/>
                <path id="Vector_23" opacity="0.1" d="M328.562 261.135C328.217 261.32 327.833 261.413 327.445 261.406C327.025 261.415 326.61 261.302 326.248 261.08C326.301 260.813 326.333 260.657 326.333 260.657H328.259C328.39 260.793 328.493 260.956 328.562 261.135Z" fill="black"/>
                <path id="Vector_24" d="M327.445 261.11C328.342 261.11 329.069 260.662 329.069 260.111C329.069 259.559 328.342 259.112 327.445 259.112C326.549 259.112 325.822 259.559 325.822 260.111C325.822 260.662 326.549 261.11 327.445 261.11Z" fill="#DCE2ED"/>
                <path id="Vector_25" d="M320.307 160.942L326.027 158.106L334.461 160.197L327.916 155.076L320.307 160.942Z" fill="#6C63FF"/>
                <path id="Vector_26" d="M321.979 161.847L320.307 160.942L326.027 158.106L334.461 160.197L332.977 160.942L326.027 159.329L321.979 161.847Z" fill="#6C63FF"/>
                <path id="Vector_27" opacity="0.1" d="M321.979 161.847L320.307 160.942L326.027 158.106L334.461 160.197L332.977 160.942L326.027 159.329L321.979 161.847Z" fill="black"/>
                <path id="Vector_28" opacity="0.2" d="M321.75 161.179L326.354 174.53H328.639L332.899 160.353L326.027 158.699L321.75 161.179Z" fill="#6C63FF"/>
                <path id="Vector_29" d="M329.768 170.772L328.86 173.802L328.639 174.534H326.354L326.186 174.039L325.111 170.92L326.836 169.845L329.768 170.772Z" fill="#6C63FF"/>
                <path id="Vector_30" opacity="0.2" d="M326.027 159.329L327.118 174.53H326.354L321.979 161.847L326.027 159.329Z" fill="#6C63FF"/>
                <path id="Vector_31" opacity="0.1" d="M327.916 155.076L326.027 158.106L320.307 160.942L327.916 155.076Z" fill="black"/>
                <path id="Vector_32" opacity="0.1" d="M328.86 173.802L328.639 174.53H326.358L326.186 174.035C326.378 173.839 326.607 173.687 326.86 173.59C327.112 173.492 327.381 173.45 327.65 173.468C328.076 173.455 328.497 173.571 328.86 173.802Z" fill="black"/>
                <path id="Vector_33" opacity="0.1" d="M327.863 174.78V176.075H327.65C327.449 176.075 327.249 176.051 327.053 176.003V174.763L327.863 174.78Z" fill="black"/>
                <path id="Vector_34" d="M327.65 175.778C328.546 175.778 329.273 175.331 329.273 174.78C329.273 174.228 328.546 173.781 327.65 173.781C326.754 173.781 326.027 174.228 326.027 174.78C326.027 175.331 326.754 175.778 327.65 175.778Z" fill="#DCE2ED"/>
                </g>
                <g id="ground">
                <path id="Vector_35" opacity="0.1" d="M181.932 353C282.411 353 363.865 344.663 363.865 334.38C363.865 324.096 282.411 315.76 181.932 315.76C81.4539 315.76 0 324.096 0 334.38C0 344.663 81.4539 353 181.932 353Z" fill="#6C63FF"/>
                </g>
                <g id="poll-1" className="animate__animated animate__bounceInDown animate__delay-1s">
                <path id="Vector_36" d="M91.6571 76.897H88.8157V239.095H91.6571V76.897Z" fill="#535F89"/>
                <path id="Vector_37" d="M94.3554 269.434C93.055 270.481 91.4546 271.049 89.8071 271.049C88.1597 271.049 86.5592 270.481 85.2588 269.434C83.9914 260.754 87.213 243.695 87.9735 239.87L88.1329 239.095H91.7716C92.0136 239.349 92.2065 239.647 92.3399 239.976C94.8583 245.528 94.3554 269.434 94.3554 269.434Z" fill="#535F89"/>
                <path id="Vector_38" opacity="0.1" d="M91.0234 235.591V239.095H89.4903V235.587C89.7376 235.546 89.9879 235.526 90.2385 235.528C90.5013 235.527 90.7638 235.549 91.0234 235.591Z" fill="black"/>
                <path id="Vector_39" opacity="0.1" d="M92.3399 239.976C91.6921 240.326 90.9694 240.503 90.2384 240.488C89.4421 240.509 88.6565 240.294 87.9735 239.87L88.1329 239.095H91.7716C92.0136 239.349 92.2065 239.647 92.3399 239.976Z" fill="black"/>
                <path id="Vector_40" d="M90.2385 239.891C91.9319 239.891 93.3047 239.048 93.3047 238.008C93.3047 236.968 91.9319 236.125 90.2385 236.125C88.545 236.125 87.1722 236.968 87.1722 238.008C87.1722 239.048 88.545 239.891 90.2385 239.891Z" fill="#DCE2ED"/>
                <path id="Vector_41" d="M76.755 50.7695L87.5565 45.4162L103.481 49.3561L91.1215 39.6905L76.755 50.7695Z" fill="#6C63FF"/>
                <path id="Vector_42" d="M79.9153 52.4792L76.755 50.7695L87.5565 45.4162L103.481 49.3561L100.676 50.7695L87.5565 47.7226L79.9153 52.4792Z" fill="#6C63FF"/>
                <path id="Vector_43" opacity="0.1" d="M79.9153 52.4792L76.755 50.7695L87.5565 45.4162L103.481 49.3561L100.676 50.7695L87.5565 47.7226L79.9153 52.4792Z" fill="black"/>
                <path id="Vector_44" opacity="0.2" d="M79.486 51.2181L88.1779 76.423H92.487L100.533 49.6566L87.5565 46.5335L79.486 51.2181Z" fill="#6C63FF"/>
                <path id="Vector_45" d="M94.6212 69.3304L92.9 75.0477L92.487 76.4273H88.1779L87.8549 75.492L85.8271 69.6055L89.0855 67.5742L94.6212 69.3304Z" fill="#6C63FF"/>
                <path id="Vector_46" opacity="0.2" d="M87.5565 47.7226L89.6129 76.423H88.1779L79.9153 52.4792L87.5565 47.7226Z" fill="#6C63FF"/>
                <path id="Vector_47" opacity="0.1" d="M91.1215 39.6905L87.5565 45.4162L76.755 50.7695L91.1215 39.6905Z" fill="black"/>
                </g>
                <g id="tree" className='animate__bounceIn'>
                <path id="Vector_48" d="M182.685 291.05C182.685 291.05 146.216 289.463 142.377 215.554C138.538 141.645 176.544 129.127 176.544 129.127C176.544 129.127 188.584 122.165 193.924 121.878C199.263 121.59 217.109 123.329 217.109 123.329L197.435 119.402C197.435 119.402 225.118 108.497 233.413 107.625L203.486 114.167C203.486 114.167 203.077 97.0071 210.232 91.3364C210.232 91.3364 204.099 90.8624 200.866 103.224C199.945 106.79 198.229 110.084 195.857 112.84C193.484 115.596 190.52 117.738 187.202 119.093C176.102 123.575 160.755 130.65 157.259 136.71C157.259 136.71 150.795 143.693 151.781 125.513C152.766 107.333 157.398 91.7681 159.087 91.3322C159.087 91.3322 172.292 76.7915 190.841 75.9198C190.841 75.9198 180.023 71.4086 161.756 85.5176C161.756 85.5176 160.211 78.3912 167.096 69.9529C173.98 61.5145 184.676 43.7746 196.319 41.8872C196.319 41.8872 180.023 40.8673 167.096 62.6825C167.096 62.6825 162.316 65.8818 161.895 57.7397C161.474 49.5976 158.665 39.4116 158.665 39.4116C158.665 39.4116 154.728 58.1756 163.02 66.6097C163.02 66.6097 147.14 87.989 147.844 111.988C147.844 111.988 142.938 122.893 141.102 110.096C141.102 110.096 140.043 92.4705 137.929 77.5109C137.074 71.4854 137.43 65.342 138.973 59.4651C140.517 53.5882 143.215 48.1041 146.899 43.3557C150.411 38.8318 152.856 34.4391 151.499 32.1328L133.101 54.8197C133.101 54.8197 117.626 17.7445 106.388 9.76321C95.1486 1.78194 93.7422 0.029953 93.7422 0.029953L111.866 21.989L89.106 13.6692L111.866 24.5747C111.866 24.5747 122.406 33.4616 128.448 57.7355C134.491 82.0094 135.051 97.1467 135.051 97.1467C135.051 97.1467 102.594 70.5326 96.4119 71.4044L117.414 87.8494C123.127 92.3205 127.846 98.0093 131.252 104.531C134.658 111.053 136.672 118.256 137.157 125.652C137.157 125.652 96.5509 114.891 86.7143 112.855L68.1695 93.2196L82.2212 111.84L53.2755 111.417L36.6972 99.1992C36.6972 99.1992 49.78 110.545 48.4962 111.273C47.2125 112.001 28.1239 112.872 28.1239 112.872C28.1239 112.872 76.7387 112.58 82.0903 116.215C87.442 119.851 99.3719 121.162 99.3719 121.162L64.9478 126.541L105.979 123.49C105.979 123.49 137.03 129.305 138.714 139.343C138.714 139.343 132.39 156.422 128.179 163.193C124.679 168.822 117.639 187.044 116.236 203.045C114.834 219.045 112.863 243.62 118.203 258.6C123.542 273.581 125.509 282.163 122.839 286.67C120.169 291.177 117.639 296.996 126.351 298.16C135.063 299.324 173.281 297.58 173.281 297.58C173.281 297.58 184.937 299.95 182.685 291.05Z" fill="#DEA3A2"/>
                <path id="Vector_49" d="M259.239 231.609C259.239 231.609 280.184 230.695 282.388 188.25C284.591 145.804 262.763 138.61 262.763 138.61C262.763 138.61 255.85 134.611 252.784 134.446C249.717 134.281 239.468 135.292 239.468 135.292L250.764 133.037C250.764 133.037 234.869 126.774 230.106 126.266L247.277 130.024C247.277 130.024 247.518 120.168 243.401 116.905C243.401 116.905 246.909 116.634 248.781 123.731C249.308 125.78 250.293 127.672 251.655 129.256C253.018 130.839 254.721 132.069 256.627 132.846C263.005 135.424 271.819 139.486 273.827 142.965C273.827 142.965 277.539 146.976 276.971 136.532C276.402 126.088 273.745 117.15 272.776 116.901C272.776 116.901 265.192 108.551 254.538 108.048C254.538 108.048 260.752 105.462 271.243 113.549C271.243 113.549 272.13 109.457 268.176 104.611C264.223 99.7659 258.09 89.5756 251.39 88.4923C251.39 88.4923 260.752 87.9041 268.176 100.435C268.176 100.435 270.92 102.271 271.161 97.595C271.402 92.9188 273.017 87.0704 273.017 87.0704C273.017 87.0704 275.278 97.8447 270.515 102.69C270.515 102.69 279.636 114.963 279.231 128.754C279.231 128.754 282.056 135.017 283.107 127.667C283.107 127.667 283.712 117.544 284.926 108.958C285.417 105.496 285.212 101.968 284.326 98.5924C283.44 95.2169 281.89 92.0667 279.775 89.3386C277.76 86.7445 276.353 84.2181 277.134 82.8935L287.707 95.9234C287.707 95.9234 296.582 74.6245 303.038 70.0287C309.493 65.4329 310.303 64.4342 310.303 64.4342L299.91 77.0493L312.993 72.2885L299.91 78.5559C299.91 78.5559 293.86 83.6341 290.389 97.5992C286.918 111.564 286.595 120.235 286.595 120.235C286.595 120.235 305.225 104.98 308.79 105.462L296.726 114.903C293.444 117.472 290.734 120.739 288.777 124.485C286.82 128.231 285.664 132.368 285.384 136.617C285.384 136.617 308.688 130.434 314.359 129.266L324.988 117.988L316.938 128.678L333.562 128.428L343.088 121.412C343.088 121.412 335.581 127.929 336.297 128.348C337.012 128.767 348.002 129.266 348.002 129.266C348.002 129.266 320.078 129.101 317.012 131.187C313.946 133.274 307.085 134.027 307.085 134.027L326.865 137.142L303.3 135.385C303.3 135.385 285.466 138.729 284.493 144.492C284.493 144.492 288.128 154.302 290.548 158.191C292.555 161.42 296.599 171.889 297.404 181.077C298.21 190.264 299.342 204.382 296.276 212.985C293.21 221.588 292.081 226.527 293.614 229.108C295.147 231.69 296.599 235.033 291.595 235.706C286.59 236.379 264.64 235.371 264.64 235.371C264.64 235.371 257.943 236.721 259.239 231.609Z" fill="#DEA3A2"/>
                </g>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="451" height="353" fill="white"/>
                </clipPath>
                </defs>
            </svg>*/}
            </div> 
            <div className="contain-paydetails animate__animated animate__rubberBand">
                
                <Grid>
                    <h2 className="head-pay animate__animated animate__delay-1s animate__flip" >Payment is Successfully Done</h2>
                    {/* <Paper className="booking-paper payment-paper  " style={{position:"relative"}}> */}
                        <svg className="animate__animated animate__delay-1s animate__tada animate__bounceIn" width="352" height="355" viewBox="0 0 352 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="animate__animated " d="M176.647 322.835L170.031 326.053L154.483 302.039L164.247 297.289L176.647 322.835Z" fill="#A0616A"/>
                            <path className="animate__animated " d="M164.388 326.46L177.146 320.253L181.05 328.295L160.258 338.41C159.746 337.354 159.446 336.207 159.376 335.035C159.306 333.863 159.467 332.688 159.851 331.579C160.234 330.469 160.832 329.446 161.611 328.568C162.389 327.689 163.333 326.973 164.388 326.46V326.46Z" fill="#2F2E41"/>
                            <path className="animate__animated " d="M163.447 322.207C163.233 322.207 163.02 322.182 162.811 322.132C162.413 322.037 162.041 321.855 161.721 321.599C161.4 321.344 161.139 321.022 160.956 320.656L143.204 285.431C142.914 284.849 142.826 284.187 142.954 283.55C143.082 282.912 143.42 282.336 143.913 281.912L153.799 273.588C154.132 273.303 154.528 273.102 154.955 273.003C155.382 272.904 155.826 272.909 156.251 273.017C156.684 273.126 157.085 273.337 157.42 273.633C157.755 273.929 158.014 274.302 158.176 274.719L173.35 312.863C173.588 313.455 173.623 314.109 173.451 314.723C173.279 315.337 172.909 315.877 172.398 316.258L165.09 321.663C164.615 322.016 164.039 322.206 163.447 322.207V322.207Z" fill="#2F2E41"/>
                            <path className="animate__animated " d="M157.144 339.777L150.366 342.636L136.123 317.824L146.126 313.604L157.144 339.777Z" fill="#A0616A"/>
                            <path className="animate__animated " d="M144.709 342.74L157.78 337.225L161.249 345.465L139.947 354.452C139.491 353.37 139.253 352.209 139.246 351.035C139.239 349.86 139.463 348.696 139.905 347.609C140.347 346.521 140.999 345.532 141.823 344.696C142.647 343.861 143.628 343.196 144.709 342.74Z" fill="#2F2E41"/>
                            <path className="animate__animated " d="M146.345 339.697C145.868 339.697 145.399 339.571 144.987 339.33C144.575 339.089 144.234 338.743 144 338.327C141.532 333.951 134.851 321.789 126.123 303.394C115.765 281.563 138.708 257.367 143.412 252.738C143.624 252.529 143.789 252.277 143.896 251.999C144.003 251.721 144.049 251.424 144.032 251.126L143.013 232.764C142.975 232.098 143.185 231.44 143.603 230.92C144.022 230.399 144.618 230.053 145.277 229.947L172.367 225.548C172.835 225.473 173.315 225.522 173.758 225.691C174.201 225.859 174.593 226.14 174.895 226.506C179.472 232.068 181.438 238.05 180.739 244.289C179.312 257.026 167.327 266.642 165.965 267.697C165.909 267.74 165.856 267.785 165.806 267.834L141.283 291.241C140.977 291.532 140.765 291.909 140.677 292.322C140.588 292.735 140.627 293.165 140.788 293.556L155.958 330.834C156.188 331.395 156.222 332.017 156.055 332.599C155.888 333.182 155.53 333.691 155.038 334.045L147.929 339.185C147.468 339.518 146.914 339.697 146.345 339.697Z" fill="#2F2E41"/>
                            <path className="animate__animated " d="M122.611 213.432C122.004 213.433 121.415 213.23 120.938 212.855L99.0786 195.657C98.8747 195.729 98.6671 195.79 98.4568 195.84C97.1862 196.139 95.8556 196.054 94.6333 195.596C93.4109 195.138 92.3517 194.327 91.5895 193.267C90.8274 192.206 90.3965 190.943 90.3515 189.637C90.3065 188.331 90.6493 187.041 91.3365 185.93C92.0238 184.819 93.0246 183.937 94.2125 183.396C95.4005 182.855 96.722 182.678 98.0102 182.889C99.2983 183.099 100.495 183.687 101.449 184.579C102.404 185.47 103.072 186.625 103.371 187.897V187.897C103.437 188.184 103.483 188.475 103.508 188.769L122.195 202.36L129.338 195.028L136.365 204.237L124.177 212.933C123.719 213.259 123.172 213.433 122.611 213.432V213.432Z" fill="#A0616A"/>
                            <path className="animate__animated " d="M143.561 169.587C151.7 169.587 158.297 162.983 158.297 154.835C158.297 146.688 151.7 140.083 143.561 140.083C135.423 140.083 128.826 146.688 128.826 154.835C128.826 162.983 135.423 169.587 143.561 169.587Z" fill="#A0616A"/>
                            <path className="animate__animated " d="M150.519 241.828C149.32 241.838 148.131 241.625 147.01 241.2C145.338 240.55 143.941 239.345 143.05 237.788C138.499 229.838 128.689 205.203 137.825 186.91C143.977 174.593 150.782 171.664 155.407 171.376C159.678 171.113 160.505 172.059 161.932 175.905C162.723 178.038 164.262 181.088 166.044 184.619C172.441 197.295 182.108 216.452 174.019 225.979C165.285 236.266 156.956 241.828 150.519 241.828Z" fill="#6C63FF"/>
                            <path className="animate__animated " d="M138.583 207.094C138.151 207.094 137.732 206.951 137.389 206.689L125.903 197.914C125.677 197.742 125.491 197.522 125.358 197.271C125.225 197.02 125.147 196.743 125.131 196.459C125.115 196.175 125.16 195.891 125.263 195.626C125.367 195.362 125.526 195.122 125.731 194.925L136.77 184.28C137.521 183.556 138.486 183.097 139.521 182.973C140.556 182.848 141.603 183.064 142.503 183.588C143.404 184.113 144.11 184.917 144.513 185.879C144.916 186.841 144.996 187.908 144.739 188.919L140.494 205.607C140.386 206.033 140.139 206.409 139.793 206.679C139.447 206.948 139.021 207.094 138.583 207.094V207.094Z" fill="#6C63FF"/>
                            <path className="animate__animated " d="M149.114 231.261C147.689 231.255 146.303 230.788 145.165 229.929C144.026 229.071 143.194 227.868 142.793 226.498C142.534 225.604 142.466 224.666 142.594 223.744C142.722 222.821 143.043 221.937 143.536 221.148C144.029 220.358 144.684 219.682 145.456 219.164C146.228 218.645 147.101 218.296 148.018 218.139H148.018C148.309 218.091 148.602 218.063 148.896 218.056L168.391 193.951L161.881 186.93L171.493 180.474L179.415 193.187C179.722 193.683 179.861 194.266 179.811 194.848C179.761 195.43 179.525 195.981 179.138 196.418L155.491 222.905C155.551 223.113 155.599 223.324 155.636 223.538C155.793 224.455 155.754 225.396 155.523 226.297C155.291 227.199 154.871 228.042 154.292 228.77C153.712 229.498 152.986 230.095 152.159 230.522C151.333 230.95 150.426 231.198 149.497 231.249C149.369 231.257 149.241 231.261 149.114 231.261Z" fill="#A0616A"/>
                            <path className="animate__animated " d="M162.104 192.929C161.767 192.928 161.437 192.842 161.143 192.678C160.849 192.514 160.603 192.277 160.426 191.991L152.383 178.929C151.87 178.092 151.625 177.117 151.681 176.137C151.738 175.156 152.092 174.217 152.697 173.443V173.443C153.381 172.579 154.341 171.976 155.417 171.735C156.492 171.494 157.618 171.63 158.605 172.12L173.991 179.821C174.282 179.967 174.533 180.183 174.72 180.449C174.908 180.716 175.027 181.024 175.066 181.348C175.105 181.672 175.063 182 174.945 182.304C174.826 182.607 174.634 182.877 174.386 183.088L163.38 192.458C163.024 192.762 162.571 192.928 162.104 192.929V192.929Z" fill="#6C63FF"/>
                            <path className="animate__animated " d="M131.559 170.236L141.901 163.859L141.144 162.629L131.408 168.633C131.152 167.986 130.672 167.454 130.055 167.133C129.439 166.813 128.728 166.726 128.052 166.888C127.377 167.051 126.783 167.452 126.379 168.018C125.975 168.584 125.789 169.276 125.855 169.968C125.92 170.661 126.233 171.306 126.736 171.786C127.239 172.266 127.898 172.548 128.591 172.58C129.285 172.613 129.967 172.393 130.513 171.963C131.058 171.532 131.43 170.919 131.56 170.236L131.559 170.236Z" fill="#3F3D56"/>
                            <path className="animate__animated " d="M153.782 132.05C153.782 132.05 146.875 138.842 131.881 140.986C116.887 143.131 128.668 166.718 128.668 166.718C128.668 166.718 124.384 158.141 132.952 150.636C141.52 143.131 153.782 141.7 153.782 132.05Z" fill="#2F2E41"/>
                            <path className="animate__animated " d="M146.44 127.245C146.44 127.245 150.724 142.256 157.15 144.4C163.576 146.544 160.363 169.06 149.653 171.204C149.653 171.204 158.756 158.874 153.402 149.225C148.047 139.575 144.834 132.07 146.44 127.245Z" fill="#2F2E41"/>
                            <path className="animate__animated " d="M156.428 138.337C156.361 138.323 156.296 138.305 156.232 138.283L139.441 132.544C139.171 132.451 138.928 132.289 138.739 132.075C138.549 131.86 138.418 131.6 138.359 131.319C138.301 131.039 138.316 130.748 138.403 130.475C138.49 130.202 138.647 129.957 138.858 129.763L152.313 117.387C152.53 117.187 152.797 117.049 153.085 116.988C153.374 116.926 153.674 116.943 153.953 117.036C154.233 117.13 154.483 117.297 154.676 117.52C154.87 117.743 155 118.014 155.053 118.304L158.389 136.42C158.438 136.686 158.421 136.961 158.339 137.219C158.257 137.478 158.113 137.712 157.919 137.901C157.725 138.091 157.488 138.23 157.228 138.306C156.967 138.382 156.693 138.392 156.428 138.337V138.337Z" fill="#6C63FF"/>
                            <path className="animate__animated " d="M148.629 121.224L155.525 122.693L155.151 120.663L150.352 119.64L148.629 121.224Z" fill="#E6E6E6"/>
                            <path className="animate__animated " d="M147.195 122.544L155.837 124.385L156.211 126.415L145.472 124.127L147.195 122.544Z" fill="#E6E6E6"/>
                            <path className="animate__animated " d="M145.905 107.968L148.106 114.781C148.173 115.009 148.327 115.202 148.533 115.319C148.739 115.436 148.983 115.469 149.213 115.411C149.441 115.345 149.635 115.192 149.753 114.985C149.87 114.778 149.902 114.533 149.841 114.302L147.641 107.489C147.573 107.261 147.42 107.069 147.214 106.951C147.008 106.834 146.764 106.801 146.534 106.86C146.305 106.925 146.111 107.078 145.994 107.285C145.876 107.492 145.845 107.737 145.905 107.968V107.968Z" fill="#CCCCCC"/>
                            <path className="animate__animated " d="M156.592 105.656L154.495 112.791C154.168 113.905 155.904 114.381 156.231 113.27L158.327 106.135C158.655 105.02 156.919 104.544 156.592 105.656Z" fill="#CCCCCC"/>
                            <path className="animate__animated " d="M164.348 112.188L159.164 117.514C158.354 118.347 159.666 119.58 160.474 118.75L165.658 113.424C166.468 112.592 165.156 111.358 164.348 112.188V112.188Z" fill="#CCCCCC"/>
                            <path className="animate__animated " d="M145.77 159.957C155.828 159.957 163.981 151.794 163.981 141.726C163.981 131.657 155.828 123.495 145.77 123.495C135.713 123.495 127.559 131.657 127.559 141.726C127.559 151.794 135.713 159.957 145.77 159.957Z" fill="#2F2E41"/>
                            <path className="animate__animated " d="M13.2456 132.038C22.7338 119.327 40.0994 116.259 48.7288 122.715C57.3582 129.17 59.3404 146.712 49.8522 159.423C41.0697 171.19 25.158 174.399 16.3939 169.99C16.4222 170.128 16.424 170.27 16.3991 170.408L15.905 172.854C15.8673 173.04 15.7827 173.214 15.6591 173.358C15.5355 173.503 15.3771 173.613 15.1989 173.679C15.0207 173.745 14.8286 173.764 14.6409 173.735C14.4532 173.706 14.276 173.629 14.1263 173.512L9.94217 170.239C9.79245 170.122 9.6751 169.969 9.60128 169.793C9.52746 169.618 9.49963 169.427 9.52041 169.238C9.54118 169.049 9.60988 168.868 9.71999 168.713C9.8301 168.558 9.97796 168.434 10.1495 168.352L12.4002 167.281C12.4795 167.245 12.5626 167.219 12.6479 167.203C5.8925 160.053 4.44405 143.83 13.2456 132.038Z" fill="#E6E6E6"/>
                            <path className="animate__animated " d="M33.9999 127.239C29.3586 127.977 25.1774 130.471 22.3196 134.206C19.4617 137.941 18.1453 142.632 18.6419 147.31C18.7439 148.382 17.0714 148.375 16.9701 147.31C16.4916 142.267 17.9351 137.23 21.0111 133.208C24.087 129.187 28.568 126.478 33.5554 125.625C34.6078 125.446 35.06 127.059 33.9999 127.239V127.239Z" fill="white"/>
                            <path className="animate__animated " d="M252.049 311.514C259.507 299.834 256.663 284.679 248.735 279.605C240.806 274.531 225.873 278.311 218.415 289.991C211.513 300.802 213.793 314.811 220.092 320.625C219.971 320.645 219.854 320.687 219.749 320.75L217.904 321.907C217.764 321.996 217.648 322.118 217.568 322.264C217.488 322.41 217.447 322.573 217.448 322.739C217.449 322.906 217.492 323.069 217.574 323.213C217.656 323.358 217.773 323.479 217.915 323.566L221.875 325.982C222.017 326.068 222.179 326.117 222.344 326.123C222.51 326.13 222.675 326.094 222.823 326.019C222.971 325.943 223.097 325.831 223.19 325.694C223.283 325.556 223.338 325.397 223.352 325.231L223.534 323.059C223.539 322.983 223.535 322.907 223.521 322.832C231.44 326.159 245.132 322.348 252.049 311.514Z" fill="#F2F2F2"/>
                            <path className="animate__animated " d="M248.259 288.473C249.47 292.363 249.157 296.569 247.383 300.237C245.609 303.904 242.508 306.758 238.709 308.22C237.841 308.555 238.218 309.969 239.097 309.629C243.263 308.054 246.674 304.951 248.637 300.949C250.6 296.948 250.968 292.348 249.667 288.085C249.395 287.187 247.985 287.569 248.259 288.473Z" fill="white"/>
                            <path className="animate__animated " d="M299.245 42.0412C308.436 27.6472 304.932 8.9687 295.16 2.71576C285.389 -3.53718 266.984 1.12161 257.794 15.5157C249.287 28.8391 252.097 46.1048 259.859 53.2707C259.71 53.2944 259.567 53.3464 259.437 53.424L257.164 54.8506C256.99 54.9593 256.848 55.1106 256.749 55.2901C256.651 55.4695 256.6 55.6712 256.601 55.876C256.602 56.0807 256.656 56.2818 256.757 56.46C256.857 56.6382 257.002 56.7877 257.176 56.8942L262.058 59.8721C262.232 59.9786 262.431 60.0387 262.636 60.0466C262.84 60.0546 263.043 60.0101 263.225 59.9173C263.408 59.8246 263.563 59.6868 263.678 59.5169C263.792 59.347 263.861 59.1508 263.878 58.9467L264.102 56.27C264.108 56.1766 264.103 56.0828 264.086 55.9907C273.845 60.0901 290.72 55.3936 299.245 42.0412Z" fill="#E6E6E6"/>
                            <path className="animate__animated " d="M294.573 13.6456C296.066 18.4398 295.68 23.6231 293.494 28.143C291.308 32.6628 287.486 36.1804 282.804 37.9815C281.734 38.3943 282.199 40.1371 283.282 39.719C288.416 37.7775 292.62 33.9527 295.039 29.0211C297.459 24.0896 297.913 18.421 296.309 13.1665C295.974 12.0598 294.236 12.5315 294.573 13.6456V13.6456Z" fill="white"/>
                            <path className="animate__animated " d="M346.041 184.389C355.232 169.995 351.728 151.317 341.956 145.064C332.185 138.811 313.78 143.469 304.59 157.864C296.083 171.187 298.893 188.453 306.656 195.619C306.506 195.642 306.363 195.694 306.233 195.772L303.96 197.198C303.787 197.307 303.644 197.458 303.546 197.638C303.447 197.817 303.396 198.019 303.397 198.224C303.399 198.429 303.452 198.63 303.553 198.808C303.654 198.986 303.798 199.136 303.973 199.242L308.854 202.22C309.029 202.326 309.228 202.387 309.432 202.395C309.636 202.402 309.839 202.358 310.022 202.265C310.204 202.173 310.36 202.035 310.474 201.865C310.588 201.695 310.657 201.499 310.674 201.295L310.898 198.618C310.904 198.524 310.899 198.431 310.883 198.339C320.642 202.438 337.516 197.742 346.041 184.389Z" fill="#6C63FF"/>
                            <path className="animate__animated " d="M341.37 155.993C342.862 160.788 342.477 165.971 340.291 170.491C338.105 175.011 334.282 178.528 329.6 180.329C328.53 180.742 328.995 182.485 330.078 182.067C335.212 180.125 339.416 176.301 341.835 171.369C344.255 166.437 344.709 160.769 343.105 155.514C342.77 154.408 341.032 154.879 341.37 155.993V155.993Z" fill="white"/>
                            <path className="animate__animated " d="M46.221 35.1482C36.0065 21.4635 17.3115 18.1608 8.02158 25.1105C-1.26836 32.0602 -3.40234 50.9447 6.81215 64.6295C16.2669 77.2964 33.3966 80.7509 42.8316 76.0053C42.8012 76.1535 42.7993 76.3061 42.8261 76.455L43.358 79.0877C43.3986 79.2884 43.4897 79.4754 43.6227 79.6309C43.7558 79.7864 43.9263 79.9053 44.1182 79.9763C44.31 80.0473 44.5168 80.068 44.7189 80.0365C44.921 80.0049 45.1117 79.9222 45.2728 79.7962L49.7773 76.2732C49.9385 76.1471 50.0648 75.9819 50.1443 75.7932C50.2237 75.6045 50.2537 75.3987 50.2313 75.1951C50.209 74.9916 50.135 74.7972 50.0165 74.6303C49.8979 74.4634 49.7388 74.3296 49.5541 74.2417L47.131 73.088C47.0458 73.0497 46.9563 73.0215 46.8644 73.0042C54.1369 65.307 55.6963 47.8426 46.221 35.1482Z" fill="#6C63FF"/>
                            <path className="animate__animated " d="M23.878 29.9815C28.8746 30.7761 33.3758 33.4608 36.4524 37.4816C39.529 41.5023 40.9463 46.5521 40.4116 51.5887C40.3018 52.7424 42.1024 52.7348 42.2114 51.5887C42.7265 46.1601 41.1725 40.7373 37.8611 36.4077C34.5497 32.0781 29.7256 29.162 24.3565 28.244C23.2235 28.0512 22.7367 29.7873 23.878 29.9815Z" fill="white"/>
                            <path className="animate__animated " d="M5.21434 223.446C9.68026 223.727 14.0159 225.065 17.866 227.348C21.716 229.631 24.9708 232.795 27.3635 236.58C28.0341 237.653 28.9094 238.833 28.4452 240.154C28.2835 240.66 27.9549 241.097 27.5133 241.392C27.0716 241.687 26.5429 241.824 26.0136 241.78C24.645 241.613 23.7618 240.272 23.5932 238.988C23.4019 237.531 24.4286 236.388 25.6961 235.846C28.7935 234.524 31.9185 236.568 34.4415 238.199C40.1904 241.916 46.5137 245.278 53.4798 245.702C59.925 246.094 66.8365 243.564 70.4215 237.968C71.0487 236.989 69.4914 236.085 68.8673 237.059C65.312 242.608 58.1245 244.601 51.8751 243.744C48.1509 243.155 44.5548 241.933 41.2426 240.13C39.5249 239.237 37.859 238.248 36.2267 237.208C34.6735 236.123 33.0272 235.178 31.3071 234.385C28.4383 233.205 24.6407 233.297 22.6369 236.013C20.7675 238.547 22.2123 242.766 25.339 243.478C28.3021 244.153 30.898 241.364 30.2882 238.446C29.9762 236.954 28.8538 235.494 27.9851 234.274C25.3748 230.598 21.9739 227.555 18.033 225.369C14.0922 223.183 9.71171 221.91 5.21426 221.644C4.05651 221.587 4.05952 223.389 5.21426 223.446H5.21434Z" fill="#6C63FF"/>
                            <path className="animate__animated " d="M274.832 221.905C270.708 224.107 266.104 225.251 261.431 225.236C256.758 225.22 252.161 224.044 248.053 221.814C247.122 221.301 246.34 220.715 246.235 219.577C246.18 219.108 246.268 218.634 246.488 218.216C246.707 217.798 247.048 217.456 247.465 217.236C248.757 216.604 250.295 217.341 251.102 218.419C251.971 219.58 251.624 221.085 250.82 222.177C248.741 225.001 244.811 224.734 241.702 224.671C235.005 224.535 227.964 225.071 221.964 228.328C216.327 231.388 211.8 237.129 211.675 243.734C211.653 244.894 213.453 244.894 213.475 243.734C213.598 237.216 218.519 231.844 224.185 229.228C227.701 227.702 231.461 226.816 235.288 226.613C237.156 226.473 239.03 226.436 240.903 226.459C242.771 226.558 244.643 226.518 246.505 226.34C249.718 225.899 253.171 223.827 253.408 220.251C253.623 217.014 249.95 214.269 246.923 215.517C246.368 215.765 245.874 216.131 245.474 216.589C245.074 217.047 244.777 217.586 244.604 218.169C244.431 218.752 244.386 219.366 244.472 219.968C244.558 220.57 244.773 221.147 245.102 221.658C245.912 222.893 247.351 223.525 248.641 224.137C252.895 226.156 257.564 227.147 262.271 227.03C266.978 226.912 271.592 225.69 275.74 223.461C276.756 222.903 275.849 221.346 274.832 221.905V221.905Z" fill="#FF6584"/>
                            <path className="animate__animated " d="M193.523 105.068C201.62 107.856 207.29 116.073 207.771 124.532C208.015 128.826 206.998 133.79 203.799 136.88C203.091 137.631 202.207 138.193 201.228 138.515C200.249 138.837 199.204 138.91 198.19 138.726C196.423 138.342 194.58 137.135 194.278 135.22C193.986 133.369 195.249 131.84 196.781 130.997C197.651 130.525 198.606 130.233 199.591 130.14C200.576 130.046 201.569 130.152 202.512 130.452C205.01 131.23 207.126 132.898 209.143 134.507C211.111 136.142 213.204 137.619 215.403 138.926C224.077 143.927 234.359 145.338 244.057 142.858C253.755 140.377 262.101 134.201 267.316 125.648C267.949 124.621 268.529 123.565 269.057 122.479C269.565 121.442 268.014 120.528 267.503 121.57C265.215 126.301 261.937 130.484 257.892 133.835C253.847 137.186 249.129 139.628 244.058 140.993C238.988 142.359 233.684 142.617 228.505 141.749C223.326 140.882 218.394 138.91 214.044 135.967C209.854 133.157 205.837 128.328 200.388 128.294C196.376 128.268 191.55 131.305 192.578 135.875C193.046 137.954 194.801 139.451 196.725 140.172C197.759 140.555 198.865 140.707 199.964 140.617C201.063 140.527 202.13 140.196 203.087 139.649C207.337 137.26 209.192 131.958 209.545 127.35C210.238 118.296 205.125 108.905 197.092 104.661C196.098 104.138 195.065 103.693 194.002 103.33C192.904 102.952 192.433 104.692 193.523 105.068V105.068Z" fill="#E6E6E6"/>
                    </svg>
                    
                        <br />
                        <h4 className="head-sub animate__animated animate__delay-1s animate__flipInX animate__backInUp"> Your ticket ID</h4>
                        <h6 className="id-text animate__animated animate__delay-1s animate__flash " >{cookies.payment && cookies.payment}</h6>
                        
                    {/* </Paper> */}
                </Grid>
            </div>
        </div>
    )
}

export default Payment
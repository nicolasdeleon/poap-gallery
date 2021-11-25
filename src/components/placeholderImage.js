import React from "react";

export const PlaceHolderImage = ({ width = 80, height = 80 }) => (
  <svg width={ width } height={ height } viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="65" cy="65" r="65" fill="#E6EDFE"/>
    <circle cx="65" cy="65" r="58.5" fill="#E6EDFE" stroke="#D5DCF3" stroke-width="3"/>
    <path d="M27.625 62.3999C26.2463 58.6837 27.1358 59.5685 23.4 58.1528C27.1358 56.7814 26.2463 57.6662 27.625 53.95C29.0037 57.6662 28.1142 56.7814 31.85 58.1528C28.1587 59.5685 29.0482 58.6837 27.625 62.3999Z" fill="white"/>
    <path d="M90.675 31.2C89.2963 27.7697 90.1858 28.5864 86.45 27.2796C90.1858 26.0136 89.2963 26.8304 90.675 23.4C92.0537 26.8304 91.1642 26.0136 94.9 27.2796C91.2087 28.5864 92.0982 27.7697 90.675 31.2Z" fill="white"/>
    <path d="M97.175 96.2C95.7963 92.7697 96.6858 93.5864 92.95 92.2796C96.6858 91.0136 95.7963 91.8304 97.175 88.4C98.5537 91.8304 97.6642 91.0136 101.4 92.2796C97.7087 93.5864 98.5982 92.7697 97.175 96.2Z" fill="white"/>
    <path d="M113.938 82.0096C119.964 67.8846 118.469 51.6883 110.741 38.1403C103.013 24.5924 88.0504 15.3857 72.4392 13.1873" stroke="white" stroke-width="1.66" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.1738 35.1C12.6966 47.1839 9.94901 63.2153 13.9072 78.3018C17.8654 93.3883 29.9355 106.154 44.4457 112.318" stroke="white" stroke-width="1.66" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M77.5162 104C77.3625 104 77.2089 104 77.0552 104C75.2882 103.846 73.8285 102.771 73.0603 101.082C72.4457 99.6231 71.831 98.241 71.2933 96.782C70.6787 98.241 70.1409 99.6231 69.5263 101.082C68.758 102.925 67.1447 104 65.1472 104.077H65.0704C63.1497 104.077 61.5364 103.079 60.6913 101.236C60.3071 100.314 59.8462 99.4696 59.4621 98.5481C59.3084 98.1642 59.0779 97.7802 58.9243 97.3963C57.6182 97.857 56.2354 98.3177 54.7757 98.7785C54.2379 98.932 53.7001 99.0856 53.1623 99.0856C51.8563 99.0856 50.6271 98.5481 49.7052 97.5499C48.3991 96.0909 48.0918 94.248 48.8601 92.4819C49.9356 89.9479 51.0112 87.4139 52.0099 84.8799C52.4709 83.7281 52.9318 82.5763 53.4696 81.5013C53.0855 80.887 52.7782 80.3495 52.4709 79.7352C52.2404 79.2744 51.9331 78.8137 51.7026 78.4298C51.549 78.1226 51.0112 77.8155 50.4734 77.5083C50.3198 77.4315 50.1661 77.3547 49.9356 77.2012C49.1674 76.8172 48.3223 76.3565 47.4772 75.7422C45.6334 74.36 44.5578 72.3635 44.481 69.9831V69.7528C44.481 69.0617 44.4042 68.2938 44.481 67.5259C44.5578 66.4509 44.3273 65.5295 43.6359 64.5312C43.1749 63.9169 42.7908 63.2258 42.4067 62.3812C41.3311 60.1543 41.3311 57.8507 42.4067 55.6239C42.7908 54.7792 43.3286 54.0113 43.7127 53.3202L44.0969 52.9363C44.5578 52.2452 44.7115 51.6309 44.7115 51.0166C44.7115 50.4023 44.7115 49.788 44.7115 49.2505C44.7115 48.9433 44.7115 48.713 44.7115 48.4058C44.7115 45.5647 46.0175 43.1843 48.5528 41.6485C49.1674 41.2646 49.8588 40.8806 50.6271 40.4967C51.3953 40.1128 52.0099 39.5753 52.3941 38.7306C52.9318 37.5788 53.5465 36.427 54.4684 35.3519C55.8512 33.7394 57.6951 32.8947 59.923 32.818H60.2303C60.5376 32.818 60.8449 32.818 61.1522 32.818C61.5364 32.818 61.9205 32.818 62.3046 32.8947C62.4583 32.8947 62.6119 32.8947 62.6888 32.8947C63.5338 32.8947 64.3789 32.5876 65.3008 31.9733C65.9154 31.4358 66.6069 31.0518 67.1447 30.8215C68.297 30.2072 69.4494 29.9 70.6787 29.9C71.9079 29.9 73.0603 30.2072 74.2127 30.7447C75.1346 31.2054 75.9797 31.7429 76.6711 32.2037C77.2857 32.5876 77.9003 32.818 78.5149 32.818C78.5917 32.818 78.5917 32.818 78.6686 32.818C79.1295 32.818 79.5905 32.818 79.9746 32.818H80.8965C80.9733 32.818 81.2806 32.818 81.2806 32.818C84.1232 32.818 86.428 34.2001 87.8877 36.7341C88.2718 37.3484 88.6559 38.1163 89.0401 38.8842C89.4242 39.5753 89.8852 40.1128 90.6534 40.4967C91.4217 40.8806 92.4204 41.4182 93.3423 42.0325C95.4935 43.4914 96.569 45.6415 96.6459 48.2523C96.6459 48.4058 96.6459 48.5594 96.6459 48.713C96.6459 49.2505 96.6459 49.8648 96.6459 50.4791C96.569 51.5541 96.7995 52.4756 97.4909 53.4738C97.8751 54.0881 98.2592 54.7024 98.4897 55.2399V55.3167C99.8725 57.8507 99.7957 60.6151 98.336 63.2258C97.9519 63.9169 97.5678 64.5312 97.1836 65.2223L96.9532 65.683C96.7227 65.9902 96.6459 66.3741 96.6459 66.7581C96.6459 67.2188 96.6459 67.6027 96.6459 68.0634C96.6459 68.601 96.6459 69.0617 96.6459 69.5992C96.7227 72.4403 95.3398 74.8975 92.8814 76.3565C92.1899 76.7404 91.4985 77.2012 90.6534 77.5851C89.962 77.969 89.501 78.353 89.2706 78.8905C89.0401 79.3512 88.7328 79.8119 88.5023 80.3495L88.8864 81.1941C89.4242 82.5763 90.0388 83.8817 90.5766 85.2639C90.8839 86.0317 91.268 86.7996 91.5753 87.6443C92.1899 89.18 92.8814 90.7926 93.5728 92.3283C94.7252 95.0159 93.5728 96.8588 92.8046 97.7034C91.8826 98.7017 90.6534 99.2392 89.3474 99.2392C88.7328 99.2392 88.1182 99.0856 87.4267 98.932C86.6585 98.6249 85.8902 98.3945 85.1219 98.0874C84.661 97.9338 84.1232 97.7802 83.6623 97.5499C83.0476 98.7785 82.5099 100.084 81.8184 101.543C81.0502 103.079 79.4368 104 77.5162 104Z" fill="#D5DCF3"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.6662 101.4C71.5125 101.4 71.3589 101.4 71.2052 101.4C69.4382 101.246 67.9785 100.171 67.2103 98.4821C66.5956 97.0232 65.981 95.641 65.4433 94.182C64.8286 95.641 64.2909 97.0232 63.6763 98.4821C62.908 100.325 61.2947 101.4 59.2972 101.477H59.2203C57.2997 101.477 55.6864 100.479 54.8413 98.6357C54.4571 97.7142 53.9962 96.8696 53.612 95.9481C53.4584 95.5642 53.2279 95.1803 53.0743 94.7963C51.7682 95.257 50.3854 95.7178 48.9257 96.1785C48.3879 96.3321 47.8501 96.4856 47.3123 96.4856C46.0063 96.4856 44.7771 95.9481 43.8551 94.9499C42.5491 93.4909 42.2418 91.648 43.0101 89.8819C44.0856 87.3479 45.1612 84.8139 46.1599 82.2799C46.6209 81.1281 47.0818 79.9763 47.6196 78.9013C47.2355 78.287 46.9282 77.7495 46.6209 77.1352C46.3904 76.6744 46.0831 76.2137 45.8526 75.8298C45.699 75.5226 45.1612 75.2155 44.6234 74.9083C44.4698 74.8316 44.3161 74.7548 44.0856 74.6012C43.3174 74.2172 42.4723 73.7565 41.6272 73.1422C39.7834 71.76 38.7078 69.7636 38.631 67.3832V67.1528C38.631 66.4617 38.5541 65.6938 38.631 64.926C38.7078 63.8509 38.4773 62.9295 37.7859 61.9312C37.3249 61.3169 36.9408 60.6259 36.5567 59.7812C35.4811 57.5543 35.4811 55.2507 36.5567 53.0239C36.9408 52.1792 37.4786 51.4113 37.8627 50.7203L38.2468 50.3363C38.7078 49.6452 38.8615 49.0309 38.8615 48.4166C38.8615 47.8023 38.8615 47.188 38.8615 46.6505C38.8615 46.3434 38.8615 46.113 38.8615 45.8059C38.8615 42.9647 40.1675 40.5843 42.7028 39.0485C43.3174 38.6646 44.0088 38.2807 44.7771 37.8967C45.5453 37.5128 46.1599 36.9753 46.5441 36.1306C47.0818 34.9788 47.6964 33.827 48.6184 32.752C50.0012 31.1394 51.8451 30.2948 54.073 30.218H54.3803C54.6876 30.218 54.9949 30.218 55.3022 30.218C55.6864 30.218 56.0705 30.218 56.4546 30.2948C56.6083 30.2948 56.7619 30.2948 56.8387 30.2948C57.6838 30.2948 58.5289 29.9876 59.4508 29.3733C60.0654 28.8358 60.7569 28.4519 61.2947 28.2215C62.447 27.6072 63.5994 27.3 64.8286 27.3C66.0579 27.3 67.2103 27.6072 68.3626 28.1447C69.2846 28.6054 70.1296 29.143 70.8211 29.6037C71.4357 29.9876 72.0503 30.218 72.6649 30.218C72.7417 30.218 72.7417 30.218 72.8186 30.218C73.2795 30.218 73.7405 30.218 74.1246 30.218H75.0465C75.1233 30.218 75.4306 30.218 75.4306 30.218C78.2732 30.218 80.578 31.6002 82.0377 34.1341C82.4218 34.7484 82.8059 35.5163 83.1901 36.2842C83.5742 36.9753 84.0352 37.5128 84.8034 37.8967C85.5717 38.2807 86.5704 38.8182 87.4923 39.4325C89.6435 40.8914 90.719 43.0415 90.7958 45.6523C90.7958 45.8059 90.7958 45.9594 90.7958 46.113C90.7958 46.6505 90.7958 47.2648 90.7958 47.8791C90.719 48.9541 90.9495 49.8756 91.6409 50.8738C92.0251 51.4881 92.4092 52.1024 92.6397 52.6399V52.7167C94.0225 55.2507 93.9457 58.0151 92.486 60.6259C92.1019 61.3169 91.7178 61.9312 91.3336 62.6223L91.1031 63.083C90.8727 63.3902 90.7958 63.7741 90.7958 64.1581C90.7958 64.6188 90.7958 65.0027 90.7958 65.4635C90.7958 66.001 90.7958 66.4617 90.7958 66.9992C90.8727 69.8404 89.4898 72.2976 87.0314 73.7565C86.3399 74.1405 85.6485 74.6012 84.8034 74.9851C84.112 75.3691 83.651 75.753 83.4205 76.2905C83.1901 76.7512 82.8828 77.212 82.6523 77.7495L83.0364 78.5941C83.5742 79.9763 84.1888 81.2817 84.7266 82.6639C85.0339 83.4318 85.418 84.1996 85.7253 85.0443C86.3399 86.58 87.0314 88.1926 87.7228 89.7283C88.8752 92.4159 87.7228 94.2588 86.9545 95.1035C86.0326 96.1017 84.8034 96.6392 83.4974 96.6392C82.8828 96.6392 82.2682 96.4856 81.5767 96.3321C80.8085 96.0249 80.0402 95.7946 79.2719 95.4874C78.811 95.3338 78.2732 95.1803 77.8122 94.9499C77.1976 96.1785 76.6599 97.4839 75.9684 98.9428C75.2002 100.479 73.5868 101.4 71.6662 101.4Z" fill="#FEFEFE"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M79.5024 77.5959C80.3475 79.6692 81.2694 81.7425 82.1145 83.8157C83.1132 86.1962 84.112 88.5766 85.1107 90.8802C85.418 91.7249 85.4949 92.4927 84.8802 93.107C84.2656 93.7981 83.4974 93.7981 82.7291 93.491C80.8085 92.7999 78.8878 92.1856 76.9672 91.4177C76.5062 91.2641 76.2757 91.3409 76.1221 91.8016C75.277 93.7981 74.2782 95.7178 73.4332 97.6375C73.049 98.4054 72.4344 98.7125 71.5893 98.6357C70.8979 98.559 70.3601 98.175 70.1296 97.4839C68.7468 94.0285 67.2871 90.6498 65.8274 87.1944C65.7506 87.0408 65.6737 86.8872 65.5201 86.6569C65.0591 87.8087 64.5213 88.8837 64.1372 90.0355C63.1385 92.5695 62.0629 95.0267 61.0642 97.4839C60.7569 98.2518 60.2191 98.6357 59.374 98.6357C58.5289 98.6357 57.9911 98.2518 57.6838 97.4839C56.7619 95.5642 55.84 93.6446 54.9181 91.7249C54.7644 91.3409 54.6108 91.3409 54.2267 91.4177C52.1524 92.1088 50.1549 92.7999 48.0806 93.491C47.3891 93.7213 46.6977 93.6445 46.1599 93.0302C45.6221 92.4159 45.5453 91.8016 45.8526 91.0338C47.5428 87.0408 49.233 83.0479 50.8463 79.0549C50.9231 78.9013 51 78.671 51.1536 78.5174C51.3841 78.671 51.6146 78.7478 51.8451 78.9781C51 80.9746 50.1549 83.0479 49.3866 84.9676C48.5415 87.0408 47.6964 89.1141 46.7745 91.1106C46.6209 91.5713 46.5441 92.032 46.9282 92.416C47.3123 92.7999 47.6964 92.6463 48.0806 92.4927C50.2317 91.7249 52.3828 91.0338 54.4571 90.2659C54.9949 90.0355 55.3022 90.1891 55.5327 90.7266C56.4546 92.7999 57.4533 94.8731 58.4521 96.9464C58.6057 97.3304 58.913 97.6375 59.374 97.6375C59.835 97.6375 60.0654 97.3304 60.2959 96.9464C61.8324 93.3374 63.2921 89.6516 64.9055 85.9658C65.136 85.4283 65.136 84.9676 64.7518 84.5068C64.5982 84.5836 64.5982 84.7372 64.5213 84.8908C62.9848 88.4998 61.5251 92.1088 59.9886 95.7178C59.9118 95.9482 59.835 96.2553 59.5277 96.2553C59.1435 96.2553 59.1435 95.9482 58.9899 95.641C57.9911 93.5678 56.9156 91.4945 55.9168 89.4212C55.7632 89.0373 55.5327 88.9605 55.1486 89.1141C53.9962 89.498 52.9206 89.882 51.7682 90.2659C50.6158 90.6498 49.4634 90.957 48.3111 91.4177C48.1574 91.4945 47.9269 91.5713 47.7733 91.3409C47.6196 91.1873 47.6964 91.0338 47.7733 90.8802C47.8501 90.7266 47.9269 90.573 47.9269 90.4963C49.4634 86.8105 51 83.0479 52.5365 79.3621C53.8425 79.6692 55.1486 79.6692 56.4546 79.5924C58.1448 79.4388 59.6813 80.0532 61.0642 80.9746C62.2166 81.7425 63.369 82.5104 64.8286 82.5104C66.9029 87.2712 68.9004 92.1088 70.8211 96.9464C70.9747 97.4071 71.2052 97.7911 71.743 97.7911C72.2808 97.7911 72.5113 97.4071 72.7417 96.9464C73.6636 94.9499 74.5856 93.0302 75.5075 91.0338C75.9684 90.1123 75.7379 90.0355 76.8903 90.4963C78.9646 91.1874 81.0389 91.8784 83.0364 92.6463C83.4974 92.7999 83.8815 92.7999 84.2656 92.4927C84.6498 92.1088 84.4961 91.7249 84.3425 91.2641C82.4986 86.964 80.7316 82.5871 78.8878 78.287C79.0415 78.0567 79.1951 77.7495 79.5024 77.5959Z" fill="#D5DCF3"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M56.3009 34.1342C55.379 34.1342 54.7644 34.1342 54.073 34.1342C52.9206 34.211 51.9987 34.5949 51.3073 35.5931C50.7695 36.361 50.3085 37.1289 49.9244 37.9735C49.1561 39.4325 48.0806 40.5843 46.6209 41.3522C45.9294 41.6593 45.3916 42.0433 44.7002 42.4272C43.3942 43.1951 42.7027 44.3469 42.7796 45.8827C42.7796 46.8809 42.7796 47.8791 42.7796 48.8006C42.7796 49.8756 42.4723 50.8739 41.9345 51.8721C41.4735 52.64 41.0894 53.4078 40.6284 54.0989C39.7065 55.6347 39.6297 57.1704 40.6284 58.7062C40.8589 59.0901 41.0126 59.4741 41.3199 59.7812C42.4723 61.3938 43.01 63.1599 42.8564 65.1563C42.7796 65.7706 42.8564 66.3849 42.8564 66.9992C42.8564 68.3046 43.3173 69.3797 44.4697 70.1475C44.8539 70.4547 45.3148 70.685 45.7758 70.9154C47.8501 71.8369 49.4634 73.2958 50.3853 75.4459C50.539 75.9066 50.8463 76.2905 51.0768 76.6745C51.845 77.9799 52.9974 78.5942 54.4571 78.5942C55.4559 78.5942 56.4546 78.5942 57.5302 78.5942C58.6057 78.5942 59.6045 78.9013 60.5264 79.4388C61.2946 79.8996 61.9861 80.2835 62.7543 80.7442C64.214 81.6657 65.6737 81.6657 67.1334 80.7442C67.6712 80.4371 68.2858 80.0531 68.8236 79.746C70.0528 78.9013 71.4357 78.5174 72.9722 78.5942C73.8173 78.671 74.6624 78.5942 75.4306 78.5942C76.9671 78.5942 78.1195 77.9799 78.811 76.6745C79.1951 76.0602 79.5024 75.4459 79.8865 74.7548C80.6548 73.2958 81.7304 72.144 83.1901 71.3761C83.8815 71.069 84.4961 70.685 85.1875 70.3011C86.2631 69.6868 86.9545 68.8421 87.0314 67.5368C87.185 66.3849 87.0314 65.1563 87.0314 64.0045C87.0314 62.7759 87.3387 61.7009 87.9533 60.7027C88.4142 59.9348 88.7984 59.2437 89.2593 58.4758C90.1044 57.0936 90.1044 55.7115 89.3361 54.3293C88.952 53.715 88.6447 53.1007 88.1837 52.4864C87.3387 51.181 86.8777 49.7988 86.9545 48.2631C87.0314 47.4184 86.9545 46.5738 86.9545 45.7291C86.9545 44.4237 86.4936 43.3487 85.418 42.6576C84.6497 42.1201 83.8815 41.7361 83.0364 41.2754C81.6535 40.5843 80.578 39.4325 79.8097 38.0503C79.4256 37.3592 79.0414 36.6682 78.6573 35.9771C78.0427 34.9788 77.1976 34.2877 75.8916 34.211C75.4306 34.211 74.8928 34.211 74.4319 34.211C73.4331 34.211 72.3576 34.2877 71.3588 34.1342C70.1296 33.9806 68.9772 33.2895 67.9785 32.5984C65.8274 30.9859 63.7531 30.9859 61.6019 32.5984C59.9886 33.7502 58.1448 34.4413 56.3009 34.1342ZM51.6914 79.0549C51.5377 78.8245 51.3073 78.671 50.9999 78.5942C49.8476 77.2888 49.2329 75.753 48.311 74.2941C47.7733 73.3726 46.9282 72.8351 46.0063 72.3744C45.1612 71.9137 44.2393 71.4529 43.471 70.8386C42.3186 69.994 41.704 68.7654 41.6272 67.3064C41.6272 66.6153 41.5503 65.9242 41.6272 65.2331C41.7808 63.3902 41.3199 61.7777 40.2443 60.2419C39.8602 59.7044 39.5529 59.0901 39.2456 58.399C38.5541 57.0169 38.5541 55.5579 39.2456 54.1757C39.7833 53.4078 40.2443 52.64 40.7053 51.8721C41.3967 50.7203 41.8577 49.4917 41.7808 48.1863C41.704 47.3416 41.7808 46.497 41.7808 45.6523C41.7808 43.8094 42.6259 42.4272 44.1624 41.429C44.777 41.045 45.3916 40.7379 46.0063 40.354C47.3891 39.6629 48.3879 38.6646 49.0793 37.2057C49.5403 36.2074 50.078 35.286 50.7695 34.4413C51.6146 33.4431 52.7669 32.9824 54.073 32.9056C54.7644 32.9056 55.4559 32.8288 56.0705 32.9056C57.9143 33.0591 59.6045 32.5216 61.141 31.4466C61.6788 31.0627 62.2165 30.8323 62.7543 30.5252C64.214 29.7573 65.6737 29.8341 67.1334 30.5252C67.9017 30.9091 68.5931 31.3698 69.2845 31.8305C70.4369 32.5984 71.6661 32.9824 73.049 32.9056C73.8941 32.9056 74.7392 32.9056 75.5075 32.9056C77.3513 32.9056 78.7341 33.7502 79.6561 35.3628C80.0402 35.9771 80.4243 36.6682 80.7316 37.3592C81.3462 38.6646 82.345 39.5861 83.651 40.2772C84.4961 40.6611 85.2644 41.1218 86.0326 41.6593C87.3387 42.5808 88.0301 43.8862 88.0301 45.4987C88.0301 46.113 88.1069 46.7273 88.0301 47.4184C87.8764 49.2613 88.3374 50.9506 89.413 52.4096C89.7203 52.8703 90.0276 53.4078 90.258 53.9454C91.18 55.6347 91.1031 57.324 90.1044 58.9366C89.6434 59.7812 89.1057 60.5491 88.6447 61.3938C88.1837 62.2384 87.9533 63.0831 87.9533 64.0813C87.9533 65.0796 87.9533 66.001 87.9533 66.9992C87.9533 68.8421 87.185 70.2243 85.5717 71.2226C84.8802 71.6065 84.1888 71.9904 83.4974 72.3744C82.345 72.9887 81.4231 73.7565 80.8084 74.9084C80.3475 75.753 79.8865 76.6745 79.4256 77.5959C79.1183 77.7495 79.0414 78.0567 78.811 78.287C78.5805 78.4406 78.4268 78.5942 78.1964 78.8245C77.1976 79.5156 76.0452 79.6692 74.816 79.6692C73.9709 79.6692 73.1258 79.6692 72.2039 79.6692C71.5893 79.6692 71.0515 79.8228 70.5138 80.0531C68.8236 80.821 67.3639 82.1264 65.5969 82.6639C65.2896 82.5871 64.9823 82.6639 64.675 82.6639C63.2153 82.6639 62.0629 81.896 60.9105 81.1282C59.5276 80.2067 57.9911 79.5924 56.3009 79.746C54.9949 79.8228 53.6889 79.8996 52.3828 79.5156C52.2292 79.2853 51.9987 79.1317 51.6914 79.0549Z" fill="#C4CAE8"/>
    <path opacity="0.1" d="M62.4351 80.9722L71.2709 97.0111C71.3266 97.2238 71.6542 97.5898 72.0866 97.4713C72.3027 97.4121 72.7351 97.2936 72.8955 97.0218L75.1843 91.6085C75.0729 91.1833 75.0172 90.9706 74.9057 90.5453C74.5225 89.9667 74.1392 89.388 73.7559 88.8093C72.9893 87.652 72.0622 86.7665 70.919 85.9403C69.7758 85.114 68.2559 84.6189 67.1127 83.7927C65.6419 82.6004 64.7082 80.8051 64.911 78.9263L63.0769 79.8847C62.4284 80.0625 62.3237 80.547 62.4351 80.9722ZM46.5968 92.1497C46.4364 92.4216 46.5478 92.8469 46.8197 93.0003C47.0915 93.1537 47.3634 93.3071 47.7957 93.1886L49.9017 92.3836C50.4388 91.7806 51.192 91.1184 51.7291 90.5154C53.668 89.0724 55.8787 87.7829 56.4581 85.5729C56.6119 84.3913 56.5495 83.2688 56.271 82.2057C55.8744 79.8074 55.4777 77.4091 55.5691 75.105C55.5134 74.8924 55.5625 74.1953 55.3953 73.5573C54.9073 73.4632 54.5307 73.7943 54.3702 74.0662L46.5968 92.1497Z" fill="#8492CE"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M72.2039 61.8545C72.6649 61.8545 72.9722 61.4705 72.8186 61.0098C71.9735 58.0919 71.1284 55.1739 70.2833 52.256C70.1296 51.7953 69.8223 51.7185 69.4382 51.7953C69.1309 51.8721 69.0541 52.1792 68.9773 52.4864C68.4395 54.3293 67.9017 56.0954 67.3639 57.9383C67.0566 58.9365 66.7493 59.9348 66.5188 60.933C66.3652 61.3169 66.5188 61.7009 66.9798 61.8545C67.3639 61.9312 67.6712 61.7777 67.8249 61.3169C67.9785 60.933 68.1322 60.4723 68.209 60.0883C68.2858 59.7812 68.4395 59.7044 68.7468 59.7044C69.4382 59.7044 70.0528 59.7044 70.7443 59.7044C71.0516 59.7044 71.2052 59.7812 71.282 60.0883C71.3589 60.4723 71.5125 60.933 71.6662 61.3169C71.6662 61.5473 71.8198 61.8545 72.2039 61.8545ZM57.146 56.7865C57.0692 57.2472 57.2229 57.7079 57.4534 58.1686C57.8375 59.0133 58.2984 59.858 58.6826 60.7026C58.9899 61.3937 59.5277 61.7777 60.2959 61.8545C61.141 61.8545 61.602 61.4705 61.9861 60.7026C62.447 59.7812 62.908 58.8597 63.2921 57.9383C63.6763 57.1704 63.6763 56.3257 63.2921 55.5579C62.8312 54.5596 62.2934 53.5614 61.8324 52.6399C61.2178 51.4881 59.6045 51.4113 58.913 52.4864C58.2984 53.5614 57.7607 54.7132 57.2997 55.7882C57.146 56.0954 57.0692 56.4793 57.146 56.7865ZM75.7379 56.6329C75.7379 58.0919 75.7379 59.5508 75.7379 61.0098C75.7379 61.4705 75.8916 61.8545 76.4294 61.8545C76.9672 61.8545 77.1208 61.4705 77.1208 61.0098C77.1208 60.1651 77.1208 59.3205 77.1208 58.4758C77.1208 58.0919 77.2745 58.0151 77.5818 58.0151C78.5037 58.0151 79.4256 58.0151 80.2707 58.0151C81.3462 58.0151 82.1913 57.1704 82.1913 56.0954C82.1913 55.2507 82.1913 54.4828 82.1913 53.6382C82.1913 52.4864 81.3462 51.7185 80.1939 51.7185C78.8878 51.7185 77.5818 51.7185 76.2757 51.7185C75.8916 51.7185 75.7379 51.7953 75.7379 52.256C75.7379 53.715 75.7379 55.1739 75.7379 56.6329ZM47.7733 56.6329C47.7733 58.0151 47.7733 59.474 47.7733 60.933C47.7733 61.0866 47.7733 61.2402 47.7733 61.3937C47.9269 61.7009 48.1574 61.8545 48.4647 61.8545C48.9257 61.8545 49.0025 61.4705 49.0793 61.1634C49.0793 60.3187 49.0793 59.474 49.0793 58.6294C49.0793 58.2454 49.1561 58.0919 49.6171 58.0919C50.4622 58.0919 51.3841 58.0919 52.306 58.0919C53.3816 58.0919 54.1498 57.2472 54.2267 56.249C54.2267 55.4043 54.2267 54.5596 54.2267 53.715C54.2267 52.6399 53.3047 51.7953 52.2292 51.7953C50.9231 51.7953 49.6171 51.7953 48.3111 51.7953C47.8501 51.7953 47.7733 51.9489 47.7733 52.3328C47.7733 53.715 47.7733 55.1739 47.7733 56.6329ZM56.301 34.1341C58.1448 34.4413 60.0654 33.7502 61.7556 32.5216C63.9067 30.9091 65.981 30.9859 68.0553 32.5216C69.0541 33.2895 70.1296 33.9038 71.4357 34.0574C72.4344 34.2109 73.51 34.0574 74.5087 34.1341C74.9697 34.1341 75.5075 34.1341 75.9684 34.1341C77.1976 34.2877 78.1196 34.902 78.7342 35.977C79.1183 36.6681 79.5024 37.3592 79.8866 38.0503C80.578 39.4325 81.6536 40.5843 83.1132 41.2754C83.9583 41.6593 84.7266 42.12 85.4949 42.6576C86.6472 43.4254 87.0314 44.5005 87.0314 45.7291C87.0314 46.5737 87.0314 47.4184 87.0314 48.2631C86.9545 49.7988 87.4155 51.181 88.2606 52.4864C88.6447 53.1007 89.0289 53.715 89.413 54.3293C90.2581 55.7114 90.1812 57.0936 89.3362 58.4758C88.8752 59.2437 88.4911 59.9348 88.0301 60.7026C87.4155 61.7009 87.1082 62.7759 87.1082 64.0045C87.1082 65.1563 87.185 66.3849 87.1082 67.5367C86.9545 68.7653 86.2631 69.6868 85.2644 70.3011C84.6498 70.685 83.9583 71.069 83.2669 71.3761C81.8072 72.144 80.7316 73.219 79.9634 74.7548C79.6561 75.4459 79.2719 76.0602 78.8878 76.6745C78.1196 77.9798 76.9672 78.6709 75.5075 78.5941C74.6624 78.5941 73.8173 78.5941 73.049 78.5941C71.5125 78.5174 70.2065 78.9781 68.9004 79.746C68.3626 80.1299 67.748 80.437 67.2103 80.7442C65.7506 81.6656 64.2909 81.6656 62.8312 80.7442C62.1397 80.2835 61.3715 79.8227 60.6032 79.4388C59.6813 78.9013 58.6826 78.5941 57.607 78.5941C56.6083 78.5941 55.6095 78.5941 54.534 78.5941C53.0743 78.5941 51.9219 77.9798 51.1536 76.6745C50.9231 76.2905 50.6158 75.8298 50.4622 75.4459C49.5403 73.2958 47.9269 71.8368 45.8526 70.9154C45.3917 70.685 44.9307 70.3779 44.5466 70.1475C43.3942 69.4564 42.9332 68.3046 42.9332 66.9992C42.9332 66.3849 42.9332 65.7706 42.9332 65.1563C43.0869 63.1598 42.6259 61.3937 41.3967 59.7812C41.1662 59.474 41.0126 59.0901 40.7053 58.7062C39.7065 57.1704 39.7834 55.6347 40.7053 54.0989C41.0894 53.4078 41.5504 52.6399 41.9345 51.8721C42.4723 50.9506 42.7796 49.9524 42.7796 48.8006C42.7796 47.8023 42.7796 46.8041 42.7796 45.8826C42.7796 44.3469 43.3942 43.1951 44.7002 42.4272C45.3148 42.0433 45.9294 41.6593 46.6209 41.3522C48.0806 40.5843 49.1561 39.5093 49.9244 37.9735C50.3085 37.1289 50.7695 36.361 51.3073 35.5931C51.9987 34.5949 52.9206 34.2109 54.073 34.1341C54.6876 34.1341 55.3022 34.1341 56.301 34.1341Z" fill="#FEFEFE"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M78.2732 78.8246C79.6561 82.2032 81.1158 85.6587 82.4986 89.0373C82.7291 89.5748 82.9596 90.1891 83.1901 90.8034C83.2669 91.0338 83.4206 91.1874 83.1901 91.4945C82.9596 91.7249 82.8059 91.5713 82.5755 91.4945C80.3475 90.8034 78.1196 90.1124 75.8916 89.3445C75.4306 89.1909 75.277 89.2677 75.0465 89.7284C74.0478 91.8017 72.9722 93.8749 71.9735 95.9482C71.8198 96.1786 71.8198 96.4089 71.4357 96.4089C71.1284 96.4089 71.0516 96.1018 70.9747 95.8714C69.2077 91.5713 67.4407 87.348 65.6737 83.0479C65.5969 82.8943 65.5969 82.7408 65.5201 82.5872C67.3639 82.0497 68.7468 80.7443 70.437 79.9764C70.9747 79.746 71.5893 79.5925 72.1271 79.5925C72.9722 79.5925 73.8173 79.5925 74.7392 79.5925C76.1221 79.6692 77.2745 79.5157 78.2732 78.8246Z" fill="#D5DCF3"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M49.0793 54.8668C49.0793 55.3275 49.0793 55.865 49.0793 56.3258C49.0793 56.6329 49.1561 56.7097 49.4634 56.7097C50.3853 56.7097 51.3072 56.7097 52.1523 56.7097C52.6133 56.7097 52.9206 56.4025 52.9206 55.9418C52.9206 55.2507 52.9206 54.5596 52.9206 53.7918C52.9206 53.331 52.6133 53.0239 52.0755 53.0239C51.2304 53.0239 50.3853 53.0239 49.4634 53.0239C49.0793 53.0239 49.0025 53.1775 49.0025 53.4846C49.0793 53.9453 49.0793 54.4061 49.0793 54.8668ZM47.7733 56.6329C47.7733 55.1739 47.7733 53.715 47.7733 52.3328C47.7733 51.9489 47.8501 51.7953 48.311 51.7953C49.6171 51.7953 50.9231 51.7953 52.2292 51.7953C53.3816 51.7953 54.2266 52.5632 54.2266 53.715C54.2266 54.5596 54.2266 55.4043 54.2266 56.249C54.2266 57.324 53.3815 58.0919 52.306 58.0919C51.4609 58.0919 50.539 58.0919 49.6171 58.0919C49.1561 58.0919 49.0793 58.2454 49.0793 58.6294C49.0793 59.474 49.0793 60.3187 49.0793 61.1634C49.0793 61.5473 48.9256 61.8545 48.4647 61.8545C48.0806 61.8545 47.8501 61.7009 47.7733 61.3937C47.6964 61.2402 47.7733 61.0866 47.7733 60.933C47.7733 59.474 47.7733 58.0919 47.7733 56.6329Z" fill="#C4CAE8"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M77.044 54.8668C77.044 55.3275 77.044 55.865 77.044 56.3258C77.044 56.6329 77.1976 56.7097 77.4281 56.7097C78.2732 56.7097 79.1951 56.7097 80.117 56.7097C80.6548 56.7097 80.8853 56.4025 80.9621 55.9418C80.9621 55.2507 80.9621 54.5596 80.9621 53.7918C80.9621 53.331 80.6548 53.0239 80.117 53.0239C79.2719 53.0239 78.4268 53.0239 77.5817 53.0239C77.1976 53.0239 77.044 53.1775 77.1208 53.5614C77.044 53.9453 77.044 54.4061 77.044 54.8668ZM75.7379 56.6329C75.7379 55.1739 75.7379 53.715 75.7379 52.3328C75.7379 51.8721 75.8916 51.7953 76.2757 51.7953C77.5817 51.7953 78.8878 51.7953 80.1938 51.7953C81.2694 51.7953 82.1145 52.64 82.1913 53.715C82.1913 54.5596 82.1913 55.3275 82.1913 56.1722C82.1913 57.2472 81.3462 58.0919 80.2707 58.0919C79.3487 58.0919 78.4268 58.0919 77.5817 58.0919C77.1976 58.0919 77.1208 58.2454 77.1208 58.5526C77.1208 59.3973 77.1208 60.2419 77.1208 61.0866C77.1208 61.5473 77.044 61.9312 76.4294 61.9312C75.8916 61.9312 75.7379 61.6241 75.7379 61.0866C75.7379 59.5508 75.7379 58.0919 75.7379 56.6329Z" fill="#C4CAE8"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M62.2165 56.7865C62.2165 56.6329 62.2165 56.4026 62.0629 56.249C61.6019 55.2508 61.141 54.2525 60.68 53.3311C60.4495 52.9471 60.1422 52.9471 59.9118 53.3311C59.4508 54.2525 58.9898 55.174 58.5289 56.0954C58.2984 56.5562 58.3752 57.0937 58.6057 57.5544C58.9898 58.3991 59.4508 59.2437 59.8349 60.0884C59.9118 60.242 59.9886 60.4723 60.2959 60.4723C60.5264 60.4723 60.6032 60.3187 60.68 60.0884C61.141 59.2437 61.5251 58.3223 61.9861 57.4776C62.1397 57.324 62.2165 57.0169 62.2165 56.7865ZM57.146 56.7865C57.146 56.4026 57.146 56.0954 57.2997 55.7883C57.8375 54.6365 58.2984 53.5614 58.913 52.4864C59.6045 51.3346 61.2178 51.4114 61.8324 52.64C62.3702 53.6382 62.8311 54.6365 63.2921 55.5579C63.6762 56.3258 63.6762 57.1705 63.2921 57.9383C62.908 58.8598 62.3702 59.7812 61.9861 60.7027C61.6788 61.3938 61.141 61.8545 60.2959 61.8545C59.5276 61.8545 59.0667 61.4706 58.6825 60.7027C58.2984 59.858 57.8375 59.0134 57.4533 58.1687C57.2228 57.708 57.0692 57.324 57.146 56.7865Z" fill="#C4CAE8"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M69.7455 55.0204C69.6687 55.0204 69.6687 55.0204 69.5918 55.0204C69.4382 55.6347 69.2077 56.249 69.0541 56.8633C68.9004 57.3241 68.4394 58.0151 68.7468 58.3223C69.0541 58.6294 69.8223 58.3991 70.3601 58.3991C70.5906 58.3991 70.6674 58.3223 70.5906 58.0919C70.2833 57.0169 70.0528 56.0187 69.7455 55.0204ZM72.2039 61.8545C71.8198 61.8545 71.6661 61.6242 71.5893 61.317C71.4357 60.9331 71.282 60.4723 71.2052 60.0884C71.1284 59.7813 70.9747 59.7045 70.6674 59.7045C69.976 59.7045 69.3614 59.7045 68.6699 59.7045C68.3626 59.7045 68.209 59.7813 68.1321 60.0884C67.9785 60.4723 67.8248 60.9331 67.748 61.317C67.5944 61.7777 67.3639 61.9313 66.9029 61.8545C66.442 61.7009 66.3651 61.317 66.442 60.9331C66.7493 59.9348 66.9798 58.9366 67.2871 57.9384C67.8248 56.0955 68.3626 54.3293 68.9004 52.4864C68.9772 52.1793 69.0541 51.9489 69.3614 51.7954C69.7455 51.7186 70.0528 51.7954 70.2064 52.2561C71.0515 55.174 71.8966 58.0919 72.7417 61.0099C72.9722 61.4706 72.6649 61.8545 72.2039 61.8545Z" fill="#C4CAE8"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M49.0793 54.8668C49.0793 54.4061 49.0793 54.0222 49.0793 53.5614C49.0793 53.2543 49.2329 53.1007 49.5402 53.1007C50.3853 53.1007 51.2304 53.1007 52.1523 53.1007C52.6901 53.1007 52.9206 53.4079 52.9974 53.8686C52.9974 54.5597 52.9974 55.2508 52.9974 56.0186C52.9974 56.4794 52.6901 56.7865 52.2292 56.7865C51.3072 56.7865 50.3853 56.7865 49.5402 56.7865C49.2329 56.7865 49.1561 56.6329 49.1561 56.4026C49.0793 55.7883 49.0793 55.3276 49.0793 54.8668Z" fill="#FEFEFE"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M77.044 54.8668C77.044 54.4061 77.044 54.0222 77.044 53.5614C77.044 53.1775 77.1976 53.0239 77.5049 53.0239C78.35 53.0239 79.1951 53.0239 80.0402 53.0239C80.578 53.0239 80.8853 53.3311 80.8853 53.7918C80.8853 54.4829 80.8853 55.174 80.8853 55.9419C80.8853 56.4794 80.578 56.7097 80.0402 56.7097C79.1951 56.7097 78.2732 56.7097 77.3513 56.7097C77.044 56.7097 76.9672 56.6329 76.9672 56.3258C77.044 55.8651 77.044 55.3276 77.044 54.8668Z" fill="#FEFEFE"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M62.2165 56.7865C62.2165 57.0936 62.1397 57.324 62.0629 57.4776C61.6019 58.3222 61.2178 59.2437 60.7568 60.0883C60.68 60.2419 60.6032 60.4723 60.3727 60.4723C60.1422 60.4723 59.9886 60.3187 59.9118 60.0883C59.5276 59.2437 59.0667 58.399 58.6825 57.5544C58.4521 57.0936 58.3752 56.5561 58.6057 56.0954C59.0667 55.1739 59.4508 54.2525 59.9886 53.331C60.2191 52.9471 60.5264 52.9471 60.7568 53.331C61.2178 54.3293 61.7556 55.2507 62.1397 56.249C62.2165 56.4025 62.2165 56.6329 62.2165 56.7865Z" fill="#FEFEFE"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M69.7455 55.0204C70.0528 56.0186 70.2833 57.0169 70.5906 58.0151C70.6674 58.2455 70.5906 58.3223 70.3601 58.3223C69.8223 58.3223 69.0541 58.5526 68.7467 58.2455C68.4394 57.9383 68.9004 57.324 69.054 56.7865C69.2077 56.1722 69.4382 55.5579 69.5918 54.9436C69.6687 55.0204 69.6687 55.0204 69.7455 55.0204Z" fill="#FEFEFE"/>
    <path opacity="0.3" d="M61.6438 28.2215C61.106 28.4519 60.4146 28.8358 59.8 29.3733C59.8 29.3733 78.4868 44.1899 82.3868 52.6399C86.2868 61.0899 83.0015 77.7495 83.0015 77.7495C83.2319 77.212 83.5392 76.7512 83.7697 76.2905C84.0002 75.753 84.4611 75.3691 85.1526 74.9851C85.9977 74.6012 86.6891 74.1405 87.3805 73.7565C89.839 72.2976 91.2218 69.8404 91.145 66.9992V65.4635V64.1581C91.145 63.7741 91.2218 63.3902 91.4523 63.0831L91.6828 62.6223C92.0669 61.9312 92.4511 61.3169 92.8352 60.6259C94.2949 58.0151 94.3717 55.2507 92.9888 52.7167V52.6399C92.7584 52.1024 92.3742 51.4881 91.9901 50.8738C91.2987 49.8756 91.0682 48.9541 91.145 47.8791V46.113V45.6523C91.0682 43.0415 89.9926 40.8914 87.8415 39.4325C86.9196 38.8182 85.9208 38.2807 85.1526 37.8967C84.3843 37.5128 83.9234 36.9753 83.5392 36.2842C83.1551 35.5163 82.771 34.7484 82.3868 34.1341C80.9271 31.6002 78.6224 30.218 75.7798 30.218H75.3957H74.4738H73.1677H73.0141C72.3995 30.218 71.7849 29.9876 71.1702 29.6037C70.4788 29.143 69.6337 28.6054 68.7118 28.1447C67.5594 27.6072 66.407 27.3 65.1778 27.3C63.9486 27.3 62.7962 27.6072 61.6438 28.2215Z" fill="#D5DCF3"/>
  </svg>
)
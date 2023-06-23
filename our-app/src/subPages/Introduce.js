import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import '../index';
import pandaIntroduce from './pandas.gif'
import pandaIntroduce1 from './pandaIntroduce1.gif'
import noticeImage from './notice.png';
import main1Image from './main1.png';
import main2Image from './main2.png';
import main3Image from './main3.png';
import mainPanda from './mainPanda.gif';
import clubPanda from './panda4.gif';
import clubImage from './club.png';
import locationPanda from './locationPanda.gif';
import locationImage from './location.png';
import noticePanda from './noticePanda.gif';
import newImage from './new.png';
import newPanda from './newPanda.gif';
import myImage from './my.png';
import myPanda from './myPanda.gif';


import '../index.css';

function Introduce() {
    return (<div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 class="text-violet-400 text-5xl font-extrabold text-center" >&#128317; 올클에 대해 더 많은 정보가 궁금하다면 &#128317;</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <section>
            <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div
                    class="flex items-center justify-center grid sm:grid-cols-1 lg:grid-cols-2"
                >
                    <div class="flex items-center justify-center">
                        <div class="grid sm:grid-cols-1 lg:grid-cols-2">

                            <div class="speech right text-sm">안녕하세요, 저는 올클에서 개발한 AI 챗봇 <span class="font-extrabold text-violet-700">ㅇㅋㅇㅋ</span>에요! 지금부터 '올클'의 주요 기능 6가지에 대해 소개해드릴게요.<br />
                                <a
                                    href="/Okok"
                                    class="group mt-4 inline-flex items-center gap-1 text-sm text-violet-600 hover:font-extrabold"
                                >
                                    <span
                                        aria-hidden="true"
                                        class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                    >
                                        &rarr;
                                    </span>
                                    Who is 'ㅇㅋㅇㅋ'?
                                </a>
                            </div>
                            {/* <p class="text-center text-violet-800 font-extrabold text-xl p-4">welcome to All Of the Clubs!</p> */}
                            <img
                                src={pandaIntroduce}
                                alt="Selected Image"
                                style={{
                                    display: 'inline-block',
                                    margin: '0',
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    width: '250px',
                                    height: '250px',
                                }}
                            />
                        </div>
                    </div>


                    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <p
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

                        >
                            <span class="inline-block rounded-lg bg-gray-50 p-3">
                                <svg
                                    class="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <h2 class="mt-2 font-bold">MAIN</h2>

                            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                메인 페이지
                            </p>
                        </p>

                        <p
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

                        >
                            <span class="inline-block rounded-lg bg-gray-50 p-3">
                                <svg
                                    class="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <h2 class="mt-2 font-bold">CLUB</h2>

                            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                클럽 페이지
                            </p>
                        </p>

                        <p
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

                        >
                            <span class="inline-block rounded-lg bg-gray-50 p-3">
                                <svg
                                    class="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <h2 class="mt-2 font-bold">LOCATION</h2>

                            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                위치 페이지
                            </p>
                        </p>

                        <p
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

                        >
                            <span class="inline-block rounded-lg bg-gray-50 p-3">
                                <svg
                                    class="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <h2 class="mt-2 font-bold">NOTICE</h2>

                            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                공지 페이지
                            </p>
                        </p>

                        <p
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

                        >
                            <span class="inline-block rounded-lg bg-gray-50 p-3">
                                <svg
                                    class="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <h2 class="mt-2 font-bold">NEW</h2>

                            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                신규 페이지
                            </p>
                        </p>

                        <p
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

                        >
                            <span class="inline-block rounded-lg bg-gray-50 p-3">
                                <svg
                                    class="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <h2 class="mt-2 font-bold">MY</h2>

                            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                개인 페이지
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div
            class="flex items-center justify-center grid sm:grid-cols-1 lg:grid-cols-2"
        >
            <div class="flex items-center justify-center">

                <div class="grid sm:grid-cols-3 lg:grid-cols-1">
                    <img
                        src={main1Image}
                        alt="Selected Image"
                        class="rounded-lg"
                        style={{
                            display: 'inline-block',
                            margin: '0',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: '600px',
                            height: '200px',
                        }}
                    />
                    <img
                        src={main2Image}
                        alt="Selected Image"
                        class="rounded-lg"
                        style={{
                            display: 'inline-block',
                            margin: '0',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: '600px',
                            height: '300px',
                        }}
                    />
                    <img
                        src={main3Image}
                        alt="Selected Image"
                        class="rounded-lg"
                        style={{
                            display: 'inline-block',
                            margin: '0',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: '600px',
                            height: '300px',
                        }}
                    />
                </div>
            </div>

            <div class="flex items-center justify-center">
                <div class="grid sm:grid-cols-4 lg:grid-cols-1">
                    <h2 class="text-violet-800 font-extrabold text-3xl p-4">Main</h2>

                    <p class="max-w-xl text-lg mt-1.5 text-gray-500">메인 페이지에서는 현재 모집 중인 동아리들만을 실시간으로 확인 할 수 있어요.
                        뿐만 아니라 현재 인기 있는 동아리 및 신규 동아리의 정보도 확인할 수 있답니다.
                        동아리의 정보를 확인해봐도 어떤 동아리에 가입해야 할 지 결정을 못할 때는 AI 챗봇 'ㅇㅋㅇㅋ'에게 메세지를 보내 동아리를 추천 받을 수도 있어요! <br />
                        <a
                            href="/"
                            class="group mt-4 inline-flex items-center gap-1 text-sm font-bold text-xl text-violet-800 hover:text-purple-300"
                        >
                            explore

                            <span
                                aria-hidden="true"
                                class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </a>
                    </p>

                    <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>

                    <img
                        src={mainPanda}
                        alt="Selected Image"
                        style={{
                            display: 'inline-block',
                            margin: '0',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: '400px',
                            height: '400px',
                        }}
                    />

                </div>
            </div>

        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div
            class="flex items-center justify-center grid sm:grid-cols-1 lg:grid-cols-2"
        >

            <div class="flex items-center justify-center">
                <div class="grid sm:grid-cols-4 lg:grid-cols-1">
                    <h2 class="text-violet-800 font-extrabold text-3xl p-4">Club</h2>

                    <p class="max-w-xl text-lg mt-1.5 text-gray-500">다음은 제가 제일 좋아하는 클럽 페이지에요! 클럽 페이지에서는 올클 사이트에 등록된 모든 동아리의 정보를 파악할 수 있답니다. <br />
                        원하는 대로 조건을 설정하여 동아리도 탐색할 수 있어요. 여기서 마음에 동아리가 있다면 apply 버튼을 클릭해서 주어진 양식대로 가입 신청서를 작성하면 동아리 가입 신청이 완료됩니다! 쉽죠? <br />
                        <a
                            href="/Club"
                            class="group mt-4 inline-flex items-center gap-1 text-sm font-bold text-xl text-violet-800 hover:text-purple-300"
                        >
                            explore

                            <span
                                aria-hidden="true"
                                class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </a>
                    </p>

                    <div>
                        <br />
                        <br />

                    </div>

                    <img
                        src={clubPanda}
                        alt="Selected Image"
                        style={{
                            display: 'inline-block',
                            margin: '0',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: '300px',
                            height: '300px',
                        }}
                    />

                </div>
            </div>



            <img
                src={clubImage}
                alt="Selected Image"
                class="rounded-lg"
                style={{
                    display: 'inline-block',
                    margin: '0',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: '800px',
                    height: '400px',
                }}
            />



        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div
            class="flex items-center justify-center grid sm:grid-cols-1 lg:grid-cols-2"
        >
            <img
                src={locationImage}
                alt="Selected Image"
                class="rounded-lg"
                style={{
                    display: 'inline-block',
                    margin: '0',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: '600px',
                    height: '400px',
                }}
            />

            <div class="flex items-center justify-center">
                <div class="grid sm:grid-cols-4 lg:grid-cols-1">
                    <h2 class="text-violet-800 font-extrabold text-3xl p-4">Location</h2>

                    <p class="max-w-xl text-lg mt-1.5 text-gray-500">위치 페이지에서는 교내 동아리 동방의 위치를 확인할 수 있는 페이지에요!
                        동아리의 동방 위치 정보를 몰라 엉뚱한 곳으로 찾아갔던 적이 있다면 위치 페이지를 참고하면 좋아요. 동방의 위치는 위치 페이지의 제가 상세하게 알려줄 거에요. <br />
                        <a
                            href="/Location"
                            class="group mt-4 inline-flex items-center gap-1 text-sm font-bold text-xl text-violet-800 hover:text-purple-300"
                        >
                            explore

                            <span
                                aria-hidden="true"
                                class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </a>
                    </p>

                    <div>
                    </div>

                    <img
                        src={locationPanda}
                        alt="Selected Image"
                        style={{
                            display: 'inline-block',
                            margin: '0',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: '350px',
                            height: '350px',
                        }}
                    />

                </div>
            </div>

        </div>

        <br />
        <br />
        <br />
        <br />
        <br />


        <div
            class="flex items-center justify-center grid sm:grid-cols-1 lg:grid-cols-2"
        >
            <div class="flex items-center justify-center">
                <div class="grid sm:grid-cols-4 lg:grid-cols-1">
                    <h2 class="text-violet-800 font-extrabold text-3xl p-4">Notice</h2>

                    <p class="max-w-xl text-lg mt-1.5 text-gray-500">공지 페이지는 각종 동아리들의 공지 정보를 확인할 수 있는 페이지에요. 이 페이지에서 전체 동아리의 통합 모집 일정이나 각 동아리들의 개별 공지까지 한번에 확인할 수 있어요.
                        아! 축제에서 공연할 동아리도 이 공지페이지를 통해 모집해요! <br />
                        <a
                            href="/Notice"
                            class="group mt-4 inline-flex items-center gap-1 text-sm font-bold text-xl text-violet-800 hover:text-purple-300"
                        >
                            explore

                            <span
                                aria-hidden="true"
                                class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </a>
                    </p>

                    <div>
                    </div>

                    <img
                        src={noticePanda}
                        alt="Selected Image"
                        style={{
                            display: 'inline-block',
                            margin: '0',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: '280px',
                            height: '280px',
                        }}
                    />

                </div>
            </div>


            <img
                src={noticeImage}
                alt="Selected Image"
                class="rounded-lg"
                style={{
                    display: 'inline-block',
                    margin: '0',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: '600px',
                    height: '400px',
                }}
            />


        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div
            class="flex items-center justify-center grid sm:grid-cols-1 lg:grid-cols-2"
        >
            <img
                src={newImage}
                alt="Selected Image"
                class="rounded-lg"
                style={{
                    display: 'inline-block',
                    margin: '0',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: '600px',
                    height: '600px',
                }}
            />

            <div class="flex items-center justify-center">
                <div class="grid sm:grid-cols-4 lg:grid-cols-1">
                    <h2 class="text-violet-800 font-extrabold text-3xl p-4">New</h2>

                    <p class="max-w-xl text-lg mt-1.5 text-gray-500">신규 페이지는 새 동아리 정보를 등록할 수 있는 페이지에요. 올클에 기존 동아리 정보가 없거나, 신규 동아리를 만들었을 때 이 페이지를 통하여 새 동아리 정보를 등록할 수 있답니다.
                        등록한다고 해서 전부 등록되는 것이 아니라, 일련의 간단한 검증 과정을 거친 후 등록이 된다는 점 명심해주세요! <br />
                        <a
                            href="/New"
                            class="group mt-4 inline-flex items-center gap-1 text-sm font-bold text-xl text-violet-800 hover:text-purple-300"
                        >
                            explore

                            <span
                                aria-hidden="true"
                                class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </a>
                    </p>

                    <div>
                    </div>

                    <img
                        src={newPanda}
                        alt="Selected Image"
                        style={{
                            display: 'inline-block',
                            margin: '0',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: '300px',
                            height: '300px',
                        }}
                    />

                </div>
            </div>

        </div>

        <br />
        <br />
        <br />
        <br />
        <br />


        <div
            class="flex items-center justify-center grid sm:grid-cols-1 lg:grid-cols-2"
        >
            <div class="flex items-center justify-center">
                <div class="grid sm:grid-cols-4 lg:grid-cols-1">
                    <h2 class="text-violet-800 font-extrabold text-3xl p-4">My</h2>

                    <p class="max-w-xl text-lg mt-1.5 text-gray-500">개인 페이지는 등록한 개인 정보 및 올클 사이트에서 활동한 내역 등을 확인 할 수 있는 사이트에요.
                        최근 본 동아리나 스크랩한 동아리 등의 개인 맞춤 정보들을 확인할 수 있는 공간이니 회원가입을 한 회원들만 이용할 수 있는 private한 공간이랍니다! <br />
                        <a
                            href="/My"
                            class="group mt-4 inline-flex items-center gap-1 text-sm font-bold text-xl text-violet-800 hover:text-purple-300"
                        >
                            explore

                            <span
                                aria-hidden="true"
                                class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </a>
                    </p>

                    <div>
                    </div>

                    <img
                        src={myPanda}
                        alt="Selected Image"
                        style={{
                            display: 'inline-block',
                            margin: '0',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: '280px',
                            height: '280px',
                        }}
                    />

                </div>
            </div>


            <img
                src={myImage}
                alt="Selected Image"
                class="rounded-lg"
                style={{
                    display: 'inline-block',
                    margin: '0',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: '600px',
                    height: '400px',
                }}
            />


        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />




    </div>)
}

export default Introduce;



import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import '../index';
import App from './App';
import About from './About';
import Club from './Club';
import Location from './Location';
import My from './My';
//import New from './New';
import Notice from './Notice';
import button5Image from './panda1.gif';
import button6Image from './ask1.gif';
import Nav from '../nav';

function Okok() {
    return (

        <div>
            <Nav />

            <section className="bg-slate-50">

                <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div class="grid p-6  rounded-lg bg-purple-100 rounded place-content-center sm:p-8">
                            <div class="max-w-md mx-auto text-center lg:text-left">
                                <header>
                                    <h2 class="text-3xl font-bold text-purple-900 sm:text-3xl"> 프로필 </h2>

                                    <p class="mt-4 text-gray-600 text-lg">
                                        이름: ㅇㅋㅇㅋ
                                    </p>
                                    <p class="mt-4 text-gray-600 text-lg">
                                        출생: 명륜당
                                    </p>
                                    <p class="mt-4 text-gray-600 text-lg">
                                        나이: 6살
                                    </p>
                                    <p class="mt-4 text-gray-600 text-lg">
                                        소속: 성균관대학교
                                    </p>
                                    <p class="mt-4 text-gray-600 text-lg">
                                        취미: 동아리 정보 검색하기
                                    </p>
                                </header>

                                <a
                                    class="inline-block rounded-lg px-12 py-3 mt-8 text-lg font-medium text-white transition bg-purple-900 border border-purple-900 rounded hover:shadow focus:outline-none focus:ring"
                                >
                                    바로 채팅하기
                                </a>
                            </div>
                        </div>

                        <div class="lg:col-span-2 lg:py-8 mx-auto">
                            <ul class="grid grid-cols-2 gap-4">
                                <li>
                                    <a href="#" class="block group">
                                        <div class="mx-auto max-w-lg text-right">
                                            <img
                                                src={button5Image}
                                                alt="Selected Image"
                                                style={{
                                                    display: 'inline-block',
                                                    margin: '0',
                                                    maxWidth: '100%',
                                                    maxHeight: '100%',
                                                    width: '340px',
                                                    height: '320px',
                                                }}
                                            />
                                        </div>
                                       
                                            


                            
                                        
                                    </a>
                                </li>

                                <div class="mt-3">
                <h3
                  class="mt-8 text-8xl font-bold text-purple-100"
                >
                 WELCOME
                </h3>

                <h1
                  class="mt-8 text-4xl font-bold text-purple-200"
                >
                    채팅을 통해 _ _ _ _
                   </h1>
                    
                    <h1
                  class="mt-8 text-4xl font-bold text-purple-300"
                >        _ _ _   여러분의 궁금증을 
                </h1>
                   
                    <h1
                  class="mt-8 text-4xl font-bold text-purple-400"
                >해결해 드립니다
                </h1>
                 
                 
                 
                
              </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <br />  <br />
            </section>










            <section className="bg-purple-50">

                <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div class="mx-auto max-w-lg text-center">
                        <h2 class="text-3xl font-bold sm:text-7xl text-purple-700 ">Chat ㅇㅋㅇㅋ </h2>

                        <p class="mt-5  sm:text-xl text-purple-400">
                            궁금한 내용은 ㅇㅋㅇㅋ에게 물어보십시오!
                        </p>
                    </div>

                    <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">




                        <div className="text-sm">
                            <p className="text-lg font-bold text-center text-purple-500">Examples</p>

                        </div>

                        <div className="text-sm">
                            <p className="text-lg font-bold text-center text-purple-500">Capabilities</p>

                        </div>
                    </div>
                    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">




                        <blockquote class="mt-4 rounded-xl bg-purple-200 p-5 block rounded-xl border border-purple-200 p-3 shadow-xl transition hover:border-purple-50/10 hover:shadow-purple-900/10 ">
                            <p class="mt-2 text-lg font-bold text-center text-gray-900">
                                "사진동아리 리스트 알려줘"
                            </p>
                        </blockquote>

                        <blockquote class="mt-4 rounded-xl bg-purple-200 p-5 block rounded-xl border border-purple-200 p-3 shadow-xl transition hover:border-purple-50/10 hover:shadow-purple-900/10">
                            <p class="mt-2 text-lg font-bold text-center text-gray-900">
                                "각종 동아리, 소모임, 학회 목록 제공"
                            </p>
                        </blockquote>

                        <blockquote class="mt-4 rounded-xl bg-purple-200 p-5 block rounded-xl border border-purple-200 p-3 shadow-xl transition hover:border-purple-50/10 hover:shadow-purple-900/10 ">
                            <p class="mt-2 text-lg font-bold text-center text-gray-900">
                                "올해 멋쟁이사자 모집은 언제까지 해?"
                            </p>
                        </blockquote>




                        <blockquote class="mt-4 rounded-xl bg-purple-200 p-5 block rounded-xl border border-purple-200 p-3 shadow-xl transition hover:border-purple-50/10 hover:shadow-purple-900/10 ">
                            <p class="mt-2 text-lg font-bold text-center text-gray-900">
                                "모집 기간 안내"
                            </p>
                        </blockquote>

                        <blockquote class="mt-4 rounded-xl bg-purple-200 p-5 block rounded-xl border border-purple-200 p-3 shadow-xl transition hover:border-purple-50/10 hover:shadow-purple-900/10 ">
                            <p class="mt-2 text-lg font-bold text-center text-gray-900">
                                "두드려 밴드 소모임 지원자 수 알려줘"
                            </p>
                        </blockquote>

                        <blockquote class="mt-4 rounded-xl bg-purple-200 p-5 block rounded-xl border border-purple-200 p-3 shadow-xl transition hover:border-purple-50/10 hover:shadow-purple-900/10 ">
                            <p class="mt-2 text-lg font-bold text-center text-gray-900">
                                "지원현황&경쟁률 안내"
                            </p>
                        </blockquote>




                    </div>
                    <div>

                        <label class="sr-only" for="name"></label>

                        <div className="relative">

                            <input
                                type="text"
                                className="mt-20 mx-auto w-full rounded-lg border-gray-200 p-6 pe-20 text-xl shadow-sm flex justify-center "
                                placeholder="Send a message"
                            />
                            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">


                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    class="h-7 w-6 m-0 md-0 text-gray-400"
                                    stroke="currentColor"
                                >

                                    <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z">
                                    </path>
                                </svg>
                            </span>


                        </div>
                    </div>

                </div>
            </section>


        </div>











    );
}

export default Okok;

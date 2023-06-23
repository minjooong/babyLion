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
            <div class="mx-auto max-w-5xl px-4 py-8">
                <section class="rounded-lg bg-gray-100 p-8">
                    <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                        <img
                            src={button5Image}
                            alt="Selected Image"
                            style={{
                                display: 'inline-block',
                                margin: '0',
                                maxWidth: '110%',
                                maxHeight: '110%',
                            }}
                        />

                        <blockquote class="sm:col-span-2">
                            <p class="text-xl font-medium sm:text-xl">
                                프로필
                            </p>


                            <cite class="mt-8 inline-flex items-center not-italic">
                                <span class="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                                <p class="text-sm uppercase text-gray-500 sm:ms-3">
                                    <strong>ㅇㅋㅇㅋ 마스코트</strong>
                                </p>
                            </cite>
                        </blockquote>

                    </div>
                </section>
            </div>

            <section className="bg-slate-50">
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-10">
            <div class="mx-auto w-9/12 text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl text-purple-500">ㅇㅋㅇㅋ와 채팅하기</h1>
                </div>
                  
                <form action="" class="mx-auto mb-0 mt-8 w-9/12 space-y-4">
                    <div>
                        <label for="title" class="sr-only">Title</label>

                    </div>
</form>

    <div
      class="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
    >
      <div class="mb-10 sm:break-inside-avoid">
        <blockquote class="rounded-xl bg-gray-50 p-4 shadow">
          <p class="leading-relaxed text-gray-700">
           "경제대 밴드 동아리 알려줘"
          </p>
   
        </blockquote>
        <br /> <br />
        <blockquote class="rounded-xl bg-gray-50 p-4 shadow">

<p class="leading-relaxed text-gray-700">
           " 예술대 여행 소모임 알려줘"
          </p>
        </blockquote>
        <br /> <br />
        <blockquote class="rounded-xl bg-gray-50 p-4 shadow">

<p class="leading-relaxed text-gray-700">
           " 어글리 모집 기간 알려줘"
          </p>
        </blockquote>

        <div class="mt-4 flex items-center gap-4">
        <img
                            src={button6Image}
                            alt="Selected Image"
                            class="h-20 w-40 rounded-full object-cover"
                        />
        

          <div class="text-sm">
          <p class="font-xlarge"> 채팅 예시</p>
          </div>
        </div>
      </div>
</div></div>


            </section>
            <div class="mx-auto max-w-full px-4 py-16 sm:px-6 lg:px-8">
                
                <form action="" class="mx-auto mb-0 mt-8 w-9/12 space-y-4">
                    <div>
                        <label for="title" class="sr-only">Title</label>

                    </div>

 
                    <div>
                        <label for="content" class="sr-only">Content</label>

                        <div class="relative">
                            <textarea
                                class="w-full border-2 rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="내용을 입력하세요."
                                rows="1"
                                id="message"
                            ></textarea>
                        </div>

                    </div>
                    
                </form>
            
                
                </div>
                
                </div>



    );
}

export default Okok;

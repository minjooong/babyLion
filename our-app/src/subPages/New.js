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
import button1Image from './hi.gif';
import button2Image from './girl.gif';
import button3Image from './find3.gif';
import Nav from '../nav';
function New() {
  return (
    <div>
      <Nav />



      <section className="bg-slate-50">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <br />  <br />
            <h2 className=" text-6xl font-bold text-purple-500 sm:text-7xl">
              올클로 올클하자
            </h2>

            <p className="mt-8 text-purple-300 sm:text-xl">
              동아리, 학회, 소모임 모집??

            </p>
            < p className="mt-4 text-purple-300 sm:text-xl">
              올클과 함께 올클
            </p>

          </div>
          <div class="grid grid-cols-1 gap-0 text-center sm:grid-cols-2 font-medium">

            <div style={{ textAlign: 'center', marginTop: '30px', padding: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <img
                  src={button1Image}
                  alt="Selected Image"
                  style={{
                    display: 'inline-block',
                    margin: '0',
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                />
              </div>
            </div>


            <div style={{ textAlign: 'center', marginTop: '30px', padding: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <img
                  src={button2Image}
                  alt="Selected Image"
                  style={{
                    display: 'inline-block',
                    margin: '0',
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                />

              </div>
            </div>
          </div>


          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-purple-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-purple-500">
                  동아리
                </dt>

                <dd className="text-4xl font-extrabold text-purple-500 md:text-5xl">
                  45
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-purple-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-purple-500">
                  소모임
                </dt>

                <dd className="text-4xl font-extrabold text-purple-500 md:text-5xl">24</dd>
              </div>

              <div className="flex flex-col rounded-lg bg-purple-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-purple-500">
                  학회
                </dt>

                <dd className="text-4xl font-extrabold text-purple-500 md:text-5xl">86</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>





      <section className="bg-slate-50">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-1">
              <div style={{ marginTop: '20px', padding: '20px' }}>
                <div className="mt-8">
                 
                  <a href="" className="text-6xl font-bold text-purple-300">
                    We're Looking For You

                    <div class="mx-auto max-w-lg text-right">
                      <p class="mt-10 text-5xl font-bold text-purple-500 sm:text-3xl">

                        join us ! </p>
                    </div>
                  </a>

                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>


                  <p class="mt-8 text-8xl font-bold text-purple-100">

                    ㅇㅋㅇㅋ </p>
                  <img
                    src={button3Image}
                    alt="Selected Image"
                    style={{
                      display: 'inline-block',
                      margin: '0',
                      maxWidth: '120%',
                      maxHeight: '130%',
                    }}
                  />

                </div>

              </div>
            </div>



            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">


              <form action="" className="space-y-4">

                <label className="sr-only" htmlFor="name">Name</label>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                  <input
                    className="w-full rounded-lg border-gray-100 border-2 p-3 text-sm"
                    placeholder="동아리명"
                    type="text"
                    id="club name"
                  />

                  <input
                    className="w-full rounded-lg border-gray-100 border-2 p-3 text-sm"
                    placeholder="인원 수"
                    type="number"
                    id="count"
                  />

                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg border-gray-100 border-2 p-3 text-sm"
                      placeholder="대표자명"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      className="w-full rounded-lg border-gray-100 border-2 p-3 text-sm"
                      placeholder="전화번호"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input
                      className="peer sr-only"
                      id="option1"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <label
                      htmlFor="option1"
                      className="block w-full rounded-lg border border-gray-200 p-3 hover:border-purple-500 peer-checked:border-purple-100 peer-checked:bg-purple-100 peer-checked:text-purple-500 hover:font-extrabold"
                      tabIndex="0"
                    >
                      <span className="text-sm font-bold"> 동아리 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      className="peer sr-only"
                      id="option2"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <label
                      htmlFor="option2"
                      className="block w-full rounded-lg border border-gray-200 p-3 hover:border-purple-500 peer-checked:border-purple-100 peer-checked:bg-purple-100 peer-checked:text-purple-500 hover:font-extrabold"
                      tabIndex="0"
                    >
                      <span className="text-sm font-bold"> 학회 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      className="peer sr-only"
                      id="option3"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <label
                      htmlFor="option3"
                      className="block w-full rounded-lg border border-gray-200 p-3 hover:border-purple-500 peer-checked:border-purple-100 peer-checked:bg-purple-100 peer-checked:text-purple-500 hover:font-extrabold"
                      tabIndex="0"
                    >
                      <span className="text-sm font-bold"> 소모임 </span>
                    </label>
                  </div>
                </div>



                <div class="grid grid-cols-1 gap-0 text-center sm:grid-cols-7 font-medium">





                </div>

                <div class="grid grid-cols-1 gap-0 text-center sm:grid-cols-7 font-medium">
                  <p class="text-black block text-m font-bold w-full rounded-lg border-gray-200 p-3">구분</p>

                  <div>
                    <input
                      class="peer sr-only"
                      id="totalClass"
                      type="radio"
                      tabindex="-1"
                      name="class"
                    />

                    <label
                      for="totalClass"
                      class="block w-full rounded-lg border border-white p-3 peer-checked:bg-purple-200 peer-checked:font-extrabold peer-checked:text-purple-500 hover:font-extrabold"
                      tabindex="0"
                    >
                      <span class="text-sm"> 전체 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      class="peer sr-only"
                      id="inClass"
                      type="radio"
                      tabindex="-1"
                      name="class"
                    />

                    <label
                      for="inClass"
                      class="block w-full rounded-lg border border-white p-3 peer-checked:bg-purple-200 peer-checked:font-extrabold peer-checked:text-purple-500 hover:font-extrabold"
                      tabindex="0"
                    >
                      <span class="text-sm"> 교내 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      class="peer sr-only"
                      id="outClass"
                      type="radio"
                      tabindex="-1"
                      name="class"
                    />

                    <label
                      for="outClass"
                      class="block w-full rounded-lg border border-white p-3 peer-checked:bg-purple-200 peer-checked:font-extrabold peer-checked:text-purple-500 hover:font-extrabold"
                      tabindex="0"
                    >
                      <span class="text-sm"> 연합 </span>
                    </label>
                  </div>
                </div>


                <div class="grid grid-cols-1 gap-0 text-center sm:grid-cols-7 font-medium">
                  <p class="text-black block text-m font-bold w-full rounded-lg border-gray-200 p-3">모집대상</p>

                  <div>
                    <input
                      class="peer sr-only"
                      id="totalGrade"
                      type="radio"
                      tabindex="-1"
                      name="grade"
                    />

                    <label
                      for="totalGrade"
                      class="block w-full rounded-lg border border-white p-3 peer-checked:bg-purple-200 peer-checked:font-extrabold peer-checked:text-purple-500 hover:font-extrabold"
                      tabindex="0"
                    >
                      <span class="text-sm"> 전체 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      class="peer sr-only"
                      id="smallGrade"
                      type="radio"
                      tabindex="-1"
                      name="grade"
                    />

                    <label
                      for="smallGrade"
                      class="block w-full rounded-lg border border-white p-3 peer-checked:bg-purple-200 peer-checked:font-extrabold peer-checked:text-purple-500 hover:font-extrabold"
                      tabindex="0"
                    >
                      <span class="text-sm"> 1~2학년 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      class="peer sr-only"
                      id="largeGrade"
                      type="radio"
                      tabindex="-1"
                      name="grade"
                    />

                    <label
                      for="largeGrade"
                      class="block w-full border-r rounded-lg border border-white p-3 peer-checked:bg-purple-200 peer-checked:font-extrabold peer-checked:text-purple-500 hover:font-extrabold"
                      tabindex="0"
                    >
                      <span class="text-sm"> 3~4학년 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      class="peer sr-only"
                      id="etc"
                      type="radio"
                      tabindex="-1"
                      name="grade"
                    />

                    <label
                      for="etc"
                      class="block w-full border-r rounded-lg border border-white p-3 peer-checked:bg-purple-200 peer-checked:font-extrabold peer-checked:text-purple-500 hover:font-extrabold"
                      tabindex="0"
                    >
                      <span class="text-sm"> 기타 </span>
                    </label>
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-0 text-center sm:grid-cols-7 font-medium">
                  <p class="text-black block text-m font-bold w-full rounded-lg border-gray-200 p-3">분야</p>

                  <div>
                    <input
                      class="peer sr-only"
                      id="totalPart"
                      type="radio"
                      tabindex="-1"
                      name="part"
                    />

                    <label
                      for="totalPart"
                      class="block w-full rounded-lg border border-white p-3 peer-checked:bg-purple-200 peer-checked:font-extrabold peer-checked:text-purple-500 hover:font-extrabold"
                      tabindex="0"
                    >
                      <span class="text-sm"> 전체 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      class="peer sr-only"
                      id="studyPart"
                      type="radio"
                      tabindex="-1"
                      name="part"
                    />

                    <label
                      for="studyPart"
                      class="block w-full rounded-lg border border-white p-3 peer-checked:bg-purple-200 peer-checked:font-extrabold peer-checked:text-purple-500 hover:font-extrabold"
                      tabindex="0"
                    >
                      <span class="text-sm"> 학업 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      class="peer sr-only"
                      id="hobbyPart"
                      type="radio"
                      tabindex="-1"
                      name="part"
                    />

                    <label
                      for="hobbyPart"
                      class="block w-full rounded-lg border border-white p-3 peer-checked:bg-purple-200 peer-checked:font-extrabold peer-checked:text-purple-500 hover:font-extrabold"
                      tabindex="0"
                    >
                      <span class="text-sm"> 취미 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      class="peer sr-only"
                      id="bandPart"
                      type="radio"
                      tabindex="-1"
                      name="part"
                    />

                    <label
                      for="bandPart"
                      class="block w-full rounded-lg border border-white p-3 peer-checked:bg-purple-200 peer-checked:font-extrabold peer-checked:text-purple-500 hover:font-extrabold"
                      tabindex="0"
                    >
                      <span class="text-sm"> 밴드 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      class="peer sr-only"
                      id="drinkPart"
                      type="radio"
                      tabindex="-1"
                      name="part"
                    />

                    <label
                      for="drinkPart"
                      class="block w-full rounded-lg border border-white p-3 peer-checked:bg-purple-200 peer-checked:font-extrabold peer-checked:text-purple-500 hover:font-extrabold"
                      tabindex="0"
                    >
                      <span class="text-sm"> 친목 </span>
                    </label>
                  </div>

                </div>


                <div>
                  <label className="sr-only" htmlFor="message"></label>

                  <textarea
                    className="w-full rounded-lg border-gray-100 border-2 p-2 text-sm"
                    placeholder="동아리 소개"
                    rows="8"
                    id="message"
                  ></textarea>

                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full border-r rounded-lg bg-purple-200 px-5 py-3 font-bold text-purple-500 sm:w-auto"
                  >
                    등록하기
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>


  );
}
export default New;
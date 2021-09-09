import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import { comments } from './data/comments';
import './App.css';

function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-gray-800 rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/Big_G.png"></img>
            <span className='font-semibold text-lg text-white'>Nonthawat Kongsichai 610610547</span>
          </div>

          {/* status message */}
          <p className='text-white'>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-300'>100 คน</p>
          </div>

        </div>

        {/* comments section */}
        <div className="">

          {/* normal comment */}
          <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src={comments[0].userImagePath}></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">{comments[0].username}</p>
              <p className='text-white'>{comments[0].commentText}</p>
              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-300'>{comments[0].likeNum}</p>
              </div>
            </div>
          </div>

          {/* replies */}
          {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
          <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src={comments[0].replies[0].userImagePath}></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">{comments[0].replies[0].username}</p>
              <p className='text-white'>{comments[0].replies[0].commentText}</p>
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-300'>{comments[0].replies[0].likeNum}</p>
              </div>
            </div>
          </div>

          {/* {repliee2} */}
          <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src={comments[0].replies[1].userImagePath}></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">{comments[0].replies[1].username}</p>
              <p className='text-white'>{comments[0].replies[1].commentText}</p>
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-300'>{comments[0].replies[1].likeNum}</p>
              </div>
            </div>
          </div>

          {/* Normalcomment */}
          <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src={comments[1].userImagePath}></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">{comments[1].username}</p>
              <p className='text-white'>{comments[1].commentText}</p>
              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-300'>{comments[1].likeNum}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;

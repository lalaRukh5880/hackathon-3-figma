"use client";

import React, { useState } from 'react';
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import { PiUserCirclePlusLight } from "react-icons/pi";
import Link from 'next/link';

const BlogDetail = () => {
  const [comments, setComments] = useState<
    { name: string; comment: string; time: string; replies: { name: string; reply: string }[] }[]
  >([]);
  const [newComment, setNewComment] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [reply, setReply] = useState<string>('');
  const [replyIndex, setReplyIndex] = useState<number | null>(null);

  const handleCommentSubmit = () => {
    if (newComment.trim() === '' || name.trim() === '') return;

    const time = new Date().toLocaleString();
    setComments([{ name, comment: newComment, time, replies: [] }, ...comments]);
    setNewComment('');
    setName('');
  };

  const handleReplySubmit = (index: number) => {
    if (reply.trim() === '' || name.trim() === '') return;

    const updatedComments = [...comments];
    updatedComments[index].replies.push({ name, reply });
    setComments(updatedComments);
    setReply('');
    setReplyIndex(null);
  };

  return (
    <div className="max-w-4xl mx-auto my-16 px-6">
      {/* Header Image */}
      <div className="w-full h-[500px] bg-[url(/blog/blog1.png)] bg-cover bg-center relative rounded-xl shadow-lg">
        <div className="absolute top-4 left-4">
          <span className="bg-[#FF9f0D] text-white px-4 py-2 text-lg font-bold rounded-md shadow-md">
            14 Feb
          </span>
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex gap-6 text-gray-600 mt-6 items-center flex-wrap">
        <div className="flex items-center gap-2">
          <IoCalendarNumberOutline size={24} className="text-[#FF9F0D]" />
          <span>Feb 14, 2022</span>
        </div>
        <div className="flex items-center gap-2">
          <TbMessages size={24} className="text-[#FF9F0D]" />
          <span>{comments.length} Comments</span>
        </div>
        <div className="flex items-center gap-2">
          <PiUserCirclePlusLight size={24} className="text-[#FF9F0D]" />
          <span>Admin</span>
        </div>
      </div>

      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-gray-800 mt-8">
        10 Reasons To Do A Digital Detox Challenge
      </h1>

      {/* Blog Content */}
      <div className="mt-6 space-y-6 text-lg text-gray-700 leading-8">
        <p>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat.
        </p>
      </div>

      {/* Post a Comment */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Post a Comment</h2>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 border border-gray-300 rounded-md shadow-sm mb-4 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
          rows={4}
          placeholder="Write your comment here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          className="mt-4 bg-[#FF9F0D] hover:bg-[#ff8710] text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md"
          onClick={handleCommentSubmit}
        >
          Post Comment
        </button>
      </div>

      {/* Display Comments */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Comments ({comments.length})</h2>
        <div className="space-y-6">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">
                <div>
                  <p className="font-semibold">{comment.name} <span className="text-gray-500 text-sm">({comment.time})</span></p>
                  <p className="text-gray-700 mt-2">{comment.comment}</p>
                </div>

                {/* Replies */}
                <div className="mt-4 space-y-2">
                  {comment.replies.map((reply, i) => (
                    <div key={i} className="pl-4 border-l-2 border-gray-300">
                      <p className="font-semibold">{reply.name} <span className="text-gray-500 text-sm">replied:</span></p>
                      <p className="text-gray-700">{reply.reply}</p>
                    </div>
                  ))}
                </div>

                {/* Reply Form */}
                {replyIndex === index ? (
                  <div className="mt-4">
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                      rows={2}
                      placeholder="Write your reply here..."
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                    ></textarea>
                    <button
                      className="mt-2 bg-[#FF9F0D] hover:bg-[#ff8710] text-white px-4 py-2 rounded-md text-lg font-semibold shadow-md"
                      onClick={() => handleReplySubmit(index)}
                    >
                      Post Reply
                    </button>
                  </div>
                ) : (
                  <button
                    className="mt-4 text-[#FF9F0D] underline"
                    onClick={() => setReplyIndex(index)}
                  >
                    Reply
                  </button>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-600">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>

      {/* Navigation Button */}
      <div className="mt-10">
        <Link href="/blog">
          <button className="bg-black hover:bg-red-500 text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md">
            Back to Blog
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;

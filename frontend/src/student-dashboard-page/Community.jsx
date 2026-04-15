import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Plus,
} from "lucide-react";

// Sample store
const initialPosts = [
  {
    id: 1,
    author: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=11",
    time: "2 hours ago",
    content: "Just finished my React project! 🎉",
    tags: ["React", "Projects", "Learning"],
    likes: 12,
    comments: 4,
  },
  {
    id: 2,
    author: "Jane Smith",
    avatar: "https://i.pravatar.cc/150?img=12",
    time: "5 hours ago",
    content: "Any tips for mastering JavaScript closures?",
    tags: ["JavaScript", "Tips"],
    likes: 8,
    comments: 6,
  },
];

export default function CommunityTab() {
  const [posts, setPosts] = useState(initialPosts);

  // Handle like button
  const handleLike = (postId) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  // Handle adding a new post (for demo)
  const addPost = () => {
    const newPost = {
      id: Date.now(),
      author: "New User",
      avatar: "https://i.pravatar.cc/150?img=20",
      time: "Just now",
      content: "Hello, community! 🚀",
      tags: ["Introduction"],
      likes: 0,
      comments: 0,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Community</h1>
          <p className="text-slate-600 mt-1">Connect with fellow learners</p>
        </div>
        <button
          onClick={addPost}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          New Discussion
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Feed */}
        <div className="lg:col-span-2 space-y-6">
          {posts.length === 0 ? (
            <p className="text-center text-slate-500">
              No discussions yet. Be the first to post!
            </p>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.avatar}
                      className="w-10 h-10 rounded-full object-cover"
                      alt={post.author}
                    />
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {post.author}
                      </h4>
                      <p className="text-xs text-slate-500">{post.time}</p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-slate-700 mb-4 leading-relaxed">
                  {post.content}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors"
                  >
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-medium">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">Trending Topics</h3>
            <div className="space-y-3">
              {["ReactHooks", "MachineLearning", "CareerAdvice", "StudyTips"].map(
                (topic, idx) => (
                  <a
                    href="#"
                    key={idx}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-slate-600 group-hover:text-indigo-600 transition-colors">
                      #{topic}
                    </span>
                    <span className="text-xs text-slate-400">{Math.floor(Math.random() * 300) + 100} posts</span>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Top Contributors */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">Top Contributors</h3>
            <div className="space-y-4">
              {[
                { name: "Alex Chen", points: "2.4k", avatar: "https://i.pravatar.cc/150?img=3", medal: "🥇" },
                { name: "Maria Garcia", points: "1.8k", avatar: "https://i.pravatar.cc/150?img=9", medal: "🥈" },
                { name: "James Wilson", points: "1.5k", avatar: "https://i.pravatar.cc/150?img=12", medal: "🥉" },
              ].map((user, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <img
                    src={user.avatar}
                    className="w-10 h-10 rounded-full object-cover"
                    alt={user.name}
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-slate-900">{user.name}</p>
                    <p className="text-xs text-slate-500">{user.points} points</p>
                  </div>
                  <span>{user.medal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
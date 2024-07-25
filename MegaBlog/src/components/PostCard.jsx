import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa6";


function PostCard({ post }) {
    console.log("the post is ",post)
    const date = new Date(post.$createdAt).toLocaleDateString('en-US')

    return (
        <Link to={`/post/${post.$id}`}>
            <div className="max-w-md shadow-xl rounded-xl overflow-hidden h-full">
                <img
                    className="w-full h-auto"
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                />

                <div className="sm:px-6 px-2 py-4 flex flex-wrap justify-between items-center">
                    <div className="font-bold text-xl mb-2">{post.title}</div>
                    <p className="text-sm">{date}</p>
                </div>

                <div className="px-6 py-4 flex justify-between items-center">
                    <div className="text-sm">{post.status}</div>
                    <FaHeart />
                </div>
            </div>
        </Link>
    )
}


export default PostCard

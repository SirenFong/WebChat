import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";
import dynamic from "next/dynamic"

const ChatEngine = dynamic(() => 
import('react-chat-engine').then((module) => module.ChatEngine)
);

const MessageFormSocial = dynamic (() => 
import("react-chat-engine").then((module) => module.MessageFormSocial));

export default function Chats() {
  const { username, secret} = useContext(Context)
  const [showChat, setShowChat] = useState(false)
  const router = useRouter();

  useEffect(() => {
    if(typeof document !== null) {
      setShowChat(true)
    }
  });

  // useEffect(() => {
  //   if(username.length === 0 || secret.length) router.push("/")
  // });
  
  if(!showChat) return <div />;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
         height='calc(100vh - 200px)'
         projectID ='7760f6b4-a5f3-48f4-845e-fbec9741a91b'
         userName={username}
         userSecret={secret}
         />
      </div>
    </div>
  )
}

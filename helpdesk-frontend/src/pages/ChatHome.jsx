import React from 'react'
import { Bot } from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import {useNavigate} from "react-router-dom";


function ChatHome() {
        const navigate = useNavigate();

        const handleChatStartClick = () => {
            navigate("/chat");
        };

    return (
            <div className="h-screen w-screen flex flex-col justify-center items-center gap-5">
                <Bot size={80} />
                <h1 className="text-4xl font-bold">Welcome to Help Desk System</h1>
                <Button
                    onClick={handleChatStartClick}
                    className={"cursor-pointer"}
                    variant={"outline"}
                >
                    Start Getting Help
                </Button>
            </div>
    )
}

export default ChatHome

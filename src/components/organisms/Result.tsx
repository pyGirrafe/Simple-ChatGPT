"use client"

import React, { useState } from "react"
import UserQuestion from "../molecules/UserQuestion"
import BotResponse from "../molecules/BotResponse"

interface IResultProps {
    userText: string;
    botText: string;
}
const Result: React.FC<IResultProps> = (props) => {

    return (
        <div className="w-full">
            {props.userText && <div>
                <UserQuestion
                    userText={props.userText}
                />
            </div>}
            {props.botText && <div>
                <BotResponse
                    botText={props.botText}
                />
            </div>}
        </div>
    );
}

export default Result;
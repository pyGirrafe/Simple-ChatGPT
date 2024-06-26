"use client"

import React from "react"
import Title from "../atoms/Title"
import ResultButton from "../atoms/ResultButton"
import QuestionInput from "../atoms/QuestionInput"

interface IUserActionProps {
    changeUserMessage: (userMessage: string) => void;
    changeMessages: () => void;
    handleSubmit: () => void;
}

const UserAction: React.FC<IUserActionProps> = (props) => {
    return (
        <div>
            <div>
                <Title
                    title="Simple ChatGPT"
                    textColor="#383483"
                    textSize={50}
                />
            </div>
            <div className="flex gap-4 mb-4">
                <span>
                    <QuestionInput
                        width={500}
                        changeUserMessage={props.changeUserMessage}
                        changeMessages={props.changeMessages}
                        handleSubmit={props.handleSubmit}
                    />
                </span>
                <span>
                    <ResultButton
                        buttonName="Result"
                        width={100}
                        textColor="#fff"
                        backgroundColor="#374234"
                        changeMessages={props.changeMessages}
                        handleSubmit={props.handleSubmit}
                    />
                </span>
            </div>
        </div>
    );
}

export default UserAction;
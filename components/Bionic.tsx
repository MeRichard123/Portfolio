import React from "react";
import styled from '@emotion/styled';

interface StyleProps {
    isBionic: boolean
}

const Paragraph = styled.div<StyleProps>`
    margin:auto;
    font-family: ${props => props.isBionic ? 'OpenDyslexic' : 'Lora'}, arial !important;
    font-size: 80%;
`

interface WrapperProps {
    children: React.ReactNode;
    toggleBionic: boolean;
}

function emphasizeHalf(word: string): React.ReactNode {
    const length = word.length;
    const numberOfCharsToMakeBold = Math.floor(length / 2);

    return (
        <>
            <b>{word.slice(0, numberOfCharsToMakeBold)}</b>
            {word.slice(numberOfCharsToMakeBold)}
        </>
    );
}

function flattenChildren(children: React.ReactNode): string {
    let flatText = "";

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            flatText += flattenChildren(child.props.children);
        } else if (typeof child === "string" || typeof child === "number") {
            flatText += child;
        }
    });

    return flatText;
}


const Bionic = ({ children, toggleBionic }: WrapperProps) => {

    const text = flattenChildren(children);

    return (
        <Paragraph isBionic={toggleBionic}>
            {toggleBionic ?
                (<p>
                    {text.split(" ").map((word, index) => (
                        <React.Fragment key={index}>
                            {emphasizeHalf(word)}
                            {" "}
                        </React.Fragment>
                    ))}
                </p>) :
                (
                    <p>
                        {children}
                    </p>
                )}
        </Paragraph>
    )
}

export default Bionic
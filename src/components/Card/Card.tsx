import React from 'react';

type Props = {
    children: React.ReactNode;
    width?: string;
    height?: string;
    maxWidth?: string;
    padding?: string;
    backgroundColor?: string;
    borderRadius?: string;
    boxShadow?: string;
    display?: string;
    flexDirection?: React.CSSProperties['flexDirection'];
    alignItems?: string;
    justifyContent?: string;
}

export default function Card(props: Props) {
    return (
        <div
            style={{
                width: props.width || 'fit-content',
                maxWidth: props.maxWidth || '100%',
                height: props.height || 'fit-content',
                padding: props.padding || '30px',
                backgroundColor: props.backgroundColor || '#fff',
                borderRadius: props.borderRadius || '15px',
                boxShadow: props.boxShadow || '0 2px 10px rgba(0, 0, 0, 0.1)',
                display: props.display || 'flex',
                flexDirection: props.flexDirection || 'column',
                alignItems: props.alignItems || 'center',
                justifyContent: props.justifyContent || 'center',
            }}
        >
            {props.children}
        </div>
    )
}
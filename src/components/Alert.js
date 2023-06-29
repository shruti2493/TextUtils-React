import React from 'react'

function Alert(props) {

    const capitalize = (word) => {
        let text = word
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => {
                return c.toUpperCase();
            });

        return text;
    };

    return (
        <div className={`container bg-${props.mode === "light" ? "light" : "dark1"
            }`} style={{ height: '50px' }}>
            {props.alert &&
                <div className={`alert alert-${props.alert.type} alert-dismissible mb-0 fade show `} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
                </div>}
        </div>
    );
}

export default Alert
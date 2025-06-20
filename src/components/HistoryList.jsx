import React from "react";

function HistoryList ({onHistory}) {
    return (
        <>
        <li>
            <p>Captura: {onHistory.id} - {onHistory.hour} - {onHistory.temperature}</p>
        </li>
        </>
    )
}
export default HistoryList;
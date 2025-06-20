function HistoryList ({hist}) {
    return (
        <>
            <ul>
                {hist.map(e => 
                <li>
                    <p>{e.hour} - {e.temp}</p>
                </li>
                )}
                
            </ul>
        </>
    )
}
export default HistoryList;
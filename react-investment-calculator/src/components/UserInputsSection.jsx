const UserInputs = ({ onChange, userInput }) => {

    return (
        <div id="user-input" className="input-group">
            <div className="divLabelAndInput">
                <label htmlFor="initial-inv">
                    INITIAL INVESTMENT
                </label>
                <input type="number" id="initial-inv" value={userInput.initialInvestment} required onChange={(event) => onChange("initialInvestment", event.target.value) }/>
            </div>
            <div className="divLabelAndInput">
                <label htmlFor="annual-inv">
                    ANNUAL INVESTMENT
                </label>
                <input type="number" id="annual-inv" value={userInput.annualInvestment}  onChange={(event) => onChange("annualInvestment", event.target.value)}/>
            </div>
            <div className="divLabelAndInput">
                <label htmlFor="expected-out">
                    EXPECTED RETURN
                </label>
                <input type="number" id="expected-out" value={userInput.expectedReturn} required onChange={(event) => onChange("expectedReturn", event.target.value) }/>
            </div>
            <div className="divLabelAndInput">
                <label htmlFor="duration">
                    DURATION
                </label>
                <input type="number" id="duration" value={userInput.duration} required onChange={(event) => onChange("duration", event.target.value) }/>
            </div>
        </div>
    )
}

export default UserInputs
import SetupForm from '../components/SetupForm'
    // our-domain.com/setup

function LoanCalcSetup() {
    function submitDataHandler(enteredData) {
        // add new setup
        console.log(enteredData)
    }

    return <SetupForm onSubmitData={submitDataHandler} />
}

export default LoanCalcSetup
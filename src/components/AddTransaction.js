const AddTransaction = ({ onAdd }) => {
    return (
        <form onSubmit = {onSubmit}>
            <div>
                <label>Amount</label>
                <input
                    type="text"
                    placeholder = "$0.00"
                    value={transAmount}
                />
            </div>
        </form>
    )
}

export default AddTransaction
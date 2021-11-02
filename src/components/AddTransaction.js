const AddTransaction = () => {

  return (
    <form>
      <div>
        <label>Amount</label>
        <input type='text' placeholder='$0.00' />
      </div>
      <div>
        <label>Category</label>
        <input type='text' placeholder='.' />
      </div>

      <input type='submit' value='Submit' />
    </form>
  );
};

export default AddTransaction;
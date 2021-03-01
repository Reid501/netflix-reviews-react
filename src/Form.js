const Form = () => {
    return ( 
        <div className="form-container">
            <h1>REVIEW</h1>
            <form>
                <label>Title</label>
                <input type="text" className="title-input"/>
                <label>Review</label>
                <textarea  className="review-input" cols="30" rows="10"></textarea>
            </form>
        </div>
     );
}
 
export default Form;
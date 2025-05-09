function Hobby() {

    const bookRecommend = () => {
        alert("I recommend 'The Poppy War' by R. F. Kuang." +
            " It is a dark and gritty fantasy novel that explores themes of war, power, and identity. ");
    };

  return (
    <>
    <div className="bg-base-100 border-base-300 collapse border" id="hobby">
      <input type="checkbox" className="peer" />
      <div
        className="collapse-title bg-accent text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
      >
        Want to know about me?
      </div>
      <div
        className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
      >
        <div className="chat chat-start">
          <div className="chat-bubble">
            I am the bookworm
            <br />
             love reading books. I am a fan of fantasy and science.
            <br />
            Tap for book recommendation based on my personal and very hummble opinion
            <br />
            <button className="btn btn-soft btn-info" onClick={bookRecommend}>Click here!</button>
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">I also like to play computer games!
            <br />
            I am a fan of RPG and adventure games.
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Hobby;
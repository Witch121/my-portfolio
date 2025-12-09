function Hobby() {

  return (
    <>
    <div className="bg-base-100 border-base-300 collapse border" id="hobby">
      <input type="checkbox" className="peer" />
      <div
        className="collapse-title bg-accent text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
      >
        Curious about my hobbies?
      </div>
      <div
        className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
      >
        <div className="chat chat-start">
          <div className="chat-bubble">
             I’m an unapologetic bookworm. 📚<br />
              I devour stories that blend fantasy, philosophy, and a pinch of science fiction.<br />
              Want a recommendation from my curated shelf of personal favorites?<br />
            <button
              className="btn btn-soft btn-info"
              onClick={() => {
                const modal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
                if (modal) {
                  modal.showModal();
                }
              }}
            >
              Show me the book!
            </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">For you</h3>
                  <p className="py-4">"The Poppy War" by R. F. Kuang <br/>
                   — a dark, beautifully written fantasy epic diving deep into power, identity, and the cost of war.</p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">
            🌳 When I’m not buried in books, you’ll find me happily sketching syntactic trees just for fun.<br />
            Nothing relaxes me more than a good XP system — or a perfectly balanced CP (complementizer phrase).
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">
            🎮 And when it’s time to unwind, I dive into rich, immersive RPGs where I get to save the world — sometimes instead of sleeping.
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Hobby;
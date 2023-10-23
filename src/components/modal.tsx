import '@/styles/modal.css'

export default function Modal() {
  return (
    <>
      <div id="dark-bg-modal" className="dark-bg-modal"></div>
      <div id="wrap-modal" className="wrap-modal">
        <div id="modal" className="modal">
          <div id="close-btn" className="close-btn">
            <img height="20" width="20" src="/public/svg/close-btn-white.svg" />
          </div>
          <div id="wrap-ava" className="wrap-img">
            <img id="modal-ava" src="" width="200" height="200" />
          </div>
          <div className="wrap-btn">
            <a
              href="#"
              id="modal-facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="no-style-hlink"
            >
              Facebook
            </a>
            <a
              href="#"
              id="modal-gs"
              target="_blank"
              rel="noopener noreferrer"
              className="no-style-hlink"
            >
              G-Scholar
            </a>
            <a
              href="#"
              id="modal-rgate"
              target="_blank"
              rel="noopener noreferrer"
              className="no-style-hlink"
            >
              R-Gate
            </a>
            <a
              href="#"
              id="modal-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="no-style-hlink"
            >
              Linked
              <span>in</span>
            </a>
          </div>
          <div className="wrap-content">
            <div id="modal-name" className="name"></div>
            <div id="modal-content" className="content"></div>
          </div>
        </div>
      </div>
    </>
  );
}

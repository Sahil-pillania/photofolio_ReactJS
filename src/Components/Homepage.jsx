import React, { useRef, useState } from "react";
import "./style.css";
import photo from "./Images/photos.png";

const Homepage = () => {
  const [formShow, setformShow] = useState(false);
  const [name, setName] = useState("Add Album");
  const buttonEl = useRef();
  const toggleInput = () => {
    if (name === "Add Album") {
      buttonEl.current.className = "Cancel";
      //   console.log(buttonEl.current.value);
      setformShow(true);
      setName("Cancel");
    } else {
      buttonEl.current.className = "add-album";
      setformShow(false);
      setName("Add Album");
      //   console.log(buttonEl.current.value);
    }
  };
  return (
    <>
      <div className="homepage">
        {/* // card  */}
        {formShow && (
          <div className="card">
            <div className="title">Create an album</div>
            <form className="input">
              <input type="text" placeholder="Album Name" required />

              <button type="button" className="clear">
                Clear
              </button>
              <button type="button" className="create">
                Create
              </button>
            </form>
          </div>
        )}
        {/* // Albums  */}

        <div className="albums">
          {/* top  */}
          <div className="albumsList_top">
            <h3>Your albums</h3>
            <button
              id="albumsList_active"
              className="add-album"
              ref={buttonEl}
              onClick={toggleInput}
              value="Add Album"
            >
              {name}
            </button>
          </div>
          {/* bottom  */}
          <div className="albumList">
            <div className="albumsList_album">
              <img src={photo} alt="images" />
              <span>7000</span>
            </div>
            <div className="albumsList_album">
              <img src={photo} alt="images" />
              <span>7000</span>
            </div>{" "}
            <div className="albumsList_album">
              <img src={photo} alt="images" />
              <span>7000</span>
            </div>{" "}
            <div className="albumsList_album">
              <img src={photo} alt="images" />
              <span>7000</span>
            </div>{" "}
            <div className="albumsList_album">
              <img src={photo} alt="images" />
              <span>7000</span>
            </div>
            {/* duplicate  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;

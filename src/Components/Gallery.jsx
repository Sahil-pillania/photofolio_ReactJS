import React from "react";
import back from "./Images/back.png";
import search from "./Images/search.png";
import edit from "./Images/edit.png";
import trash from "./Images/trash.png";

const Gallery = () => {
  return (
    <div className="gallery">
      {/* // form section  */}
      <div class="imageForm">
        <span>Add image to 7000</span>
        <form>
          <input required="" placeholder="Title" />
          <input required="" placeholder="Image URL" />
          <div class="imageForm_actions">
            <button type="button" style={{ backgroundColor: "#ff1300" }}>
              Clear
            </button>
            <button>Add</button>
          </div>
        </form>
      </div>
      {/* // topbar section  */}
      <div class="imageList_top__byX0d">
        <span>
          <img src={back} alt="back" />
        </span>
        <h3>Images in 7000</h3>
        <div class="imageList_search__yNphw">
          <img src={search} alt="clear" />
        </div>
        <button class="imageList_active__l+03P">Cancel</button>
      </div>
      {/* // Image list section  */}
      <div class="imageList_imageList">
        <div class="imageList_image__fO1La">
          <div class="imageList_update__qO92b false">
            <img src={edit} alt="update" />
          </div>
          <div class="imageList_delete__xH-Le false">
            <img src={trash} alt="delete" />
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
            alt="nature"
          />
          <span>nature</span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

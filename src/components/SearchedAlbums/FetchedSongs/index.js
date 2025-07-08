import React from "react";

const FetchedSongs = ({ closeModal, selectedAlbum }) => {
  console.log("el id seleccionado es:");
  console.log(selectedAlbum);
  return (
    <>
      {/* <p>
        <strong>ID:</strong> {selectedAlbum}
      </p> */}
      {/* // <div className="modal-overlay" onClick={closeModal}>
        //   <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        //     <button className="close-button" onClick={closeModal}>
        //       &times;
        //     </button>
        //     <p>
        //       <strong>ID:</strong> {selectedAlbum}
        //     </p>
        //   </div>
        // </div> */}
    </>
  );
};

export default FetchedSongs;

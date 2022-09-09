function ModalAction(props) {
  return (
    <div className="modal">
      <p>Delete "{props.cardName}"<br /><strong>Are you sure?</strong></p>
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={props.onConfirm}>
        Confirm
      </button>
    </div>
  );
}

export default ModalAction;

import { useRef } from "react";
import Card from "../UI/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props){

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function form_onSubmit(event){
        event.preventDefault();

        const newTitle = titleInputRef.current.value;
        const newImage = imageInputRef.current.value;
        const newAddress = addressInputRef.current.value;
        const newDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: newTitle,
            image: newImage,
            address: newAddress,
            description: newDescription
        };

        props.onAddMeetup(meetupData);
    }

    return (
      <Card>
        <form className={classes.form} onSubmit={form_onSubmit}>
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input type="url" required id="image" ref={imageInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input type="text" required id="address" ref={addressInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea required id="description" ref={descriptionInputRef} />
          </div>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
      </Card>
    );
}

export default NewMeetupForm;
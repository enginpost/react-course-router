import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/Meetups/NewMeetupForm.js";

function NewMeetupPage() {
  const pageHistory = useHistory();

  function addMeetup(meetupData) {
    fetch("https://react-api-39d0e-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      pageHistory.replace("/");
    });
  }

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </section>
  );
}

export default NewMeetupPage;

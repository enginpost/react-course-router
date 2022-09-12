import FavoritesContext from "../store/favorites-context";
import { useContext } from "react";
import MeetupList from "../components/Meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;

  if( favoritesCtx.totalFavorites === 0){
    content = <p>You haven't added any favorites yet!<br />Go to the All Meetups page and start adding to your favorites.</p>;
  }else{
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
